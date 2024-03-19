import {ClassValue} from 'clsx'
import Image from 'next/image'
import {FC} from 'react'
import {cn} from '~/lib/utils'
import {CkPartialToken} from '~/types'

interface ISwapToken {
  token: CkPartialToken
  className?: ClassValue
  onClick?: () => void
}
const SwapToken: FC<ISwapToken> = ({token, className, onClick}) => {
  return (
    <div
      className={cn(
        'flex items-center cursor-pointer gap-2 absolute top-2/4 right-4 transform -translate-y-2/4',
        className,
      )}
      onClick={onClick}
    >
      <Image
        src={token?.logoURI!}
        alt={token?.name!}
        height={20}
        width={20}
        className={'size-[20px]'}
      />
      <span>{token?.name}</span>
    </div>
  )
}

export default SwapToken
