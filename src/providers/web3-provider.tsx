import {ConnectKitProvider} from 'connectkit'
import {ReactNode} from 'react'
import {WagmiProvider} from 'wagmi'
import ReactQueryProvider from './react-query'
import {config} from '~/config'
import {useTheme} from 'next-themes'
import {fontSans} from '~/components/ui/fonts'

const Web3Provider: React.FC<{children: ReactNode}> = ({children}) => {
  const {theme} = useTheme()
  return (
    <WagmiProvider config={config}>
      <ReactQueryProvider>
        <ConnectKitProvider
          theme="auto"
          mode={theme as 'light' | 'dark'}
          customTheme={{
            '--ck-font-family': fontSans.style.fontFamily,
          }}
        >
          {children}
        </ConnectKitProvider>
      </ReactQueryProvider>
    </WagmiProvider>
  )
}

export default Web3Provider
