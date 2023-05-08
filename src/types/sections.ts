// Types
import type { HeaderListConfig, HeaderProps } from './data-dislay'
import type { SectionRoute } from './navigation'

/** About component props */
export interface AboutProps extends HeaderProps {
  /** Section id */
  id: SectionRoute
  /** Section showcases */
  showcases: HeaderListConfig
}
