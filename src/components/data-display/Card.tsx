// Components
import Image from 'next/image'
// Config
import { sectionsImgPath } from '@/modules/navigation/config'
// Types
import type { CardProps } from '@/types/data-dislay'

/**
 * A simple card component
 * @see {@link CardProps} for props specification
 * @param CardProps The component props
 * @returns The Card component
 */
export default function Card ({ heading, description, image }: CardProps) {
  const imageSrc = `${sectionsImgPath}${image.name}`

  return (
    <article className='space-y-8 grid lg:grid-cols-2'>
      <div>
        <header className='space-y-3'>
          <h3 className='pb-6 border-b border-b-stone-300'>
            {heading}
          </h3>
          {description ? <p className='text-stone-500'>{description}</p> : null}
        </header>
      </div>
      <div>
        <Image
          src={imageSrc}
          alt={image.alt}
          className='w-full h-auto rounded-sm'
          width={image.width}
          height={image.height}
        />
      </div>
    </article>
  )
}
