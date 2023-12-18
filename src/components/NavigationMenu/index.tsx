'use client'
import { History, Home, Settings } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavigationMenu() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-white/20 bg-background">
      <div className="mx-auto grid h-full max-w-lg grid-flow-col font-medium">
        <Link
          href="/"
          className={`
            ${
              pathname === '/'
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            }
            inline-flex flex-col items-center justify-center
          `}
        >
          <Home strokeWidth={1} />
          <span className="text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500">
            Home
          </span>
        </Link>
        <Link
          href="/history"
          className={`
            ${
              pathname === '/history'
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            }
            inline-flex flex-col items-center justify-center
          `}
        >
          <History strokeWidth={1} />
          <span className="text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500">
            History
          </span>
        </Link>
        <Link
          href="/settings"
          className={`
            ${
              pathname === '/settings'
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            }
            inline-flex flex-col items-center justify-center
          `}
        >
          <Settings strokeWidth={1} />
          <span className="text-sm text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-500">
            Settings
          </span>
        </Link>
      </div>
    </div>
  )
}
