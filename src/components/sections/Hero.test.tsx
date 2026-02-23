import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/test/utils'
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

vi.mock('@/hooks/useTypewriter', () => ({
    useTypewriter: () => ({ displayText: 'Cloud Infrastructure' }),
}))

import Hero from './Hero'

describe('Hero', () => {
    it('renders the greeting', () => {
        render(<Hero />)
        expect(screen.getByText("Hi, I'm")).toBeInTheDocument()
    })

    it('renders the full name from config', () => {
        render(<Hero />)
        expect(screen.getByText(portfolioConfig.personal.name)).toBeInTheDocument()
    })

    it('renders primary CTA button', () => {
        render(<Hero />)
        expect(screen.getByText('View My Work')).toBeInTheDocument()
    })

    it('renders secondary CTA button', () => {
        render(<Hero />)
        expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    })
})
