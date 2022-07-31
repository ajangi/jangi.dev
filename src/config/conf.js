import EXPERIENCE_ICON from './../assets/images/icons/experience.svg';
import EXPERIENCE_ACTIVE_ICON from './../assets/images/icons/experience_active.svg';
import EDUCATION_ICON from './../assets/images/icons/education.svg';
import EDUCATION_ACTIVE_ICON from './../assets/images/icons/education_active.svg';
import PROJECTS_ICON from './../assets/images/icons/projects.svg';
import PROJECTS_ACTIVE_ICON from './../assets/images/icons/projects_active.svg';
import CERTIFICATES_ICON from './../assets/images/icons/certificates.svg';
import CERTIFICATES_ACTIVE_ICON from './../assets/images/icons/certificates_active.svg';
import SKILLS_ICON from './../assets/images/icons/skills.svg';
import SKILLS_ACTIVE_ICON from './../assets/images/icons/skills_active.svg';
const detail_items = [
    {
        key : 'experience',
        title : 'Experience',
        icon : EXPERIENCE_ICON,
        active_icon : EXPERIENCE_ACTIVE_ICON
    },
    {
        key : 'education',
        title : 'Education',
        icon : EDUCATION_ICON,
        active_icon : EDUCATION_ACTIVE_ICON
    },
    {
        key : 'skills',
        title : 'Skills',
        icon : SKILLS_ICON,
        active_icon : SKILLS_ACTIVE_ICON
    },
    {
        key : 'certificates',
        title : 'Certificates',
        icon : CERTIFICATES_ICON,
        active_icon : CERTIFICATES_ACTIVE_ICON
    },/* 
    {
        key : 'achievements',
        title : 'Achievements',
        icon : ACHIEVEMENTS_ICON,
        active_icon : ACHIEVEMENTS_ACTIVE_ICON
    }, */
    {
        key : 'projects',
        title : 'Projects',
        icon : PROJECTS_ICON,
        active_icon : PROJECTS_ACTIVE_ICON
    }
];
const certificates = [
    {
        title : 'Object Oriented PHP',
        sub_title : 'Tehran Institute of Technology'
    },
    {
        title : 'Professional Android App Development',
        sub_title : 'GalileoX - edx.com'
    },
    {
        title : 'Introductory and Advanced MATLAB',
        sub_title : 'University of Tehran'
    },
    {
        title : 'Research and Design',
        sub_title : 'University of Michigan - edx.com'
    },
];
const educations = [
    {
        university : 'Shahrood University of Technology',
        sub_title : 'Shahrood — Master of Science (M.Sc), Tunneling and Underground Space Technology Engineering',
        date : {
            start_date : 'Sep 2014',
            end_date : 'Sep 2017'
        },
        meta_data : 'Thesis : Numerical Assessment of Influence of soil parameters on the seismic response of concrete segmental tunnel lining'
    },
    {
        university : 'University of Tehran',
        sub_title : 'Tehran — Bachelor of Science (B.Sc), Mining Engineering',
        date : {
            start_date : 'Sep 2009',
            end_date : 'Sep 2013'
        },
        meta_data : 'Thesis - Developing a software to find the numerical and visual optimized open pit mine'
    }
];
const projects = [
    {
        title : 'SnappDoctor—',
        sub_title : 'Monolith Core',
        description : 'Laravel based project to manage project back-end side'
    },
    {
        title : 'SnappDoctor—',
        sub_title : 'NotifierService',
        description : 'One of Microservices developed to send high load sms, push notification and Email to users.'
    },
    {
        title : 'SnappDoctor—',
        sub_title : 'Medical Delivery Service',
        description : 'One of Microservices developed to deliver home care, Lab service and Medicine as prescription.'
    },
    {
        title : 'SnappDoctor—',
        sub_title : 'Search Service',
        description : 'One of Microservices developed using ElasticSearch for high load.'
    },
    {
        title : 'SnappMarket —',
        sub_title : 'NotifierService',
        description : 'One of Microservices developed to send high load sms, push notification and Email to users. Working with two Queues on Redis to send notifications and RabbitMQ to get queued requests.  (Laravel, Graylog, Sentry, Docker, Docker-Compose, Gitlab, CI/CD)'
    },
    {
        title : 'SnappDoctor—',
        sub_title : 'AuthorizationService',
        description : 'One of Microservices developed to send high load sms, push notification and Email to users. Working with two Queues on Redis to send notifications and RabbitMQ to get queued requests.  (Laravel, Graylog, Sentry, Docker, Docker-Compose, Gitlab, CI/CD)'
    },
    {
        title : 'QPage —',
        sub_title : 'BackOffice Admin Panel',
        description : 'Developed for QPage admins to manage users, companies and etc.(ReactJs, Redux, Redux-Thunk- Redux-Persist, OAuth 2.0, Docker, Docker-Compose, Gitlab, CI/CD)'
    },
    {
        title : 'QPage —',
        sub_title : 'Company Panel',
        description : 'Developed for company admin users to manage job boards, telents, candidates, people, hiring pipeline, hiring team, assessment kits and etc.(ReactJs, Redux, Redux-Thunk- Redux-Persist, OAuth 2.0, Docker, Gitlab, CI/CD)'
    },
    {
        title : 'QPage —',
        sub_title : 'Candidate Mobile App (Android/iOS)',
        description : 'Developed for candidates to find appropriate jobs, manage job offers, read blog posts, answer to the assessment kits questions and etc.(React Native, Redux, Redux-Thunk- Redux-Persist, OAuth 2.0, FCM Push Notification)'
    },
    {
        title : 'QPage —',
        sub_title : 'BackEnd API',
        description : '(SOA, PHP, Lumen, Docker, Docker-Compose, Redis, mySql, mongoDB, NGINX, GitLab, CI/CD, OAuth 2.0, Factory, Builder, Strategy and etc Design Patterns)'
    },
    {
        title : 'TiPax —',
        sub_title : 'MyTipax Customer Mobile Application (Android)',
        description : 'Developed TiPax (TiNexT sister company in Fakher Holding) to manage C(consumer) side users(React Native, Redux, Redux-Thunk- Redux-Persist, OAuth 2.0, FCM Push Notification, React Native Maps, React Native Camera, Socket Programming)'
    },
    {
        title : 'TiNexT —',
        sub_title : 'Biker Promoter App (Android)',
        description : 'Developed for promoters to find appropriate bikers and pre register them as TiNexT bikers. (React Native, Redux, Redux-Thunk- Redux-Persist, OAuth 2.0, FCM Push Notification)'
    },
    {
        title : 'TiNexT —',
        sub_title : 'BackOffice Admin Panel',
        description : 'Developed for TiNexT admins to manage parcels, routes, bikers, customers, corporates and etc.(Angular 7, OAuth 2.0 and etc )'
    },
    {
        title : 'TiNexT —',
        sub_title : 'Corporate Panel',
        description : 'Developed for corporates and customers to create orders and track parcels status(Angular 7, OAuth 2.0, Socket Programming and etc )'
    },
    {
        title : 'TiNexT —',
        sub_title : 'Biker App (Android)',
        description : 'Developed an android application for bikers to check routes, parcels and deliver parcels to destinations.(React Native, Redux, Redux-Thunk- Redux-Persist, OAuth 2.0, FCM Push Notification, Socket Programming)'
    },
    {
        title : 'TiNexT —',
        sub_title : 'BackEnd API',
        description : '(SOA, PHP, Laravel, Docker, Docker-Compose, Redis, mySql, NGINX, GitLab, CI/CD, OAuth 2.0, Factory, Builder, Strategy and etc Design Patterns)'
    },
    {
        title : 'RahAvard.T.D —',
        sub_title : 'Exhibition Management Platform',
        description : '(PHP, Laravel, Laravel Blade, Redis, mySql, NGINX, GitLab, OAuth 2.0)'
    },
    {
        title : 'RahAvard.T.D —',
        sub_title : 'Exhibition Management App (Android)',
        description : '(React Native, Redux, Redux-Thunk, Redux Persist)'
    },
    {
        title : 'SnappBox —',
        sub_title : 'Biker Promoter App (Android)',
        description : '(React Native, Redux, Redux-Thunk- Redux-Persist, OAuth 2.0, FCM Push Notification, React Native Maps, React Native Camera)'
    },
    {
        title : 'SnappBox —',
        sub_title : ' BackOffice Admin Panel',
        description : '(Angular Js, OAuth 2.0 and etc )'
    },
    {
        title : 'Teleyare Co. —',
        sub_title : ' BackEnd and Office Admin Panel',
        description : '(PHP, Laravel, Laravel Blade, Redis, mySql, NGINX, GitLab, Design Patterns)'
    }
];
const experiences = [
    {
        company : 'RoboCoin (Freelance)',
        conpany_title : ' Crypto Trading Bot',
        title : 'Technical Team Lead — Tehran',
        date: {
            start_date : 'Jul 2022',
            end_date : 'Present'
        },
        short_description : 'RoboCoin is a crypto trading bot based on Machine Learning techniques. Developed using the RL (Reinforcement Learning) method to trade in the spot and futures market in Binance exchange.',
        actions : [
        ]
    },
    {
        company : 'Xarb',
        conpany_title : 'Tezos NFT Marketplace',
        title : 'CTO— Tehran',
        date: {
            start_date : 'Aug 2021',
            end_date : 'Jul 2022'
        },
        short_description : 'Xarb.io is an NFT marketplace on Tezos blockchain to provide the opportunity to create (Mint), buy, and sell unique, multi-edition authentic digital artworks on our platform. ',
        actions : [
        ]
    },
    {
        company : 'SnappDoctor',
        conpany_title : 'Online Medical and Psychology Consulting Platform',
        title : 'Technical Team Lead — Tehran',
        date: {
            start_date : 'Jun 2020',
            end_date : 'Sep 2021'
        },
        short_description : 'SnappDoctor is an online medical and psychology  platform providing a wide range of doctors from educated and experienced people.',
        actions : [
            "Planning to scale horizontally and vertically",
            "Migrating from Monolithic to Microservices",
            "Designing Microservices architecture",
            "Configuring VMs and Dockerizing Services",
            "Implementing Kong Api Gateway",
            "Using Apache Kafka for communication between services",
            "Clustering services using Docker Swarm",
            "Start developing Open Source packages and inject open source culture in team",
            "Managing Front-End and Back-End Team tasks and code review",
            "Leading Front-End and Back-End Team",
            "Negotiating with Operation, Doctors and other teams",
            "Working with other Snapp Ventures",
            "Managing Scrum meetings and tasks in JIRA"
        ]
    },
    {
        company : 'SnappMarket',
        conpany_title : 'Online Grocery Platform',
        title : 'Senior BackEnd Developer — Tehran',
        date: {
            start_date : 'Oct 2019',
            end_date : ' Jun 2020'
        },
        short_description : 'SnappMarket is an online grocery platform providing a wide range of assortment from fresh fruits and vegetables to beauty and wellness products. We are aimed at increasing the purchase power of customers by providing exceptional pricing and offerings while introducing a simpler and easier way to shop.',
        actions : [
            "Working on micro-services specially on Notification service",
            "Optimizing codes to have performant service with high load.",
            "Dockerizing Stacks to make development/deployment easier and faster",
            "Microservice Design Architect",
            "Developing Notifier Service (SMS, Push Notification, Email) with very high load",
            "Working with Queue Handlers with multi-queue and multi-priority jobs",
            "Continuous Integration and Deployment on Gitlab CI for multiple tires (testing, staging and production)",
            "Developing Authorization Service with high load request",
            "Graylog, Sentry, Varnish, ElasticSearch, Swagger integration"
        ]
    },
    {
        company : 'QPage',
        conpany_title : 'A Quick version of future',
        title : 'Technical Team Lead — Tehran',
        date: {
            start_date : 'July 2019',
            end_date : ' Oct 2019'
        },
        short_description : 'QPage aims to be the smartest way to start with from HR process management and initially with Selection process automations.',
        actions : [
            "Partner with peer technologists to share learnings and provide hands-on assistance",
            "Sharing knowledge of tools and techniques with the wider team, both developers and non-developers",
            "Lead code development in each story",
            "Develop high-quality code, establishing development standards and practice by example",
            "Coding, Dockerizing, Unit testing, continuous integration and deployment of developed software",
        ]
    },
    {
        company : 'TiNexT',
        conpany_title : 'Smart Same Day courier service and Logistics',
        title : 'Technical Team Lead — Tehran',
        date: {
            start_date : 'Jun 2018',
            end_date : ' Jul 2019'
        },
        short_description : 'QPage aims to be the smartest way to start with from HR process management and initially with Selection process automations.',
        actions : [
            "Coordinating, attending and taking notes at team meetings to ensure follow up on action items",
            "Build strong relationships of trust with key stakeholders to ensure that framework and operating principles are adopted and followed, working with stakeholders to maintain the link to local strategies",
            "Participating in an agile scrum team to provide estimates, design/grooming, planning, and continuous improvement initiatives",
            "Designing and developing full-stack applications across multiple platforms using modern industry-adopted languages and frameworks",
            "Collaborating and co-developing with Application UI/UX Designer",
            "Participate in code reviews and developer testing to ensure quality",
        ]
    },
    {
        company : 'SnappBox',
        conpany_title : 'smart on-demand logistics',
        title : 'Product Development Engineer - Tehran',
        date: {
            start_date : 'Feb 2018',
            end_date : ' Jul 2018'
        },
        short_description : '',
        actions : [
            "Collaborate with the Automation and Test team on identifying test cases for new features and regression testing",
            "Build custom JavaScript MVC apps using  Angular",
            "Participate in code reviews and ensures that all solutions are aligned to predefined design specifications",
            "Develop user interface of application in an agile environment"
        ]
    },
    {
        company : 'Teleyare Co.',
        conpany_title : 'online psychology counseling',
        title : 'BackEnd Developer - Tehran',
        date: {
            start_date : 'Feb 2017',
            end_date : ' Jan 2018'
        },
        short_description : '',
        actions : [
            "Developing back-end side using Laravel framework and back-office",
            "Developing Android/iOS applications using React Native"
        ]
    },
    {
        company : 'Kar118 Co.',
        conpany_title : 'Job seeking online platform',
        title : 'BackEnd Developer - Tehran',
        date: {
            start_date : 'Apr 2016',
            end_date : ' Feb 2017'
        },
        short_description : '',
        actions : [
            "Developing back-end side using Laravel framework and back-office",
            "Developing Kar118 multilingual Android Application"
        ]
    }
];
export {
    experiences,
    detail_items,
    certificates,
    educations,
    projects
};