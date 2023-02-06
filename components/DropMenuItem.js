import { forwardRef } from 'react'
import { Menu } from '@headlessui/react'
import classNames from 'classnames'

const DropMenuItem = forwardRef(({ children, href }, ref) => (
  <Menu.Item>
    {({ active }) => (
      <a
        ref={ref}
        href={href}
        className={classNames(
          active
            ? 'bg-gray-200 text-gray-700 dark:bg-zinc-700 dark:text-gray-300'
            : 'bg-white text-zinc-700 hover:bg-gray-300 dark:bg-zinc-800 dark:text-gray-200 dark:hover:bg-zinc-700',
          'block px-4 py-2 text-sm'
        )}
      >
        {children}
      </a>
    )}
  </Menu.Item>
))

DropMenuItem.displayName = 'DropMenuItem'

export default DropMenuItem
