import type {Metadata} from 'next'
import {fontSans} from '~/components/ui/fonts'
import {cn} from '~/lib/utils'
import Providers from '~/providers'
import './globals.css'
import {siteConfig} from '~/constant/config'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
