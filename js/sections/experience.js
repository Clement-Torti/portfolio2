/* Experience timeline: folds the "Missions" list of each job behind a toggle.

   On a phone the five jobs add up to a very long scroll, so only the summary paragraph is
   shown and the mission list opens on demand. Above 767px the missions are plain body text
   and the button is not displayed (see css/sections/experience.css).

   The lists live inside the translated text blobs, which the i18n pass rewrites wholesale, so
   this runs after each of those passes rather than once. */

/** Reads as the start of a mission list in either language ("Missions:" / "Missions :"). */
const MISSIONS_LABEL = /^missions\s*:?$/i;

let missionsSeq = 0;

/**
 * Moves the mission list of one job into a collapsible block and inserts its toggle.
 * @param {HTMLElement} blob - The <span data-i18n-html> holding the whole job description.
 */
function foldMissions(blob) {
    const marker = [...blob.querySelectorAll('i')].find(el => MISSIONS_LABEL.test(el.textContent.trim()));
    if (!marker || blob.querySelector('.missions')) return;

    const list = document.createElement('span');
    list.className = 'missions is-collapsed';
    list.id = `missions-${++missionsSeq}`;

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'missions-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', list.id);
    toggle.textContent = t('resume.missions.show', 'Show the missions');

    blob.insertBefore(toggle, marker);
    blob.insertBefore(list, marker);

    // The marker and everything after it belong to the list.
    while (list.nextSibling) {
        list.appendChild(list.nextSibling);
    }

    // The blank line that separated the summary from the list goes in too: collapsed, it
    // would leave a gap above the button; expanded on a wide screen, it is still needed.
    let trailing = toggle.previousSibling;
    while (trailing && (trailing.nodeName === 'BR' || (trailing.nodeType === Node.TEXT_NODE && !trailing.nodeValue.trim()))) {
        const before = trailing.previousSibling;
        list.insertBefore(trailing, list.firstChild);
        trailing = before;
    }

    toggle.addEventListener('click', () => {
        const collapsed = list.classList.toggle('is-collapsed');
        toggle.setAttribute('aria-expanded', String(!collapsed));
        toggle.textContent = collapsed
            ? t('resume.missions.show', 'Show the missions')
            : t('resume.missions.hide', 'Hide the missions');
    });
}

function foldAllMissions() {
    missionsSeq = 0;
    document.querySelectorAll('#section-resume .d_timeline-text span[data-i18n-html]')
        .forEach(foldMissions);
}

document.addEventListener('DOMContentLoaded', foldAllMissions);
// The translation pass rebuilds the blobs from scratch, taking the toggles with them.
I18N.onChange(foldAllMissions);
