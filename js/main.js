/* Site-wide bootstrap: typing headline and the experience-year counters. */

jQuery(document).ready(function () {
    $(function () {
        // jquery typed plugin
        $(".typed").typed({
            stringsElement: $('.typed-strings'),
            typeSpeed: 100,
            backDelay: 500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function () { null; },
            resetCallback: function () { newTyped(); }
        });
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
