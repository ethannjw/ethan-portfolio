export interface PersonalInfo {
    name: string
    title: string
    location: string
    email: string
    github: string
    linkedin: string
    resumeUrl: string
    avatarUrl: string
}

export interface SeoConfig {
    siteTitle: string
    description: string
    siteUrl: string
    ogImage: string
}

export interface CtaButton {
    label: string
    to: string
}

export interface HeroConfig {
    greeting: string
    taglines: string[]
    ctaPrimary: CtaButton
    ctaSecondary: CtaButton
}

export interface Stat {
    label: string
    value: string
}

export interface AboutConfig {
    bio: string[]
    stats: Stat[]
}

export interface Skill {
    name: string
    iconName: string
}

export interface SkillCategory {
    category: string
    items: Skill[]
}

export interface Experience {
    id: string
    role: string
    company: string
    location: string
    period: string
    current: boolean
    bullets: string[]
}

export interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    githubUrl?: string
    liveUrl?: string
    featured: boolean
}

export interface ContactConfig {
    heading: string
    subtext: string
    formspreeEndpoint: string
}

export interface PortfolioConfig {
    personal: PersonalInfo
    seo: SeoConfig
    hero: HeroConfig
    about: AboutConfig
    skills: SkillCategory[]
    experience: Experience[]
    projects: Project[]
    contact: ContactConfig
}
