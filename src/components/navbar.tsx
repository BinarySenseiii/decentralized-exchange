'use client'
import Link from 'next/link'
import React from 'react'
import ThemeToggleBtn from './theme-toggle'
import {ConnectKitButton} from 'connectkit'
import {useIsClient} from '@uidotdev/usehooks'
import {Skeleton} from './ui/skeleton'

const Navbar = () => {
  const isClient = useIsClient()
  return (
    <nav className="container mb-4 h-14 flex items-center justify-between shadow-sm border-b">
      <Link href="/">Logo</Link>

      <div className="flex items-center gap-2">
        <ThemeToggleBtn />
        {isClient ? (
          <ConnectKitButton />
        ) : (
          <Skeleton className="w-[150px] h-[30px] ml-auto rounded-md" />
        )}
      </div>
    </nav>
  )
}

export default Navbar
