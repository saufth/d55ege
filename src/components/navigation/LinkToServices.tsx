// Components
import LinkButton from './core/LinkButton'
// Config
import { NAV } from '@/modules/navigation/config'
import { THEMES } from '@/modules/theme/config'

/**
 * The main link to services component of the application
 * @returns The LinkToServices component
 */
export default function LinkToServices () {
  return (
    <LinkButton href={NAV.solutions.href} theme={THEMES.secondary}>
      {NAV.solutions.children}
    </LinkButton>
  )
}
