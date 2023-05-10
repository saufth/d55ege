// Types
import type { OCState } from '@/types/input'
import type { Variant } from 'framer-motion'

/** Used for open-closed state animation variants configuration */
export type OCVariantsConfig = Readonly<Record<OCState, Variant>>
