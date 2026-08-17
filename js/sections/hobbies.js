/* Hobbies section: carousel rendering, navigation arrows and category filters. */

// Helper function to extract YouTube video ID
function getYouTubeVideoId(url) {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// Updated render function for carousel
function renderHobbies(category = HOBBIES_CATEGORIES.LANGUAGES) {
    const container = document.getElementById('hobbies-container');
    container.innerHTML = '';

    const filteredHobbies = MOCKED_HOBBIES.filter(hobby => hobby.category === category);

    filteredHobbies.forEach((hobby, index) => {
        const hobbyCard = document.createElement('div');
        hobbyCard.className = 'hobby-card';

        if (hobby.videoUrl) {
            const videoId = getYouTubeVideoId(hobby.videoUrl);
            if (videoId) {
                hobbyCard.innerHTML = `
            <div class="hobby-title">${hobby.title}</div>
            <div class="hobby-video">
                <iframe 
                    src="https://www.youtube.com/embed/${videoId}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
            }
        } else if (hobby.imageFile) {
            hobbyCard.innerHTML = `
        <div class="hobby-title">${hobby.title}</div>
        <div class="hobby-image">
            <img src="images/hobbies/${hobby.imageFile}" alt="${hobby.title}" />
        </div>
    `;
        }

        container.appendChild(hobbyCard);
    });

    // Reset scroll position
    container.scrollLeft = 0;
}

// NEW: Carousel navigation functions
function initializeCarousel() {
    const container = document.getElementById('hobbies-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (!container || !prevBtn || !nextBtn) return;

    const cardWidth = 350 + 24; // card width + gap

    prevBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -cardWidth * 2,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        container.scrollBy({
            left: cardWidth * 2,
            behavior: 'smooth'
        });
    });
}

// Initialize hobbies filters
function initializeHobbiesFilters() {
    const filterButtons = document.querySelectorAll('.hobbies-filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            renderHobbies(filterValue);
        });
    });
}

// Initialize hobbies section when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if hobbies section exists
    if (document.getElementById('hobbies-container')) {
        renderHobbies(); // Default to Languages
        initializeHobbiesFilters();
        initializeCarousel(); // NEW: Initialize carousel navigation
    }
});
