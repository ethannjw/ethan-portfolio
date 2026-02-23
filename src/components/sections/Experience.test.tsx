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

import Experience from './Experience'

describe('Experience', () => {
    it('renders all experience entries', () => {
        render(<Experience />)
        expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(
            portfolioConfig.experience.length
        )
    })

    it('renders correct role and company for each entry', () => {
        render(<Experience />)
        portfolioConfig.experience.forEach((exp) => {
            expect(screen.getByText(exp.role)).toBeInTheDocument()
            expect(screen.getAllByText(exp.company, { exact: false })[0]).toBeInTheDocument()
        })
    })
})
