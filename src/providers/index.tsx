'use client'
import React, {ReactNode} from 'react'
import {ThemeProvider} from './theme-provider'
import {TooltipProvider} from '~/components/ui/tooltip'

const Providers = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  )
}

export default Providers
