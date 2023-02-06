import { currentDayName } from '@/lib/utils/dateUtils'
import Link from './Link'
import NowPlayingFooter from './NowPlayingFooter'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        <div>
          <NowPlayingFooter />
        </div>
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href="https://machina-dev.com" className="link-underline">
              Maxime NOEL{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/kamelott" className="link-underline">
              La citation du {currentDayName()} !
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link href="https://machina-dev.com" className="link-underline">
              Maxime{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
