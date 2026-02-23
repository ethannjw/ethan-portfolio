import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@/test/utils'
import type { Project } from '@/types'

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

import ProjectCard from './ProjectCard'

const mockProject: Project = {
    id: 'test-1',
    title: 'Test Project',
    description: 'A test project description',
    tags: ['React', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/test/project',
    featured: true,
}

const mockProjectWithLive: Project = {
    ...mockProject,
    liveUrl: 'https://test-project.com',
}

describe('ProjectCard', () => {
    it('renders project title', () => {
        render(<ProjectCard project={mockProject} />)
        expect(screen.getByText('Test Project')).toBeInTheDocument()
    })

    it('renders description', () => {
        render(<ProjectCard project={mockProject} />)
        expect(screen.getByText('A test project description')).toBeInTheDocument()
    })

    it('renders all tech tags', () => {
        render(<ProjectCard project={mockProject} />)
        expect(screen.getByText('React')).toBeInTheDocument()
        expect(screen.getByText('TypeScript')).toBeInTheDocument()
        expect(screen.getByText('Vite')).toBeInTheDocument()
    })

    it('renders GitHub link with correct href', () => {
        render(<ProjectCard project={mockProject} />)
        const link = screen.getByLabelText('Test Project GitHub repository')
        expect(link).toHaveAttribute('href', 'https://github.com/test/project')
    })

    it('renders live link when liveUrl is provided', () => {
        render(<ProjectCard project={mockProjectWithLive} />)
        const link = screen.getByLabelText('Test Project live site')
        expect(link).toHaveAttribute('href', 'https://test-project.com')
    })

    it('does NOT render live link when liveUrl is absent', () => {
        render(<ProjectCard project={mockProject} />)
        expect(screen.queryByLabelText('Test Project live site')).not.toBeInTheDocument()
    })
})
