/* French wording of the three catalogues in js/data/, keyed by the English source string so
   the data files themselves stay untouched and single-language.

   `values` holds the short fields that repeat across entries (contexts, durations, roles,
   methodologies). Anything absent here simply stays in English — which is the right answer
   for tool names, stacks and the technical vocabulary that is used as-is in French. */

I18N.registerContent('fr', {
    values: {
        /* Contexts */
        'Transneg, Dominican Republic': 'Transneg, République dominicaine',
        'Personal project': 'Projet personnel',
        'Yansys company': 'Société Yansys',
        'ECS Digital Company': 'Société ECS Digital',
        'eDevice Company': 'Société eDevice',

        /* Durations */
        '2025 - Present': '2025 - aujourd\'hui',
        '2017 - 2 months': '2017 - 2 mois',
        '2018 - 2 months': '2018 - 2 mois',
        '2019 - 2 months': '2019 - 2 mois',
        '2019 - 3 months': '2019 - 3 mois',
        '2021 - 1 month': '2021 - 1 mois',
        '2021 - 3 months': '2021 - 3 mois',
        '2022 - 2 months': '2022 - 2 mois',
        '2023 - 1 month': '2023 - 1 mois',
        '4 months': '4 mois',
        '5 years': '5 ans',
        '2 years': '2 ans',
        '1 semester': '1 semestre',
        '1 semester.': '1 semestre.',

        /* Roles */
        'Main developer': 'Développeur principal',
        'Developer': 'Développeur',
        'Developer then Supervisor': 'Développeur puis superviseur',
        'Mobile developer': 'Développeur mobile',
        'Fullstack dev': 'Développeur fullstack',
        'Developer/Tester': 'Développeur / testeur',

        /* Methodologies */
        'Self-paced': 'En autonomie',
        'Agile-like': 'Proche de l\'agile',
        'V-cycle': 'Cycle en V',
        'Ad-hoc / Reporting-based': 'Ad-hoc, orienté reporting',
        'Batch-process design with SFTP + REST transition': 'Traitement par lots, avec passage du SFTP au REST',
        'Local / Dev / Prod - Azure DevOps CI/CD': 'Local / Dev / Prod - CI/CD Azure DevOps',
        'Agile-like – Azure DevOps boards and pipelines': 'Proche de l\'agile – boards et pipelines Azure DevOps',
        'DevOps pipeline with testing and production branches on Azure': 'Pipeline DevOps avec branches de test et de production sur Azure',
        'Custom automated deployment pipeline with test environments': 'Pipeline de déploiement automatisé sur mesure, avec environnements de test',
        'Agile 4 people': 'Agile, équipe de 4'
    },

    /* ---- Projects ------------------------------------------------------------------ */
    projects: {
        'Transneg Engine': {
            description: "Plateforme de Business Process Management développée de zéro et déployée pour plusieurs mairies et de grandes compagnies d'assurance. Elle propose des formulaires interactifs, un designer de processus low-code en drag-and-drop et un système de plugins pour les besoins propres à chaque client. Des intégrations AWS assurent l'intelligent document processing (IDP) pour extraire les données des documents déposés, ainsi que la vérification biométrique avec détection du vivant et comparaison faciale avec la photo de la pièce d'identité.",
            shortDescription: "Plateforme BPM développée de zéro : processus low-code, IDP et vérification biométrique.",
            learnings: [
                "Conception d'un designer de processus low-code en drag-and-drop, utilisable par des non-développeurs.",
                "Mise en place d'une architecture à plugins permettant à chaque client d'étendre le moteur sans le forker.",
                "Intégration de l'intelligent document processing d'AWS pour extraire les données des documents déposés.",
                "Implémentation de la vérification biométrique : détection du vivant et comparaison avec la photo de la pièce d'identité.",
                "Livraison d'une plateforme unique servant à la fois le secteur public (mairies) et des clients assureurs."
            ]
        },
        'Donation Platform': {
            description: "Plateforme de dons responsive où les donateurs font des dons ponctuels ou récurrents, suivent leur historique et leur classement parmi les autres donateurs. Elle émet une carte de donateur avec QR code et génère des rapports de dons. De nombreuses intégrations de passerelles de paiement — PayPal, Visa et CardNet — apportent le multidevise et les dons récurrents par abonnement.",
            shortDescription: "Plateforme de dons responsive : cartes donateur QR, rapports et abonnements multidevises.",
            learnings: [
                "Intégration de PayPal, Visa et CardNet pour couvrir les donateurs locaux comme internationaux.",
                "Gestion du multidevise (DOP et USD) sur les dons ponctuels comme récurrents.",
                "Gestion des abonnements pour les dons mensuels récurrents.",
                "Génération de cartes de donateur à QR code et de rapports de dons téléchargeables.",
                "Conception d'une interface responsive, utilisable aussi bien sur mobile que sur desktop."
            ]
        },
        'Insurance Core & Broker Platform': {
            description: "Core assurance associé à une plateforme de vente destinée aux courtiers comme aux clients finaux. Le core définit les produits d'assurance disponibles, réalise les devis, génère les PDF de police et les envoie par WhatsApp et e-mail ; il est connecté à une passerelle de paiement et au service de facturation électronique de la DGII dominicaine. La plateforme courtiers gère les courtiers, les commissions par type d'assurance, la réconciliation avec chacun d'eux, le suivi des ventes et un help desk. L'ensemble est multidevise avec taux de change en temps réel, et gère les succursales.",
            shortDescription: "Core assurance et plateforme courtiers : devis, PDF de police, paiements et facturation DGII.",
            learnings: [
                "Modélisation d'un core assurance définissant les produits disponibles et calculant les devis.",
                "Génération des PDF de police et envoi automatique par WhatsApp et e-mail.",
                "Intégration d'une passerelle de paiement pour conclure la vente dans la plateforme.",
                "Intégration du service de facturation électronique de la DGII dominicaine.",
                "Gestion des courtiers avec des commissions configurables par type d'assurance.",
                "Réconciliation avec chaque courtier et suivi de ses ventes.",
                "Ajout d'un help desk pour les courtiers et les clients finaux.",
                "Gestion des opérations multidevises avec taux de change en temps réel et gestion des succursales."
            ]
        },
        'Transneg TV': {
            description: "Site de dashboard en direct affichant les indicateurs clés de l'entreprise : paiements en temps réel, état de l'infrastructure AWS, tableau des tickets Jira et messages Microsoft Teams.",
            shortDescription: "Dashboard live de l'activité : paiements, AWS, Jira et Teams.",
            learnings: [
                "Développement d'un dashboard agrégeant les données de paiement en direct et l'état de l'infrastructure cloud.",
                "Intégration de Jira et Microsoft Teams pour donner de la visibilité à toute l'entreprise."
            ]
        },
        'Health Reporter': {
            description: "Application web de supervision de l'API CPE. Elle teste automatiquement les endpoints, contrôle la disponibilité réseau, les certificats HTTPS et la réactivité des facturiers. Elle génère des rapports de performance hebdomadaires.",
            shortDescription: "Outil web de supervision de la santé du système de paiement CPE.",
            learnings: [
                "Développement d'un système de monitoring fullstack pour des APIs de paiement.",
                "Conception d'une vue chronologique de l'état des services et des tendances de panne.",
                "Mise en place de tests de certificats et de disponibilité des endpoints."
            ]
        },
        'Tranxa': {
            description: "Solution de paiement récurrent pour les compagnies d'électricité de République dominicaine. Elle envoie chaque jour des demandes de paiement automatiques pour tous les clients enregistrés ayant une facture impayée.",
            shortDescription: "Plateforme de paiement récurrent automatisé pour les fournisseurs d'énergie.",
            learnings: [
                "Intégration de CardNet et Azul comme banques acquéreuses.",
                "Apprentissage de la gestion de paiements récurrents sensibles.",
                "Compréhension du flux de paiement, du SFTP à l'API REST.",
                "Mise en place d'un traitement par lots sécurisé."
            ]
        },
        'Language Learning': {
            description: "Site personnel pour apprendre l'arabe. Il propose des listes de vocabulaire, des jeux de conjugaison et des exercices de prononciation.",
            shortDescription: "Site interactif d'apprentissage de l'arabe : vocabulaire et conjugaison.",
            learnings: [
                "Création d'outils facilitant l'apprentissage du vocabulaire et de la grammaire arabes.",
                "Développement d'exercices interactifs de conjugaison et d'expressions."
            ]
        },
        'Transneg Marketplace': {
            description: "Site vitrine présentant les produits de Transneg, avec accès aux démos et gestion des licences. Utilisé lors des conférences et de l'onboarding client.",
            shortDescription: "Plateforme présentant les solutions Transneg et les démos sous licence.",
            learnings: [
                "Conception et déploiement d'un portail marketing donnant de la visibilité aux produits.",
                "Mise en place d'accès d'essai et de génération de comptes de démo.",
                "Intégration de fonctions de validation de licence."
            ]
        },
        'Pagos Web': {
            description: "Plateforme en ligne de paiement des factures municipales. Elle récupère les factures du client et propose plusieurs moyens de paiement : CardNet, CyberSource et le bouton de paiement de la banque BHD.",
            shortDescription: "Site de paiement de factures municipales, avec CardNet, CyberSource et BHD.",
            learnings: [
                "Apprentissage de l'intégration de plusieurs passerelles de paiement.",
                "Travail avec les APIs de BHD, CardNet et CyberSource."
            ]
        },
        'PuntoPago': {
            description: "Portefeuille numérique. Il permet de gérer et de payer tous ses contrats de services dans une seule application. Les données de carte sont enregistrées de façon sécurisée via le prestataire certifié Enigma Vault.",
            shortDescription: "Wallet regroupant les contrats et traitant les paiements de factures en toute sécurité.",
            learnings: [
                "Apprentissage du travail avec un vault tiers pour le stockage sécurisé des cartes (Enigma Vault).",
                "Traitement des données de paiement sensibles en conformité PCI."
            ]
        },
        'Touch Kiosk Payment System': {
            description: "Parc de bornes tactiles installées dans des lieux publics, permettant de payer ses factures. Elles sont intégrées à des terminaux de carte et à des imprimantes thermiques de tickets. Un système centralisé supervise désormais l'activité de chaque borne du réseau et pousse les mises à jour automatiques sur l'ensemble du parc, appuyé par un pipeline de déploiement automatisé. Ajouter une nouvelle borne au réseau est devenu une opération simple.",
            shortDescription: "Bornes de paiement en libre-service, avec console centralisée et mises à jour automatiques.",
            learnings: [
                "Intégration des terminaux Ingenico et Kinpos.",
                "Correction d'un bug de parallélisation sur l'impression des tickets quand plusieurs bornes fonctionnaient simultanément.",
                "Création d'un service Windows en arrière-plan pour traiter les demandes d'impression.",
                "Définition des modèles de tickets avec la bibliothèque de l'imprimante.",
                "Conception de l'architecture d'un serveur central pilotant un parc de bornes et de terminaux.",
                "Développement d'une console centralisée supervisant l'activité de chaque borne du réseau.",
                "Mise en place des mises à jour automatiques à distance sur tout le parc.",
                "Mise en place d'un pipeline de déploiement automatisé, sans étape manuelle.",
                "Réduction de l'ajout d'une nouvelle borne à un simple enregistrement.",
                "Création d'un environnement de test virtuel simulant le comportement des bornes."
            ]
        },
        'National Theater Ticketing': {
            description: "Site officiel de billetterie du Théâtre national de Saint-Domingue.",
            shortDescription: "Site de billetterie du Théâtre national de Saint-Domingue.",
            learnings: [
                "Optimisation du chargement des images en servant plusieurs tailles.",
                "Adaptation du style des billets pour qu'ils tiennent toujours au format de l'imprimante, quel que soit le contenu.",
                "Travail avec une imprimante à billets professionnelle.",
                "Supervision du développement d'une nouvelle version avec de nouvelles fonctionnalités.",
                "Configuration de Google Analytics pour suivre les visites, les ventes et la stratégie marketing.",
                "Migration du serveur vers une instance EC2 Windows plus récente."
            ]
        },
        'CPE - Electronic Payment Hub ': {
            description: "API SOAP transactionnelle reliant des milliers de points de vente et de solutions de paiement numériques aux APIs des grands facturiers de République dominicaine (Edesur, CAASD, Claro, etc.) pour permettre le paiement de factures et les recharges. Elle traite des millions de transactions par an.",
            shortDescription: "API SOAP transactionnelle traitant des millions d'opérations par an entre points de vente et facturiers.",
            learnings: [
                "Intégration et authentification avancées sur des APIs SOAP.",
                "Gestion de tunnels chiffrés de bout en bout avec les facturiers.",
                "Traitement et reprise des erreurs transactionnelles à fort volume.",
                "Déploiement et supervision d'une infrastructure critique 24/7.",
                "Compréhension des écosystèmes des facturiers télécom et énergie."
            ]
        },
        'Agency Management': {
            description: "Backoffice du CPE permettant de gérer les points de vente. Il donne accès à des facturiers et des types de paiement précis, permet de visualiser et de réconcilier les transactions et d'effectuer les clôtures par lot.",
            shortDescription: "Backoffice de gestion des droits des points de vente, du suivi et de la clôture des transactions."
        },
        'VirtualPoS': {
            description: "Plateforme numérique destinée aux points de vente physiques (supermarchés, pharmacies, etc.) sous contrat direct avec Transneg, qui leur donne accès aux services du CPE pour le paiement de factures et les recharges.",
            shortDescription: "Plateforme web et mobile donnant aux points de vente l'accès aux services de paiement du CPE.",
            learnings: [
                "Visites terrain auprès des utilisateurs pour recueillir leurs retours et fluidifier le processus de vente.",
                "Livraison multiplateforme : Angular pour le web, Cordova pour le mobile.",
                "Interface responsive optimisée pour les petits terminaux des points de vente.",
                "Intégration des APIs du CPE dans des interfaces simples d'usage.",
                "Packaging et distribution d'une application mobile hybride."
            ]
        },
        'LIBRARY MANAGEMENT': {
            description: "Application console de gestion des ouvrages d'une bibliothèque fictive. CRUD sur les livres de différents genres, CRUD sur les lecteurs, gestion des emprunts, des retards et des recherches par genre et par auteur. Utilisation de la persistance des données.",
            shortDescription: "Application console de bibliothèque : CRUD livres et lecteurs, emprunts et recherches, avec persistance.",
            learnings: [
                "Mise en pratique de concepts algorithmiques sur un projet concret : tri fusion, tri par échange, recherche dichotomique.",
                "Gestion de données relationnelles via des tableaux dynamiques de pointeurs, en bas niveau.",
                "Lecture et écriture de fichiers binaires.",
                "Création d'un menu utilisateur pour une application console."
            ]
        },
        'TOURNAMENT TREES': {
            description: "Cette application est un gestionnaire de tournois multisports à élimination directe, conçu pour les tournois par équipes : ajouter des participants, saisir les scores au fil de l'eau pour désigner un vainqueur. Elle permet de créer des tournois individuels ou d'imprimer l'arbre du tournoi.",
            shortDescription: "Gestionnaire de tournois par équipes : participants, scores en direct et arbres imprimables.",
            learnings: [
                "Conception logicielle : diagramme de classes, packages, maquettes, cas d'utilisation.",
                "Maîtrise de la programmation C# (classes, structures, instances, abstraction, héritage, interfaces, polymorphisme, encapsulation).",
                "Gestion des collections (tableaux, listes, dictionnaires), des événements, des DataTemplate, du data-binding et usage de LINQ.",
                "Développement d'une application desktop avec installeur, ergonomie et accessibilité, composants personnalisés, persistance des données et documentation rigoureuse du code."
            ]
        },
        'ARTIKLATOR': {
            description: "Site web qui agrège l'actualité de plusieurs sites d'information en lisant leurs flux RSS. Le contenu est accessible à tous les visiteurs ; les utilisateurs connectés en tant qu'administrateurs peuvent modifier les sites référencés.",
            shortDescription: "Agrégateur d'actualités par flux RSS : accès public et espace d'administration.",
            learnings: [
                "Organisation selon le patron de conception MVC.",
                "Utilisation de cookies pour trier les articles par type.",
                "Mise en place de sessions pour le rôle administrateur.",
                "Sécurisation des mots de passe en base par hachage, avec vérification du rôle à chaque action d'administration.",
                "Lecture et parsing de flux RSS."
            ]
        },
        'SPEED TYPING': {
            description: "Jeu mobile Android qui teste la vitesse de frappe. Des mots apparaissent et descendent progressivement, de plus en plus vite. Le jeu propose un système de meilleurs scores persistant et permet de prendre en photo le vainqueur.",
            shortDescription: "Jeu Android de vitesse de frappe : mots descendants, meilleurs scores et photo du vainqueur.",
            learnings: [
                "Création de vues XML avec les composants adaptés, utilisation des Intents et des fragments.",
                "Modification du manifeste et qualification des ressources.",
                "Organisation en MVC et utilisation de patrons de conception (observateur et fabrique).",
                "Maîtrise du cycle de vie de l'application, de la gestion dynamique des permissions, de la persistance légère et profonde, et de l'écriture d'adaptateurs personnalisés."
            ]
        },
        'BATTLESHIP': {
            description: "Ce programme recrée le jeu de la bataille navale. Un joueur affronte une intelligence artificielle dont le niveau de difficulté est réglable. En fin de partie, le score du joueur est enregistré s'il gagne et apparaît dans le tableau des scores de la page d'accueil.",
            shortDescription: "Bataille navale contre une IA : difficulté réglable et tableau des scores en page d'accueil.",
            learnings: [
                "Organisation selon le patron MVC.",
                "Documentation rigoureuse : modélisation UML, cas d'utilisation et plan d'exécution.",
                "Utilisation de différents médias (sons, musiques, images, GIF) et de plusieurs patrons de conception (décorateur, patron de méthode, stratégie, fabrique simple, observateur).",
                "Lecture et écriture de fichiers texte pour stocker les scores."
            ]
        },
        'OLLIE REMOTE': {
            description: "Application permettant de piloter le robot Ollie de différentes façons, en mode Joystick ou en mode Pad. Le mode Pad permet de dessiner une trajectoire que le Ollie suivra.",
            shortDescription: "Application de pilotage du robot Ollie en mode Joystick ou Pad, avec tracé de trajectoires.",
            learnings: [
                "Utilisation d'un SDK.",
                "Envoi de commandes Bluetooth.",
                "Mathématiques des trajectoires liées au mode Pad."
            ]
        },
        'BOOK7': {
            description: "Application conçue pour les étudiants de l'ENSEEIHT. C'est un gestionnaire de cahiers numériques qui simule un cahier manuscrit tout en offrant la souplesse du numérique. Il permet d'insérer du code, des PDF et des images, de séparer le cahier en cours, TD et TP, et d'organiser les cahiers par module.",
            shortDescription: "Cahier numérique pour étudiants de l'ENSEEIHT : code, PDF, images et organisation par cours, TD et TP.",
            learnings: [
                "Encadrement d'une équipe comme Scrum master : veille technologique, réunion hebdomadaire, assistance.",
                "Définition des livrables hebdomadaires.",
                "Développement organisé en pair programming."
            ]
        },
        'GENEALOGICAL TREE': {
            description: "Application console permettant de créer et de modifier un arbre généalogique.",
            shortDescription: "Application console de création et de modification d'un arbre généalogique.",
            learnings: [
                "Respect du principe de responsabilité unique, de l'encapsulation et de la généricité.",
                "Tests pour chaque module.",
                "Utilisation d'une structure d'arbre binaire de pointeurs.",
                "Application des algorithmes sur arbres binaires."
            ]
        },
        'WHITEBOARD': {
            description: "Site web contenant un tableau blanc éditable, partageable en direct entre plusieurs utilisateurs.",
            shortDescription: "Site proposant un tableau éditable et partagé en direct entre plusieurs utilisateurs.",
            learnings: [
                "Création d'un espace de tuples partagé, inspiré du modèle Linda.",
                "Accès concurrents.",
                "Tolérance aux pannes via un serveur de secours.",
                "Intergiciel : architecture mono-serveur avec plusieurs clients concurrents."
            ]
        },
        'HURRY-CAN': {
            description: "Application mobile de transmission de documents médicaux ou de données sensibles à des tiers non équipés de la messagerie MS-Santé. Elle permet aux médecins de correspondre avec leurs patients ou clients de manière encadrée.",
            shortDescription: "Application mobile d'envoi sécurisé de documents médicaux hors MS-Santé, entre médecin et patient.",
            learnings: [
                "Première expérience professionnelle en équipe agile.",
                "Utilisation de l'API web Hurry-Can.",
                "Montée en compétences en développement mobile.",
                "Respect du RGPD (Règlement général sur la protection des données)."
            ]
        },
        'FEEDBACK TOOL': {
            description: "Application web fullstack utilisée pour l'évaluation entre pairs au sein de l'entreprise. Tous les 6 mois, les salariés d'ECS sont invités à répondre à des questions sur leurs collègues. Cela permet au manager hiérarchique de mesurer à quel point chacun applique les pratiques DevOps. L'outil automatise ce processus. Les salariés peuvent aussi laisser un feedback sur leurs collègues à tout moment.",
            shortDescription: "Application fullstack d'évaluation entre pairs chez ECS : suivi des pratiques DevOps et feedback continu.",
            learnings: [
                "Développement selon les principes DevOps, avec tests et déploiement automatisés.",
                "Mise en place de sessions à jetons chiffrés avec plusieurs clés secrètes.",
                "Montée en compétences sur les frameworks web.",
                "Veille technologique pour les nouvelles recrues du projet, formation professionnelle et présentation client en anglais."
            ]
        },
        'HGOMICRO / ETESTER': {
            description: "Tests d'intégration de la carte électronique HGoMicro et de ses périphériques médicaux, réalisés avec des scripts Python. Le HGoMicro est un hub qui transfère vers des serveurs dédiés les données fournies par les périphériques médicaux. Développement en interne d'un outil appelé eTester pour automatiser l'écriture des scripts sans avoir à coder.",
            shortDescription: "Tests Python du hub médical HGoMicro, avec eTester développé en interne pour écrire les scripts sans coder.",
            learnings: [
                "Montée en compétences en Linux embarqué et en tests d'intégration.",
                "Développement de scripts de test Python avec des bibliothèques d'automatisation spécialisées.",
                "Montée en compétences en documentation selon le cycle en V : modification de conception, spécification produit, protocole, recette et rapport de bug."
            ]
        },
        'TWOCAN': {
            description: "Variante du HGoMicro intégrant un algorithme de détection des mesures médicales dangereuses. Elle fournit une plateforme en ligne permettant aux médecins d'accéder aux données. En charge des tests d'intégration front-end.",
            shortDescription: "Variante du HGoMicro détectant les mesures dangereuses ; tests d'intégration front de la plateforme médecins.",
            learnings: [
                "Montée en compétences en documentation selon le cycle en V : conception, spécification produit, protocole, recette et rapport de bug.",
                "Montée en compétences en tests d'intégration avec Cypress.",
                "Écriture de scripts de peuplement de la base de données et aide ponctuelle au développement Symfony.",
                "Mise en place des \"GitLab issues\" pour accélérer le processus de remontée."
            ]
        },
        'PORTFOLIO ONLINE': {
            description: "Vous consultez actuellement le portfolio en ligne, développé avec Angular. C'est une single page application qui permet de naviguer entre différentes sections. Le contenu des sections est généré dynamiquement à partir de fichiers TypeScript. Le site est responsive et consultable sur mobile. Déployé sur GitHub Pages.",
            shortDescription: "Portfolio en ligne sous Angular : single page, contenu dynamique, responsive, déployé sur GitHub Pages.",
            learnings: [
                "Design responsive avec Bootstrap.",
                "Projet mené en temps contraint.",
                "Utilisation de bibliothèques tierces comme ParticleJS.",
                "Intégration continue avec GitHub Pages."
            ]
        }
    },

    /* ---- Study modules ------------------------------------------------------------- */
    modules: {
        /* IUT */
        'Databases': { name: 'Bases de données', description: "Ce module introduit les principes de conception et de gestion des bases de données : modélisation des données, bases relationnelles, requêtage SQL et administration." },
        'Architecture': { name: 'Architecture', description: "Ce module explore les principes de l'architecture des ordinateurs : organisation et conception des systèmes, jeu d'instructions, hiérarchie mémoire et systèmes d'entrées/sorties." },
        'Algorithms': { name: 'Algorithmique', description: "Ce module explore les algorithmes et structures de données fondamentaux : tris, recherches, algorithmes de graphes et programmation dynamique." },
        'Arithmetic': { name: 'Arithmétique', description: "Ce module porte sur les opérations arithmétiques, les systèmes de numération, les algorithmes associés et les techniques de résolution de problèmes mathématiques." },
        'Documentation & Interface (HTML & CSS)': { name: 'Documentation et interface (HTML & CSS)', description: "Ce module introduit les fondamentaux du HTML et du CSS, et apprend à construire des pages web bien structurées et soignées." },
        'Software Economics': { name: 'Économie du logiciel', description: "Ce module couvre les aspects économiques du développement logiciel : estimation des coûts, planification de projet, budgétisation et stratégies de tarification." },
        'Information Systems': { name: "Systèmes d'information", description: "Ce module explore la conception, la mise en œuvre et la gestion des systèmes d'information : systèmes de bases de données, modélisation et intégration de systèmes." },
        'Linear Algebra': { name: 'Algèbre linéaire', description: "Ce module couvre les concepts et techniques fondamentaux de l'algèbre linéaire : espaces vectoriels, matrices, systèmes d'équations linéaires et applications linéaires." },
        'Business Management': { name: "Gestion d'entreprise", description: "Ce module donne une vue d'ensemble des principes et pratiques de la gestion d'entreprise : comportement organisationnel, planification stratégique, marketing et gestion financière." },
        'Data Structures': { name: 'Structures de données', description: "Ce module porte sur l'implémentation et l'analyse des structures de données fondamentales — tableaux, listes chaînées, piles, files, arbres et graphes — ainsi que sur les algorithmes de manipulation et de recherche efficaces." },
        'Budget Management': { name: 'Gestion budgétaire', description: "Ce module porte sur la planification budgétaire, l'analyse financière, le contrôle des coûts et les techniques d'allocation des ressources en contexte organisationnel." },
        'Graphs & Automata': { name: 'Graphes et automates', description: "Ce module couvre la théorie des graphes et celle des automates : algorithmes de graphes, connexité, plus courts chemins, langages rationnels, automates finis et théorie des langages formels." },
        'Object-oriented Programming': { name: 'Programmation orientée objet', description: "Ce module introduit les principes de la programmation orientée objet — encapsulation, héritage, polymorphisme et patrons de conception — à l'aide d'un langage comme Java ou C++." },
        'Analysis & Numerical Methods': { name: 'Analyse et méthodes numériques', description: "Ce module porte sur les techniques d'analyse mathématique — limites, dérivées, intégrales, méthodes numériques et algorithmes d'approximation — pour résoudre des problèmes et analyser des phénomènes réels." },
        'Object-Oriented Programming and Human-Computer Interaction': { name: 'Programmation orientée objet et interaction homme-machine', description: "Ce module associe les principes de la programmation orientée objet aux fondamentaux de l'interaction homme-machine : conception d'interfaces, tests d'utilisabilité, programmation événementielle et développement d'interfaces graphiques." },
        'Labor Law': { name: 'Droit du travail', description: "Ce module donne une vue d'ensemble du droit du travail : contrats de travail, droits des salariés, conflits sociaux, santé et sécurité au travail et cadre légal en entreprise." },
        'Project Management': { name: 'Gestion de projet', description: "Ce module couvre les principes et les pratiques de la gestion de projet : planification, ordonnancement, gestion des ressources, analyse des risques, coordination d'équipe et évaluation de projet." },
        'Advanced Algorithms': { name: 'Algorithmique avancée', description: "Ce module explore les techniques avancées de conception et d'analyse d'algorithmes : diviser pour régner, algorithmes gloutons, programmation dynamique, flots dans les réseaux, NP-complétude et algorithmes d'approximation." },
        'Advanced Databases': { name: 'Bases de données avancées', description: "Ce module approfondit les bases de données : requêtes SQL avancées, optimisation, techniques d'indexation, sécurité, bases distribuées et entrepôts de données." },
        'Probability and Statistics': { name: 'Probabilités et statistiques', description: "Ce module introduit les principes fondamentaux du calcul des probabilités et de l'analyse statistique : lois de probabilité, tests d'hypothèses, régression, modèles probabilistes et inférence statistique." },
        'Network Services': { name: 'Services réseau', description: "Ce module explore les services et protocoles réseau : architecture, routage, commutation, DNS, DHCP, FTP, messagerie, services web, sécurité et optimisation des performances." },
        'Industrial Strategies': { name: 'Stratégies industrielles', description: "Ce module porte sur la compréhension et l'analyse des stratégies industrielles en contexte d'entreprise : planification stratégique, analyse concurrentielle, étude de marché, positionnement produit et développement commercial." },
        'ICT Law': { name: 'Droit du numérique', description: "Ce module donne une vue d'ensemble des enjeux juridiques et éthiques du numérique : propriété intellectuelle, respect de la vie privée, protection des données, cybersécurité et pratiques éthiques." },
        'Project Management 2': { name: 'Gestion de projet 2', description: "Ce module prolonge le premier module de gestion de projet et approfondit les techniques avancées : gestion des risques, méthodes agiles, assurance qualité, suivi et contrôle de projet." },
        'Mathematical Modeling': { name: 'Modélisation mathématique', description: "Ce module porte sur les techniques de modélisation mathématique appliquées à des problèmes réels : équations différentielles, optimisation, modélisation discrète, modélisation statistique et simulation numérique." },
        'Advanced Object-Oriented Programming (JavaFX)': { name: 'Programmation orientée objet avancée (JavaFX)', description: "Ce module porte sur les concepts avancés de la programmation orientée objet avec JavaFX : développement d'interfaces graphiques, gestion des événements, intégration multimédia, animations et patrons de conception applicatifs avancés." },
        'Operating System Programming': { name: 'Programmation système', description: "Ce module explore les principes de conception et d'implémentation des systèmes d'exploitation : gestion des processus, gestion mémoire, systèmes de fichiers, pilotes de périphériques, communication inter-processus et programmation système en C ou C++." },
        'Server-Side Web Programming': { name: 'Programmation web côté serveur', description: "Ce module porte sur le développement web côté serveur : architecture applicative, langages de script serveur (PHP), intégration avec les bases de données, sécurité et APIs de services web." },
        'Entrepreneurship Workshop': { name: "Atelier d'entrepreneuriat", description: "Ce module apporte les connaissances et compétences pratiques nécessaires à l'entrepreneuriat : génération d'idées, business plan, stratégies marketing, gestion financière, aspects juridiques et financement de start-up." },
        'C++': { name: 'C++', description: "Ce module introduit le langage C++ : syntaxe et sémantique, concepts objet, gestion de la mémoire, gestion des fichiers, templates et fonctionnalités avancées comme la gestion des exceptions et le multithreading." },
        'Linear Algebra / Analysis of Algorithm Complexity': { name: "Algèbre linéaire / analyse de la complexité des algorithmes", description: "Ce module couvre deux domaines clés : l'algèbre linéaire et l'analyse de la complexité des algorithmes. Au programme : opérations matricielles, espaces vectoriels, valeurs et vecteurs propres, analyse algorithmique, complexité en temps, complexité en espace et notation en O." },
        'Interpreted Object-Oriented Programming': { name: 'Programmation orientée objet interprétée', description: "Ce module explore les langages objet interprétés, comme Python ou Ruby : particularités du langage, typage dynamique, métaprogrammation, développement de scripts et application des principes objet en environnement interprété." },
        'Mobile Programming': { name: 'Programmation mobile', description: "Ce module porte sur le développement d'applications mobiles : plateformes (Android ou iOS), conception d'interface, cycle de vie applicatif, stockage des données, communication réseau et déploiement." },
        'Virtual Reality': { name: 'Réalité virtuelle', description: "Ce module explore les principes et techniques du développement en réalité virtuelle : matériel VR, modélisation et rendu 3D, interaction utilisateur, expériences immersives, frameworks de développement et conception d'applications VR." },
        'English': { name: 'Anglais', description: "Ce module vise à renforcer les compétences en anglais : lecture, écriture, compréhension orale et expression. Au programme : enrichissement du vocabulaire, révision grammaticale, exercices de compréhension, présentations orales et stratégies de communication." },
        'Expression & Professional Presentation': { name: 'Expression et communication professionnelle', description: "Ce module vise à développer une communication et une présentation efficaces en contexte professionnel : prise de parole en public, écrits efficaces, techniques de persuasion, supports visuels, langage corporel et savoir-être professionnel." },

        /* ENSEEIHT */
        'Database': { name: 'Bases de données', description: "Introduire les concepts de base nécessaires à une conception rigoureuse des bases de données. Compétences acquises : bonne maîtrise des concepts fondamentaux de la conception de bases de données.<br/>Séquence 1 : modélisation conceptuelle et bases relationnelles<br/>Séance 2 : étude de cas<br/>Séquence 3 : le langage SQL<br/>Séquence 4 : gestion des transactions." },
        'Computer architecture': { name: 'Architecture des ordinateurs', description: "Chapitre I : principes généraux<br/>Chapitre II : éléments de logique combinatoire<br/>Chapitre III : arithmétique binaire<br/>Chapitre IV : éléments de logique séquentielle<br/>Chapitre V : programmation du processeur 32 bits CRAPS/SPARC<br/>Chapitre VI : amélioration des performances<br/>Chapitre VII : CRAPS, guide du programmeur." },
        'Probability': { name: 'Probabilités', description: "Au programme : éléments de calcul des probabilités, variables aléatoires réelles, vecteurs aléatoires réels, théorèmes limites." },
        'Automata': { name: 'Automates', description: "Ce module couvre l'introduction, les exemples et la formalisation des automates finis déterministes, la modélisation, la déterminisation, les propriétés des langages rationnels, la minimisation, le passage des expressions régulières aux automates par méthode morphologique et par dérivations, avec deux TD sur les expressions régulières." },
        'Graph Theory': { name: 'Théorie des graphes', description: "Ce module explore les fondements et les applications de la théorie des graphes : représentation, connexité, plus courts chemins, arbres couvrants et algorithmes de graphes." },
        'Network Performance Evaluation': { name: 'Évaluation de performances des réseaux', description: "Apprendre à évaluer et optimiser les performances d'un réseau : mesure des métriques, identification des goulets d'étranglement, analyse du trafic et utilisation d'outils de diagnostic." },
        'Programming methodology': { name: 'Méthodologie de programmation', description: "L'UE Méthodologie de programmation vise à former à une conception et à une programmation rigoureuses. C'est un cours de méthodologie, qui s'appuie sur le langage ADA." },
        'Functional Programming': { name: 'Programmation fonctionnelle', description: "Introduction aux principes de la programmation fonctionnelle : fonctions d'ordre supérieur, récursivité, immuabilité et inférence de types. Apprentissage d'un code concis et modulaire avec les apports d'OCaml, dont les types algébriques et le polymorphisme." },
        'Internet Applications': { name: 'Applications internet', description: "Usage intermédiaire de Node.js et de JavaScript, compréhension du DOM et de son API, usage intermédiaire de HTML et de CSS, usage de JSON et Markdown, compréhension des protocoles HTTP, REST et WebSocket, usage d'un query-builder (Knex), usage du serveur applicatif FeathersJS pour créer un backend REST ou temps réel, usage intermédiaire de VueJS 3 pour le frontend, déploiement sur un serveur privé virtuel (Nginx, PM2)." },
        'Model-Driven Engineering (MDE)': { name: 'Ingénierie dirigée par les modèles (IDM)', description: "Approche de développement plaçant les modèles abstraits au cœur du processus, pour générer automatiquement du code et d'autres artefacts logiciels, mais aussi analyser et simuler les propriétés d'un système. L'objectif est d'améliorer la productivité, la qualité et la maintenabilité. Au programme : Acceleo, ATL, EMF, OCL Classic, Sirius Specifier Environment, Xtext Complete SDK." },
        'Language Translation': { name: 'Traduction des langages', description: "Introduction à la compilation, analyse lexicale, analyse syntaxique, grammaires attribuées, arbre syntaxique abstrait, analyse sémantique." },
        'Design and object programming': { name: 'Conception et programmation objet', description: "Ce cours vise à apprendre à construire une interface graphique, à pratiquer les concepts objet et à comprendre la programmation événementielle et son implémentation en Java. Au programme : diagrammes états-transitions, principes d'interface utilisateur, construction de la présentation (vue), gestion des événements et conclusion. Avec JavaFX/Swing." },
        'Introduction to Networks': { name: 'Introduction aux réseaux', description: "L'histoire d'internet. MAC et Ethernet, Wifi." },
        'Internet Protocols': { name: 'Protocoles internet', description: "I - Internet<br/>Objectif : définir internet<br/>Comment : panorama historique, social, chiffré et technique.<br/>Points clés : vue d'ensemble et difficulté de la définition.<br/><br/>II - Protocole IP<br/>Objectif : comprendre et connaître le protocole central d'internet<br/>Comment : le routage abordé par l'adressage, puis exploration détaillée.<br/>Points clés : adressage IPv4, principes de routage, table de routage, structure d'en-tête, MTU, mode paquet.<br/><br/>III - Protocoles de transport<br/>Objectif : comprendre l'importance d'un protocole de transport et son fonctionnement d'origine.<br/>Comment : présenter les besoins applicatifs et y répondre avec UDP et TCP.<br/>Points clés : multiplexage applicatif, UDP, TCP « de base » (fenêtre glissante, notations, reprise sur erreur…).<br/><br/>IV - Applications<br/>Objectif : se familiariser avec les concepts applicatifs de base, client/serveur et P2P.<br/>Comment : illustration par des applications simples.<br/>Points clés : notion de port, HTTP, FTP, SNMP…" },
        'Telephone Networks': { name: 'Réseaux téléphoniques', description: "INTRODUCTION<br/>Architecture générale<br/>Réseau d'accès<br/>Numérisation de la voix<br/>Multiplexage<br/>Routage et adressage<br/>Signalisation : SS7<br/>Réseau d'accès : RNIS bande étroite<br/>Le cœur de réseau : hiérarchies numériques PDH - SDH" },
        'Long-Distance Networks': { name: 'Réseaux longue distance', description: "Introduction générale<br/>Réseaux de transmission de données<br/>X.25<br/>Frame Relay<br/>ATM<br/>Réseaux à commutation de circuits<br/>RTC et signalisation<br/>Montée en débit : hiérarchies (PDH)/SDH<br/>Réseaux d'accès télécom<br/>Le réseau d'accès RNIS<br/>ADSL<br/>FTTH" },
        'Centralized Systems': { name: 'Systèmes centralisés', description: "Introduction et rappels<br/>L'API système en C<br/>L'API système en ligne de commande<br/>Conception interne d'un système<br/>Contrôle des processus<br/>Mémoire virtuelle<br/>Système de fichiers" },
        'Internet Protocols & Local Networks': { name: 'Protocoles internet et réseaux locaux', description: "Étude des protocoles et technologies utilisés pour communiquer au sein d'un réseau local et sur internet : TCP/IP, Ethernet, Wi-Fi et DNS, ainsi que les notions d'adressage IP, de sous-réseaux, de routage et de sécurité réseau." },
        'Advanced Internet Protocols': { name: 'Protocoles internet avancés', description: "Au programme : architecture d'internet (intra/inter-ISP), routage internet, aspects transport (TCP, contrôle de congestion), applications (client-serveur / pair-à-pair), IPv6, tunneling." },
        'Advanced Operated Networks': { name: 'Réseaux opérés avancés', description: "Au programme : ATM, SDH, ADSL, FTTH." },
        'Mobile/Wireless Operator Networks': { name: 'Réseaux mobiles et sans fil opérés', description: "Introduction générale aux principes des réseaux mobiles. Réseaux 2G : GSM, GPRS, EDGE. Réseaux 3G : UMTS, HSPA. Réseaux 4G : LTE." },
        'Logic, Proof, and Induction': { name: 'Logique, preuve et induction', description: "Au programme : logique propositionnelle, logique des prédicats, preuve de programmes fonctionnels, preuve de programmes impératifs." },
        'Statistics': { name: 'Statistiques', description: "Apprendre à collecter, analyser et interpréter des données chiffrées pour en dégager des motifs, des relations et des tendances. Le module donne les outils et techniques permettant de décider en connaissance de cause et de tirer des conclusions solides." },
        'Operations Research': { name: 'Recherche opérationnelle', description: "La recherche opérationnelle applique des méthodes mathématiques et analytiques à des problèmes de décision complexes dans de nombreux domaines. Au programme : programmation linéaire, programmation linéaire en nombres entiers, programmation dynamique et extensions." },
        'Concurrent Systems IR': { name: 'Systèmes concurrents IR', description: "Au programme : exclusion mutuelle, sémaphores, moniteurs, synchronisation et communication en Ada (tâches, rendez-vous), systèmes parallèles avec ressources critiques et interblocage." },
        'Transition Systems': { name: 'Systèmes de transitions', description: "Compréhension approfondie des systèmes de transitions, de leur spécification formelle, des techniques d'analyse et de l'usage de la logique temporelle pour raisonner sur les propriétés d'un système. Spécification opérationnelle : TLA+ et actions ; contrôle du progrès : équité ; énoncé des propriétés : logique temporelle linéaire (LTL) ; étude d'un algorithme d'exclusion mutuelle ; étude d'un algorithme réparti ; énoncé des propriétés : logique temporelle arborescente (CTL)." },
        'Security': { name: 'Sécurité', description: "Ce cours de sécurité informatique propose une introduction et des rappels, puis se concentre sur les spécificités des systèmes embarqués. Les fonctions cryptographiques y sont largement étudiées, avec les concepts et techniques garantissant confidentialité, intégrité et authenticité des données." },
        'Interconnection of systems': { name: 'Interconnexion de systèmes', description: "Au programme : modèle OSI, interconnexion téléphonique, VoIP et fin annoncée du RTC, interconnexion de réseaux locaux, MPLS." },
        'Middleware/Software packages': { name: 'Intergiciels et progiciels', description: "Communication à distance entre applications. Communication par sockets. Appels de procédures et de méthodes à distance. Intergiciels asynchrones : communication par messages." },

        /* UCM */
        'Data and Information Management System': { name: "Systèmes de gestion de données et d'information", description: "Entrepôts de données. Bases de données multidimensionnelles. Création et maintenance d'entrepôts de données, architectures multidimensionnelles.<br/>- Bases semi-structurées et hiérarchiques.<br/>- Autres bases non relationnelles.<br/>- Stockage, indexation et recherche d'information. Création d'index, expansion de requêtes, évaluation de la pertinence.<br/>- Bases de données sur le web.<br/>- Bases de données réparties. Systèmes d'information globaux, systèmes d'information géographique.<br/>- Conception et mise en œuvre d'architectures de gestion de données. Couche métier." },
        'Next-Generation Networks and the Internet': { name: 'Réseaux de nouvelle génération et internet', description: "- Organisation hiérarchique d'internet et routage entre systèmes autonomes.<br/>- Multicast et protocoles associés.<br/>- Technologies de réseaux mobiles et mobilité sur internet.<br/>- Qualité de service (QoS) sur internet.<br/>- Services internet avancés : voix sur IP, streaming, RTP." },
        'Software Project Management': { name: 'Gestion de projet logiciel', description: "- Validation et définition du projet.<br/>- Planification.<br/>- Exécution, suivi et contrôle.<br/>- Gestion de la communication projet.<br/>- Clôture du projet." },
        'Audit, Quality, and Reliability in Computing': { name: 'Audit, qualité et fiabilité en informatique', description: "- Qualité informatique : normes, facteurs et métriques de qualité.<br/>- Audit informatique : normes et référentiels, analyse et gestion des risques, processus d'audit.<br/>- Fiabilité des systèmes. Techniques de vérification systématique : tests, model-checking,<br/>spécification et vérification. - Tests de sûreté et de vivacité. Couverture de test, modélisation des systèmes.<br/>- Outils de vérification (semi-)automatique de la fiabilité des systèmes." },
        'High-Performance Computing': { name: 'Calcul haute performance', description: "- Architectures de processeurs avancées : CPU, GPU et NPU.<br/>- Hiérarchie mémoire et localité des données.<br/>- Introduction au calcul parallèle et distribué.<br/>- Modèles de programmation orientés performance : SIMD, multithreading, mémoire partagée ou distribuée.<br/>- Programmation GPGPU avec CUDA.<br/>- Techniques d'optimisation et bibliothèques de performance bas niveau.<br/>- Profiling, benchmarking et analyse de scalabilité." }
    },

    /* ---- Hobby cards --------------------------------------------------------------- */
    hobbies: {
        /* Languages */
        'Languages progress, 2023.': "Progrès en langues, 2023.",
        'Andalusian festival in Saint-Jean-de-Luz, France.': "Festival andalou à Saint-Jean-de-Luz, France.",
        'Mass in Saint-Jean-de-Luz, France.': "Messe à Saint-Jean-de-Luz, France.",
        'Arabic progress after a year, 2022.': "Progrès en arabe après un an, 2022.",
        'Script of the arabic progress video.': "Le script de la vidéo sur mes progrès en arabe.",
        'Arabic conference in the institute of the arab world, Paris, France.': "Conférence en arabe à l'Institut du monde arabe, Paris, France.",
        'Arabic institute in Paris, France.': "L'Institut du monde arabe, Paris, France.",
        'Instrument from the arabe institute in Paris, France.': "Instrument vu à l'Institut du monde arabe, Paris, France.",
        'My arabic textbook for exercices.': "Mon manuel d'exercices d'arabe.",
        'Yellow chatters in Toulouse to talk foreign languages.': "Les Yellow Chatters à Toulouse, pour parler des langues étrangères.",
        'Enseeiht prom 2023. it is important to be well surrounded.': "Promo ENSEEIHT 2023 : il est important d'être bien entouré.",
        'Fes, 2022.': "Fès, 2022.",
        'Hindu temple, Saint-Pierre, Reunion Island, France.': "Temple hindou, Saint-Pierre, La Réunion, France.",
        'With latinos in bordeaux, ready to see the Tour the France in Libourne, 2021.': "Avec des amis latinos à Bordeaux, prêts à voir le Tour de France à Libourne, 2021.",
        'From the impressive madrid arena, 2023.': "Depuis les impressionnantes arènes de Madrid, 2023.",
        'Last day with the prom at the UCM, madrid.': "Dernier jour avec la promo à l'UCM, Madrid.",
        'Mosque of Paris.': "La Grande Mosquée de Paris.",
        'My new frame from Seville, love it.': "Mon nouveau cadre rapporté de Séville, je l'adore.",

        /* Guitare */
        'Bella ciao.': "Bella ciao.",
        'Capricho Árabe.': "Capricho Árabe.",
        'Godfather.': "Le Parrain.",
        'Cover bella.': "Reprise de Bella.",
        'Saint-Paul market, Isla reunion, France 2021.': "Marché de Saint-Paul, La Réunion, France, 2021.",
        'Tarentella.': "Tarentelle.",
        'Love yourself cover, 2016.': "Reprise de Love Yourself, 2016.",
        'Mandalorian.': "Mandalorian.",
        'Tango.': "Tango.",
        'Lala land.': "La La Land.",
        'Spanish guitare in the malaga castle': "Guitare espagnole au château de Malaga.",
        'Tango 2.': "Tango 2.",

        /* Tech */
        'MKBHD: Tech reviews, smartphone coverage, and in-depth analysis of the latest gadgets.': "MKBHD : tests tech, actualité des smartphones et analyses poussées des derniers gadgets.",
        'CNET: Tech news, product reviews, and helpful guides for consumer electronics.': "CNET : actualité tech, tests produits et guides pratiques sur l'électronique grand public.",
        'MaxTech: Detailed tech reviews, comparisons, and buying advice for a wide range of apple products.': "MaxTech : tests détaillés, comparatifs et conseils d'achat sur une large gamme de produits Apple.",
        'Dave2d: Unbiased tech reviews, laptop recommendations, and gaming hardware analysis.': "Dave2D : tests tech sans complaisance, recommandations de portables et analyse du matériel gaming.",
        'Lew later: Tech news, smartphone unboxings, and discussions on the latest tech trends.': "Lew Later : actualité tech, unboxings de smartphones et discussions sur les tendances du moment.",
        'Friday checkout: Product reviews, tech deals, and recommendations for various consumer electronics.': "Friday Checkout : tests produits, bons plans tech et recommandations sur l'électronique grand public.",
        'ThrillSeeker: VR gaming, virtual reality technology, and immersive experiences in the world of gaming.': "ThrillSeeker : jeu en VR, technologies de réalité virtuelle et expériences immersives.",
        'NateGentile: Tech tutorials, programming guides, and software development tips and tricks.': "NateGentile : tutoriels tech, guides de programmation et astuces de développement logiciel.",
        'DotCSV: Data science, machine learning, and AI tutorials with practical examples and coding demos.': "DotCSV : data science, machine learning et tutoriels IA, avec exemples concrets et démos de code.",
        'Fireship: Web development tutorials, Javascript frameworks, and coding techniques for modern web applications.': "Fireship : tutoriels de développement web, frameworks JavaScript et techniques de code pour les applications web modernes."
    }
});
