import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO
        title={`Projects - ${siteMetadata.author}`}
        description="Une liste de projets perso que j'ai développé"
      />
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Mes Projets
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Une liste non exhaustive des projets construits au fil des années.
          </p>
          <p className="text-sm leading-7 text-gray-700 dark:text-gray-600">
            Disclaimer: La plupart de ces projets ne sont pas aboutis. Ils me permettent surtout de
            tester et d'expérimenter. Il reste beaucoup de travail pour chacun d'entre eux pour
            qu'il soit envisageable de les mettre en production.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                github={d.github}
                tech1={d.tech1}
                tech2={d.tech2}
                tech3={d.tech3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
