// Components
import Hero from '@/components/data-display/Hero'
import PageLayout from '@/components/layout/PageLayout'
// Config
import { PAGE_ROUTES } from '@/modules/navigation/config'

/** The History page of the application */
export default function HistoryPage () {
  return (
    <PageLayout page={PAGE_ROUTES.history}>
      <section>
        <Hero
          heading='Nuestra historia'
          image={PAGE_ROUTES.history}
        />
        <div className='max-w-8xl px-5% md:px-11% mx-auto my-24 text-center md:text-left space-y-6'>
          <p>
            Hace más de una década, un grupo de jóvenes emprendedores se unieron para fundar
            una empresa de consultoría de negocios y marketing llamada D55. Su visión era
            ayudar a las personas a alcanzar su máximo potencial a través de estrategias
            efectivas de marketing y negocios.
          </p>
          <p>
            Desde sus humildes comienzos, D55 se ha dedicado a brindar soluciones creativas
            a los desafíos empresariales de sus clientes. Con el tiempo, la empresa ha crecido
            gracias a la calidad de sus servicios y al compromiso inquebrantable de su equipo.
          </p>
          <p>
            A lo largo de su trayectoria, D55 ha trabajado con una amplia variedad de empresas,
            desde pequeñas startups hasta grandes corporaciones, y ha ayudado a cada una de
            ellas a alcanzar sus metas y objetivos.
          </p>
          <p>
            Sin embargo, el éxito de D55 no ha sido sencillo, en el camino han habido
            momentos de esafío y dificultad. Pero en cada encrucijada, el equipo ha
            perseverado, aprendido y se ha fortalecido, lo que impulsó a la empresa
            a un nivel aún más alto de éxito y crecimiento.
          </p>
          <p>
            Hoy en día, D55 continúa enfocando sus esfuerzos en el cliente y sigue siendo
            impulsada por la misma visión de ayudar a las empresas a alcanzar su máximo
            potencial, una misión que seguirán cumpliendo durante muchos años más.
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
