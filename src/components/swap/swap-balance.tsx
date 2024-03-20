'use client'
import {FC} from 'react'
import {useBalance} from 'wagmi'
import {Skeleton} from '../ui/skeleton'
import {useIsClient} from '@uidotdev/usehooks'

interface ISwapProps {
  address: `0x${string}` | undefined
}

export const WalletBalance: FC<ISwapProps> = ({address}) => {
  const {data} = useBalance({address})
  const isClient = useIsClient()

  return isClient ? (
    data && (
      <p className="text-right text-muted-foreground text-xs w-full pr-1">
        Current Balance = {`${data?.formatted}${data?.symbol}`}
      </p>
    )
  ) : (
    <Skeleton className="w-[150px] h-[20px] ml-auto rounded-md" />
  )
}
