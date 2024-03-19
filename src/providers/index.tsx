'use client'
import React, {ReactNode} from 'react'
import {ThemeProvider} from './theme-provider'
import {TooltipProvider} from '~/components/ui/tooltip'
import ReactQueryProvider from './react-query'

const Providers = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ReactQueryProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  )
}

export default Providers
