'use client'
import {useIsClient} from '@uidotdev/usehooks'
import {ConnectKitButton} from 'connectkit'
import {Button} from './button'
import {Skeleton} from './skeleton'

const WalletBtn = ({onClick}: {onClick?: () => void}) => {
  const isClient = useIsClient()
  return isClient ? (
    <ConnectKitButton.Custom>
      {({isConnected, isConnecting, show}) => {
        return (
          <Button className="w-full" onClick={isConnected ? onClick : show}>
            {isConnected ? 'Swap' : isConnecting ? 'Connecting..' : 'Connect Wallet'}
          </Button>
        )
      }}
    </ConnectKitButton.Custom>
  ) : (
    <Skeleton className="w-full h-[40px]  rounded-md" />
  )
}

export default WalletBtn
