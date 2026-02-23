import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/test/utils'

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

import SectionHeading from './SectionHeading'

describe('SectionHeading', () => {
    it('renders the heading text', () => {
        render(<SectionHeading label="// 01" heading="About Me" />)
        expect(screen.getByText('About Me')).toBeInTheDocument()
    })

    it('renders the section label', () => {
        render(<SectionHeading label="// 01" heading="About Me" />)
        expect(screen.getByText('// 01')).toBeInTheDocument()
    })

    it('applies accent border class', () => {
        render(<SectionHeading label="// 01" heading="About Me" />)
        const container = screen.getByText('// 01').closest('div')
        expect(container).toHaveClass('border-l-4')
    })
})
