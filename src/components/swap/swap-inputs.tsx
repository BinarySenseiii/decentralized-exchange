'use client'
import Image from 'next/image'
import {useSwapActions, useSwapQuery} from '~/context/swap-context'
import {CkPartialToken} from '~/types'
import {Input} from '../ui/input'
import SwapToggle from './swap-toggle'

const SwapInputs = () => {
  const {from, to} = useSwapQuery()
  const {onQueryChange} = useSwapActions()

  return (
    <div className="space-y-2 relative flex flex-col items-center w-full">
      <p className="text-right text-muted-foreground text-xs w-full pr-1">
        Current Balance = 20ETH
      </p>
      <Input value={from.inputValue} onChange={e => onQueryChange(e, 'from')}>
        <Token token={from.token} onClick={() => {}} />
      </Input>
      <SwapToggle />
      <Input value={to.inputValue} onChange={e => onQueryChange(e, 'to')}>
        <Token token={to.token} onClick={() => alert('h')} />
      </Input>
    </div>
  )
}

export default SwapInputs

const Token = ({token, onClick}: {token: CkPartialToken; onClick: () => void}) => {
  return (
    <div
      className="flex items-center cursor-pointer gap-2 absolute top-2/4 right-4 transform -translate-y-2/4"
      onClick={onClick}
    >
      <Image
        src={token?.logoURI!}
        alt={token?.name!}
        height={20}
        width={20}
        className="size-[20px]"
      />
      <span>{token?.name}</span>
    </div>
  )
}
