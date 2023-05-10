// Components
import NextLink from 'next/link'
// Config
import { SIZES } from '@/modules/sizing/config'
import { THEMES } from '@/modules/theme/config'
// Types
import type { LinkProps } from '@/types/navigation'
import { SizeStyleConfig } from '@/types/sizing'
import { ThemeStyleConfig } from '@/types/theme'

/** The link size style configuration */
const SIZE_STYLES: SizeStyleConfig = {
  sm: 'text-sm',
  md: 'font-secondary-bold text-md',
  lg: 'font-secondary-bold text-4xl'
}

/** The link theme style configuration */
const THEME_STYLES: ThemeStyleConfig = {
  primary: 'text-stone-950',
  secondary: 'text-white'
}

/**
 * A simple link component for navigation
 * @see {@link LinkProps} for props specification
 * @param LinkProps The component props
 * @returns The Link component
 *
 * @default size 'md'
 * @default theme 'primary'
 */
export default function Link ({
  children,
  href,
  target,
  rel,
  size = SIZES.md,
  theme = THEMES.primary,
  underline
}: LinkProps) {
  const sizeStyle = SIZE_STYLES[size]
  const themeStyle = THEME_STYLES[theme]
  const textStyle = underline ? 'underline' : ''
  const linkStyle = `hover:text-sky-300 transition-colors ${sizeStyle} ${themeStyle} ${textStyle}`

  return (
    <NextLink
      className={linkStyle}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </NextLink>
  )
}
