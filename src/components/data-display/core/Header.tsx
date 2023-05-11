// Types
import type { HeaderProps } from '@/types/data-dislay'

/**
 * A simple header component
 * @see {@link HeaderProps} for props specification
 * @param HeaderProps The component props
 * @returns The Header component
 */
export default function Header ({ heading, description }: HeaderProps) {
  return (
    <header className='space-y-4 md:flex md:justify-center md:items-center md:gap-x-12'>
      <div className='md:w-1/2 md:text-right'>
        <h2>{heading}</h2>
      </div>
      {description
        ? (
          <div className='md:w-1/2 md:px-6 md:border-l md:border-l-stone-400'>
            <p className='text-stone-600 md:text-lg'>{description}</p>
          </div>
          )
        : null}
    </header>
  )
}
