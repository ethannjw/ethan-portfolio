import { motion } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio.config';
import SectionHeading from '@/components/ui/SectionHeading';
import SkillBadge from '@/components/ui/SkillBadge';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
    const { skills } = portfolioConfig;

    return (
        <section id="techstack" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading label="// 02" heading="Tech Stack" />

                <div className="space-y-10">
                    {skills.map((category) => (
                        <motion.div
                            key={category.category}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            <h3 className="text-lg font-semibold text-text-primary mb-4">
                                {category.category}
                            </h3>
                            <motion.div
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                                variants={containerVariants}
                            >
                                {category.items.map((skill) => (
                                    <motion.div key={skill.name} variants={itemVariants}>
                                        <SkillBadge
                                            name={skill.name}
                                            iconName={skill.iconName}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
