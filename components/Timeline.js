import { FaGraduationCap, FaBlackTie } from 'react-icons/fa'
import { AiOutlineCode, AiFillDollarCircle } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase, HiBriefcase } from 'react-icons/hi'
import { FaBaby } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiDoorClosedLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { IoRocket } from 'react-icons/io5'

export default function Timeline() {
  return (
    <div>
      <ol className="relative ml-6 mt-6 border-l border-zinc-400 dark:border-gray-800 ">
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className=" absolute -left-3 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-green-900 dark:ring-gray-900">
            <FaBlackTie className="animate-none" />
          </span>
          <h3 className="flex items-center text-base  font-semibold text-gray-900 dark:text-white">
            Consultant IT & Fullstack Web Developer
            <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              Actuellement
            </span>
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Novembre 2021 - Full Time
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Pour les petits et les gros projets. Je vous accompagne pour réaliser votre vision. La
            mienne, c'est de travailler AVEC vous. Le but de cette collaboration est que nous
            restions tous meilleurs qu'avant.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-red-400 dark:ring-gray-900">
            <AiFillDollarCircle />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Cession entreprise Digital Technologies
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Avril 2022
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Après 4 ans de dur labeur et de beaucoup de plaisir, je cède ma participation.
          </p>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Il est temps de me consacrer à temps plein à ce que j'aime : le Numérique'.
          </p>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Titre Professionnel Développeur d'application Web côté Back
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Janvier 2022
          </time>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-green-500 dark:ring-gray-900">
            <IoRocket />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Création de l'entreprise MachinaDev en Freelance
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Novembre 2021 - Part Time
          </time>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Titre Professionnel Développeur d'application Web côté Front
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Janvier 2021
          </time>
        </li>
        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-400 dark:ring-gray-900">
            <FaGraduationCap />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Certification Opquast Qualité Web
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Janvier 2021
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Score 895/1000.
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-yellow-500 dark:ring-gray-900">
            <TbDeviceDesktopAnalytics />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Formation Fullstack Développeur Web chez O'Clock
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Juin 2020
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Changement de cap, on revient au fondamentaux.
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white px-4 py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-green-500 dark:ring-gray-900">
            <IoRocket />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">
            Création de l'entreprise Digital Technologies
          </h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Juillet 2018
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Lancement de l'entreprise qui va changer ma vie.
          </p>
        </li>

        <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
            <HiBriefcase />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">IRP Auto</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Septembre 2017
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Commercial en produits et service de santé
          </p>
        </li>
        <li className="mb-2 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-200 ring-8 ring-white dark:bg-red-900 dark:ring-gray-900">
            <HiBriefcase />
          </span>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Rex Rotary</h3>
          <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Novembre 2011
          </time>
          <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
            Commercial en produits et service IT
          </p>
        </li>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                <div className="text-small ml-1.5 flex">
                  <HiChevronDown
                    className={`h-6 w-6 text-gray-600  ${open ? 'rotate-180 transform ' : ''}`}
                  />
                </div>
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-400 ease-in-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-400 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel>
                  {' '}
                  <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-200 ring-8 ring-white dark:bg-purple-900 dark:ring-gray-900">
                      <RiDoorClosedLine />
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Bachelor's Degree en Business & Management
                    </h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Juin 2010
                    </time>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Herriot Watt University - Edimbourg
                    </p>
                  </li>
                  <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-fuchsia-200 ring-8 ring-white dark:bg-fuchsia-900 dark:ring-gray-900">
                      <AiOutlineCode />
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Mon premier bout de code
                    </h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Mars 2006
                    </time>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Deuxième respiration. J'écris mon premier programme en Python.
                    </p>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      print('Hello, world!')
                    </p>
                  </li>
                  <li className="mb-4 ml-8 rounded-md border border-gray-100 bg-white  px-4  py-4 shadow-sm shadow-gray-300 dark:border-zinc-900 dark:bg-zinc-900 dark:shadow-none">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                      <FaBaby />
                    </span>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Naissance
                    </h3>
                    <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      27 Décembre 1989
                    </time>
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                      Première respiration.
                    </p>
                  </li>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </ol>
    </div>
  )
}
