import { motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio.config'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
}

export default function Projects() {
    const { projects } = portfolioConfig
    const featured = projects.filter((p) => p.featured)
    const other = projects.filter((p) => !p.featured)

    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading label="// 04" heading="Projects" />

                {/* Featured Projects */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-text-primary mb-6">
                        Featured Projects
                    </h3>
                    <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                    >
                        {featured.map((project) => (
                            <motion.div key={project.id} variants={itemVariants}>
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Other Projects */}
                {other.length > 0 && (
                    <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-6">
                            Other Projects
                        </h3>
                        <motion.div
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            {other.map((project) => (
                                <motion.div key={project.id} variants={itemVariants}>
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    )
}
