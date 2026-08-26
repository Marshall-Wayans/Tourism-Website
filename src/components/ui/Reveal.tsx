import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({
  children,
  delay = 0,
  className,
  as = 'div',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li'
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] as typeof motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </MotionTag>
  )
}
