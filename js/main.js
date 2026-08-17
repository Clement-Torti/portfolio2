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
document.getElementById("experience-years").innerText = `${personalYears}y+ programming`;
const profesionalStartYear = 2020;
const profesionalYears = currentYear - profesionalStartYear;
document.getElementById("exp-years").innerText = `${profesionalYears}${document.getElementById("exp-years").innerText}`;
document.getElementById("currentYear").textContent = currentYear;
