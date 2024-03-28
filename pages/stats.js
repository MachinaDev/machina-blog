// import Link from '@/components/Link'
import Analytics from 'components/metrics/Analytics'
import Twitter from '@/components/metrics/Twitter'
import GithubPersonal from '@/components/metrics/GithubPersonal'
import GitHub from '@/components/metrics/Github'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import TopTracks from '@/components/TopTracks'
import NowPlaying from '@/components/NowPlaying'

export default function Stats() {
  return (
    <>
      <PageSEO
        title={`Stats - ${siteMetadata.author}`}
        description="Statistiques de mon Blog, de mon Github, de mon Twitter et davantage"
      />
      <div className="mx-auto max-w-2xl overflow-hidden">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Statistiques
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            J'utilise ce dashboard pour analyser divers metrics sur différentes plateformes comme
            Spotify, Twitter, ou encore GitHub.
          </p>
        </div>
        <div className="pt-2">
          <div className="flex w-full flex-col">
            <GithubPersonal />
            <GitHub />
          </div>
          <div className="grid w-full grid-cols-1 gap-4 py-2  sm:grid-cols-2">
            <Twitter type="followers" />
            <Twitter type="following" />
          </div>
          <div className="grid w-full grid-cols-1 gap-4 py-2 sm:grid-cols-2">
            <Twitter type="total_tweets" />
            <Analytics />
          </div>
        </div>
        <h2 className="mb-4 mt-16 text-3xl font-bold tracking-tight text-black dark:text-white">
          Mes chansons favorites sur <span className="text-green-500">Spotify</span>
        </h2>
        <NowPlaying />

        <p className="text-md mb-4 text-gray-600 dark:text-gray-400">
          Envie de savoir ce que j'écoute ? Voici les chansons que j'écoute le plus.
        </p>
        <div></div>
        <TopTracks />
        <div className="flex flex-col pl-4 pt-10">
          <p className="text-md text-gray-600 dark:text-gray-400">
            Tu as une bonne musique à me conseiller ?
          </p>
          <a
            className="text-md mt-4 rounded-full border px-8 py-2 text-center font-normal text-gray-800 transition-colors hover:border-green-600 hover:bg-green-600 hover:text-white dark:text-gray-200"
            href="https://twitter.com/messages/compose?recipient_id=1589569329082793986&text=Salut Maxime, tu devrais essayer ce son :"
            data-screen-name="@Machina_Dev"
            target="_blank"
            rel="noreferrer noopener"
          >
            Maxime tu devrais écouter ce titre...
          </a>
        </div>
      </div>
    </>
  )
}
