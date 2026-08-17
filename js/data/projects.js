/* Project catalogue: categories, icon map, the Project model and the dataset. */

const ProjectCategory = {
    WEB: 'WEB',
    MOBILE: 'MOBILE',
    DESKTOP: 'DESKTOP',
    CONSOLE: 'CONSOLE',
    EMBEDDED: 'EMBEDDED'
};
// Icon mapping
const iconMap = {
    'icon_book': '📚',
    'icon_award': '🏆',
    'icon_newspaper': '📰',
    'icon_keyboard': '⌨️',
    'icon_compass': '🧭',
    'icon_robot': '🤖',
    'icon_file_text': '📄',
    'icon_tree': '🌳',
    'icon_clipboard': '📋',
    'icon_chat': '💬',
    'icon_chat_square_text': '💭',
    'icon_code_square': '💻',
    'icon_hospital': '🏥',
    'icon_person_badge': '👤',
    'icon_arrows_left_right': '🔁',
    'icon_gear': '⚙️',
    'icon_market_front': '🏬',
    'icon_theater': '🎭',
    'icon_kiosk': '🖥️',
    'icon_card': '💳',
    'icon_wallet': '💵',
    'icon_tv': '📺',
    'icon_clock': '🔄',
    'icon_caddy': '🛒',
    'icon_flow': '🔀',
    'icon_donation': '💝',
    'icon_shield': '🛡️',
};


class Project {
    // `screenshots` is optional: one file name under images/projects/, or an array of them.
    // It is normalised to an array below, and the images are fetched only once the card is
    // expanded (see hydrateScreenshots in js/sections/portfolio.js), never on page load.
    constructor(name, icon, description, shortDescription, context, duration, role, methodology, team, technologies, tools, learnings, githubUrl, videoUrl, reportFile, categories, screenshots = null) {
        this.name = name;
        this.icon = icon;
        this.description = description;
        this.shortDescription = shortDescription;
        this.context = context;
        this.duration = duration;
        this.role = role;
        this.methodology = methodology;
        this.team = team;
        this.technologies = technologies;
        this.tools = tools;
        this.learnings = learnings;
        this.githubUrl = githubUrl;
        this.videoUrl = videoUrl;
        this.reportFile = reportFile;
        this.categories = categories;
        this.screenshots = screenshots ? [].concat(screenshots) : [];
    }
}

const MOCKED_PROJECTS = [
    new Project('Transneg Engine',
        'icon_flow',
        'Business Process Management platform built from scratch and deployed for several city halls and major insurance companies. It provides interactive forms, a low-code drag-and-drop process designer, and a plugin system for client-specific features. AWS integrations power intelligent document processing (IDP) for data extraction from uploaded documents, plus biometric verification with liveness detection and face matching against the ID card photo.',
        'From-scratch BPM platform with low-code process design, IDP and biometric verification.',
        'Transneg, Dominican Republic',
        '2025 - 2026',
        'Main developer',
        'Ad-hoc',
        ['Clément Torti'],
        ['.NET', 'C#', 'Angular', 'SQL Server'],
        ['Visual Studio', 'AWS'],
        [
            'Designed a low-code drag-and-drop process designer usable by non-developers.',
            'Built a plugin architecture so each client can extend the engine without forking it.',
            'Integrated AWS intelligent document processing to extract data from uploaded documents.',
            'Implemented biometric verification: liveness detection and face matching against ID card photos.',
            'Delivered a single platform serving both public sector (city halls) and insurance clients.'
        ],
        null,
        null,
        '',
        [ProjectCategory.WEB],
        'transneg-engine-flow-editor.png'),

    new Project('Donation Platform',
        'icon_donation',
        'Responsive donation platform where donors give one-off or recurring contributions, follow their history and track their ranking among other donors. It issues a QR-coded donor card and generates donation reports. Numerous payment gateway integrations — PayPal, Visa and CardNet — provide multi-currency support and subscription-based recurring giving.',
        'Responsive donation platform with QR donor cards, reports and multi-currency subscriptions.',
        'Transneg, Dominican Republic',
        '2025 - 2026',
        'Main developer',
        'Ad-hoc',
        ['Clément Torti'],
        ['React', '.NET', 'C#', 'SQL Server'],
        ['Visual Studio'],
        [
            'Integrated PayPal, Visa and CardNet to cover both local and international donors.',
            'Implemented multi-currency handling (DOP and USD) across one-off and recurring flows.',
            'Built subscription management for recurring monthly donations.',
            'Generated QR-coded donor cards and downloadable donation reports.',
            'Designed a responsive interface usable from phone and desktop alike.'
        ],
        null,
        null,
        '',
        [ProjectCategory.WEB],
        'donation-platform-donor-dashboard.png'),

    new Project('Insurance Core & Broker Platform',
        'icon_shield',
        'Insurance core paired with a sales platform serving both brokers and end customers. The core defines the available insurance products, runs the quotations, issues the policy PDFs and delivers them over WhatsApp and email; it is connected to a payment gateway and to an electronic invoicing service for the Dominican DGII. The broker platform handles broker management, commissions per insurance type, reconciliation with each broker, sales monitoring and a help desk. It is multi-currency with live exchange rates, and supports branch management.',
        'Insurance core and broker sales platform: quotations, policy PDFs, payments and DGII e-invoicing.',
        'Transneg, Dominican Republic',
        '2025 - 2026',
        'Main developer',
        'Ad-hoc',
        ['Clément Torti'],
        ['.NET', 'C#', 'Angular', 'SQL Server'],
        ['Visual Studio'],
        [
            'Modelled an insurance core defining the available products and running quotations.',
            'Generated policy PDFs and delivered them automatically over WhatsApp and email.',
            'Integrated a payment gateway to close the sale inside the platform.',
            'Integrated the Dominican DGII electronic invoicing service.',
            'Built broker management with commissions configurable per insurance type.',
            'Implemented reconciliation with each broker and monitoring of their sales.',
            'Added a help desk for brokers and end customers.',
            'Handled multi-currency operations with live exchange rates and branch management.'
        ],
        null,
        null,
        '',
        [ProjectCategory.WEB],
        ['insurance-broker-admin-panel.png', 'insurance-public-portal.jpg']),

    // Ajout en bas de MOCKED_PROJECTS :
    new Project('Transneg TV',
        'icon_tv',
        'Live dashboard website displaying key business metrics: real-time payments, AWS infrastructure status, Jira ticket board, and Microsoft Teams messages.',
        'Live business dashboard with payment activity, AWS, Jira, and Teams updates.',
        'Transneg, Dominican Republic',
        '2025 - 2026',
        'Main developer',
        'Ad-hoc',
        ['Clément Torti'],
        ['Python', 'Flask'],
        ['Visual Studio'],
        [
            'Developed dashboard aggregating live payment data and cloud infra status.',
            'Integrated Jira and Microsoft Teams for company-wide visibility.'
        ],
        null,
        null,
        '',
        [ProjectCategory.WEB]),

    new Project('Health Reporter',
        'icon_hospital',
        'Health monitoring web app for the CPE API. Automatically tests endpoints, checks network availability, HTTPS certificates, and biller responsiveness. Generates weekly performance reports.',
        'Web tool for monitoring the health of the CPE payment system.',
        'Transneg, Dominican Republic',
        '2025 - 2026',
        'Main developer',
        'Ad-hoc / Reporting-based',
        ['Clément Torti'],
        ['Python', 'Flask'],
        ['Visual Studio'],
        [
            'Built full-stack monitoring system for payment APIs.',
            'Designed timeline view of service status and failure trends.',
            'Implemented certificate and endpoint availability testing.'
        ],
        null,
        null,
        '',
        [ProjectCategory.WEB]),

    new Project('Tranxa',
        'icon_clock',
        'Recurring payment solution for Dominican Republic electricity companies. Sends daily automated payment requests for all registered clients with unpaid bills.',
        'Automated recurring payment platform for utility companies.',
        'Transneg, Dominican Republic',
        '2025 - 2026',
        'Developer',
        'Batch-process design with SFTP + REST transition',
        ['Clément Torti'],
        ['.NET'],
        ['Windows Task Scheduler', 'Visual Studio'],
        [
            'Integrated CardNet and Azul as acquiring banks.',
            'Learned how to manage sensitive recurring payments.',
            'Learned payment flow from SFTP to REST API.',
            'Built secure batch-processing workflow.'
        ],
        null,
        'https://oficinavirtual.edeeste.com.do/Login.aspx?ReturnUrl=%2f',
        null,
        [ProjectCategory.WEB]),

    new Project('Language Learning',
        'icon_book',
        'Personal website for learning Arabic. Includes vocabulary lists, verb conjugation games, and pronunciation practice.',
        'Interactive Arabic learning site with vocabulary and conjugation tools.',
        'Personal project',
        '2025 - Present',
        'Main developer',
        'Self-paced',
        ['Clément Torti'],
        ['HTML', 'CSS'],
        ['GitHub Pages'],
        [
            'Created tools to aid in Arabic vocabulary and grammar learning.',
            'Built interactive conjugation and expression exercises.'
        ],
        null,
        'https://clement-torti.github.io/language-practice/',
        null,
        [ProjectCategory.WEB]),

    new Project('Transneg Marketplace',
        'icon_caddy',
        'Corporate website presenting Transneg’s products, with demo access and license management. Used during conferences and customer onboarding.',
        'Platform showcasing Transneg’s solutions and license demos.',
        'Transneg, Dominican Republic',
        '2025 - 2026',
        'Main developer',
        'Agile',
        ['Clément Torti'],
        ['Angular', '.NET', 'MySQL'],
        ['Visual Studio'],
        [
            'Designed and deployed a marketing portal for product visibility.',
            'Enabled trial access and demo account generation.',
            'Integrated license validation features.'
        ],
        null,
        'https://marketplace.transnegrd.com/',
        null,
        [ProjectCategory.WEB]),

    new Project('Pagos Web',
        'icon_card',
        'Online platform for municipal bill payments. Retrieves customer bills and offers multiple payment options: CardNet, CyberSource, and BHD bank payment button.',
        'Municipal bill payment website with support for CardNet, CyberSource, and BHD payment options.',
        'Transneg, Dominican Republic',
        '2024 - 2026',
        'Main developer',
        'Agile-like',
        ['Clément Torti', 'Gorky Rojas'],
        ['Angular', '.NET', 'SQL Server'],
        ['Visual Studio', 'AWS EC2'],
        [
            'Learned how to integrate multiple payment gateways.',
            'Worked with BHD, CardNet, and CyberSource APIs.'
        ],
        null,
        'https://pagoswebsantiago.transnegrd.com/',
        '',
        [ProjectCategory.WEB]),

    new Project('PuntoPago',
        'icon_wallet',
        'Digital wallet. Allows users to manage and pay all their utility contracts in one app. Securely registers card data via certified Enigma Vault provider.',
        'Digital wallet app that consolidates contracts and securely processes utility payments.',
        'Transneg, Dominican Republic',
        '2025 - 2026',
        'Developer',
        'Agile',
        ['Clément Torti', 'Gorky Rojas'],
        ['Next.js', 'Javascript', '.NET', 'SQL Server'],
        ['Visual Studio', 'AWS EC2'],
        [
            'Learned how to work with third-party vaults for secure card storage (Enigma Vault).',
            'Ensured PCI-compliant handling of sensitive payment data.'
        ],
        null,
        'https://puntopagord.com/',
        '',
        [ProjectCategory.WEB, ProjectCategory.MOBILE]),

    new Project('Touch Kiosk Payment System',
        'icon_kiosk',
        'Fleet of touchscreen kiosks for public locations enabling users to pay utility bills. Integrated with card terminals and thermal receipt printers. A centralised system now monitors the activity of every kiosk in the network and pushes automatic updates to the whole fleet, backed by an automated deployment pipeline. Adding a new kiosk to the network is a straightforward operation.',
        'Self-service payment kiosks with a centralised console monitoring the fleet and rolling out automatic updates.',
        'Transneg, Dominican Republic',
        '2024 - 2026',
        'Main developer',
        'Custom automated deployment pipeline with test environments',
        ['Clément Torti', 'Gorky Rojas'],
        ['Angular', '.NET'],
        ['Visual Studio', 'AWS EC2'],
        [
            'Integration with Ingenico and Kinpos terminals.',
            'Fixed a parallelization bug affecting receipt printing when multiple kiosks operated simultaneously.',
            'Created a Windows background service to handle print requests.',
            'Defined receipt templates with the printer library.',
            'Designed architecture for a central server managing a fleet of kiosk nodes and terminals.',
            'Built a centralised console monitoring the activity of every kiosk in the network.',
            'Implemented fleet-wide automatic updates, rolled out remotely to every kiosk.',
            'Set up an automated deployment pipeline so new versions reach the whole fleet without manual steps.',
            'Reduced onboarding of a new kiosk to a simple, low-effort registration.',
            'Built a virtual test environment simulating kiosk behavior.'
        ],
        null,
        null,
        '',
        [ProjectCategory.DESKTOP, ProjectCategory.EMBEDDED, ProjectCategory.WEB],
        ['kiosk-payment-terminal.jpg', 'kiosk-admin-fleet-console.png']),

    new Project('National Theater Ticketing',
        'icon_theater',
        'This is the official ticketing website for the National Theater of Santo Domingo.',
        'Ticketing website for the National Theater of Santo Domingo.',
        'Transneg, Dominican Republic',
        '2024 - 2026',
        'Developer then Supervisor',
        'Agile',
        ['Clément Torti', 'Jeffrey Jose', 'Bily M. Sanchez Alvarez', 'Carlos Minier'],
        ['Angular', '.NET', 'SQL Server'],
        ['Visual Studio', 'Google Analytics', 'AWS EC2', 'Azure DevOps'],
        [
            'Optimized image loading by serving multiple size versions.',
            'Adjusted ticket styles to always fit printer output regardless of content.',
            'Worked with a professional ticket printer.',
            'Supervised development of a new version with additional features.',
            'Configured Google Analytics for tracking visits, sales, and marketing strategy.',
            'Migrated the server to a newer Windows EC2 instance.'
        ],
        '',
        'https://boleteria.com.do/',
        '',
        [ProjectCategory.WEB]
    ),


    new Project('CPE - Electronic Payment Hub ',
        'icon_arrows_left_right',
        'Transactional SOAP API that connects thousands of points of sale and digital payment solutions to the APIs of major billers in Dominican Republic (Edesur, CAASD, Claro, etc.) to enable bill payment and top-ups. Processes millions of transactions per year.',
        'Transactional SOAP API processing millions of annual transactions between POS systems and billers like Edesur or Claro.',
        'Transneg, Dominican Republic',
        '2023 - 2026',
        'Main developer',
        'Local / Dev / Prod - Azure DevOps CI/CD',
        ['Clément Torti', 'Gorky Rojas'],
        ['.NET', 'MySQL'],
        ['Visual Studio', 'Postman', 'Azure DevOps', 'AWS EC2', 'Wireshark'],
        [
            'Advanced SOAP API integration and authentication.',
            'Management of end-to-end encrypted tunnels with billers.',
            'Handling and recovery of high-volume transactional errors.',
            'Deployment and monitoring of 24/7 critical infrastructure.',
            'Insight into telecom and utility biller ecosystems.'
        ],
        null,
        null,
        null,
        [ProjectCategory.WEB]),


    // GESTIÓN DE AGENCIAS

    new Project('Agency Management',
        'icon_gear',
        'Backoffice of the CPE allowing management of points of sale. Grants access to specific billers and payment types, visualizes and reconciles transactions, and performs batch closures.',
        'Backoffice to manage POS permissions, monitor and reconcile transactions, and close operational batches.',
        'Transneg, Dominican Republic',
        '2023 - 2026',
        'Main developer',
        'Agile-like – Azure DevOps boards and pipelines',
        ['Clément Torti'],
        ['.NET', 'Angular', 'MySQL'],
        ['Visual Studio', 'Angular', 'Azure DevOps', 'AWS EC2'],
        [
        ],
        null,
        null,
        '',
        [ProjectCategory.WEB]),


    // VIRTUALPOS
    new Project('VirtualPoS',
        'icon_market_front',
        'Digital platform for physical points of sale (supermarkets, pharmacies, etc.) with direct contracts with Transneg, giving them access to CPE services for bill payments and top-ups.',
        'Web and mobile platform for POS to access bill payment and recharge services through CPE.',
        'Transneg, Dominican Republic',
        '2023 - 2026',
        'Main developer',
        'DevOps pipeline with testing and production branches on Azure',
        ['Clément Torti'],
        ['.NET', 'Angular', 'SQL Server', 'Cordova'],
        ['Visual Studio', 'Android Studio', 'Azure DevOps', 'AWS EC2'],
        [
            'Visit to users to get real world feedback and make selling process more efficient.',
            'Multi-platform delivery: Angular for web, Cordova for mobile.',
            'Responsive UI optimized for small POS devices.',
            'Integration of CPE APIs into user-friendly interfaces.',
            'Hybrid mobile app packaging and distribution.'
        ],
        null,
        null,
        '',
        [ProjectCategory.WEB, ProjectCategory.MOBILE]),

    // LIBRARY MANAGEMENT
    new Project('LIBRARY MANAGEMENT',
        'icon_book',
        'Console application to manage books in a fictional library. CRUD functionality for books of different genres. CRUD functionality for readers. Management of loans, late returns, and searches by genre and author. Use of data persistence.',
        'Fictional library console app with CRUD for books and readers, managing loans, and searches by genre and author, using data persistence.',
        'IUT Clermont-Ferrand',
        '2017 - 2 months',
        'Lead developer',
        null,
        ['Clément Torti', 'Florent Becouze'],
        ['C'],
        ['StarUML', 'GCC', 'Notepad++', 'Git'],
        [
            'Programming algorithmic concepts in a concrete project: merge sort and exchange sort, binary search.',
            'Management of relational data structures using low-level dynamic pointer arrays.',
            'Reading and writing binary files.',
            'Creation of a user menu for a console application.'
        ],
        'https://github.com/Clement-Torti/gestion-bibliotheque',
        '',
        'library_management_report.pdf',
        [ProjectCategory.CONSOLE]
    ),

    // TOURNAMENT TREES
    new Project('TOURNAMENT TREES',
        'icon_award',
        'This application is a multi-sport direct elimination tournament manager designed for team tournaments, add participants, enter scores as they occur to determine a winner, and organizers. It allows to create individual or print the tournament tree.',
        'Tournament manager for team events, adding participants, recording live scores, and organizing tournaments with printable brackets.',
        'IUT Clermont-Ferrand',
        '2018 - 2 months',
        'Developer',
        null,
        ['Clément Torti', 'Damien NGuyen'],
        ['C#', 'XAML'],
        ['StarUML', 'Balsamiq mockup', 'Draw.io', 'Visual Studio', 'SVN'],
        ['Software design: class diagram, package, sketch, usecases.',
            'Proficiency in C# programming (classes, structures, instances, abstraction, inheritance, interfaces, polymorphism, encapsulation).',
            'Management of collections (arrays, lists, dictionaries), events, DataTemplate, data-binding, use of LINQ.',
            'Development of a desktop application with installer, ergonomics and accessibility, custom components, data persistence, rigorous code documentation.'
        ],
        'https://github.com/Clement-Torti/tournament-tree',
        'https://youtu.be/9WWGtvwoqaU',
        'tournament_tree_report.pdf',
        [ProjectCategory.DESKTOP]),

    // ARTIKLATOR
    new Project('ARTIKLATOR',
        'icon_newspaper',
        'This is a website that aggregates news from multiple news sites by reading their RSS feeds. This site allows all visitors to access the content. Users logged in as administrators can modify the referenced sites.',
        'News aggregator website reads RSS feeds from various sources. Public access for all, admin access for site modification.',
        'IUT Clermont-Ferrand',
        '2018 - 2 months',
        'Lead developer',
        null,
        ['Clément Torti', 'Florent Becouze'],
        ['PHP', 'CSS', 'HTML', 'MySQL'],
        ['StarUML', 'Balsamiq mockup', 'Draw.io', 'PhpMyAdmin', 'Sublime text', 'SVN'],
        [
            'Organized according to the MVC design pattern.',
            'Used cookies to sort articles by type.',
            'Implemented sessions for the admin role.',
            'Ensured password security in the database by hashing and verifying the role for each admin action.',
            'Read and parsed RSS feeds.',
        ],
        'https://github.com/Clement-Torti/site-news',
        '',
        'artiklator.pdf',
        [ProjectCategory.WEB]
    ),

    // SPEED TYPING
    new Project('SPEED TYPING',
        'icon_keyboard',
        "This is an Android mobile game to test a person's typing speed. Words appear and gradually descend, increasing in speed. The game offers a persistent high score system and allows to take a photo of the winner.",
        'Android game tests typing speed with descending words, accelerating pace. Features high score system and winner\'s photo capture.',
        'IUT Clermont-Ferrand',
        '2019 - 2 months',
        'Lead developer',
        null,
        ['Clément Torti', 'Jonathan Point'],
        ['Java', 'Android SDK'],
        ['StarUML', 'Balsamiq mockup', 'Draw.io', 'Android Studio', 'Git'],
        [
            ' Creation of xml views with appropriate components, use of Intents, use of fragments.',
            ' Modification of the manifest and resource qualification.',
            ' Organization in MVC and use of design patterns (observer and factory).',
            ' Mastery of the application life cycle, dynamic permission management, light and deep persistence management, custom adapter coding.'
        ],
        'https://github.com/Clement-Torti/speed-typing',
        '',
        "speed_typing_report.pdf",
        [ProjectCategory.MOBILE]
    ),

    // BATTLESHIP
    new Project('BATTLESHIP',
        'icon_compass',
        "This program aims to recreate the game \"Battleship\". One player faces an artificial intelligence whose difficulty level can be chosen. At the end of the game, the player's score is recorded if they win and will be visible on the scores table on the home page.",
        '"Battleship" game recreation with AI opponent. Adjustable difficulty level, records scores for wins, displayed on home page leaderboard.',
        'IUT Clermont-Ferrand',
        '2019 - 2 months',
        'Lead developer',
        null,
        ['Clément Torti', 'Florent Becouze'],
        ['Java', 'JavaFX'],
        ['StarUML', 'Balsamiq mockup', 'Draw.io', 'IntelliJ', 'Git'],
        [
            'Organized using MVC pattern.',
            'Rigorous documentation including the use of UML modeling language, use cases, and an execution plan.',
            'Use of different types of media (sound, music, images, GIFs) and various design patterns (decorator, template method, strategy, simple factory, observer).',
            'Reading and writing text files to store scores.',
        ],
        'https://github.com/Clement-Torti/bataille-navale',
        '',
        'battleship_report.pdf',
        [ProjectCategory.DESKTOP]
    ),

    // OLLIE REMOTE
    new Project('OLLIE REMOTE',
        'icon_robot',
        'This is an application that allows the user to control the Ollie robot in different ways, using either Joystick or Pad mode. The Pad mode allows the user to draw a trajectory that the Ollie will follow.',
        'App to control Ollie robot using Joystick or Pad mode. Pad mode enables drawing trajectories for Ollie to follow.',
        'IUT Clermont-Ferrand',
        '2019 - 2 months',
        'Lead developer',
        null,
        ['Clément Torti', 'Florent Becouze'],
        ['Java', 'Android SDK'],
        ['StarUML', 'Balsamiq mockup', 'Draw.io', 'Android Studio', 'Git'],
        [
            'Use of an SDK.',
            'Sending Bluetooth commands.',
            'Mathematics of the trajectories related to the Pad.'
        ],
        'https://github.com/Clement-Torti/ollie-remote',
        'https://youtu.be/rI1cPQIrvO8',
        'ollie_report.pdf',
        [ProjectCategory.MOBILE]
    ),

    // BOOK7
    new Project('BOOK7',
        'icon_file_text',
        'This application was designed for students of ENSEEIHT. It is a digital notebook manager that simulates a handwritten notebook while offering the flexibility of digital tools. It allows the inclusion of code, PDFs, and images, as well as the separation of the notebook into lectures, tutorials, and practical work, and the organization of notebooks into modules.',
        'ENSEEIHT student\'s digital notebook manager with handwritten simulation, code, PDFs, images, and organization by lectures, tutorials, and practical work.',
        'ENSEEIHT, Toulouse INP',
        '2021 - 3 months',
        'Product Owner / Scrum master',
        'Agile',
        [
            'Nassim Bennouar',
            'Phillippe Lopes',
            'Anna Stephany',
            'Alexandre Le Lann',
        ],
        ['Java', 'JavaFX'],
        ['StarUML', 'Balsamiq mockup', 'Draw.io', 'Clickup', 'Discord', 'Git'],
        [
            'Managed a team as a Scrum master: technological watch, weekly meeting, assistance.',
            'Definition of weekly deliverables.',
            'Development organized in pair programming.'
        ],
        'https://github.com/Clement-Torti/book7',
        'https://youtu.be/3Lb0YkdPBA0',
        'book7_report.pdf',
        [ProjectCategory.DESKTOP]
    ),

    // GENEALOGICAL TREE 
    new Project('GENEALOGICAL TREE',
        'icon_tree',
        'This is a console application that allows the user to create and modify a genealogical tree.',
        'Console application that allows the user to create and modify a genealogical tree.',
        'ENSEEIHT, Toulouse INP',
        '2021 - 1 month',
        'Developer',
        null,
        ['Clément Torti'],
        ['ADA'],
        ['VSCode', 'GNAT', 'Git'],
        [
            'Adherence to the principle of single responsibility, encapsulation, and generality.',
            'Testing for each module.',
            'Use of a binary tree data structure of pointers.',
            'Application of binary tree algorithms.'
        ],
        'https://github.com/Clement-Torti/genealogic-tree',
        '',
        'genealogic_tree_report.pdf',
        [ProjectCategory.CONSOLE]
    ),

    // WHITEBOARD
    new Project('WHITEBOARD',
        'icon_clipboard',
        'This is a website that contains an editable canvas/board that can be shared live between multiple users.',
        'Website presenting an editable canvas/board that can be shared live between multiple users.',
        'ENSEEIHT, Toulouse INP',
        '2022 - 2 months',
        'Lead developer',
        null,
        ['Clément Torti', 'Mérérick Poudret'],
        ['Java', 'HTML', 'CSS'],
        ['Linda-TSpace', 'Git'],
        [
            'Creation of a shared tuple space, inspired by the Linda model.',
            'Concurrent access.',
            'Fault tolerance through a backup server.',
            'Middleware: mono-server architecture with several concurrent clients.'
        ],
        'https://github.com/Clement-Torti/intergiciel',
        '',
        'whiteboard_report.pdf',
        [ProjectCategory.WEB]
    ),

    // HURRY-CAN
    new Project('HURRY-CAN',
        'icon_chat',
        'A mobile application for transmitting medical documents or sensitive data to third parties who are not equipped with MS-Santé messaging. This application allows doctors to correspond with their patients or clients in a controlled manner.',
        'Mobile app for secure medical document transmission to non-MS-Santé users. Enables controlled doctor-patient correspondence.',
        'Yansys company',
        '2018 - 2 months',
        'Mobile developer',
        'Agile 4 people',
        ['X'],
        ['Swift', 'Python'],
        [
            'XCode',
            'Django REST',
            'StarUML',
            'Balsamiq mockup',
            'Jira',
            'Git'
        ],
        [
            'First professional experience in an agile team.',
            'Use of the Hurry-Can web API.',
            'Improved skills in mobile development.',
            'Compliance with the GDPR (General Data Protection Regulation).'
        ],
        'confidential',
        '',
        'hurry_can_report.pdf',
        [ProjectCategory.MOBILE, ProjectCategory.WEB]
    ),

    // FEEDBACK TOOL
    new Project('FEEDBACK TOOL',
        'icon_chat_square_text',
        'Full-stack web application used for peer evaluation within the company. Every 6 months, ECS employees are invited to answer questions about other employees in the company. This helps the hierarchical manager understand to what extent each employee adheres to DevOps practices. This tool automates this process. Employees are also able to leave feedback on other employees at any time.',
        'Full-stack web app automates peer evaluation for ECS employees. Supports DevOps adherence assessment and continuous feedback.',
        'ECS Digital Company',
        '2019 - 3 months',
        'Fullstack dev',
        'DevOps',
        ['Clément Torti', 'Louison Bellec', 'Kouros Aliabadi'],
        ['Javascript', 'HTML', 'CSS', 'YAML'],
        [
            'StarUML', 'Balsamiq mockup', 'Draw.io', 'Trello', 'React JS', 'Express', 'Node JS', 'MongoDB', 'Redis db', 'VSCode', 'GitLab-CI', 'Docker', 'Cypress', 'Jest', 'Git'
        ],
        [
            'Development according to DevOps principles with automated testing and deployment.',
            'Implementation of sessions with tokens encrypted with multiple secret keys.',
            'Upskilling in the use of web frameworks.',
            "Technological watch for the project's new recruits, professional training, and client presentation in English."
        ],
        'confidential',
        'https://youtu.be/9M6AH2PKryI',
        'feedback_tool_report.pdf',
        [ProjectCategory.WEB]
    ),


    // HGOMICRO / ETESTER
    new Project('HGOMICRO / ETESTER',
        'icon_code_square',
        'Integration tests of the HGoMicro electronic board and its medical peripherals performed using Python scripts. The HGoMicro is a data transfer hub provided by medical peripherals to dedicated servers. In-house development of a tool called eTester to automate script writing without having to write code.',
        'Python tests for HGoMicro medical hub, using homemade eTester to automate script writing without coding.',
        'eDevice Company',
        '2020-2023',
        'Developer/Tester',
        'V-cycle',
        [
            'Clément Torti',
            'Benoit Gorostidi',
            'Guillaume Lavigne',
            'Julien Pornet',
            'Pierre-Michel Simon'
        ],
        ['Python', 'Shell', 'Javascript', 'HTML', 'CSS'],
        [
            'VSCode', 'GitHub Copilot', 'SVN', 'Git', 'PyQT', 'Phidget', 'Putty', 'WinSCP', 'Angular', 'Express', 'Node JS', 'MongoDB', 'Balsamiq mockup', 'Draw.io', 'Trello', 'TeamGantt', 'Postman', 'BugZilla'
        ],
        [
            'Gained skills in embedded Linux and integration testing.',
            'Developed Python test scripts using specialized automation libraries.',
            'Gained skills in documentation according to the V-cycle: design modification, product specification, protocol, recipe, and bug report.',
        ],
        'confidential',
        '',
        null,
        [ProjectCategory.WEB, ProjectCategory.EMBEDDED]
    ),


    // TWOCAN
    new Project('TWOCAN',
        'icon_hospital',
        'A variant of the HGoMicro with an integrated algorithm for detecting dangerous medical measurements. Provides an online platform for doctors to access data. Responsible for front-end integration testing.',
        'HGoMicro variant with integrated dangerous medical measurement detection. Front-end integration testing for online doctor platform.',
        'eDevice Company',
        '2020-2023',
        'Developer/Tester',
        'V-cycle',
        [
            'Clément Torti',
            'Souksavanh Xayavong',
            'Lucas Artel',
            'Thibaud NGuyen',
            'Greg Ribaloff'
        ],
        ['PHP', 'CSS', 'HTML', 'MYSQL'],
        [
            'BugZilla', 'Postman', 'Cypress', 'Symfony', 'WAMP', 'VSCode', 'GitHub Copilot', 'Microsoft Office suite', 'Git'
        ],
        [
            'Developed skills in documentation following the V-cycle process: Design, Product specification, Protocol, Acceptance testing and Bug report.',
            'Developed skills in integration testing using Cypress.',
            'Wrote database population scripts and provided occasional help with Symfony development.',
            'Implemented "GitLab issues" to speed up the reporting process.'
        ],
        'confidential',
        '',
        null,
        [ProjectCategory.WEB]
    ),

    // PORTFOLIO
    new Project('PORTFOLIO ONLINE',
        'icon_person_badge',
        'You are currently viewing the online portfolio that has been developed using Angular. It is a single page application that allows the user to navigate between different sections. The content of the sections is dynamically generated from a typescript files. The site is responsive and can be viewed on mobile devices. Deployed on GitHub pages.',
        'Angular-based online portfolio: single-page, dynamic content, mobile-responsive, deployed on GitHub Pages.',
        'Personal project',
        '2023 - 1 month',
        'Developer',
        '',
        [
            'Clément Torti',
        ],
        ['Angular', 'Typescript', 'HTML', 'CSS',],
        [
            'Bootstrap', 'GitHub Copilot', 'Balsamiq mockup', 'VSCode', 'Git', 'GitHub Pages', 'ParticleJS'
        ],
        [
            'Responsive design using Bootstrap.',
            'Time restricted project.',
            'Using third party libraries like ParticleJS.',
            'Continuous integration with GitHub pages.'
        ],
        'https://github.com/Clement-Torti/portfolio',
        '',
        'portfolio_mockup.pdf',
        [ProjectCategory.WEB]
    ),

]
