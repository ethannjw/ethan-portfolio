import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio.config'
import SectionHeading from '@/components/ui/SectionHeading'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export default function About() {
    const { personal, about } = portfolioConfig
    const currentRole = portfolioConfig.experience.find((e) => e.current)

    return (
        <section id="about" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading label="// 01" heading="About Me" />

                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Left: Avatar */}
                    <motion.div
                        className="flex flex-col items-center md:items-start"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            <img
                                src={personal.avatarUrl}
                                alt={personal.name}
                                className="w-64 h-64 rounded-2xl object-cover ring-2 ring-accent ring-offset-4 ring-offset-primary"
                            />
                            {currentRole && (
                                <div className="absolute -bottom-3 -right-3 bg-secondary border border-tertiary rounded-lg px-3 py-1.5 shadow-lg">
                                    <p className="text-xs font-mono text-accent">
                                        {currentRole.role}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Right: Bio + Stats */}
                    <motion.div variants={itemVariants}>
                        <div className="space-y-4 mb-8">
                            {about.bio.map((paragraph, index) => (
                                <p key={index} className="text-text-muted leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                            {about.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="bg-secondary rounded-xl border border-tertiary p-3 md:p-4 text-center flex flex-col justify-center min-h-[110px] md:min-h-[140px]"
                                >
                                    <p className="text-base sm:text-lg lg:text-2xl font-bold text-accent leading-tight mb-2 overflow-hidden text-ellipsis">
                                        {stat.value}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider font-semibold leading-tight">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
