/* Runtime internationalisation: language state, translation of the static markup and
   re-rendering of the JS-built sections.

   English is the source language and stays in index.html / the js/data files, so only
   French needs a dictionary (js/i18n/fr.js for the markup, js/i18n/fr-content.js for the
   catalogues). Every English string an element shows is captured the first time it is
   translated, which is what lets the switch back to English work without a second
   dictionary listing all of it again.

   This file must load before the section scripts: they read I18N.lang while rendering. */

const I18N = (function () {
    const SUPPORTED = ['en', 'fr'];
    const STORAGE_KEY = 'portfolio-lang';

    // Filled by the fr.js / fr-content.js dictionaries below this script.
    const ui = { en: {}, fr: {} };
    const content = { en: {}, fr: {} };

    // element -> { text, html, attrs } as authored in English.
    const originals = new Map();
    const listeners = [];

    /**
     * Resolves the language to start in: an explicit ?lang= wins over the visitor's last
     * choice, and anything unknown falls back to English.
     * @returns {string} One of SUPPORTED.
     */
    function initialLang() {
        const asked = new URLSearchParams(window.location.search).get('lang');
        if (asked && SUPPORTED.includes(asked.toLowerCase())) return asked.toLowerCase();
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && SUPPORTED.includes(saved)) return saved;
        } catch (e) {
            // Private browsing can throw on access; English is a fine answer.
        }
        return 'en';
    }

    let lang = initialLang();

    /**
     * Looks a key up in the active dictionary.
     * @param {string} key - Dot-separated dictionary key.
     * @param {string} [fallback] - The English text, used whenever there is no translation.
     */
    function t(key, fallback) {
        const value = ui[lang] && ui[lang][key];
        if (typeof value === 'string') return value;
        return fallback !== undefined ? fallback : key;
    }

    /**
     * Looks up a catalogue entry (a project, a module, a hobby) by its English source text.
     * @param {string} bucket - 'projects' | 'modules' | 'hobbies' | 'values'.
     * @param {string} source - The English name/title the entry is keyed by.
     * @returns {object|string|null} The translation, or null when there is none.
     */
    function entry(bucket, source) {
        const table = content[lang] && content[lang][bucket];
        if (!table) return null;
        return Object.prototype.hasOwnProperty.call(table, source) ? table[source] : null;
    }

    /**
     * Translates a standalone value that repeats across the data files — a duration, a role,
     * a methodology, a context. Returns the English string when it is not listed.
     */
    function value(source) {
        if (!source) return source;
        const translated = entry('values', source);
        return typeof translated === 'string' ? translated : source;
    }

    /** Returns a copy of a project with its translatable fields replaced. */
    function project(source) {
        // context/duration/role/methodology repeat across projects, so they come from the
        // shared `values` table; anything a project words its own way overrides them.
        return Object.assign(Object.create(Object.getPrototypeOf(source)), source, {
            context: value(source.context),
            duration: value(source.duration),
            role: value(source.role),
            methodology: value(source.methodology)
        }, entry('projects', source.name) || {});
    }

    /** Returns a copy of a module with its translatable fields replaced. */
    function module(source) {
        return Object.assign(Object.create(Object.getPrototypeOf(source)), source, {
            duration: value(source.duration)
        }, entry('modules', source.name) || {});
    }

    /** Returns the translated title of a hobby card. */
    function hobby(title) {
        const translated = entry('hobbies', title);
        return typeof translated === 'string' ? translated : title;
    }

    /** Remembers the English wording of an element before it is first overwritten. */
    function snapshot(el) {
        if (originals.has(el)) return originals.get(el);
        const record = { text: el.textContent, html: el.innerHTML, attrs: {} };
        originals.set(el, record);
        return record;
    }

    /** Applies the active language to every [data-i18n*] element in the document. */
    function translateDom(root = document) {
        root.querySelectorAll('[data-i18n]').forEach(el => {
            const record = snapshot(el);
            el.textContent = t(el.dataset.i18n, record.text);
        });

        root.querySelectorAll('[data-i18n-html]').forEach(el => {
            const record = snapshot(el);
            el.innerHTML = t(el.dataset.i18nHtml, record.html);
        });

        // Replaces only the element's own wording and leaves its children alone — for the
        // menu links (which carry a decorative <span>), the icons in the contact block and
        // the counters the scripts write into.
        root.querySelectorAll('[data-i18n-text]').forEach(el => {
            const record = snapshot(el);
            const node = [...el.childNodes].find(n => n.nodeType === Node.TEXT_NODE && n.nodeValue.trim());
            if (!node) return;
            if (record.node === undefined) {
                record.node = node;
                record.nodeValue = node.nodeValue;
            }
            record.node.nodeValue = t(el.dataset.i18nText, record.nodeValue);
        });

        // "attribute:key, attribute:key" — used for hrefs, alt text and aria labels.
        root.querySelectorAll('[data-i18n-attrs]').forEach(el => {
            const record = snapshot(el);
            el.dataset.i18nAttrs.split(',').forEach(pair => {
                const [attr, key] = pair.split(':').map(s => s.trim());
                if (!attr || !key) return;
                if (!(attr in record.attrs)) record.attrs[attr] = el.getAttribute(attr);
                el.setAttribute(attr, t(key, record.attrs[attr]));
            });
        });
    }

    /** Marks the active button in the header switch and exposes the language to CSS/AT. */
    function paintSwitch() {
        document.documentElement.setAttribute('lang', lang);
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });
    }

    /**
     * Switches language: stores the choice, retranslates the markup and lets every section
     * that renders from JS rebuild itself.
     */
    function setLang(next) {
        if (!SUPPORTED.includes(next) || next === lang) return;
        lang = next;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            // Not being able to remember the choice is not worth failing the switch over.
        }
        translateDom();
        paintSwitch();
        listeners.forEach(fn => fn(lang));
    }

    /** Registers a callback run after each language change (sections re-render there). */
    function onChange(fn) {
        listeners.push(fn);
    }

    document.addEventListener('DOMContentLoaded', () => {
        translateDom();
        paintSwitch();
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => setLang(btn.dataset.lang));
        });
    });

    return {
        get lang() { return lang; },
        SUPPORTED,
        setLang,
        onChange,
        t,
        value,
        project,
        module,
        hobby,
        translateDom,
        /** Called by js/i18n/fr.js with the markup strings. */
        registerUi(code, strings) { Object.assign(ui[code], strings); },
        /** Called by js/i18n/fr-content.js with the catalogue strings. */
        registerContent(code, buckets) {
            Object.keys(buckets).forEach(bucket => {
                content[code][bucket] = Object.assign(content[code][bucket] || {}, buckets[bucket]);
            });
        }
    };
})();

// Shorthand used by the section renderers.
const t = I18N.t;
