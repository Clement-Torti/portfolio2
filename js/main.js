/* Site-wide bootstrap: typing headline and the experience-year counters. */

jQuery(document).ready(function () {
    $(function () {
        // The job titles differ a lot in length, and .typed-title holds them on a single
        // nowrap line. Each title therefore gets its own font size so it always fits: with
        // no rewrapping, the typing animation cannot shove the rest of the page around.
        var line = document.querySelector('.typed-title');
        // The greeting the row continues: its last line ends with "I am a", and the titles
        // are typed right after it.
        var lead = line.parentElement.querySelector('[data-i18n-html]');
        var maxSize = parseFloat(getComputedStyle(line).getPropertyValue('--typed-max-size')) || 40;
        var minSize = 14;
        var titles = [];
        var sizes = [];
        var current = 0;
        var ruler = null;

        function measure() {
            var host = line.parentElement;
            var hostRect = host.getBoundingClientRect();
            var padRight = parseFloat(getComputedStyle(host).paddingRight) || 0;
            // One rect per line of the greeting: the last one ends where the titles start.
            var rects = lead.getClientRects();
            var leadRight = rects.length ? rects[rects.length - 1].right : hostRect.left;
            // What is left of the column, minus the space after the lead-in and the blinking
            // cursor the plugin appends.
            var available = hostRect.right - padRight - leadRight - maxSize * 0.7;

            ruler.style.fontSize = maxSize + 'px';
            var widths = [];
            sizes = titles.map(function (title) {
                ruler.textContent = title;
                var natural = ruler.offsetWidth;
                var size = natural <= available
                    ? maxSize
                    : Math.max(minSize, Math.floor(maxSize * available / natural));
                widths.push(Math.ceil(natural * size / maxSize));
                return size;
            });
            // Reserve the widest title and the tallest line, and nothing more: with the box
            // fixed at that size, a title being typed cannot rewrap the line it sits on.
            line.style.width = Math.max.apply(null, widths) + 'px';
            var height = Math.max.apply(null, sizes) * 1.2;
            line.style.height = height + 'px';
            // Same value as the height, so the baseline the row exposes is where the text
            // actually sits — that is what keeps it level with the lead-in.
            line.style.lineHeight = height + 'px';
        }

        function fit(index) {
            current = index;
            line.style.fontSize = sizes[index] + 'px';
        }

        function refresh() {
            maxSize = parseFloat(getComputedStyle(line).getPropertyValue('--typed-max-size')) || 40;
            measure();
            fit(current);
        }

        /**
         * (Re)starts the animation. The plugin copies the titles into its own array when it
         * is built, so a change of wording means tearing it down rather than telling it about
         * the new strings. The typed element, its cursor and the ruler all live inside
         * .typed-title, so emptying that clears the previous run.
         */
        function startTyped() {
            var previous = $('.typed').data('typed');
            if (previous) {
                previous.stop = true;
                clearTimeout(previous.timeout);
            }
            line.innerHTML = '<span class="typed"></span>';
            line.style.width = '';

            // Off-flow copy, used to measure a title at the largest size.
            ruler = document.createElement('span');
            ruler.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;';
            line.appendChild(ruler);

            titles = [].map.call(
                document.querySelectorAll('.typed-strings p'),
                function (p) { return p.textContent; }
            );
            current = 0;
            refresh();

            // jquery typed plugin
            $(".typed").typed({
                stringsElement: $('.typed-strings'),
                typeSpeed: 100,
                backDelay: 500,
                loop: true,
                contentType: 'html', // or text
                // defaults to false for infinite loop
                loopCount: false,
                preStringTyped: fit,
                callback: function () { null; },
                resetCallback: function () { newTyped(); }
            });
        }

        startTyped();
        // The column width, and with it every title's size, changes on rotation and resize.
        window.addEventListener('resize', refresh);
        // Web fonts can land after the first measurement.
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(refresh);
        }
        // The greeting above the titles changes length with the language; the titles are
        // job names that read the same in both, but rebuild anyway so a future translation
        // of them is measured rather than clipped.
        I18N.onChange(startTyped);
    });

    // designesia.js reveals the mobile menu by animating the header height, then
    // collapses it back to the theme's hard-coded 90px. Mark the open state so the
    // 60px clamp in css/base/header.css only applies once the bar is shut again, and
    // wait out the 200ms close animation before clamping.
    var header = document.querySelector('header');
    $('#menu-btn').on('click', function () {
        if (header.classList.contains('menu-open')) {
            setTimeout(function () {
                header.classList.remove('menu-open');
            }, 250);
        } else {
            header.classList.add('menu-open');
        }
    });
});

const personalStartYear = 2016;
const currentYear = new Date().getFullYear();
const personalYears = currentYear - personalStartYear;
const profesionalStartYear = 2020;
const profesionalYears = currentYear - profesionalStartYear;

/**
 * Writes the two year counters into the copy. Called again after every language change: the
 * sentences that hold them are replaced wholesale by the translation pass, placeholder and
 * all.
 */
function updateExperienceCounters() {
    document.getElementById("experience-years").innerText =
        `${personalYears}${t('hero.years', 'y+ programming')}`;
    document.getElementById("exp-years").innerText = profesionalYears;
}

// After DOMContentLoaded, so it runs once the translation pass (registered first, in
// js/i18n/i18n.js) has put the sentences of the active language in place.
document.addEventListener('DOMContentLoaded', updateExperienceCounters);
I18N.onChange(updateExperienceCounters);
document.getElementById("currentYear").textContent = currentYear;
