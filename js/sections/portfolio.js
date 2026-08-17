/* Portfolio section: rendering, category/tech/tool filters and the show-more toggle. */

let isExpanded = false;
const MAX_INITIAL_PROJECTS = 6;
let allProjects = [];
let filteredProjects = [];

/**
 * Promotes `data-src` to `src` on any screenshot inside a card that has just been expanded,
 * which is the moment the browser is first given a URL to fetch. Runs once per image: the
 * attribute is removed on promotion, so re-expanding the card hits the HTTP cache instead.
 * @param {HTMLElement} details - The .project-details element being expanded.
 */
function hydrateScreenshots(details) {
    details.querySelectorAll('img[data-src]').forEach(img => {
        const caption = img.parentElement.querySelector('figcaption');
        img.addEventListener('load', () => caption && caption.remove(), { once: true });
        img.addEventListener('error', () => {
            if (caption) caption.textContent = 'Screenshot unavailable.';
        }, { once: true });
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

function renderProjects(projects = MOCKED_PROJECTS, showAll = false) {
    const container = document.getElementById('projects-container');
    const expandContainer = document.getElementById('expand-container');
    container.innerHTML = '';
    allProjects = projects.slice();
    filteredProjects = projects.slice();

    // Determine how many projects to show
    const projectsToShow = showAll ? projects.slice() : projects.slice(0, MAX_INITIAL_PROJECTS);

    // Show/hide expand button
    if (projects.length > MAX_INITIAL_PROJECTS && !showAll) {
        expandContainer.style.display = 'block';
        const btn = document.getElementById('show-more-btn');
        btn.textContent = `Show ${projects.length - MAX_INITIAL_PROJECTS} More Projects`;
    } else {
        expandContainer.style.display = 'none';
    }

    projectsToShow.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-categories', project.categories.join(','));
        projectCard.setAttribute('data-technologies', project.technologies.join(','));
        projectCard.setAttribute('data-tools', project.tools.join(','));

        const links = [];
        if (project.githubUrl && project.githubUrl !== 'confidential') {
            links.push(`<a href="${project.githubUrl}" target="_blank" class="project-link">🔗 GitHub</a>`);
        }
        if (project.videoUrl) {
            links.push(`<a href="${project.videoUrl}" target="_blank" class="project-link">🎥 Demo</a>`);
        }
        if (project.reportFile) {
            links.push(`<a href="pdfs/${project.reportFile}" target="_blank" class="project-link">📑 Report PDF</a>`);
        }
        // Numbered only when there are several, so single-screenshot cards keep a plain label.
        project.screenshots.forEach((file, i) => {
            const label = project.screenshots.length > 1 ? `🖼️ Screenshot ${i + 1}` : '🖼️ Download screenshot';
            links.push(`<a href="images/projects/${file}" download class="project-link">${label}</a>`);
        });

        // Screenshots ship with `data-src` instead of `src`, so the browser has no URL to fetch
        // on initial load. hydrateScreenshots() promotes them the first time the card is
        // expanded. `loading="lazy"` would not help here: .project-details collapses with
        // max-height:0, not display:none, so the images count as visible and load immediately.
        const screenshotHtml = project.screenshots.length ? `
            <div class="detail-section">
                <h4>🖼️ ${project.screenshots.length > 1 ? 'Screenshots' : 'Screenshot'}</h4>
                <div class="project-screenshots">
                    ${project.screenshots.map((file, i) => `
                        <figure class="project-screenshot">
                            <img data-src="images/projects/${file}"
                                 alt="Screenshot ${i + 1} of ${project.name}" decoding="async">
                            <figcaption>Loading screenshot…</figcaption>
                        </figure>
                    `).join('')}
                </div>
            </div>
        ` : '';

        projectCard.innerHTML = `
    <div class="project-header">
        <div class="project-icon">${iconMap[project.icon] || '💼'}</div>
        <div class="project-title">${project.name}</div>
        <div class="project-summary">${project.shortDescription}</div>
        <div class="project-tags">
            ${project.categories.map(cat => `<span class="project-tag">${cat}</span>`).join('')}
            ${project.technologies.map(cat => `<span class="project-tag">${cat}</span>`).join('')}
        </div>
        <div class="expand-indicator">▼</div>
    </div>
    <div class="project-details${project.screenshots.length ? ' has-screenshot' : ''}">
        <div class="details-content">
            <div class="details-grid">
                <div class="detail-section">
                    ${links.length > 0 ? `
                        <div class="detail-section">
                            <div class="project-links">
                                ${links.join('')}
                            </div>
                        </div>
                    ` : ''}
                    <h4>📋 Description</h4>
                    <p>${project.description}</p>
                </div>
                <div class="detail-section">
                    <h4>🏢 Context & Duration</h4>
                    <p><strong>Context:</strong> ${project.context}</p>
                    <p><strong>Duration:</strong> ${project.duration}</p>
                    <p><strong>Role:</strong> ${project.role}</p>
                    ${project.methodology ? `<p><strong>Methodology:</strong> ${project.methodology}</p>` : ''}
                </div>
            </div>
            <div class="details-grid">
                <div class="detail-section">
                    <h4>👥 Team</h4>
                    <p>${project.team.join(', ')}</p>
                </div>
                <div class="detail-section">
                    <h4>🛠️ Technologies</h4>
                    <div class="tech-list">
                        ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="detail-section">
                <h4>🔧 Tools</h4>
                <div class="tech-list">
                    ${project.tools.map(tool => `<span class="tech-item">${tool}</span>`).join('')}
                </div>
            </div>
            <div class="detail-section">
                <h4>📚 Key Learnings</h4>
                <ul>
                    ${project.learnings.map(learning => `<li>${learning}</li>`).join('')}
                </ul>
            </div>
            ${screenshotHtml}
        </div>
    </div>
`;

        // Add click event to toggle details
        projectCard.addEventListener('click', () => {
            const details = projectCard.querySelector('.project-details');
            const wasExpanded = details.classList.contains('expanded');

            // Close all other expanded cards
            document.querySelectorAll('.project-details.expanded').forEach(expandedDetail => {
                expandedDetail.classList.remove('expanded');
                expandedDetail.closest('.project-card').classList.remove('expanded');
            });

            // Toggle current card
            if (!wasExpanded) {
                details.classList.add('expanded');
                projectCard.classList.add('expanded');
                hydrateScreenshots(details);

                // Smooth scroll to the expanded card
                setTimeout(() => {
                    projectCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }, 200);
            }
        });

        container.appendChild(projectCard);
    });
}

// Populate select filters with unique values
function populateSelectFilters(projects) {
    const techFilter = document.getElementById('tech-filter');
    const toolFilter = document.getElementById('tool-filter');

    // Clear existing options (except first one)
    techFilter.innerHTML = '<option value="">All Technologies</option>';
    toolFilter.innerHTML = '<option value="">All Tools</option>';

    // Get unique technologies and tools
    const allTechs = new Set();
    const allTools = new Set();

    projects.forEach(project => {
        project.technologies.forEach(tech => allTechs.add(tech));
        project.tools.forEach(tool => allTools.add(tool));
    });

    // Sort and add options
    [...allTechs].sort().forEach(tech => {
        const option = document.createElement('option');
        option.value = tech;
        option.textContent = tech;
        techFilter.appendChild(option);
    });

    [...allTools].sort().forEach(tool => {
        const option = document.createElement('option');
        option.value = tool;
        option.textContent = tool;
        toolFilter.appendChild(option);
    });
}

// Enhanced filter functionality
function applyFilters() {
    const categoryFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    const techFilter = document.getElementById('tech-filter').value;
    const toolFilter = document.getElementById('tool-filter').value;

    let filtered = MOCKED_PROJECTS.filter(project => {
        // Category filter
        const categoryMatch = categoryFilter === 'ALL' || project.categories.includes(categoryFilter);

        // Technology filter
        const techMatch = !techFilter || project.technologies.includes(techFilter);

        // Tool filter
        const toolMatch = !toolFilter || project.tools.includes(toolFilter);

        return categoryMatch && techMatch && toolMatch;
    });

    filteredProjects = filtered;
    renderProjects(filtered, isExpanded);
}

// Initialize filters
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const techFilter = document.getElementById('tech-filter');
    const toolFilter = document.getElementById('tool-filter');
    const showMoreBtn = document.getElementById('show-more-btn');

    // Category filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            isExpanded = false; // Reset expansion when filtering
            applyFilters();
        });
    });

    // Select filters
    techFilter.addEventListener('change', () => {
        isExpanded = false; // Reset expansion when filtering
        applyFilters();
    });

    toolFilter.addEventListener('change', () => {
        isExpanded = false; // Reset expansion when filtering
        applyFilters();
    });

    // Show more button
    showMoreBtn.addEventListener('click', () => {
        isExpanded = true;
        renderProjects(filteredProjects, true);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Total of the whole catalogue, not the active filter, so the heading stays stable.
    const total = document.getElementById('projects-total');
    if (total) {
        total.textContent = `(${MOCKED_PROJECTS.length})`;
    }
    populateSelectFilters(MOCKED_PROJECTS);
    renderProjects();
    initializeFilters();
});
