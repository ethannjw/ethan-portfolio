import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import { portfolioConfig } from '@/config/portfolio.config';

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

import About from './About';

describe('About', () => {
    it('renders all bio paragraphs from config', () => {
        render(<About />);
        portfolioConfig.about.bio.forEach((paragraph) => {
            expect(screen.getByText(paragraph)).toBeInTheDocument();
        });
    });

    it('renders all stats with correct values and labels', () => {
        render(<About />);
        portfolioConfig.about.stats.forEach((stat) => {
            expect(screen.getByText(stat.value)).toBeInTheDocument();
            expect(screen.getByText(stat.label)).toBeInTheDocument();
        });
    });
});
