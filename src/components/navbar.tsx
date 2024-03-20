import Link from 'next/link'
import React from 'react'
import ThemeToggleBtn from './theme-toggle'

const Navbar = () => {
  return (
    <nav className="container mb-4 h-14 flex items-center justify-between shadow-sm border-b">
      <Link href="/">Logo</Link>

      <div className="flex items-center gap-2">
        <ThemeToggleBtn />
      </div>
    </nav>
  )
}

export default Navbar
