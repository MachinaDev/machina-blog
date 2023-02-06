import siteMetadata from '@/data/siteMetadata'
import movieData from '@/data/movieData'
import RecommendCard from '@/components/RecommendCard'
import BookRecommendCard from '@/components/BookRecommendCard'
import { PageSEO } from '@/components/SEO'
import { getCurrentlyReading, getReviews } from '@/lib/goodreads'
import NowReading from '@/components/NowReading'

export async function getStaticProps() {
  const reviews = await getReviews({ limit: 10 })
  const currentlyReading = await getCurrentlyReading({ limit: 2 })

  return { props: { reviews, currentlyReading } }
}

export default function Recommends(reviews) {
  let reviewsData = reviews['reviews']
  let reviewsData1 = reviews['currentlyReading']

  return (
    <>
      <PageSEO
        title={`Recommendations - ${siteMetadata.author}`}
        description="Les films, séries et livres que je recommande"
      />
      <div className="mx-auto max-w-3xl">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Recommendations
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Une liste des livres, films ou séries que je vous recommande chaudement.
          </p>
        </div>
        <div className="space-y-2 pt-3 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            <span role="img" className="mr-4" aria-label="wave">
              📚
            </span>
            Livre
          </h2>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Un petit tour de ma bibliothèque.
          </p>
        </div>
        <div className="container py-6">
          <div className="-m-2">
            {reviewsData1.map((r) => (
              <NowReading
                key={r.url}
                title={r.title}
                description={r.author}
                href={r.url}
                rating={r.rating}
              />
            ))}
          </div>
          <div className="-m-4 flex flex-wrap">
            {reviewsData.map((r) => (
              <BookRecommendCard
                key={r.url}
                title={r.title}
                description={r.author}
                href={r.url}
                rating={r.rating}
              />
            ))}
          </div>
        </div>
        <div className="container py-7">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
              <span role="img" className="mr-4" aria-label="wave">
                🍿
              </span>
              Films
            </h2>
            <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
              La Vie est un film.
            </p>
          </div>
          <div className="container py-4">
            <div className="-m-4 flex flex-wrap">
              {movieData.map((d) => (
                <RecommendCard
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  tags={d.tags}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
