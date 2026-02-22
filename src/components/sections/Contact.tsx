import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';
import SectionHeading from '@/components/ui/SectionHeading';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function Contact() {
    const { personal, contact } = portfolioConfig;
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setFormStatus('submitting');
        try {
            const response = await fetch(contact.formspreeEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setFormStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFormStatus('error');
            }
        } catch {
            setFormStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading label="// 05" heading={contact.heading} />

                <motion.div
                    className="max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-text-muted text-center mb-8 leading-relaxed">
                        {contact.subtext}
                    </p>

                    {/* Social links */}
                    <div className="flex items-center justify-center gap-6 mb-10">
                        <a
                            href={`mailto:${personal.email}`}
                            className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                            <span className="text-sm">{personal.email}</span>
                        </a>
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

                    {/* Contact form */}
                    {formStatus === 'success' ? (
                        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                            <CheckCircle className="mx-auto text-green-400 mb-3" size={40} />
                            <p className="text-green-400 font-medium">Message sent successfully!</p>
                            <p className="text-text-muted text-sm mt-1">
                                I&apos;ll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-text-primary mb-1.5"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-secondary border border-tertiary rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Your name"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-text-primary mb-1.5"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-secondary border border-tertiary rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent transition-colors"
                                    placeholder="your@email.com"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-text-primary mb-1.5"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-secondary border border-tertiary rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="What would you like to discuss?"
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                                )}
                            </div>

                            {formStatus === 'error' && (
                                <div className="flex items-center gap-2 text-red-400 text-sm">
                                    <AlertCircle size={16} />
                                    <span>Something went wrong. Please try again.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {formStatus === 'submitting' ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
