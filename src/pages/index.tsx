// Components
import About from '@/components/sections/About'
import LinkToAction from '@/components/navigation/LinkToAction'
import Card from '@/components/data-display/Card'
import Header from '@/components/data-display/Header'
import Image from 'next/image'
import LinkButton from '@/components/navigation/core/LinkButton'
import PageLayout from '@/components/layout/PageLayout'
import Tagline from '@/components/data-display/core/Tagline'
// Config
import { IMG_EXT } from '@/modules/data-display/config'
import { NAV, PAGE_ROUTES, SECTION_ROUTES } from '@/modules/navigation/config'
import { THEME } from '@/modules/theme/config'
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
  const solutionsNameList: ReadonlyArray<string> = Object.keys(SERVICES)
  /** Used for prevent video contect menu */
  const preventContextMenu = (event: MouseEvent) => event.preventDefault()

  return (
    <PageLayout page={PAGE_ROUTES.home}>
      <section className='h-2xl md:h-2xl relative overflow-hidden'>
        <div className='max-w-8xl h-full px-5% mx-auto pt-24 space-y-8 bg-stone-950/40'>
          <div className='md:max-w-2xl mt-16 md:mt-24 space-y-5 md:space-y-7'>
            <Tagline size='lg'>
              {slogan}
            </Tagline>
            <div className='space-y-5'>
              <h1 className='text-white'>
                {description}
              </h1>
              <p className='font-primary-bold text-lg md:text-xl text-stone-200'>
                Lorem ipsum dolor sit amet, ipsul dolorem amet ipsum lorem
              </p>
            </div>
          </div>
          <div className='md:flex md:justify-start md:gap-x-5'>
            <LinkToAction />
            <div className='hidden md:block'>
              <LinkButton
                href={NAV.solutions.href}
                theme={THEME.secondary}
              >
                {NAV.solutions.children}
              </LinkButton>
            </div>
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
        </div>
      </section>

      <section className='px-5% py-44 md:py-56 flex flex-col items-center gap-y-12 md:gap-y-14 bg-stone-50'>
        <Image
          src='/images/logomark.svg'
          alt={organizationSlogan}
          className='w-auto h-12'
          width={556}
          height={250}
        />
        <div className='max-w-4xl font-secondary-light text-xl md:text-2xl text-stone-950 text-center'>
          Alcanzar la excelencia y potenciar el genio empresarial de nuestros clientes,
          a través de consultorías personalizadas en negocios y marketing que les permitan
          alcanzar sus objetivos y brillar en su mercado.
        </div>
        <LinkButton
          href={NAV.solutions.href}
          theme={THEME.secondary}
        >
          {NAV.solutions.children}
        </LinkButton>
      </section>

      <section id={SECTION_ROUTES.solutions} className='px-5% py-24'>
        <div className='space-y-24'>
          <Header
            heading='Nuestras soluciones'
            description='En el mundo empresarial actual, el marketing y la estrategia son elementos críticos para el éxito y la supervivencia de cualquier negocio.'
          />
          <ul className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-5 gap-y-20 items-start justify-start'>
            {solutionsNameList.map((solution, key) => (
              <li key={key}>
                <Card
                  heading={SERVICES[solution].heading}
                  description={SERVICES[solution].description}
                  image={{
                    name: `${solution}.${IMG_EXT.jpg}`,
                    alt: `${organizationSlogan} ${SERVICES[solution].heading}`,
                    width: 620,
                    height: 467
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <About
        id={SECTION_ROUTES.values}
        heading='Nuestros valores'
        description='Soñamos con un mundo en el que las empresas no solo sean rentables, sino que también inspiren y marquen una diferencia positiva en nuestro entorno. Queremos ser parte de la generación de ideas innovadoras y proyectos emprendedores que transformen la forma en que hacemos negocios y generen un impacto duradero en nuestra sociedad.'
        showcases={VALUES}
      />
    </PageLayout>
  )
}
