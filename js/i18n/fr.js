/* French wording of the static markup and of the labels the section scripts print.

   Technical vocabulary is deliberately left in English wherever that is how it is actually
   said in a French IT context (backend, API, cloud, DevOps, testing, frontend, fullstack…):
   translating those would read worse, not better. */

I18N.registerUi('fr', {
    /* ---- Header ------------------------------------------------------------------- */
    'nav.home': 'Accueil',
    'nav.portfolio': 'Portfolio',
    'nav.resume': 'Mon parcours',
    'nav.about': 'À propos',
    'nav.hobbies': 'Loisirs',
    'nav.contact': 'Contact',
    'nav.aria': 'Langue',

    /* ---- Hero --------------------------------------------------------------------- */
    'hero.intro': 'Bonjour, je suis <span class="id-color">Clément Torti</span><br> je suis',
    'hero.title.fixed': 'Technical Lead & Software Engineer',
    'hero.text': 'Passionné d\'informatique, j\'aime <b>explorer les nouvelles technologies</b> et concevoir des <b>écosystèmes d\'architecture soignés</b> qui servent les objectifs métier de l\'entreprise et apportent de la valeur aux produits. Guidé par la curiosité et l\'envie d\'apprendre en continu, je m\'adapte vite à <b>de nouveaux secteurs</b>. J\'aime <b>accompagner et faire grandir mon équipe</b> et entretenir un cadre collaboratif où l\'innovation et l\'amélioration continue font partie de la culture.',
    'hero.native': 'Français',
    'hero.degree': 'Diplôme d\'ingénieur',
    'hero.cv': 'Télécharger mon CV',
    'hero.cv.file': 'pdfs/CV_Francais.pdf',
    // Prefixed by the JS with the number of years, hence the leading space.
    'hero.years': ' ans+ de programmation',

    /* ---- What I do ---------------------------------------------------------------- */
    'services.title': 'Ce que je fais',
    'services.tech.title': 'Expertise technique',
    // The span is filled in by js/main.js after this replacement lands.
    'services.tech.text': '<span id="exp-years"></span>+ ans d\'expérience professionnelle en développement, réseau, infrastructure et bases de données — avec un usage responsable de l\'IA.',
    'services.team.title': 'Management d\'équipe',
    'services.team.text': 'Animer une équipe en alignant chacun sur un objectif commun, en favorisant le partage de connaissances et en s\'appuyant sur des outils d\'organisation et des réunions efficaces.',
    'services.market.title': 'Analyse du marché',
    'services.market.text': 'Mettre la technologie au service de la réussite de l\'entreprise, en apportant de la valeur aux produits et en créant un avantage concurrentiel.',

    /* ---- Portfolio ---------------------------------------------------------------- */
    'portfolio.title': 'Portfolio',
    // Trailing space: the project count sits in a <span> right after this sentence.
    'portfolio.subtitle': 'Tous les projets sur lesquels j\'ai travaillé ',
    'portfolio.filter.all': 'Tous les projets',
    'portfolio.filter.web': 'Web',
    'portfolio.filter.mobile': 'Mobile',
    'portfolio.filter.desktop': 'Desktop',
    'portfolio.filter.console': 'Console',
    'portfolio.filter.embedded': 'Embarqué',
    // Kept short: the two selects share one row on a phone, and the French wording for
    // "All technologies" does not fit in half of it.
    'portfolio.filter.techs': 'Technologies',
    'portfolio.filter.tools': 'Outils',
    'portfolio.showMore': 'Voir plus de projets',
    'portfolio.showMoreCount': 'Voir {count} projets de plus',
    'portfolio.card.description': '📋 Description',
    'portfolio.card.context': '🏢 Contexte et durée',
    'portfolio.card.contextLabel': 'Contexte :',
    'portfolio.card.durationLabel': 'Durée :',
    'portfolio.card.roleLabel': 'Rôle :',
    'portfolio.card.methodologyLabel': 'Méthodologie :',
    'portfolio.card.team': '👥 Équipe',
    'portfolio.card.technologies': '🛠️ Technologies',
    'portfolio.card.tools': '🔧 Outils',
    'portfolio.card.learnings': '📚 Ce que j\'en retiens',
    'portfolio.card.screenshot': '🖼️ Capture d\'écran',
    'portfolio.card.screenshots': '🖼️ Captures d\'écran',
    'portfolio.link.demo': '🎥 Démo',
    'portfolio.link.report': '📑 Rapport PDF',
    'portfolio.link.screenshot': '🖼️ Télécharger la capture',
    'portfolio.link.screenshotN': '🖼️ Capture {n}',
    'portfolio.screenshot.loading': 'Chargement de la capture…',
    'portfolio.screenshot.error': 'Capture indisponible.',
    'portfolio.screenshot.alt': 'Capture {n} de {name}',
    'portfolio.lightbox.label': 'Aperçu de la capture',
    'portfolio.lightbox.close': 'Fermer l\'aperçu',
    'portfolio.lightbox.prev': 'Capture précédente',
    'portfolio.lightbox.next': 'Capture suivante',

    /* ---- Resume ------------------------------------------------------------------- */
    'resume.title': 'Mon parcours',
    'resume.experience': 'Expérience',
    'resume.education': 'Formation',
    'resume.missions': 'Missions :',

    'resume.transneg2.date': 'déc. 2025 - déc. 2026',
    'resume.transneg2.role': 'System Team Manager Jr.',
    'resume.transneg2.company': 'Transneg Saint-Domingue, République dominicaine',
    'resume.transneg2.text': 'Évolution de poste : la continuité de mon travail d\'ingénieur senior, avec en plus l\'encadrement de l\'équipe, un périmètre d\'infrastructure élargi et une implication plus directe dans les échanges produit et client.<br /><br />\n\n<i>Missions :</i><br />\n- Encadrer une petite équipe de développeurs : répartir les tâches, apporter un support technique et animer les réunions hebdomadaires pour garder le cap et la continuité des livraisons.<br />\n\n- Rester au contact du code sur les systèmes backend et les APIs, en contribuant à la conception, à la maintenance et à l\'évolution des systèmes de paiement en production.<br />\n\n- Travailler à la fois sur l\'infrastructure AWS et on-premise, en accompagnant les déploiements, la disponibilité et les besoins d\'exploitation.<br />\n\n- Intervenir plus tôt dans le cadrage des projets et les échanges clients, pour clarifier les besoins et les traduire en actions techniques.<br />',

    'resume.transneg1.date': 'nov. 2023 - déc. 2025',
    'resume.transneg1.role': 'Développeur senior (Angular/.NET/AWS)',
    'resume.transneg1.company': 'Transneg Saint-Domingue, République dominicaine',
    'resume.transneg1.text': 'Je co-pilote des projets de solutions de paiement à l\'échelle nationale, avec un fort accent sur les APIs financières et les systèmes backend.<br /><br />\n\n<i>Missions :</i><br />\n- Maintenir, améliorer et faire évoluer des systèmes financiers : une API de paiement à fort trafic utilisée par de grandes entreprises et des organismes publics, mais aussi des services de prélèvement automatique, des bornes tactiles et une plateforme de paiement en ligne.<br />\n\n- Travailler au quotidien avec des APIs REST et SOAP du domaine financier : authentification, traitement des transactions, réconciliation et journalisation d\'audit.<br />\n\n- Intégrer les plateformes aux réseaux acquéreurs comme CardNet et CyberSource (Visa), ainsi qu\'aux banques locales comme Banco BHD, pour des paiements sûrs et fiables.<br />\n\n- Administrer notre infrastructure AWS — EC2, tunnels VPN, pare-feu pfSense et Cloudflare — en veillant aux performances et à la sécurité.<br />\n\n- Piloter le déploiement et l\'automatisation des solutions pour garantir une haute disponibilité et des mises à jour sans coupure.<br />',

    'resume.edevice.date': 'déc. 2020 - sept. 2023',
    'resume.edevice.role': 'Développeur & testeur IoT (Python/Angular) - Alternance',
    'resume.edevice.company': 'eDevice Bordeaux, France',
    'resume.edevice.text': 'J\'ai travaillé dans une société informatique qui fournit des solutions de connectivité au secteur de la santé. J\'étais en charge de la conception, du développement et de l\'exécution de scripts de test automatisés pour des cartes électroniques et des applications web. Ces cartes équipent un hub patient qui s\'interface avec différents capteurs médicaux et transmet les données collectées aux professionnels de santé. Pour mon projet de fin d\'études, j\'ai développé une application web de génération de scripts de test sur une architecture fullstack MEAN.\n<br /><br />\n\n<i>Missions :</i><br />\n- Écriture de scripts de test d\'intégration de cartes électroniques en Python.<br />\n\n- Développement d\'une application web moderne en architecture MEAN pour écrire ces scripts de test Python.<br />\n\n- Écriture de tests web Cypress.<br />\n\n- Recette, remontée de bugs et documentation selon un cycle en V.<br />',

    'resume.ecs.date': 'avr. 2019 - juin 2019',
    'resume.ecs.role': 'Développeur fullstack (React/NodeJS) - Stage',
    'resume.ecs.company': 'ECS Digital Londres, Royaume-Uni',
    'resume.ecs.text': 'Devenue GlobalLogic, une société londonienne de transformation digitale. J\'ai travaillé en équipe au développement d\'une application web utilisée en interne pour l\'évaluation entre pairs. J\'y ai fait du développement fullstack sur une architecture MERN. J\'ai aussi découvert les outils DevOps et suivi une formation à la communication en anglais.<br /><br />\n\n<i>Missions :</i><br />\n- Développement d\'une application web fullstack depuis zéro, selon les principes DevOps.<br />\n- Veille technologique pour les nouvelles recrues du projet, formation professionnelle et présentation client en anglais.',

    'resume.yansys.date': 'juin 2018 - juil. 2018',
    'resume.yansys.role': 'Développeur mobile (Swift) - Job d\'été',
    'resume.yansys.company': 'Yansys Vichy, France',
    'resume.yansys.text': 'Éditeur de logiciels médicaux. J\'étais en charge du développement de la version mobile de HurryCan, une application web de messagerie entre patients et médecins. Développement iOS en Swift au sein d\'une équipe agile.<br /><br />\n\n<i>Missions :</i><br />\n- Développement d\'une application mobile à partir d\'une application web existante.<br />\n- Intégration dans une équipe agile.',

    'resume.ucm.degree': 'Master en informatique',
    'resume.ucm.school': 'UCM Madrid, Espagne',
    'resume.ucm.text': 'L\'UCM Madrid propose un master en informatique reconnu. Situé à Madrid, en Espagne, il offre un cursus complet mêlant bases théoriques et applications pratiques. Les étudiants y acquièrent des compétences avancées en développement logiciel, algorithmique, IA et analyse de données. Les équipements de pointe et les partenariats industriels de l\'UCM en font un cadre d\'apprentissage idéal.',

    'resume.enseeiht.degree': 'Diplôme d\'ingénieur en informatique',
    'resume.enseeiht.school': 'INP ENSEEIHT, Toulouse, France',
    'resume.enseeiht.text': 'Reconnue comme la 2e meilleure école d\'ingénieurs en informatique de France, l\'ENSEEIHT Toulouse propose un cursus exigeant, suivi ici en alternance. Les étudiants y développent des compétences techniques en développement logiciel, algorithmique, IA et analyse de données. Projets concrets et stages préparent les futurs ingénieurs à réussir dans un secteur en mouvement permanent.',

    'resume.iut.degree': 'DUT informatique',
    'resume.iut.school': 'IUT Clermont-Ferrand, France',
    'resume.iut.text': 'L\'IUT Clermont-Ferrand est reconnu pour la qualité de sa formation en informatique. Situé à Aubière, il propose un cursus pratique aligné sur les besoins du secteur. Les étudiants y acquièrent une expertise en programmation, développement web et mobile, bases de données, réseaux et systèmes d\'information. Projets concrets et stages en font une expérience d\'apprentissage vivante.',

    'modules.title': 'Modules étudiés',
    'modules.hint': 'Cliquez sur un module pour afficher le détail',
    'modules.duration': 'Durée :',
    'modules.teachers': 'Enseignant(s) :',
    'modules.category.Programming': 'Programmation',
    'modules.category.Math': 'Maths',
    'modules.category.Web': 'Web',
    'modules.category.Management': 'Gestion de projet',
    'modules.category.Networking': 'Réseau',
    'modules.category.Database': 'Bases de données',
    'modules.category.Algorithm': 'Algorithmique',
    'modules.category.System': 'Système',
    'modules.category.Soft Skill': 'Soft skills',
    'modules.category.Engineering Tools': 'Outils d\'ingénierie',

    /* ---- About me ----------------------------------------------------------------- */
    'about.title': 'À propos de moi',
    'about.text': 'Passionné de technologie, j\'ai une vraie curiosité pour ce qui émerge et j\'apprends beaucoup en pratiquant. Mes centres d\'intérêt vont du développement logiciel — frameworks modernes et langages de programmation — à l\'infrastructure on-premise et cloud et au réseau. Je m\'intéresse aussi à l\'IA, aux outils de management et à l\'électronique, toujours avec l\'envie de comprendre comment les choses fonctionnent et s\'articulent. J\'aime construire, expérimenter et élargir sans cesse mes compétences pour rester à la pointe.',
    'about.skills.languages': 'Langages de programmation',
    'about.skills.frameworks': 'Frameworks',
    'about.skills.databases': 'Bases de données',
    'about.skills.tools': 'Outils',
    'about.skills.infrastructure': 'Infrastructure',
    'about.skills.ai': 'IA',
    'about.skills.spoken': 'Langues',
    'about.skill.french': 'Français',
    'about.skill.english': 'Anglais',
    'about.skill.spanish': 'Espagnol',
    'about.skill.arabic': 'Arabe',

    /* ---- Hobbies ------------------------------------------------------------------ */
    'hobbies.title': 'Loisirs',
    'hobbies.subtitle': 'Mes centres d\'intérêt et mes passions',
    'hobbies.filter.languages': 'Langues',
    'hobbies.filter.guitare': 'Guitare',
    'hobbies.filter.tech': 'Tech',
    'hobbies.prev': 'Précédent',
    'hobbies.next': 'Suivant',

    /* ---- Contact ------------------------------------------------------------------ */
    'contact.title': 'Me contacter',
    'contact.email': 'E-mail',
    'contact.whatsapp': 'Whatsapp',
    'contact.linkedin': 'LinkedIn',
    // Leading space: the LinkedIn icon sits right before it.
    'contact.profile': ' Mon profil',
    'contact.float': 'Me contacter'
});
