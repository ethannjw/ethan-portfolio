import { useState, useEffect, useCallback } from 'react'

interface UseTypewriterOptions {
    texts: string[]
    typeSpeed?: number
    deleteSpeed?: number
    pauseMs?: number
}

export function useTypewriter({
    texts,
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseMs = 2000,
}: UseTypewriterOptions): { displayText: string } {
    const [displayText, setDisplayText] = useState('')
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

    const currentText = texts[textIndex] || ''

    const tick = useCallback(() => {
        if (isPaused) return

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                setCharIndex((prev) => prev + 1)
                setDisplayText(currentText.slice(0, charIndex + 1))
            } else {
                setIsPaused(true)
                setTimeout(() => {
                    setIsPaused(false)
                    setIsDeleting(true)
                }, pauseMs)
            }
        } else {
            if (charIndex > 0) {
                setCharIndex((prev) => prev - 1)
                setDisplayText(currentText.slice(0, charIndex - 1))
            } else {
                setIsDeleting(false)
                setTextIndex((prev) => (prev + 1) % texts.length)
            }
        }
    }, [charIndex, currentText, isDeleting, isPaused, pauseMs, texts.length])

    useEffect(() => {
        if (isPaused) return
        const speed = isDeleting ? deleteSpeed : typeSpeed
        const timer = setTimeout(tick, speed)
        return () => clearTimeout(timer)
    }, [tick, isDeleting, isPaused, typeSpeed, deleteSpeed])

    return { displayText }
}
