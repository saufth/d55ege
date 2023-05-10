// Components
import LinkToAction from '../navigation/LinkToAction'
import Image from 'next/image'
import Link from '../navigation/core/Link'
import NextLink from 'next/link'
import Menu from '../navigation/Menu'
import MenuButton from '../input/core/MenuButton'
// Animation
import { useCycle } from 'framer-motion'
// Config
import { NAV } from '@/modules/navigation/config'
import { SIZES } from '@/modules/sizing/config'
import { THEMES } from '@/modules/theme/config'

/**
 * The main navbar component of the application
 * @returns The Navbar component
 */
export default function Navbar () {
  // Animation
  const [isOpen, toggle] = useCycle(false, true)
  /** Handle the Menu state */
  const handleToggle = () => { toggle() }
  /** Close the Menu but not open */
  const closeToggle = () => { isOpen && toggle() }

  return (
    <>
      <header className='absolute top-0 left-0 right-0 z-70 border-b border-b-stone-300'>
        <ul className='max-w-8xl h-24 px-5% md:py-4 lg:py-5 mx-auto flex justify-between items-center'>
          <li>
            <NextLink href={NAV.home.href} onClick={closeToggle}>
              <Image
                className='w-auto h-10 md:h-12'
                src={`/images/logomark${isOpen ? '' : '-white'}.svg`}
                alt='Inicio'
                width={556}
                height={250}
                priority
              />
            </NextLink>
          </li>

          {[NAV.solutions, NAV.values, NAV.history].map(({ children, href }, key) => {
            return (
              <li className='hidden lg:block' key={key}>
                <Link href={href} size={SIZES.md} theme={THEMES.secondary}>
                  {children}
                </Link>
              </li>
            )
          })}

          <li className='hidden lg:block'>
            <LinkToAction />
          </li>

          {isOpen
            ? (
              <div
                className='w-7 md:w-8 h-7 md:h-8 grid place-content-center text-4xl cursor-pointer'
                onClick={handleToggle}
              >
                X
              </div>
              )
            : <MenuButton action={handleToggle} />}
        </ul>
      </header>
      <Menu isOpen={isOpen} action={handleToggle} />
    </>
  )
}
