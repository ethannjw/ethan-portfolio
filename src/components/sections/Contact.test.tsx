import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@/test/utils';
import userEvent from '@testing-library/user-event';
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

import Contact from './Contact';

describe('Contact', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('renders heading from config', () => {
        render(<Contact />);
        expect(screen.getByText("Let's Work Together")).toBeInTheDocument();
    });

    it('renders email, GitHub, LinkedIn links with correct hrefs', () => {
        render(<Contact />);
        const emailLink = screen.getByRole('link', { name: 'Email' });
        expect(emailLink).toHaveAttribute('href', `mailto:${portfolioConfig.personal.email}`);

        const githubLink = screen.getByRole('link', { name: 'GitHub' });
        expect(githubLink).toHaveAttribute(
            'href',
            portfolioConfig.personal.github
        );

        const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });
        expect(linkedinLink).toHaveAttribute(
            'href',
            portfolioConfig.personal.linkedin
        );
    });

    it('renders name, email, message fields', () => {
        render(<Contact />);
        expect(screen.getByRole('textbox', { name: 'Name' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Message' })).toBeInTheDocument();
    });

    it('shows validation errors when submitting empty form', async () => {
        const user = userEvent.setup();
        render(<Contact />);
        const submitBtn = screen.getByRole('button', { name: /send message/i });
        await user.click(submitBtn);
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });

    it('shows success message after successful submission', async () => {
        const user = userEvent.setup();
        vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
            ok: true,
        } as any);

        render(<Contact />);

        fireEvent.change(screen.getByRole('textbox', { name: 'Name' }), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByRole('textbox', { name: 'Email' }), { target: { value: 'john@example.com' } });
        fireEvent.change(screen.getByRole('textbox', { name: 'Message' }), { target: { value: 'Hello there' } });

        await user.click(screen.getByRole('button', { name: /send message/i }));

        await waitFor(() => {
            expect(
                screen.getByText(/Message sent successfully!/i)
            ).toBeInTheDocument();
        });
    });
});
