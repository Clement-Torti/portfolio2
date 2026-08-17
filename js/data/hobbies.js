/* Hobbies catalogue: categories and the dataset (YouTube links and photos). */

const HOBBIES_CATEGORIES = {
    LANGUAGES: 'LANGUAGES',
    GUITARE: 'GUITARE',
    TECH: 'TECH'
};

// Updated MOCKED_HOBBIES - same data structure
const MOCKED_HOBBIES = [
    // Languages
    {
        title: 'Languages progress, 2023.',
        videoUrl: 'https://youtu.be/7Znv94WrEns',
        category: HOBBIES_CATEGORIES.LANGUAGES
    },
    {
        title: 'Andalusian festival in Saint-Jean-de-Luz, France.',
        videoUrl: 'https://youtu.be/zEEx0q4Fg64',
        category: HOBBIES_CATEGORIES.LANGUAGES
    },
    {
        title: 'Mass in Saint-Jean-de-Luz, France.',
        videoUrl: 'https://youtu.be/HnqKHhZ6mNQ',
        category: HOBBIES_CATEGORIES.LANGUAGES
    },
    {
        title: 'Arabic progress after a year, 2022.',
        videoUrl: 'https://youtu.be/XJrkkvR8Wiw',
        category: HOBBIES_CATEGORIES.LANGUAGES
    },
    {
        title: 'Script of the arabic progress video.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'arabic_script_2022.JPG'
    },
    {
        title: 'Arabic conference in the institute of the arab world, Paris, France.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'arabic_conference.jpeg'
    },
    {
        title: 'Arabic institute in Paris, France.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'arabic_museum.jpeg'
    },
    {
        title: 'Instrument from the arabe institute in Paris, France.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'ude.jpeg'
    },
    {
        title: 'My arabic textbook for exercices.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'arabic_text_book.jpeg'
    },
    {
        title: 'Yellow chatters in Toulouse to talk foreign languages.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'blabla_exchange.jpeg'
    },
    {
        title: 'Enseeiht prom 2023. it is important to be well surrounded.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'enseeiht_promo.JPG'
    },
    {
        title: 'Fes, 2022.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'fes_2022.jpeg'
    },
    {
        title: 'Hindu temple, Saint-Pierre, Reunion Island, France.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'hindu_temple.jpg'
    },
    {
        title: 'With latinos in bordeaux, ready to see the Tour the France in Libourne, 2021.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'latinos_friends.jpeg'
    },
    {
        title: 'From the impressive madrid arena, 2023.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'madrid_arena.jpeg'
    },
    {
        title: 'Last day with the prom at the UCM, madrid.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'madrid_friends.jpeg'
    },
    {
        title: 'Mosque of Paris.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'mosquee_paris.jpeg'
    },
    {
        title: 'My new frame from Seville, love it.',
        videoUrl: '',
        category: HOBBIES_CATEGORIES.LANGUAGES,
        imageFile: 'seville.jpeg'
    },

    // Guitare
    // {
    //     title: 'Marseillan, South of France 2022.',
    //     videoUrl: 'https://youtube.com/shorts/z-JsLGIa7TY',
    //     category: HOBBIES_CATEGORIES.GUITARE
    // },
    {
        title: 'Bella ciao.',
        videoUrl: 'https://youtu.be/tP_Jyl0FKEQ',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Capricho Árabe.',
        videoUrl: 'https://youtu.be/PUuKtrbnNgg',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Godfather.',
        videoUrl: 'https://youtu.be/NA7Idbx0RU8',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Cover bella.',
        videoUrl: 'https://youtu.be/xGQ6NLIcQOs',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Saint-Paul market, Isla reunion, France 2021.',
        videoUrl: 'https://youtu.be/C-KBQtsZ5E8',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Tarentella.',
        videoUrl: 'https://youtu.be/x39S_kFeIZs',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Love yourself cover, 2016.',
        videoUrl: 'https://youtu.be/x1PdeyxQVjc',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Mandalorian.',
        videoUrl: 'https://youtu.be/YPsdOqfEdok',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Tango.',
        videoUrl: 'https://youtu.be/iP14QTm1sO0',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Lala land.',
        videoUrl: 'https://youtu.be/8c3eaWSPWwM',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Spanish guitare in the malaga castle',
        videoUrl: 'https://youtu.be/GhG15KWpMNo',
        category: HOBBIES_CATEGORIES.GUITARE
    },
    {
        title: 'Tango 2.',
        videoUrl: 'https://youtu.be/Pu_kJaMa3ZM',
        category: HOBBIES_CATEGORIES.GUITARE
    },

    // Tech
    {
        title: 'MKBHD: Tech reviews, smartphone coverage, and in-depth analysis of the latest gadgets.',
        videoUrl: 'https://www.youtube.com/watch?v=8om1eJrO2lU',
        category: HOBBIES_CATEGORIES.TECH
    },
    {
        title: 'CNET: Tech news, product reviews, and helpful guides for consumer electronics.',
        videoUrl: 'https://www.youtube.com/watch?v=uKkCWmz8SW8',
        category: HOBBIES_CATEGORIES.TECH
    },
    {
        title: 'MaxTech: Detailed tech reviews, comparisons, and buying advice for a wide range of apple products.',
        videoUrl: 'https://www.youtube.com/watch?v=Xzo7_2o_218',
        category: HOBBIES_CATEGORIES.TECH
    },
    {
        title: 'Dave2d: Unbiased tech reviews, laptop recommendations, and gaming hardware analysis.',
        videoUrl: 'https://www.youtube.com/watch?v=C6VuSPPkTeY',
        category: HOBBIES_CATEGORIES.TECH
    },
    {
        title: 'Lew later: Tech news, smartphone unboxings, and discussions on the latest tech trends.',
        videoUrl: 'https://www.youtube.com/watch?v=D3y2h-LhCKw',
        category: HOBBIES_CATEGORIES.TECH
    },
    {
        title: 'Friday checkout: Product reviews, tech deals, and recommendations for various consumer electronics.',
        videoUrl: 'https://www.youtube.com/watch?v=mM-e-VHc47s',
        category: HOBBIES_CATEGORIES.TECH
    },
    {
        title: 'ThrillSeeker: VR gaming, virtual reality technology, and immersive experiences in the world of gaming.',
        videoUrl: 'https://www.youtube.com/watch?v=jID3QptLJz4',
        category: HOBBIES_CATEGORIES.TECH
    },
    {
        title: 'NateGentile: Tech tutorials, programming guides, and software development tips and tricks.',
        videoUrl: 'https://www.youtube.com/watch?v=Th8YtKq4LRg',
        category: HOBBIES_CATEGORIES.TECH
    },
    {
        title: 'DotCSV: Data science, machine learning, and AI tutorials with practical examples and coding demos.',
        videoUrl: 'https://www.youtube.com/watch?v=PtR3MI89bK4',
        category: HOBBIES_CATEGORIES.TECH
    },
    {
        title: 'Fireship: Web development tutorials, Javascript frameworks, and coding techniques for modern web applications.',
        videoUrl: 'https://www.youtube.com/watch?v=q1fsBWLpYW4',
        category: HOBBIES_CATEGORIES.TECH
    }
];
