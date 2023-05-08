// Components
import Image from 'next/image'
// Types
import type { ShowcaseProps } from '@/types/data-dislay'

/**
 * Used to show a image with a header
 * @see {@link ShowcaseProps} for props specifications
 * @param ShowcaseProps The component props
 * @returns The Showcase component
 */
export default function Showcase ({ heading, description, image, reverse }: ShowcaseProps) {
  const containerReverseStyle = reverse ? 'md:flex-row-reverse' : ''
  const imageSrc = `/images/sections/${image.name}`

  return (
    <article className={`h-auto md:h-sm flex flex-col-reverse md:flex-row md:gap-x-20 gap-y-8 md:gap-y-0 ${containerReverseStyle}`}>
      <div className='w-full md:w-1/2 h-auto md:h-full'>
        <div className='w-full h-full flex flex-col md:justify-center gap-y-4'>
          <header className='space-y-3 text-center md:text-left'>
            <h3 className='text-primary pb-6 border-b border-b-stone-300'>
              {heading.toUpperCase()}
            </h3>
            {description ? <p className='text-base text-stone-500'>{description}</p> : null}
          </header>
        </div>
      </div>

      <div className='w-full md:w-1/2 h-auto md:h-full'>
        <div className='w-full'>
          <Image
            src={imageSrc}
            alt={image.alt}
            className='w-full h-auto rounded-sm'
            width={image.width}
            height={image.height}
          />
        </div>
      </div>
    </article>
  )
}
