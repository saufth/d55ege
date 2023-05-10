// Components
import LinkToAction from './LinkToAction'
import Link from './core/Link'
// Hooks
import useDimensions from '../../modules/sizing/hooks/useDimensions'
// Animation
import { motion } from 'framer-motion'
// Config
import { NAV, navAriaLabel } from '@/modules/navigation/config'
import { OC_STATE } from '@/modules/input/config'
import { SIZES } from '@/modules/sizing/config'
// Types
import type { MenuProps } from '@/types/navigation'
import type { OCVariantsConfig } from '@/types/animation'

/** Menu animation variants */
const MENU_VARIANTS: OCVariantsConfig = {
  open: {
    opacity: 1,
    height: '100vh',
    transition: {
      delay: 0.3
    }
  },
  closed: {
    opacity: 0,
    height: 0
  }
}

/** Background animation variants */
const BG_VARIANTS: OCVariantsConfig = {
  open: (width = 1366) => ({
    clipPath: `circle(${width * 2}px at 100% 0px)`,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    opacity: 1,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

/**
 * The main menu component of the application
 * @returns The Menu component
 */
export default function Menu ({ isOpen, action }: MenuProps) {
  // Animation
  const { width } = useDimensions()

  return (
    <motion.div
      initial={false}
      animate={isOpen ? OC_STATE.open : OC_STATE.closed}
      custom={width}
    >
      <motion.nav
        aria-label={navAriaLabel}
        className='w-full h-screen pt-24 fixed top-0 left-0 z-60 overflow-hidden grid place-content-center gap-y-6 text-center'
        variants={MENU_VARIANTS}
      >
        <div className='text-sm'>
          Menu
        </div>

        {[NAV.home, NAV.solutions, NAV.values, NAV.history].map((option, key) => (
          <div onClick={action} key={key}>
            <Link href={option.href} size={SIZES.lg}>
              {option.children}
            </Link>
          </div>
        ))}

        <div className='flex justify-center' onClick={action}>
          <LinkToAction />
        </div>
      </motion.nav>

      <motion.div
        className='w-full h-screen fixed top-0 z-50 bg-white'
        variants={BG_VARIANTS}
      />
    </motion.div>
  )
}
