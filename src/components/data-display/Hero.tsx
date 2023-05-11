// Types
import type { HeroProps } from '@/types/data-dislay'
import type { PageRoute } from '@/types/navigation'

/** Background image styles configuration */
const BACKGROUNDS: Readonly<Record<PageRoute, string>> = {
  home: '',
  contact: 'bg-contact',
  history: 'bg-history'
}

/**
 * A page hero component used for secondary pages
 * @see {@link HeroProps} for props specification
 * @param HeroProps The component props
 * @returns The Hero component
 */
export default function Hero ({ heading, description, tagline, image }: HeroProps) {
  return (
    <div className={`h-md relative bg-cover bg-center bg-no-repeat ${BACKGROUNDS[image]}`}>
      <div className='h-full px-5% relative z-20 flex flex-col justify-center gap-y-3'>
        {tagline ? <div className='text-xl md:text-2xl text-white'>{tagline}</div> : null}
        <h2 className='text-[50px] md:text-6xl text-white'>
          {heading}
        </h2>
        {description ? <p className='text-lg md:text-xl'>{description}</p> : null}
      </div>
      <div className='absolute inset-0 bg-black/30' />
    </div>
  )
}
