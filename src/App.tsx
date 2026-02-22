import { portfolioConfig } from '@/config/portfolio.config';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function App() {
    const { seo } = portfolioConfig;

    return (
        <>
            <title>{seo.siteTitle}</title>
            <meta name="description" content={seo.description} />
            <meta property="og:title" content={seo.siteTitle} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.ogImage} />
            <meta property="og:url" content={seo.siteUrl} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.siteTitle} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.ogImage} />

            <div className="min-h-screen bg-primary">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <TechStack />
                    <Experience />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    );
}
