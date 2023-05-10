// Components
import LinkButton from './core/LinkButton'
// Config
import { NAV } from '@/modules/navigation/config'
// Types
import type { Themeable } from '@/types/theme'

/**
 * The main link to action component of the application
 * @see {@link Themeable} for props specifications
 * @param Themeable The component props
 * @returns The LinkToAction component
 */
export default function LinkToAction ({ theme }: Themeable) {
  return (
    <LinkButton href={NAV.contact.href} theme={theme}>
      {NAV.contact.children}
    </LinkButton>
  )
}
