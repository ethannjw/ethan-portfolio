import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@/test/utils';
import userEvent from '@testing-library/user-event';

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
        const emailLink = screen.getByLabelText('Email');
        expect(emailLink).toHaveAttribute('href', 'mailto:your@email.com');

        const githubLink = screen.getByLabelText('GitHub');
        expect(githubLink).toHaveAttribute(
            'href',
            'https://github.com/yourusername'
        );

        const linkedinLink = screen.getByLabelText('LinkedIn');
        expect(linkedinLink).toHaveAttribute(
            'href',
            'https://linkedin.com/in/yourusername'
        );
    });

    it('renders name, email, message fields', () => {
        render(<Contact />);
        expect(screen.getByLabelText('Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Message')).toBeInTheDocument();
    });

    it('shows validation errors when submitting empty form', async () => {
        const user = userEvent.setup();
        render(<Contact />);
        const submitBtn = screen.getByText('Send Message');
        await user.click(submitBtn);
        expect(screen.getByText('Name is required')).toBeInTheDocument();
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(screen.getByText('Message is required')).toBeInTheDocument();
    });

    it('shows success message after successful submission', async () => {
        const user = userEvent.setup();
        vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
            new Response(null, { status: 200 })
        );

        render(<Contact />);

        await user.type(screen.getByLabelText('Name'), 'John Doe');
        await user.type(screen.getByLabelText('Email'), 'john@example.com');
        await user.type(screen.getByLabelText('Message'), 'Hello there');
        await user.click(screen.getByText('Send Message'));

        await waitFor(() => {
            expect(
                screen.getByText('Message sent successfully!')
            ).toBeInTheDocument();
        });
    });
});
