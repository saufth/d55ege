// Components
import LinkToAction from '../navigation/LinkToAction'
import Image from 'next/image'
import Link from '../navigation/core/Link'
import LinkEmail from '../navigation/LinkEmail'
import NextLink from 'next/link'
// Config
import { NAV_LIST } from '@/modules/navigation/config'
import { copyright, organizationSlogan } from '@/modules/app/config'
import { SIZES } from '@/modules/sizing/config'
import { THEMES } from '@/modules/theme/config'

/**
 * The footer section of application
 * @returns Footer section component
 */
export default function Footer () {
  return (
    <footer className='max-w-8xl mx-auto bg-sky-900'>
      <div className='w-full px-5% py-16 mx-auto grid md:grid-cols-3 place-content-center gap-y-8'>
        <div className='grid md:block place-content-center'>
          <NextLink href='/'>
            <Image
              src='/images/logomark-white.svg'
              alt={organizationSlogan}
              className='w-auto h-9'
              width={556}
              height={250}
            />
          </NextLink>
        </div>
        <nav>
          <ul className='w-full flex flex-col md:flex-row gap-4 text-center'>
            {NAV_LIST.map((navItem, key) => (
              <li
                className='last:hidden last:md:block'
                key={key}
              >
                <Link href={navItem.href} size={SIZES.sm} theme={THEMES.secondary}>
                  {navItem.children}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='md:text-xl text-center md:text-right'>
          <LinkEmail theme={THEMES.secondary} />
        </div>
        <div className='md:hidden grid place-content-center'>
          <LinkToAction />
        </div>
      </div>
      <div className='px-1 py-4 text-white text-center bg-sky-950'>
        {copyright}
      </div>
    </footer>
  )
}
