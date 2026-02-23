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
}))

import Projects from './Projects'

describe('Projects', () => {
    it('renders featured projects section', () => {
        render(<Projects />)
        expect(screen.getByText('Featured Projects')).toBeInTheDocument()
    })

    it('renders other projects section', () => {
        render(<Projects />)
        expect(screen.getByText('Other Projects')).toBeInTheDocument()
    })

    it('renders correct number of project cards', () => {
        render(<Projects />)
        const featured = portfolioConfig.projects.filter((p) => p.featured)
        const other = portfolioConfig.projects.filter((p) => !p.featured)
        featured.forEach((p) => {
            expect(screen.getByText(p.title)).toBeInTheDocument()
        })
        other.forEach((p) => {
            expect(screen.getByText(p.title)).toBeInTheDocument()
        })
    })
})
