// Types
import type { HeaderListConfig } from '@/types/data-dislay'

/** The project author */
export const author = 'Sauftdev'

/** The application domain name */
export const domain = process.env.NEXT_PUBLIC_DOMAIN

/** The base URL of the aplication */
export const baseUrl = `https://${domain}/`

/** The name of the organization */
export const organization = 'D55'

/** The slogan of the organization */
export const slogan = 'Excelencia & Genio Emepresarial'

/** The nam and slogan of the organization */
export const organizationSlogan = `${organization} ${slogan}`

/** The head desciption of the application */
export const description = 'Consultoría de negocios y marketing'

/** The email of the organizacion */
export const email = `contacto@${domain}`

/** Organization services */
export const SERVICES: HeaderListConfig = {
  strategy: {
    heading: 'Análisis y estrategia de negocios',
    description: 'Orientamos nuestros esfuerzos al análisis y evaluación de los procesos y estrategias de negocio de una empresa para identificar oportunidades de mejora y maximizar la eficiencia y rentabilidad.'
  },
  study: {
    heading: 'Estudio de mercado',
    description: 'Partimos del análisis y evaluación del mercado, incluyendo la identificación de oportunidades de negocio, la evaluación de la competencia y la determinación de las necesidades que satisfagan los deseos del mercado meta.'
  },
  branding: {
    heading: 'Branding',
    description: 'Impulsamos el desarrollo y gestión de la marca de una empresa, incluyendo la creación de un plan de marca, el diseño de identidad visual y la creación de una estrategia de comunicación efectiva.'
  },
  marketing: {
    heading: 'Marketing',
    description: 'Nos enfocamos en la planificación y ejecución de una estrategia eficaz, incluyendo la identificación de canales de marketing adecuados y la creación de un plan de acción para alcanzar los objetivos de la empresa.'
  },
  consultancy: {
    heading: 'Consultoría en ventas',
    description: 'Acompañamos los procesos y estrategias de comercialización de una empresa para identificar oportunidades de mejora maximizando la eficiencia y rentabilidad de la fuerza de ventas.'
  },
  analysis: {
    heading: 'Investigación y análisis de datos',
    description: 'Recopilamos, analizamos y evaluamos datos relevantes para una empresa, incluyendo la evaluación de rendimiento y la identificación de áreas de oportunidad.'
  }
}

/** Organization values */
export const VALUES: HeaderListConfig = {
  excellence: {
    heading: 'Excelencia',
    description: 'Buscamos siempre destacarnos en todo lo que hacemos, ofreciendo a nuestros clientes soluciones en consultoría de negocios y marketing.'
  },
  orientation: {
    heading: 'Orientación al cliente',
    description: 'Nuestro enfoque está dirigido al cliente y sus necesidades. Escuchamos, comprendemos y nos adaptamos a sus requerimientos.'
  },
  innovation: {
    heading: 'Innovación',
    description: 'Nos mantenemos a la vanguardia de las últimas tendencias, aportando ideas de valor innovadoras y creativas.'
  },
  synergy: {
    heading: 'Sinergia colaborativa',
    description: 'Valoramos el trabajo colaborativo para hacer sinergia, tanto dentro de nuestra empresa como con nuestros clientes. '
  },
  transparency: {
    heading: 'Transparencia',
    description: 'Nos dirigimos de manera abierta, clara y honesta para destacarnos como una empresa confiable en el mercado.'
  }
}

/** The copyright of the application */
export const copyright = `Copyright ${new Date().getFullYear()} ${organizationSlogan}. All rights reserved.`

/** The keyword list of the application */
export const KEYWORDS: ReadonlyArray<string> = [
  organization,
  organizationSlogan,
  'Análisis y estrategia de negocios',
  'Estudio de mercado',
  'Branding',
  'Marketing',
  'Consultoría en ventas',
  'Investigación y análisis de datos'
]

/** The keyword list as string */
export const keywords = String(KEYWORDS)

/** Is used as a cover image for social networks */
export const coverImageUrl = `${baseUrl}cover.jpg`

/** Twitter account */
export const twitter: string = ''

/** Html theme color */
export const themeColor = '#ee750f'
