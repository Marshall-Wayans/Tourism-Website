import React from 'react'
import { Link } from 'react-router-dom'
import { Loader2Icon } from 'lucide-react'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'secondary' | 'dark' | 'light' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
  loading?: boolean
  fullWidth?: boolean
}

interface ButtonProps extends BaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  to?: undefined
  href?: undefined
}

interface LinkProps extends BaseProps {
  to: string
  href?: undefined
  ariaLabel?: string
}

interface AnchorProps extends BaseProps {
  href: string
  to?: undefined
  target?: string
  rel?: string
  ariaLabel?: string
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-pill font-medium tracking-tight transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-premium disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-espresso hover:bg-gold-dark hover:text-white shadow-[0_10px_24px_-16px_rgba(184,137,74,0.9)]',
  secondary: 'border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso hover:text-ivory',
  dark: 'bg-espresso text-ivory hover:bg-[#3a3126]',
  light: 'border border-white/50 text-white hover:bg-white hover:text-espresso backdrop-blur-[2px]',
  ghost: 'text-espresso hover:bg-espresso/5',
}

const sizes: Record<Size, string> = {
  sm: 'text-[13px] px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-[15px] px-7 py-3.5',
}

function classesFor(variant: Variant = 'primary', size: Size = 'md', fullWidth?: boolean, className?: string) {
  return cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)
}

export function Button(props: ButtonProps | LinkProps | AnchorProps) {
  const { variant = 'primary', size = 'md', className, children, loading, fullWidth } = props
  const classes = classesFor(variant, size, fullWidth, className)

  if ('to' in props && props.to) {
    const { to, ariaLabel } = props as LinkProps
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const { href, target, rel, ariaLabel } = props as AnchorProps
    return (
      <a href={href} target={target} rel={rel} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  const { variant: _v, size: _s, className: _c, loading: _l, fullWidth: _f, children: _ch, ...rest } =
    props as ButtonProps
  return (
    <button className={classes} disabled={loading || rest.disabled} {...rest}>
      {loading && <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  )
}

export function TextLink({
  to,
  children,
  className,
}: {
  to: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      to={to}
      className={cn(
        'group/link inline-flex items-center gap-1.5 text-sm font-medium text-gold transition-colors duration-200 ease-premium hover:text-gold-dark',
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-200 ease-premium group-hover/link:translate-x-1"
      >
        →
      </span>
    </Link>
  )
}
