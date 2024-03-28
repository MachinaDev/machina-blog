import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'
import { AiOutlineTwitter } from 'react-icons/ai'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Qui suis -je ?
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-full"
              blurDataURL="/static/images/SVG-placeholder.png"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex flex-col pt-3">
              <a
                className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-700 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:shadow dark:text-white"
                href="https://twitter.com/messages/compose?recipient_id=1589569329082793986&text=Salut Maxime"
                data-screen-name="@Machina_Dev"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineTwitter className="mr-2 mb-0.5 inline h-5 w-5" />
                Dis moi bonjour !
              </a>
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 text-lg dark:prose-dark xl:col-span-2">
            <p>
              <RoughNotation
                type="bracket"
                brackets={['left', 'right']}
                show={true}
                color="#FF0000"
                animationDelay={300}
                animationDuration={3000}
              >
                {text1}{' '}
              </RoughNotation>
            </p>
            <br />
            <p>
              Voilà ce que je fais{' '}
              <Link
                href={'/now'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                en ce moment
              </Link>
            </p>
            <br />
            <p className="sm:block md:hidden lg:hidden">
              J'ai une curiosité sans limites et je cherche à me dépasser chaque jours. En ce
              moment, je teste toutes les possibilités offertes par l'équipe de Vercel, en
              particulier
              <span className="font-semibold">
                {' '}
                les nouveautés des dernières releases de NextJS.{' '}
              </span>
              {/* En parrallèle{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#FBCFE8"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                je recherche un poste de développeur Front-End où je pourrais découvrir de nouveaux
                challenges.
              </RoughNotation> */}
            </p>
            <p className="hidden pt-4 text-lg leading-7 text-slate-600 dark:text-slate-300 md:block">
              J'ai une curiosité sans limites et je cherche à me dépasser chaque jours. En ce
              moment, je teste toutes les possibilités offertes par l'équipe de Vercel, en
              particulier{' '}
              <RoughNotation
                animate="true"
                type="highlight"
                show={true}
                color="#0ea4e9"
                animationDelay="1000"
                animationDuration="3000"
                strokeWidth="1"
              >
                <span className="text-black dark:text-white">
                  les nouveautés des dernières releases de NextJS.{' '}
                </span>
              </RoughNotation>
              {/* En parallèle{' '}
              <RoughNotation
                type="underline"
                show={true}
                color="#FBCFE8"
                animationDelay={1500}
                animationDuration={3000}
                multiline={true}
              >
                je recherche un poste de développeur Front-End où je pourrais découvrir de nouveaux
                challenges.
              </RoughNotation> */}
            </p>
            <br />
            <p>
              Par ailleurs, je participe activement au mouvement open source. Je passe un temps
              considérable sur Github à m'émerveiller de l'ingéniosité de l'Homme, même si c'est
              pour réinventer la roue. Si vous avez une projet en tête, et si je suis emballé,
              n'hésitez pas à me contacter.{' '}
              <Link
                href={'mailto:contact@machina-dev.com'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Mail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="ml-0.5 inline-block h-4 w-4 fill-current"
                >
                  <g data-name="Layer 2">
                    <g data-name="external-link">
                      <rect width="24" height="24" opacity="0" />
                      <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                      <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                    </g>
                  </g>
                </svg>
              </Link>{' '}
            </p>
            <br />
            <p>
              <Link
                href={'/uses'}
                className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
              >
                Un petit lien
              </Link>{' '}
              où vous trouverez le matériel et les services que j'utilise régulièrement.
            </p>
            <br />
            <h1>A propos de ce site</h1>
            <p>
              Bienvenue sur ma petite parcelle d'internet. Ce site fonctionne comme un
              blog/portfolio, un endroit où je peux partager mes idées sur ce qu'il me plaît (quand
              je le mets à jour...). Bien entendu, ce sont mes vérités et elles n'engagent que moi.
              Mais je pense qu'il est important de découvrir un individu dans sa globalité avant de
              collaborer. Cela vous donne un bref aperçu de qui je suis.
            </p>
            <p>
              Je veux quand même remercier ceux qui m'ont inspiré pour ce projet, sur la partie
              design et/ou fonctionnalité:
            </p>
            <ul>
              <li>
                <Link
                  href={'https://github.com/timlrx/tailwind-nextjs-starter-blog'}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  Timothy's Next.js and Tailwind CSS template
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="ml-0.5 inline-block h-4 w-4 fill-current"
                  >
                    <g data-name="Layer 2">
                      <g data-name="external-link">
                        <rect width="24" height="24" opacity="0" />
                        <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                        <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                      </g>
                    </g>
                  </svg>
                </Link>
                : le template que j'ai utilisé pour la base de ce site.
              </li>
              <li>
                <Link
                  href={'https://www.einargudni.com/'}
                  className="special-underline no-underline hover:text-gray-100 dark:text-gray-100 hover:dark:text-gray-100"
                >
                  Einar Guðjónsson
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="ml-0.5 inline-block h-4 w-4 fill-current"
                  >
                    <g data-name="Layer 2">
                      <g data-name="external-link">
                        <rect width="24" height="24" opacity="0" />
                        <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                        <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                      </g>
                    </g>
                  </svg>
                </Link>
                : les fonctions de de Now page, le style de navigation, les animations et d'autres
                fonctionnalités souvent invisibles pour qui n'est pas développeur.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 md:pl-16">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Mon Experience
            </h1>
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            {experienceData.map((d) => (
              <Experience
                key={d.company}
                title={d.title}
                company={d.company}
                location={d.location}
                range={d.range}
                url={d.url}
                text1={d.text1}
                text2={d.text2}
                text3={d.text3}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
