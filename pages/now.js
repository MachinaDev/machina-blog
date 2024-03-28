import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import { dayjs } from '@/components/DayJS'
import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import bookOfTheMoment from '@/data/bookOfTheMoment'
import fetcher from 'lib/fetcher'
import useSWR from 'swr'
import { FaCloudShowersHeavy } from 'react-icons/fa'
import {
  BsCloudDrizzleFill,
  BsCloudsFill,
  BsCloudLightningFill,
  BsCloudSnowFill,
  BsCloudFogFill,
  BsMoonFill,
  BsClock,
  BsSunFill,
  BsFillCloudSunFill,
  BsFillCloudMoonFill,
  BsFillCloudFill,
} from 'react-icons/bs'

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=45.65&lon=0.15&appid=1b3c10c18e894eaf1fd63eedde53fa54&units=metric'
  )
  const data = await response.json()

  return {
    props: { data },
  }
}

export default function Now(currentInfo) {
  //   const { data } = useSWR('/api/now-playing', fetcher)

  let weatherData = currentInfo['data']
  //   console.log(`Log de weatherData dans :`, weatherData)

  const { temp: temperature } = weatherData.main
  const { icon: weatherIcon, description: weatherDescription } = weatherData.weather[0]

  const icons = {
    _01d: <BsSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _01n: <BsMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02d: <BsFillCloudSunFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _02n: <BsFillCloudMoonFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03d: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _03n: <BsFillCloudFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04d: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _04n: <BsCloudsFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09d: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _09n: <BsCloudDrizzleFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10d: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _10n: <FaCloudShowersHeavy className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11d: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _11n: <BsCloudLightningFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13d: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _13n: <BsCloudSnowFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50d: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
    _50n: <BsCloudFogFill className="mb-0.5 inline h-3 w-3 hover:animate-spin" />,
  }

  var year = new Date().getFullYear()
  var month = new Date().getMonth()
  var date = new Date().getDate()
  var hour = new Date().getHours()
  var minute = new Date().getMinutes()
  var second = new Date().getSeconds()
  const now = () => dayjs().tz()
  const format = 'z'
  const [TodayDate, setDate] = useState(now())

  useEffect(() => {
    const timer = setInterval(() => setDate(now()), 1000)
    return () => clearInterval(timer)
  }, [])

  let MaximeBirthDate = '1989-12-27'
  let birthDate = new Date(MaximeBirthDate)

  let MaximeAge = year - birthDate.getFullYear()

  let MaximeMonth = 0
  if (month >= birthDate.getMonth()) MaximeMonth = month - birthDate.getMonth()
  else {
    MaximeAge--
    MaximeMonth = 12 + month - birthDate.getMonth()
  }

  let MaximeDay = 0
  if (date >= birthDate.getDate()) MaximeDay = date - birthDate.getDate()
  else {
    MaximeMonth--
    MaximeDay = 31 + date - birthDate.getDate()
    if (MaximeMonth < 0) {
      MaximeMonth = 11
      MaximeAge--
    }
  }

  let age = {}
  age = {
    years: MaximeAge,
    months: MaximeMonth,
    days: MaximeDay,
  }

  let ageString = ''
  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString = age.years + ' ans, ' + age.months + ' mois et ' + age.days + ' jours'
  else if (age.years == 0 && age.months == 0 && age.days > 0)
    ageString = 'Seulement ' + age.days + ' jours'
  else if (age.years > 0 && age.months == 0 && age.days == 0)
    ageString = age.years + ' ans. Joyeux Anniversaire !!'
  else if (age.years > 0 && age.months > 0 && age.days == 0)
    ageString = age.years + ' ans et ' + age.months + ' mois'
  else if (age.years == 0 && age.months > 0 && age.days > 0)
    ageString = age.months + ' mois et ' + age.days + ' jours'
  else if (age.years > 0 && age.months == 0 && age.days > 0)
    ageString = age.years + ' ans et' + age.days + ' jours'
  else if (age.years == 0 && age.months > 0 && age.days == 0) ageString = age.months + ' mois'
  else ageString = "Bienvenue sur Terre petite chose! <br> C'est ton premier jour!"

  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="Qu'est ce que je fais en ce moment"
        url={siteMetadata.url}
      />
      <div>
        <div className="my-2">
          <h3>Où je suis et ce que je suis en train de faire ?</h3>
          <div className=" mt-4 mb-6 text-xs text-neutral-700 dark:text-neutral-400">
            Cette page a été automatiquement générée le {date}-{month}-{year} à {hour}&nbsp;heures{' '}
            {minute}&nbsp;minutes
          </div>
        </div>
        {/* Misc */}
        <div>
          <div className="flex justify-between gap-5">
            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Où:</span> <span>Angoulême, France</span>
              <br />
              <span className="ml-2 font-semibold">Météo:</span>{' '}
              <span>
                <a
                  href="https://weather.com/fr-FR/temps/aujour/l/aa6dbc3874500d4fd073b70ad6f83ce8379d116cb3303a037bb245d8149aa9fd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-1 hover:underline"
                >
                  {icons[`_${weatherIcon}`]} Actuellement <b>{parseInt(temperature)}°C</b>
                  {' avec '}
                  <span>{weatherDescription}</span>
                </a>
              </span>
            </div>

            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Livre du moment:</span>{' '}
              <a
                href={bookOfTheMoment.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-1 hover:underline"
              >
                <span>
                  <strong>{bookOfTheMoment.title}</strong>
                </span>{' '}
                de{' '}
                <span>
                  <em>{bookOfTheMoment.author}</em>
                </span>
              </a>
              <br />
              <span className="ml-2 font-semibold">Age:</span> <span>{ageString}</span>
            </div>
          </div>

          <div className="-my-6 flex justify-between gap-5">
            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              <span className="ml-2 font-semibold">Date:</span>{' '}
              <span>{TodayDate.format('DD/MM/YYYY')}</span>
              <br />
              <span className="ml-2 font-semibold">Heure:</span>{' '}
              <span>
                <BsClock className="mb-0.5 inline h-3 w-3 hover:animate-spin" />{' '}
                {TodayDate.locale('fr').format('HH:mm A')}
              </span>
            </div>

            <div className="mt-2 mb-10 w-1/2 rounded-md border border-gray-600 p-1 text-sm dark:border-gray-200">
              {/* <span className="ml-2 font-semibold">En train d'écouter:</span>{' '}
              <span>
                {data?.songUrl ? (
                  <a
                    href={data.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-1 hover:underline"
                  >
                    <span>{data.title}</span>
                  </a>
                ) : (
                  <span>Rien pour l'instant</span>
                )}
              </span>
              <br /> */}
              <span className="ml-2 font-semibold">Boisson:</span> <span>Infusion Bergamote</span>
            </div>
          </div>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>
        {/* Work */}
        <div className="pb-4">
          <p>Je travaille en tant que Consultant IT & Développeur Web Fullstack.</p>
          <br />
          <p>
            Là où je prends le plus de plaisir, c'est de partir de zéro. Une feuille blanche, un
            désir, et de mettre tout en oeuvre pour que la technique tende vers ce désir. Comment
            amener mon client vers sa destination de rêve, pour plus de clients, plus d'ergonomie ou
            juste pour faire mieux que mieux. Si je peux coder, c'est encore mieux. J'adore faire du
            NextJS mélangé avec du Tailwind ou du Chakra, propulsé par un truc du genre Firebase ou
            du Prisma. Si t'as rien compris, c'est pas grave, je disais juste que j'adore coder.{' '}
          </p>
          <br />
          <p>
            Je développe de plus en plus avec React Native, même si côté maintenance, c'est parfois
            Verdun.
          </p>
          <br />
          <br />
          <p>
            J'adore apprendre, et je pense que mon prochain plaisir, ça sera du Rust ou du Go. Pour
            le fun et aussi pour le cryptoverse Solana. Je vais sûrement{' '}
            <Link
              href={'https://www.rust-lang.org/learn'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              commencer par là.
            </Link>
            .
          </p>
        </div>
        <div className="justify-center text-center text-2xl font-medium text-gray-200 dark:text-gray-600">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            Je construis ce jardin numérique lentement, en essayant de partager ce que j'aime ou ce
            que je trouve intéressant pour toutes les âmes qui se sont perdues sur mon site
            internet.&nbsp;
            <Link
              href={'https://www.swyx.io/learn-in-public'}
              className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
            >
              Cet article
            </Link>{' '}
            m'a donné envie de transformer ce portfolio en un blog.
          </p>
          <br />
          <br />
          <p>
            Prochainement, je vais aussi réaliser un article sur l'utilisation d'Obsidian, un outil
            magique qui vous permettra de décupler assez facilement votre workflow.
          </p>
        </div>
        <div className="mt-3 text-sm">
          Pour ceux qui n'ont pas l'habitude de ce genre de page, je vous propose ce lien qui vous
          montrera ce concept que j'adore{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline no-underline dark:text-gray-100 hover:dark:text-gray-100"
          >
            nownownow.com
          </Link>
          .
        </div>
      </div>
    </>
  )
}
