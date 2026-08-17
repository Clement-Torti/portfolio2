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
});

const personalStartYear = 2016;
const currentYear = new Date().getFullYear();
const personalYears = currentYear - personalStartYear;
document.getElementById("experience-years").innerText = `${personalYears}y+ programming`;
const profesionalStartYear = 2020;
const profesionalYears = currentYear - profesionalStartYear;
document.getElementById("exp-years").innerText = `${profesionalYears}${document.getElementById("exp-years").innerText}`;
document.getElementById("currentYear").textContent = currentYear;
