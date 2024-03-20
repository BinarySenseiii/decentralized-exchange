import {getDefaultConfig} from 'connectkit'
import {createConfig} from 'wagmi'
import {arbitrum, mainnet, polygon, sepolia} from 'wagmi/chains'
import {siteConfig} from './constant/config'

export const config = createConfig(
  getDefaultConfig({
    appName: siteConfig.title,
    appDescription: siteConfig.description,
    chains: [
      mainnet,
      polygon,
      arbitrum,
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    ],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  }),
)

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
