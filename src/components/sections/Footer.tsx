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

/**
 * The footer section of application
 * @returns Footer section component
 */
export default function Footer () {
  return (
    <footer className='max-w-8xl px-5 md:px-10 pt-8 pb-12 mx-auto flex flex-col-reverse md:flex-col gap-y-8 border-t border-stone-300'>
      <div className='w-full mx-auto flex flex-col md:flex-row-reverse justify-center md:justify-between items-center gap-y-8'>
        <div className='md:text-xl'>
          <LinkEmail />
        </div>
        <div className='md:hidden'>
          <LinkToAction />
        </div>
        <div className='flex flex-col md:flex-row items-center gap-4 text-xs md:text-sm text-center md:text-left text-stone-500'>
          <NextLink href='/'>
            <Image
              src='/images/logomark.svg'
              alt={organizationSlogan}
              width={36}
              height={33}
            />
          </NextLink>
          {copyright}
        </div>
      </div>
      <nav>
        <ul className='w-full flex flex-col md:flex-row justify-between gap-4 text-center'>
          {NAV_LIST.map((navItem, key) => (
            <li
              className='last:hidden last:md:block'
              key={key}
            >
              <Link href={navItem.href} size={SIZES.sm}>
                {navItem.children}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
