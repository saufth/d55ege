// Config
import { SIZES } from '@/modules/sizing/config'
// Types
import type { TaglineProps } from '@/types/data-dislay'
import type { SizeStyleConfig } from '@/types/sizing'

/** The Tagline component size style configuration */
const SIZE_STYLES: SizeStyleConfig = {
  sm: 'text-sm md:text-md',
  md: 'text-md md:text-lg',
  lg: 'font-primary-bold text-lg'
}

/**
 * A simple tagline component
 * @see {@link TaglineProps} for props specification
 * @param TaglineProps The component props
 * @returns The Tagline component
 *
 * @default size 'md'
 */
export default function Tagline ({ children, size = SIZES.md }: TaglineProps) {
  const taglineSTyle = `px-3 pt-2 pb-1.5 text-white inline-block leading-none border border-white rounded-full backdrop-filter backdrop-blur-sm ${SIZE_STYLES[size]}`
  return (
    <div className={taglineSTyle}>
      {children}
    </div>
  )
}
