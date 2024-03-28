import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-3 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="md:border-l-2 md:px-6">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
              Tu as dû te planter Visiteur ! Cette page n'existe pas !
            </p>
            <p className="mb-4">
              Je pense que tu as dû te tromper sur l'URL de cette page. Regarde dans la barre de ton
              navigateur et peut être que tu y verras une petite erreur.
            </p>
            <p>
              Mais sinon ne t'en fais pas, tu peux retourner sur l'accueil et trouver ce que tu
              cherches à partir de là
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 grid place-items-center">
        <Link href="/">
          <button aria-label="Scroll To Top" type="button" className="pushable">
            <span className="shadow"></span>
            <span className="edgeblue"></span>
            <span className="frontblue">Retourner sur l'accueil</span>
          </button>
        </Link>
      </div>
    </>
  )
}
