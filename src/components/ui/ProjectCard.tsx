import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import type { Project } from '@/types'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            className="bg-secondary rounded-xl border border-tertiary p-6 flex flex-col h-full card-glow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary border border-tertiary text-accent"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex items-center gap-3">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                    >
                        <Github size={20} />
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors"
                        aria-label={`${project.title} live site`}
                    >
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>
        </motion.div>
    )
}
