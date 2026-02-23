import type { PortfolioConfig } from '@/types';

export const portfolioConfig: PortfolioConfig = {
    personal: {
        name: 'Ethan Ng',
        title: 'Senior Software Engineer',
        location: 'Singapore',
        email: 'ethannjw@gmail.com',
        github: 'https://github.com/ethannjw',
        linkedin: 'https://www.linkedin.com/in/ethan-ng-09682447/',
        resumeUrl: '/2026_NgJingWei_CV_online.pdf',
        avatarUrl: '/avatar.jpg',
    },

    seo: {
        siteTitle: 'Ethan Ng | Senior Software Engineer',
        description:
            'Senior Software Engineer based in Singapore specialising in cloud infrastructure, automation, and full-stack development.',
        siteUrl: 'https://ngjingwei.com',
        ogImage: '/og-image.png',
    },

    hero: {
        greeting: "Hi, I'm",
        taglines: [
            'Cloud Infrastructure',
            'Full-Stack Development',
            'DevOps & Automation',
        ],
        ctaPrimary: { label: 'View My Work', to: 'projects' },
        ctaSecondary: { label: 'Get In Touch', to: 'contact' },
    },

    about: {
        bio: [
            "I'm a Senior Software Engineer based in Singapore with a Computer Science degree and extensive experience across cloud infrastructure, AI/ML systems, and full-stack development.",
            'I specialise in building scalable distributed systems on AWS, self-hosting with Proxmox and Docker, and integrating image generation models into production workflows. I care deeply about clean architecture, automated testing, and systems that are observable and maintainable.',
            'Currently at Autodesk. Open to challenging roles in cloud-native engineering, ML infrastructure, and platform engineering.',
        ],
        stats: [
            { label: 'Years Experience', value: '5+' },
            { label: 'Based In', value: 'Singapore' },
            { label: 'AWS Solutions Architect Associate Certified', value: 'True' },
            { label: 'Generative AI with Large Language Models', value: 'Completed' },
            { label: 'Fundamentals of MCP Certified', value: 'True' },
        ],
    },

    skills: [
        {
            category: 'Languages',
            items: [
                { name: 'Go', iconName: 'SiGo' },
                { name: 'Python', iconName: 'SiPython' },
                { name: 'JavaScript', iconName: 'SiJavascript' },
                { name: 'Bash', iconName: 'SiGnubash' },
            ],
        },
        {
            category: 'Cloud & Infrastructure',
            items: [
                { name: 'AWS', iconName: 'SiAmazonwebservices' },
                { name: 'Proxmox', iconName: 'SiProxmox' },
                { name: 'Linux', iconName: 'SiLinux' },
            ],
        },
        {
            category: 'DevOps & Containers',
            items: [
                { name: 'Docker', iconName: 'SiDocker' },
                { name: 'GitHub Actions', iconName: 'SiGithubactions' },
            ],
        },
        {
            category: 'AI / ML',
            items: [
                { name: 'Ollama', iconName: 'SiMeta' },
                { name: 'LangChain', iconName: 'SiLangchain' },
                { name: 'Hugging Face', iconName: 'SiHuggingface' },
                { name: 'OpenAI API', iconName: 'SiOpenai' },
            ],
        },
        {
            category: 'Databases',
            items: [
                { name: 'PostgreSQL', iconName: 'SiPostgresql' },
                { name: 'DynamoDB', iconName: 'SiAmazondynamodb' },
                { name: 'Snowflake', iconName: 'SiSnowflake' },
            ],
        },
        {
            category: 'Tools & Platforms',
            items: [
                { name: 'Home Assistant', iconName: 'SiHomeassistant' },
                { name: 'Terraform', iconName: 'SiTerraform' },
                { name: 'VSCode', iconName: 'SiVisualstudiocode' },
            ],
        },
    ],

    experience: [
        {
            id: 'exp-1',
            role: 'Senior Software Engineer',
            company: 'Autodesk Inc.',
            location: 'Singapore',
            period: '2025 – Present',
            current: true,
            bullets: [

                'Architected high-throughput API systems supporting 12,000+ transfers per minute, driving scalability and reliability for mission-critical operations.',
                'Led cloud infrastructure migrations on AWS, improving deployment reliability',
                'Led cross-functional teams and external vendors through the full software development lifecycle, overseeing solution design, project management, and successful integration.',
                'Presented technical solutions and innovations at company-wide conferences with 10,000+ attendees, establishing thought leadership in scalable, intelligent systems.',
                'Collaborated with sister teams to deliver high-priority, time-sensitive projects, ensuring cross-team alignment and successful execution.'
            ],
        },
        {
            id: 'exp-2',
            role: 'Software Engineer',
            company: 'Autodesk Inc.',
            location: 'Singapore',
            period: '2022 – 2025',
            current: false,
            bullets: [
                'Designed and implemented event-driven, asynchronous data management and notification systems on AWS (SQS, SNS, Lambda, ECS) for real-time, minute-based usage tracking and analytics.',
                'Developed and optimized high-performance, low-latency backend services leveraging Amazon SQS, ECS, Lambda, and Redis, supporting analytics and AI/ML workflows.',
                'Integrated observability and monitoring solutions using Splunk, OpenTelemetry, Dynatrace, AWS Metrics, and Grafana to ensure system health and rapid incident response.',
                'Engineered and deployed containerized applications on Amazon ECS and EKS, establishing robust CI/CD pipelines and automated testing strategies to ensure high availability and rapid deployment cycles.',
                'Supported production systems on-call, resolving L1–L3 incidents and ensuring high availability and reliability.'
            ],
        },
        {
            id: 'exp-3',
            role: 'Software Development Engineer',
            company: 'Zionext Pte Ltd',
            location: 'Singapore',
            period: '2020 – 2022',
            current: false,
            bullets: [
                'Designed scalable microservice architectures by analyzing user requirements, enabling flexible and maintainable software solutions',
                'Developed cross-platform mobile applications using React Native for learning and content management, enhancing user engagement and accessibility.',
                'Built and customized Content Management Systems (CMS) to address unique customer requirements, improving content delivery and user experience.',
                'Engineered backend services in Node.js, integrating multiple microservices via GraphQL APIs for efficient data retrieval and system interoperability.',
                'Created responsive React web applications for Business Process Management, adhering to OpenAPI specifications for seamless API integration.',
                'Mentored and coached junior developers, fostering knowledge sharing and supporting team growth.'
            ],
        },
    ],

    projects: [
        {
            id: 'proj-2',
            featured: true,
            title: 'Smart Home Automation Hub',
            description:
                'Home Assistant setup with custom automations, MQTT integrations, and Grafana energy monitoring dashboards with alerting.',
            tags: ['Home Assistant', 'Python', 'MQTT', 'Grafana'],
            githubUrl: 'https://github.com/yourusername/home-automation',
        },
        {
            id: 'proj-4',
            featured: false,
            title: 'AI Image Processing Pipeline',
            description:
                'Batch image processing pipeline with face detection and tagging using open-source CV models, deployed on S3-triggered Lambda.',
            tags: ['Python', 'OpenCV', 'Docker', 'AWS S3'],
            githubUrl: 'https://github.com/yourusername/ai-image-pipeline',
        },
        {
            id: 'proj-5',
            featured: false,
            title: 'Portfolio Website',
            description:
                'This site. Built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. Fully config-driven with unit tests.',
            tags: ['React', 'Vite', 'TypeScript', 'Tailwind'],
            githubUrl: 'https://github.com/ethannjw/ethan-portfolio',
            liveUrl: 'https://yourdomain.com',
        },
    ],

    contact: {
        heading: "Let's Work Together",
        subtext:
            'Open to full-time roles, contract work, and interesting collaborations. Based in Singapore — happy to work hybrid or remotely.',
        formspreeEndpoint: 'https://formspree.io/f/xaqdpzky',
    },
};
