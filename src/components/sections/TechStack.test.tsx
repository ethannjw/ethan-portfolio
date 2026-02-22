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

import TechStack from './TechStack';

describe('TechStack', () => {
    it('renders all skill category names', () => {
        render(<TechStack />);
        portfolioConfig.skills.forEach((category) => {
            expect(screen.getByText(category.category)).toBeInTheDocument();
        });
    });

    it('renders correct number of skill badges per category', () => {
        render(<TechStack />);
        portfolioConfig.skills.forEach((category) => {
            category.items.forEach((skill) => {
                expect(screen.getByText(skill.name)).toBeInTheDocument();
            });
        });
    });
});
