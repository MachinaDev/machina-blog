import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import DropMenuItem from './DropMenuItem'
import {
  CodeIcon,
  HomeIcon,
  Pencil1Icon,
  DiscIcon,
  HamburgerMenuIcon,
  FrameIcon,
  LaptopIcon,
  BarChartIcon,
  DrawingPinIcon,
  Link2Icon,
  QuoteIcon,
  CalendarIcon,
  PersonIcon,
  ArchiveIcon,
  TwitterLogoIcon,
  RocketIcon,
} from '@radix-ui/react-icons'
import useSound from 'use-sound'

export default function DropMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleIcon = () => {
    setIsOpen(!isOpen)
  }

  const [ThemeSound] = useSound('/static/sounds/page-change.mp3')

  return (
    <Menu as="div" className="relative z-10 inline-block text-left ">
      <div>
        <Menu.Button className=" ml-2 cursor-pointer rounded-full bg-zinc-300 ring-zinc-400 transition-all hover:bg-violet-400 hover:ring-1 dark:bg-zinc-700 dark:ring-violet-700 dark:hover:bg-violet-600">
          <motion.div
            className="flex h-8 w-8 items-center justify-center p-2"
            whileTap={{
              scale: 0.5,
            }}
            transition={{ duration: 0.1, ease: 'easeIn' }}
            aria-label="Toggle List Menu"
            type="button"
          >
            {isOpen ? (
              <HamburgerMenuIcon className="h-4 w-4" />
            ) : (
              <HamburgerMenuIcon className="h-4 w-4" />
            )}
          </motion.div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        afterEnter={() => {
          toggleIcon()
          ThemeSound()
        }}
        afterLeave={() => {
          toggleIcon()
          ThemeSound()
        }}
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-zinc-300 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-zinc-700 dark:bg-zinc-800 ">
          <div className="py-1">
            <Link href="/" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <HomeIcon className="mr-4 mt-0.5" /> Accueil
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/blog" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <Pencil1Icon className="mr-4 mt-0.5" /> Blog
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/snippets" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <CodeIcon className="mr-4 mt-0.5" /> Snippets
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/projects" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <ArchiveIcon className="mr-4 mt-0.5" /> Projets
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/about" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <PersonIcon className="mr-4 mt-0.5" /> A propos
                </div>
              </DropMenuItem>
            </Link>
          </div>
          <div className="py-1">
            <Link href="/contact" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <Link2Icon className="mr-4 mt-0.5" /> Contact
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/tags" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <FrameIcon className="mr-4 mt-0.5" /> Tags
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/uses" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <LaptopIcon className="mr-4 mt-0.5" /> Matos
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/now" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <DiscIcon className="mr-4 mt-0.5" /> Now
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/stats" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <BarChartIcon className="mr-4 mt-0.5" /> Stats
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/journey" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <RocketIcon className="mr-4 mt-0.5" /> Mon Chemin
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/recommends" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <DrawingPinIcon className="mr-4 mt-0.5" /> Recommandations
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/quotes" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <QuoteIcon className="mr-4 mt-0.5" /> Citations
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/activity" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <CalendarIcon className="mr-4 mt-0.5" /> Apprentissages
                </div>
              </DropMenuItem>
            </Link>
            <Link href="/tweets" passHref>
              <DropMenuItem>
                <div className="flex flex-row">
                  <TwitterLogoIcon className="mr-4 mt-0.5" /> Tweets
                </div>
              </DropMenuItem>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
