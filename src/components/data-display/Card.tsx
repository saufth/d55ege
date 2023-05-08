// Components
import Image from 'next/image'
// Types
import type { CardProps } from '@/types/data-dislay'

/**
 * A simple card component
 * @see {@link CardProps} for props specification
 * @param CardProps The component props
 * @returns The Card component
 */
export default function Card ({ heading, description, image }: CardProps) {
  const imageSrc = `/images/sections/${image.name}`

  return (
    <article className='w-full space-y-8'>
      <Image
        src={imageSrc}
        alt={image.alt}
        className='w-full h-auto rounded-sm'
        width={image.width}
        height={image.height}
      />
      <header className='space-y-3'>
        <h3 className='pb-6 border-b border-b-stone-300'>
          {heading.toUpperCase()}
        </h3>
        {description ? <p className='text-stone-500'>{description}</p> : null}
      </header>
    </article>
  )
}
