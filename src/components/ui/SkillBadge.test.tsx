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

import SkillBadge from './SkillBadge'

describe('SkillBadge', () => {
    it('renders skill name', () => {
        render(<SkillBadge name="Docker" iconName="SiDocker" />)
        expect(screen.getByText('Docker')).toBeInTheDocument()
    })

    it('renders icon', () => {
        render(<SkillBadge name="Docker" iconName="SiDocker" />)
        expect(screen.getByLabelText('Docker icon')).toBeInTheDocument()
    })
})
