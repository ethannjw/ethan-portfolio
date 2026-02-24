import { motion } from 'framer-motion'

interface SectionHeadingProps {
    label: string
    heading: string
}

export default function SectionHeading({ label, heading }: SectionHeadingProps) {
    return (
        <motion.div
            className="border-l-4 border-accent pl-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span className="font-mono text-sm text-accent mb-1 block">{label}</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
                {heading}
            </h2>
        </motion.div>
    )
}
