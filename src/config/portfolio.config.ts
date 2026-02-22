import type { PortfolioConfig } from '@/types';

export const portfolioConfig: PortfolioConfig = {
    personal: {
        name: 'Gerard Robinson',
        title: 'Senior Software Engineer',
        location: 'Singapore',
        email: 'your@email.com',
        github: 'https://github.com/yourusername',
        linkedin: 'https://linkedin.com/in/yourusername',
        resumeUrl: '/resume.pdf',
        avatarUrl: '/avatar.jpg',
    },

    seo: {
        siteTitle: 'Gerard Robinson | Senior Software Engineer',
        description:
            'Senior Software Engineer based in Singapore specialising in cloud infrastructure, AI/ML systems, and full-stack development.',
        siteUrl: 'https://yourdomain.com',
        ogImage: '/og-image.png',
    },

    hero: {
        greeting: "Hi, I'm",
        taglines: [
            'Cloud Infrastructure',
            'AI/ML Systems',
            'Full-Stack Development',
            'DevOps & Automation',
        ],
        ctaPrimary: { label: 'View My Work', to: 'projects' },
        ctaSecondary: { label: 'Get In Touch', to: 'contact' },
    },

    about: {
        bio: [
            "I'm a Senior Software Engineer based in Singapore with a Computer Science degree and extensive experience across cloud infrastructure, AI/ML systems, and full-stack development.",
            'I specialise in building scalable distributed systems on AWS, self-hosting with Proxmox and Docker, and integrating large language models into production workflows. I care deeply about clean architecture, automated testing, and systems that are observable and maintainable.',
            'Currently at Sanderson Ikas. Open to challenging roles in cloud-native engineering, ML infrastructure, and platform engineering.',
        ],
        stats: [
            { label: 'Years Experience', value: '5+' },
            { label: 'Based In', value: 'Singapore' },
            { label: 'AWS Certified', value: 'In Progress' },
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
                { name: 'Kubernetes', iconName: 'SiKubernetes' },
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
            company: 'Sanderson Ikas',
            location: 'Singapore',
            period: '2024 – Present',
            current: true,
            bullets: [
                'Led cloud infrastructure migrations on AWS, improving deployment reliability',
                'Built event-driven microservices reducing manual workflow overhead',
                'Integrated LLM-based automation pipelines into production systems',
            ],
        },
        {
            id: 'exp-2',
            role: 'Software Engineer',
            company: '[Previous Company]',
            location: 'Singapore',
            period: '20XX – 20XX',
            current: false,
            bullets: [
                'Built REST APIs in Go and Python serving high-throughput production traffic',
                'Owned CI/CD pipelines using GitHub Actions and Docker',
                'Contributed to system architecture and database schema design',
            ],
        },
        {
            id: 'exp-3',
            role: 'Junior Software Engineer',
            company: '[First Company]',
            location: 'Singapore',
            period: '20XX – 20XX',
            current: false,
            bullets: [
                'Developed full-stack features using React and Node.js',
                'Contributed to PostgreSQL schema design and query optimisation',
                'Collaborated in agile teams using Git and code review workflows',
            ],
        },
    ],

    projects: [
        {
            id: 'proj-1',
            featured: true,
            title: 'LLM Inference Server',
            description:
                'Self-hosted LLM deployment using Ollama with OpenAI-compatible API endpoints. Supports Qwen and Llama models with GPU passthrough on Proxmox.',
            tags: ['Go', 'Ollama', 'Docker', 'Proxmox'],
            githubUrl: 'https://github.com/yourusername/llm-inference-server',
        },
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
            id: 'proj-3',
            featured: true,
            title: 'Cloud Cost Dashboard',
            description:
                'AWS cost and usage analytics tool pulling from Cost Explorer API with anomaly detection alerts via SNS.',
            tags: ['Python', 'AWS', 'DynamoDB', 'React'],
            githubUrl: 'https://github.com/yourusername/cloud-cost-dashboard',
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
            githubUrl: 'https://github.com/yourusername/portfolio',
            liveUrl: 'https://yourdomain.com',
        },
    ],

    contact: {
        heading: "Let's Work Together",
        subtext:
            'Open to full-time roles, contract work, and interesting collaborations. Based in Singapore — happy to work hybrid or remotely.',
        formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    },
};
