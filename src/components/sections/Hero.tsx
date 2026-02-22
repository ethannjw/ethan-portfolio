import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function Hero() {
    const { personal, hero } = portfolioConfig;
    const { displayText } = useTypewriter({ texts: hero.taglines });

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated grid background */}
            <div className="absolute inset-0 hero-grid-bg" />

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {/* Greeting */}
                    <p className="text-text-muted text-lg md:text-xl mb-2">
                        {hero.greeting}
                    </p>

                    {/* Name */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-text-primary mb-3 gradient-underline">
                        {personal.name}
                    </h1>

                    {/* Title + Location */}
                    <p className="text-text-muted text-base md:text-lg mb-6">
                        {personal.title} · {personal.location}
                    </p>

                    {/* Typewriter */}
                    <p className="text-lg md:text-xl text-text-muted mb-10 h-8">
                        I specialise in{' '}
                        <span className="text-accent font-medium typewriter-cursor">
                            {displayText}
                        </span>
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to={hero.ctaPrimary.to}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="px-8 py-3 rounded-lg bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors cursor-pointer"
                        >
                            {hero.ctaPrimary.label}
                        </Link>
                        <Link
                            to={hero.ctaSecondary.to}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="px-8 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors cursor-pointer"
                        >
                            {hero.ctaSecondary.label}
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll down indicator */}
            <Link
                to="about"
                smooth={true}
                offset={-80}
                duration={500}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20"
            >
                <ChevronDown className="text-text-muted bounce-slow" size={28} />
            </Link>
        </section>
    );
}
