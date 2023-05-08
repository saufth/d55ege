// Types
import type { Actionable } from '@/types/input'

/**
* The main menu button of the application
* @see {@link Actionable} for props definition
* @param Actionable The basic input component props
* @returns The MenuButton component
*/
export default function MenuButton ({ action }: Actionable) {
  return (
    <button
      className='w-9 h-3 [&>span]:w-full [&>span]:h-0.5 lg:hidden flex flex-col justify-between items-end [&>span]:bg-white'
      onClick={action}
    >
      <span />
      <span />
    </button>
  )
}
