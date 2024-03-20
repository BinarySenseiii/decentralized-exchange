'use client'
import React, {ReactNode} from 'react'
import {ThemeProvider} from './theme-provider'
import {TooltipProvider} from '~/components/ui/tooltip'
import Web3Provider from './web3-provider'

const Providers = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Web3Provider>
        <TooltipProvider>{children}</TooltipProvider>
      </Web3Provider>
    </ThemeProvider>
  )
}

export default Providers
