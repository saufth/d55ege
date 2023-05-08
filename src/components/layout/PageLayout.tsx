// Components
import Head from 'next/head'
// Config
import {
  baseUrl,
  coverImageUrl,
  description,
  keywords,
  organizationSlogan,
  twitter,
  author,
  themeColor
} from '../../modules/app/config'
import { NAV } from '@/modules/navigation/config'
// Types
import type { PageLayoutProps } from '../../types/layout'
import type { PageRoute } from '@/types/navigation'

/** The pages route name configuration */
const PAGES_CONFIG: Readonly<Record<PageRoute, (PageRoute | '')>> = {
  home: '',
  history: 'history',
  contact: 'contact'
}

/**
 * The main application page layout
 * @see {@link PageLayoutProps} for props specification
 * @param PageLayoutProps The component props
 * @returns the PageLayout component
 */
export default function PageLayout ({ children, page } : PageLayoutProps) {
  const pageTitle = `${NAV[page].children} – ${organizationSlogan}`
  const canonicalLink = `${baseUrl}${PAGES_CONFIG[page]}`

  return (
    <>
      <Head>
        <meta httpEquiv='content-language' content='es-mx' key='lang' />
        <title key='title'>{pageTitle}</title>
        <meta name='description' content={description} key='desc' />
        <meta name='author' content={author} key='author' />
        <meta name='keywords' content={keywords} key='keywords' />
        <meta name='copyright' content={organizationSlogan} key='copyright' />
        <meta name='theme-color' content={themeColor} key='theme' />
        <meta name='robots' content='index, follow' key='robots' />
        <link rel='canonical' href={canonicalLink} key='canonical' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' key='icon-16' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' key='icon-32' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-chrome-192x192.png' key='icon-192' />
        <link rel='icon' type='image/png' sizes='512x512' href='/android-chrome-512x512.png' key='icon-512' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' key='apple-180' />
        <link rel='manifest' href='/site.webmanifest' key='manifest' />
        <meta property='og:locale' content='es_MX' key='og-locale' />
        <meta property='og:type' content='website' key='og-type' />
        <meta property='og:title' content={organizationSlogan} key='og-title' />
        <meta property='og:description' content={description} key='og-desc' />
        <meta property='og:url' content={baseUrl} key='og-url' />
        <meta property='og:site_name' content={organizationSlogan} key='og-site-name' />
        <meta property='og:image' content={coverImageUrl} key='og-img' />
        <meta property='og:image:secure_url' content={coverImageUrl} key='og-secure-url' />
        <meta property='og:image:width' content='1200' key='og-img-width' />
        <meta property='og:image:height' content='640' key='og-img-height' />
        <meta property='og:image:type' content='image/jpeg' key='og-img-type' />
        {twitter !== ''
          ? (
            <>
              <meta name='twitter:card' content='summary_large_image' key='tw-card' />
              <meta name='twitter:title' content={organizationSlogan} key='tw-title' />
              <meta name='twitter:description' content={description} key='tw-desc' />
              <meta name='twitter:site' content={twitter} key='tw-site' />
              <meta name='twitter:image' content={coverImageUrl} key='tw-img' />
            </>
            )
          : null}
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}
