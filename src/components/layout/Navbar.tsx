import { useState, useEffect } from 'react'
import { Link, animateScroll } from 'react-scroll'
import { Menu, X, Download } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { portfolioConfig } from '@/config/portfolio.config'

const navLinks = [
    { label: 'About', to: 'about' },
    { label: 'Tech Stack', to: 'techstack' },
    { label: 'Experience', to: 'experience' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleLogoClick = () => {
        animateScroll.scrollToTop({ duration: 500, smooth: true })
        setIsMobileOpen(false)
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-primary/80 backdrop-blur-md border-b border-tertiary'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo / Monogram */}
                    <button
                        onClick={handleLogoClick}
                        className="flex items-center justify-center w-10 h-10 border-2 border-accent rounded-lg text-accent font-bold text-sm hover:bg-accent/10 transition-colors"
                    >
                        {portfolioConfig.personal.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                activeClass="text-accent"
                                className="px-3 py-2 text-sm text-text-muted hover:text-accent transition-colors cursor-pointer"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href={portfolioConfig.personal.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-accent text-accent hover:bg-accent/10 transition-colors"
                        >
                            <Download size={14} />
                            Resume
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-text-muted hover:text-accent transition-colors"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-primary/95 backdrop-blur-md border-b border-tertiary overflow-hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    activeClass="text-accent"
                                    className="block px-3 py-2 text-sm text-text-muted hover:text-accent transition-colors cursor-pointer"
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a
                                href={portfolioConfig.personal.resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 text-sm text-accent"
                            >
                                <Download size={14} />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
