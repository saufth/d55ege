// Components
import Image from 'next/image'
// Config
import { sectionsImgPath } from '@/modules/navigation/config'
// Types
import type { ShowcaseProps } from '@/types/data-dislay'

/**
 * Used to show a image with a header
 * @see {@link ShowcaseProps} for props specifications
 * @param ShowcaseProps The component props
 * @returns The Showcase component
 */
export default function Showcase ({ heading, description, image, reverse }: ShowcaseProps) {
  const imgWrapReverseStyle = reverse ? 'md:order-last' : ''
  const imageSrc = `${sectionsImgPath}${image.name}`

  return (
    <article className='md:h-sm grid md:grid-cols-2 gap-y-8 md:gap-y-0'>
      <div className={`overflow-hidden ${imgWrapReverseStyle}`}>
        <Image
          src={imageSrc}
          alt={image.alt}
          className='w-full'
          width={image.width}
          height={image.height}
        />
      </div>

      <header className='md:px-11% text-center lg:text-left grid place-content-center gap-y-4'>
        <h3>
          {heading}
        </h3>
        {description ? <p className='md:text-lg'>{description}</p> : null}
      </header>
    </article>
  )
}
