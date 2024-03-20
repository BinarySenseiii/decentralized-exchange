'use client'
import {useIsClient, useMediaQuery} from '@uidotdev/usehooks'
import {ConnectKitButton} from 'connectkit'
import Logo from './logo'
import ThemeToggleBtn from './theme-toggle'
import {Skeleton} from './ui/skeleton'

const Navbar = () => {
  const isClient = useIsClient()
  const isSmallDevice = useMediaQuery('only screen and (max-width : 768px)')
  return (
    <nav className="container mb-4 h-14 flex items-center justify-between shadow-sm border-b">
      <Logo />

      <div className="flex items-center gap-2">
        <ThemeToggleBtn />
        {isClient ? (
          <ConnectKitButton showAvatar={!isSmallDevice} />
        ) : (
          <Skeleton className="w-[150px] h-[30px] ml-auto rounded-md" />
        )}
      </div>
    </nav>
  )
}

export default Navbar
