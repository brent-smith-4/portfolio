'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  id?: string
}

// Fades a section in as it enters the viewport and back out as it leaves,
// in both scroll directions. Elements already in view on mount (the hero)
// reveal immediately since the observer fires on initial layout too.
export default function Reveal({ children, className = '', id }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div id={id} ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}
