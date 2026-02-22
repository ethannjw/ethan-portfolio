import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils';
import type { Experience } from '@/types';

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

import TimelineItem from './TimelineItem';

const currentExp: Experience = {
    id: 'exp-1',
    role: 'Senior Software Engineer',
    company: 'Acme Corp',
    location: 'Singapore',
    period: '2024 – Present',
    current: true,
    bullets: [
        'Led cloud infrastructure migrations',
        'Built event-driven microservices',
    ],
};

const pastExp: Experience = {
    id: 'exp-2',
    role: 'Software Engineer',
    company: 'Previous Corp',
    location: 'Singapore',
    period: '2021 – 2024',
    current: false,
    bullets: ['Built REST APIs', 'Owned CI/CD pipelines'],
};

describe('TimelineItem', () => {
    it('renders role and company', () => {
        render(<TimelineItem experience={currentExp} />);
        expect(
            screen.getByText('Senior Software Engineer')
        ).toBeInTheDocument();
        expect(screen.getByText(/Acme Corp/)).toBeInTheDocument();
    });

    it('renders period', () => {
        render(<TimelineItem experience={currentExp} />);
        expect(screen.getByText('2024 – Present')).toBeInTheDocument();
    });

    it('renders all bullet points', () => {
        render(<TimelineItem experience={currentExp} />);
        expect(
            screen.getByText('Led cloud infrastructure migrations')
        ).toBeInTheDocument();
        expect(
            screen.getByText('Built event-driven microservices')
        ).toBeInTheDocument();
    });

    it('shows "Current" badge when current=true', () => {
        render(<TimelineItem experience={currentExp} />);
        expect(screen.getByText('Current')).toBeInTheDocument();
    });

    it('hides "Current" badge when current=false', () => {
        render(<TimelineItem experience={pastExp} />);
        expect(screen.queryByText('Current')).not.toBeInTheDocument();
    });
});
