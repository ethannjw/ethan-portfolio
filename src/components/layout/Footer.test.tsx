import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';

vi.mock('framer-motion', () => ({
    motion: new Proxy(
        {},
        {
            get: (_, tag) =>
                ({
                    children,
                    ...props
                }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) =>
                    React.createElement(String(tag), props, children),
        }
    ),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

import Footer from './Footer';

describe('Footer', () => {
    it('renders the owner name from config', () => {
        render(<Footer />);
        expect(screen.getByText(/Gerard Robinson/)).toBeInTheDocument();
    });

    it('renders the current year dynamically', () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear().toString();
        expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    });

    it('renders GitHub and LinkedIn links', () => {
        render(<Footer />);
        expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
        expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    });
});
