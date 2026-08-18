/* Education section: renders module cards per school and wires the accordion. */

/**
 * Renders the modules for a specific school into a container.
 * @param {string} schoolCat - The category of the school (e.g., 'UCM').
 * @param {string} containerId - The ID of the HTML element to render into.
 */
function renderModules(schoolCat, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Filter modules for the given school
    const schoolModules = MOCKED_MODULES.filter(m => m.schoolCategory === schoolCat);
    if (schoolModules.length === 0) return;

    // Get unique module categories for this school (removed 'All')
    const categories = [...new Set(schoolModules.map(m => m.moduleCategory))];

    // Create the filter buttons. data-category stays in English: it is the key the cards are
    // matched on, only the label follows the language.
    const filtersHtml = `
    <div class="module-filters">
        ${categories.map((cat, index) => `
            <button class="module-filter-btn" data-category="${cat}">
                ${t('modules.category.' + cat, cat)}
            </button>
        `).join('')}
    </div>
`;

    // Create the module cards
    const modulesHtml = `
    <div class="module-list">
        ${schoolModules.map(source => {
        const module = I18N.module(source);
        return `
            <div class="module-card mb-2" data-category="${module.moduleCategory}">
                <h5>${module.name}</h5>
                <p>${module.description}</p>
                <span class="duration">${t('modules.duration', 'Duration:')} ${module.duration}</span>
                <p class="duration">${t('modules.teachers', 'Teacher(s):')} ${module.teachers.join(', ')}</p>
            </div>
        `;
    }).join('')}
    </div>
`;


    // Nothing is shown until a module is picked, so the section has to say so —
    // otherwise it reads as a row of buttons above an empty box. It steps aside once
    // a module is on screen and comes back with the clear button below.
    const hintHtml = `
    <p class="modules-hint text-center">
        <i class="fa fa-hand-pointer-o"></i> ${t('modules.hint', 'Click a module to reveal its details')}
    </p>
`;

    // Combine and inject the HTML
    container.innerHTML = `
    <div class="modules-container">
        <h4 class="text-center mb-2">${t('modules.title', 'Modules Studied')}</h4>${hintHtml}${filtersHtml}
        ${modulesHtml}
    </div>`;

    // Get all filter buttons and module cards after injecting HTML
    const moduleCards = container.querySelectorAll('.module-card');
    const allFilterButtons = container.querySelectorAll('.module-filter-btn');
    const hint = container.querySelector('.modules-hint');

    // Add event listeners for all category filter buttons
    allFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to the clicked one
            allFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedCategory = button.dataset.category;
            hint.hidden = true;

            // Show/hide module cards based on the selected category
            moduleCards.forEach(card => {
                if (card.dataset.category === selectedCategory) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Add the "X" button (close icon)
    const clearButton = document.createElement('button');
    clearButton.classList.add('module-filter-btn');
    clearButton.innerHTML = '<i class="fa fa-times"></i>'; // Use Font Awesome close icon
    clearButton.style.color = 'red';
    clearButton.addEventListener('click', () => {
        allFilterButtons.forEach(btn => btn.classList.remove('active')); // Deactivate other buttons
        moduleCards.forEach(card => {
            card.style.display = 'none'; // Hide all modules
        });
        hint.hidden = false; // Back to an empty list, so invite the click again
    });
    container.querySelector('.module-filters').prepend(clearButton); // Place 'X' button first

    // Initial display logic:
    // Find the button that is initially active (the first category button)
    const initiallyActiveButton = container.querySelector('.module-filter-btn.active');
    if (initiallyActiveButton) {
        // Trigger the display of modules for the initially active category
        const selectedCategory = initiallyActiveButton.dataset.category;
        hint.hidden = true;
        moduleCards.forEach(card => {
            if (card.dataset.category === selectedCategory) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    } else {
        // Fallback: If no category is initially active (e.g., no modules), hide all.
        moduleCards.forEach(card => {
            card.style.display = 'none';
        });
    }
}
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

    // Your existing accordion logic
    document.querySelectorAll(".accordion-section-title").forEach((accordionTitle) => {
        accordionTitle.addEventListener("click", () => {
            const content = accordionTitle.nextElementSibling;
            const isActive = accordionTitle.classList.contains("active");

            document.querySelectorAll('.accordion-section-title').forEach(title => {
                if (title !== accordionTitle) {
                    title.classList.remove('active');
                    title.nextElementSibling.style.display = 'none';
                }
            });

            if (isActive) {
                accordionTitle.classList.remove("active");
                content.style.display = "none";
            } else {
                accordionTitle.classList.add("active");
                content.style.display = "block";
            }
        });
    });

    // Render the modules when the document is ready
    function renderAllModules() {
        renderModules(SchoolCategory.UCM, 'ucm-modules-container');
        renderModules(SchoolCategory.ENSEEIHT, 'enseeiht-modules-container');
        renderModules(SchoolCategory.IUT, 'iut-modules-container');
    }

    renderAllModules();
    // Rebuilt from scratch on a language change, so the lists go back to their empty state.
    I18N.onChange(renderAllModules);
});
