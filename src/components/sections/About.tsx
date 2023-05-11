// Components
import Header from '../data-display/core/Header'
import Showcase from '../data-display/Showcase'
// Config
import { IMG_EXT } from '@/modules/data-display/config'
import { organizationSlogan } from '@/modules/app/config'
// Types
import type { AboutProps } from '@/types/sections'

/**
 * A section using for show cases about something
 * @see {@link AboutProps} for props specifications
 * @param AboutProps About section component props
 * @returns About section component
 */
export default function About ({ id, heading, description, tagline, showcases }: AboutProps) {
  /** Showcase names list */
  const SHOWCASE_NAMES: ReadonlyArray<string> = Object.keys(showcases)

  return (
    <section id={id} className='max-w-8xl px-5% mx-auto py-24 space-y-24'>
      <Header heading={heading} description={description} />
      <ul className='pb-12 md:pb-56 space-y-24 md:space-y-64'>
        {SHOWCASE_NAMES.map((showcase, key) => (
          <li key={key}>
            <Showcase
              heading={showcases[showcase].heading}
              description={showcases[showcase].description}
              image={{
                name: `${showcase}.${IMG_EXT.svg}`,
                alt: `${organizationSlogan} ${showcases[showcase].heading}`,
                width: 500,
                height: 500
              }}
              reverse={key % 2 !== 0}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
