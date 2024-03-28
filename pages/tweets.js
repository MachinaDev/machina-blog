import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Tweet from '@/components/Tweet'
import { getTweets } from '@/lib/twitter'

export async function getStaticProps() {
  try {
    const tweets = await getTweets([
      '1308509070140162048',
      '1341090253864542208',
      '989142253468708864',
      '1341962177272537089',
      '1589662494804410368',
      '1589556315869032450',
      '1588234690636423172',
      '1411386238045655042',
      '992629481578745856',
      '1571861311239208964',
      '1588750686006947840',
      '1329005591231139841',
      '1247931726128656387',
      '1240617167374233600',
      '1233532930795999234',
      '1242461536234471425',
      '1334334544598740994',
      '1184054493568217093',
      '1181467115666264065',
      '1334528781139259400',
      '1259419917599866882',
      '826528907381739520',
      '1144983309669343232',
      '935857414435495937',
      '1239908824682815490',
      '1591793289547898881',
      '1402689156434776069',
      '997895977179721728',
      '1255040870421839874',
      '1273178557531987968',
    ])

    return {
      props: {
        tweets,
        loading: false, // Indique que le chargement a réussi
      },
    }
  } catch (error) {
    console.error('Failed to fetch tweets:', error)
    return {
      props: {
        tweets: [],
        loading: true,
        error: error.message,
      },
    }
  }
}

export default function Tweets({ tweets }) {
  return (
    <>
      <PageSEO
        title={`Tweets - ${siteMetadata.author}`}
        description="Une collection de Tweets qui m'inspirent ou qui me font rire."
      />
      <div className="mx-auto max-w-2xl">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Tweets
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Petite collection de Tweets que j'ai adoré. J'utilise pas mal Twitter et je voulais un
            endroit où je pouvais partager publiquement les tweets qui m'inspirent ou qui me font
            rire.
          </p>
        </div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </div>
    </>
  )
}
