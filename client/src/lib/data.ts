import {TechnicalSkill, ExpertiseArea, WorkExperience, Project} from './types';

export const technicalSkills: TechnicalSkill[] = [
    {
        name: 'Kotlin / Java / Spring Boot',
        level: 9,
        description: 'Proficient in developing robust springboot powered backend services using modern Java and Kotlin, with a strong grasp of OOP, concurrency, and performance optimization.'
    },
    {
        name: 'API Design (RESTful & gRPC)',
        level: 9,
        description: 'Hands-on experience designing and implementing robust RESTful and gRPC APIs to power modern web applications. Focused on clean interfaces, consistent data contracts, authentication, and scalable CRUD operations across services.'
    },
    {
        name: 'Apache Kafka',
        level: 8,
        description: 'Solid understanding of distributed streaming platforms, with experience designing event-driven architectures and implementing producers, consumers, and stream processors.'
    },
    {
        name: 'SQL / NoSQL',
        level: 7,
        description: 'Skilled in relational and non-relational database systems, including schema design, query optimization, and working with technologies like PostgreSQL, MySQL, and MongoDB, Redis and Elastic search'
    },
    {
        name: 'Docker / Kubernetes',
        level: 7,
        description: 'Capable of containerizing applications and deploying them at scale using Docker and Kubernetes. Familiar with Helm, service discovery, and orchestration best practices.'
    }
];

export const expertiseAreas: ExpertiseArea[] = [
    {
        title: 'System Design & Distributed Systems',
        description: 'Designing scalable, fault-tolerant systems using industry best practices in distributed computing, service decomposition, and asynchronous communication.',
        icon: 'fa-code'
    },
    {
        title: 'Backend Development',
        description: 'Expertise in building high-performance backend services, APIs, and middleware with focus on modular design, testability, and observability.',
        icon: 'fa-server'
    },
    {
        title: 'Big Data Processing & Streaming',
        description: 'Proficient in working with large-scale data pipelines using Kafka and batch/stream processing frameworks to enable real-time data flow and analytics as well as designing efficient schema, optimizing queries, and implementing data persistence strategies.',
        icon: 'fa-database'
    },
    {
        title: 'Cloud Architecture & Services',
        description: 'Hands-on experience deploying, monitoring, and maintaining cloud-native applications across AWS and Azure with emphasis on scalability, security, and cost optimization.',
        icon: 'fa-cloud'
    }
];

export const workExperience: WorkExperience[] = [
    {
        title: 'Software Engineer III',
        company: 'ExpediaGroup',
        period: 'March 2025 - Present',
        description: 'Work on semantics engineering and taxonomy. Working with low latency and high volumes services, both in terms of data and traffic.',
        skills: ['Kotlin', 'AWS', 'Springboot', 'GraphQL/Grpc', 'Apache Kafka'],
        icon: 'fa-plane'
    },
    {
        title: 'Software Engineer II',
        company: 'Zepz',
        period: 'July 2024 - March 2025',
        description: 'Developed international money transfer solutions. Responsible of high throughput, fault-tolerant ledger system and treasury related applications.',
        skills: ['Java', 'Grpc', 'Springboot', 'Financial Systems', 'Ledger', 'PostgreSQL', 'AWS'],
        icon: 'fa-dollar-sign'
    },
    {
        title: 'Full-stack Software Engineer II',
        company: 'Aptum/CloudOps',
        period: 'Otcober 2020 - March 2024',
        description: 'Created cloud infrastructure management tools and monitoring systems. Improved reliability and performance of services.',
        skills: ['Vue.js', 'Java', 'Mysql', 'GCP', 'Azure', 'AWS', 'Elastic Search', 'Apache Kafka'],
        icon: 'fa-cloud'
    },
    {
        title: 'Full-stack Software Engineer (internship)',
        company: 'SAP',
        period: 'May 2019 - August 2019 / May 2020 - August 2020',
        description: 'Integrated SAP systems with custom applications and third-party services. Played a lot of pingpong and learned Odata services and an in-house UI framework based on ZK.',
        skills: ['Java', 'ZKFramework', 'SAP Commerce', 'Odata', 'Groovy', 'Spock'],
        icon: 'fa-database'
    },
    {
        title: 'Software Developer (internship)',
        company: 'YellowPages',
        period: '2018 - 2019',
        description: 'Worked on data syndication of merchants and automated testing using TestRail and MochaJS. I learned all the basics of web development and software engineering life cycle',
        skills: ['HTML/CSS', 'MochaJS', 'TestRail', 'Java', 'Springboot', 'MongoDB', 'AngularJS'],
        icon: 'fa-store'
    }
];
