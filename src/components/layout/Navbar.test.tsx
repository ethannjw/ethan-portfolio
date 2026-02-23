import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/test/utils'
import userEvent from '@testing-library/user-event'
import { portfolioConfig } from '@/config/portfolio.config'

vi.mock('framer-motion', () => ({
    motion: new Proxy(
        {},
        {
            get:
                (_, tag) =>
                ({
                    children,
                    ...props
                }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) =>
                    React.createElement(String(tag), props, children),
        }
    ),
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useAnimation: () => ({ start: vi.fn() }),
    useInView: () => true,
}))

vi.mock('react-scroll', () => ({
    Link: ({
        children,
        ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        children?: React.ReactNode
    }) => <a {...props}>{children}</a>,
    animateScroll: { scrollToTop: vi.fn() },
    scroller: { scrollTo: vi.fn() },
}))

import Navbar from './Navbar'

describe('Navbar', () => {
    it('renders the name monogram', () => {
        render(<Navbar />)
        const initials = portfolioConfig.personal.name
            .split(' ')
            .map((n) => n[0])
            .join('')
        expect(screen.getByText(initials)).toBeInTheDocument()
    })

    it('renders all nav links', () => {
        render(<Navbar />)
        expect(screen.getByText('About')).toBeInTheDocument()
        expect(screen.getByText('Tech Stack')).toBeInTheDocument()
        expect(screen.getByText('Experience')).toBeInTheDocument()
        expect(screen.getByText('Projects')).toBeInTheDocument()
        expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('mobile menu is hidden by default', () => {
        render(<Navbar />)
        expect(screen.queryByText('Download Resume')).not.toBeInTheDocument()
    })

    it('mobile menu opens when hamburger is clicked', async () => {
        const user = userEvent.setup()
        render(<Navbar />)
        const button = screen.getByLabelText('Open menu')
        await user.click(button)
        expect(screen.getByText('Download Resume')).toBeInTheDocument()
    })

    it('mobile menu closes when X is clicked', async () => {
        const user = userEvent.setup()
        render(<Navbar />)
        const openBtn = screen.getByLabelText('Open menu')
        await user.click(openBtn)
        const closeBtn = screen.getByLabelText('Close menu')
        await user.click(closeBtn)
        expect(screen.queryByText('Download Resume')).not.toBeInTheDocument()
    })
})
