import { Github, Linkedin } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio.config'

export default function Footer() {
    const { personal } = portfolioConfig
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-tertiary py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-sm">
                        © {currentYear} {personal.name} · Built with React &amp; Tailwind
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href={personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
