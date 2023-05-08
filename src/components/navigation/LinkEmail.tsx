// Components
import Link from './core/Link'
// Config
import { email } from '@/modules/app/config'

/** The email hypertext reference */
const mailto = `mailto:${email}`

/**
 * A simple link component for navigation
 * @returns The LinkEmail component
 */
export default function LinkEmail () {
  return (
    <Link href={mailto} underline>
      {email}
    </Link>
  )
}
