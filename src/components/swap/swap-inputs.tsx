'use client'
import Image from 'next/image'
import {ChangeEvent, useState} from 'react'
import {useTokenList} from '~/api/hooks/coin-gecko'
import {CkPartialToken} from '~/types'
import {Input} from '../ui/input'
import SwapToggle from './swap-toggle'

const SwapInputs = () => {
  const {data: tokens} = useTokenList()

  const token = (name: string) => tokens?.filter(t => t.name === name)[0]

  const [from, setFrom] = useState({inputValue: '0.2', token: token('USDC')})
  const [to, setTo] = useState({inputValue: '0.2', token: token('WETH')})

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    if (e.target.name === 'from') {
      setFrom(prev => ({...prev, inputValue}))
    } else {
      setTo(prev => ({...prev, inputValue}))
    }
  }

  return (
    <div className="space-y-2 relative flex flex-col items-center w-full">
      <p className="text-right text-muted-foreground text-xs w-full pr-1">
        Current Balance = 20ETH
      </p>
      <Input name="from" value={from.inputValue} onChange={onInputChange}>
        <Token token={from.token} onClick={() => {}} />
      </Input>
      <SwapToggle />
      <Input name="to" value={to.inputValue} onChange={onInputChange}>
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
