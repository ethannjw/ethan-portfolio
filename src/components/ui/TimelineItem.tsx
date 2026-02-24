import { motion } from 'framer-motion'
import type { Experience } from '@/types'

interface TimelineItemProps {
    experience: Experience
}

export default function TimelineItem({ experience }: TimelineItemProps) {
    return (
        <motion.div
            className="relative pl-8 pb-10 last:pb-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
        >
            {/* Timeline dot */}
            <div
                className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 ${experience.current
                        ? 'bg-accent border-accent shadow-lg shadow-accent/50'
                        : 'bg-secondary border-tertiary'
                    }`}
            />

            {/* Content */}
            <div className="bg-secondary rounded-xl border border-tertiary p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-text-primary">{experience.role}</h3>
                    {experience.current && (
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/30">
                            Current
                        </span>
                    )}
                </div>
                <p className="text-accent font-medium text-sm mb-1">
                    {experience.company} · {experience.location}
                </p>
                <p className="text-text-muted text-sm mb-4">{experience.period}</p>
                <ul className="space-y-2">
                    {experience.bullets.map((bullet, index) => (
                        <li key={index} className="text-text-muted text-sm flex items-start gap-2">
                            <span className="text-accent mt-1.5 text-xs">▹</span>
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}
