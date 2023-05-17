// Components
import Image from 'next/image'
import LinkToAction from '@/components/navigation/LinkToAction'
import LinkToServices from '@/components/navigation/LinkToServices'
import PageLayout from '@/components/layout/PageLayout'
import Showcase from '@/components/data-display/Showcase'
import Tagline from '@/components/data-display/core/Tagline'
// Config
import { IMG_EXT } from '@/modules/data-display/config'
import { sectionsImgPath, PAGE_ROUTES, SECTION_ROUTES } from '@/modules/navigation/config'
import {
  SERVICES,
  VALUES,
  description,
  organizationSlogan,
  slogan
} from '@/modules/app/config'
// Types
import type { MouseEvent } from 'react'

/**
* The Home page of the application
* @returns The HomePage component
*/
export default function HomePage () {
  /** Solutions name list */
  const SOLUTION_NAMES: ReadonlyArray<string> = Object.keys(SERVICES)
  /** Values name list */
  const VALUES_NAMES: ReadonlyArray<string> = Object.keys(VALUES)
  /** Used for prevent video contect menu */
  const preventContextMenu = (event: MouseEvent) => event.preventDefault()

  return (
    <PageLayout page={PAGE_ROUTES.home}>
      <section className='h-3xl md:h-2xl relative overflow-hidden'>
        <div className='max-w-8xl h-full px-5% pt-28 mx-auto space-y-8'>
          <div className='max-w-2xl mt-16 md:mt-24 grid place-content-center gap-y-5 md:gap-y-7'>
            <div className='grid md:block place-content-center'>
              <Tagline size='lg'>
                {slogan}
              </Tagline>
            </div>
            <div className='text-center md:text-left space-y-5'>
              <h1 className='text-white'>
                Consultoría de negocios y marketing
              </h1>
              <p className='font-primary-bold text-lg md:text-xl text-stone-100'>
                {description}
              </p>
            </div>
          </div>
          <div className='grid md:flex place-content-center md:place-content-start gap-y-5 md:gap-y-0 md:gap-x-5'>
            <LinkToAction />
            <LinkToServices />
          </div>
        </div>
        <div className='absolute inset-0 -z-20 overflow-hidden flex items-center'>
          <video
            className='w-full h-full object-cover'
            width={1920}
            height={1080}
            controls={false}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList='nodownload noplaybackrate'
            onContextMenu={preventContextMenu}
          >
            <source src='/video/hero.mp4' type='video/mp4' />
          </video>
          <div className='absolute inset-0 bg-black/30' />
        </div>
      </section>

      <section className='px-5% py-24 md:py-32 flex flex-col items-center gap-y-12 md:gap-y-14'>
        <Image
          src='/images/logomark.svg'
          alt={organizationSlogan}
          className='w-auto h-14'
          width={556}
          height={250}
        />
        <div className='font-secondary-bold text-xl'>
          Misión
        </div>
        <p className='max-w-5xl font-secondary-light text-xl md:text-[27px] text-center md:leading-normal'>
          Alcanzar la excelencia y potenciar el genio empresarial de nuestros clientes,
          a través de consultorías personalizadas en negocios y marketing que les permitan
          alcanzar sus objetivos y brillar en su mercado.
        </p>
        <div className='font-secondary-bold text-xl'>
          Visión
        </div>
        <p className='max-w-5xl font-secondary-light text-xl md:text-[27px] text-center md:leading-normal'>
          Soñamos con un mundo en el que las empresas no solo sean rentables, sino que también
          inspiren y marquen una diferencia positiva en nuestro entorno. Queremos ser parte de
          la generación de ideas innovadoras y proyectos emprendedores que transformen la forma
          en que hacemos negocios y generen un impacto duradero en nuestra sociedad.
        </p>
        <LinkToServices />
      </section>

      <section id={SECTION_ROUTES.solutions} className='pb-24 md:pb-36'>
        <div className='lg:py-24 grid lg:grid-cols-2'>
          <div className='relative min-h-[50vh]'>
            <div className='w-[112%] h-full absolute top-0 left-0 -z-20 bg-solutions bg-cover bg-top bg-no-repeat' />
          </div>
          <div className='lg:py-24'>
            <div className='px-11% py-11 lg:p-18 text-center lg:text-left bg-stone-100 space-y-8 lg:space-y-10'>
              <h2>
                Nuestras soluciones
              </h2>
              <p className='text-lg'>
                En el mundo empresarial actual, el marketing y la estrategia son elementos críticos
                para el éxito y la supervivencia de cualquier negocio.
              </p>
              <div className='grid lg:block place-content-center'>
                <LinkToAction />
              </div>
            </div>
          </div>
        </div>

        <div className='px-5% md:px-0 mt-24 space-y-16 md:space-y-36'>
          <div className='font-primary-light text-3xl md:text-4.5xl text-center'>
            Soluciones integrales a la medida
          </div>
          <ul className='space-y-24 lg:space-y-44'>
            {SOLUTION_NAMES.map((solution, key) => (
              <li key={key}>
                <Showcase
                  heading={SERVICES[solution].heading}
                  description={SERVICES[solution].description}
                  image={{
                    name: `${solution}.${IMG_EXT.jpg}`,
                    alt: `${organizationSlogan} ${SERVICES[solution].heading}`,
                    width: 620,
                    height: 467
                  }}
                  reverse={key % 2 === 0}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='px-5% lg:px-3%'>
        <div className='max-w-4xl px-5% py-12 md:pb-24 mx-auto text-center space-y-7 md:space-y-8 border-t md:border-t-0 border-t-stone-300'>
          <h2 className='font-primary-light lg:text-6xl'>Nuestros valores</h2>
          <p className='font-secondary-light lg:text-2xl'>
            Soñamos con un mundo en el que las empresas no solo sean rentables, sino que también
            inspiren y marquen una diferencia positiva en nuestro entorno. Queremos ser parte de
            la generación de ideas innovadoras y proyectos emprendedores que transformen la forma
            en que hacemos negocios y generen un impacto duradero en nuestra sociedad.
          </p>
        </div>

        <div>
          {VALUES_NAMES.map((value, key) => (
            <article key={key} className='max-w-7xl py-12 lg:py-0 mx-auto flex flex-col lg:flex-row items-center gap-y-6 lg:gap-y-0 border-t border-t-stone-300'>
              <div className='grid lg:block place-content-center'>
                <div className='w-24 lg:w-64 lg:h-64'>
                  <Image
                    src={`${sectionsImgPath}${value}.svg`}
                    alt={value}
                    className='w-full lg:p-20'
                    width={250}
                    height={250}
                  />
                </div>
              </div>
              <header className='max-w-xl text-center lg:text-left space-y-6'>
                <h3>
                  {VALUES[value].heading}
                </h3>
                <p className='text-lg'>
                  {VALUES[value].description}
                </p>
              </header>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
