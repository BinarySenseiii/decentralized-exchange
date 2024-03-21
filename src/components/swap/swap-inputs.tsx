'use client'
import {useDebounce} from '@uidotdev/usehooks'
import {memo, useCallback, useEffect} from 'react'
import {formatUnits, parseUnits} from 'viem'
import {useAccount} from 'wagmi'
import {useSwapTokenPrices, useTokenPrices} from '~/api/hooks/next-server'
import {useSwapActions, useSwapQuery} from '~/context/swap-context'
import {Input} from '../ui/input'
import {WalletBalance} from './swap-balance'
import SwapModal from './swap-modal'
import SwapToggle from './swap-toggle'
import SwapToken from './swap-token'

const SwapInputs = () => {
  const {from, to} = useSwapQuery()
  const {onQueryChange, onPriceUpdate} = useSwapActions()
  const {address} = useAccount()
  const {data} = useTokenPrices(from.token.address!, to.token.address!)

  const debouncedFromInput = useDebounce(from.inputValue, 500)
  const sellAmount = parseUnits(debouncedFromInput, from.token.decimals!).toString()

  const {data: swapPrices} = useSwapTokenPrices({
    sellToken: from.token.symbol!,
    buyToken: to.token.symbol!,
    sellAmount: sellAmount === '0' ? parseUnits('1', 6).toString() : sellAmount,
  })

  const pricesInit = useCallback(() => {
    if (!swapPrices) return
    onPriceUpdate(swapPrices)
  }, [onPriceUpdate, swapPrices])

  useEffect(() => {
    pricesInit()
  }, [pricesInit])

  return (
    <main className="space-y-2 relative flex flex-col items-center w-full">
      <WalletBalance address={address} />

      <Input
        disabled={!swapPrices}
        placeholder="0.0"
        value={from.inputValue}
        onChange={e => {
          onQueryChange(e.target.value, 'from')

          if (swapPrices) {
            const tx = formatUnits(BigInt(parseInt(swapPrices.buyAmount)), to.token.decimals!)
            onQueryChange(tx, 'to')
          } else {
            onQueryChange('', 'to')
          }
        }}
      >
        <SwapModal action="from">
          <SwapToken token={from.token} />
        </SwapModal>
      </Input>
      <SwapToggle />
      <Input
        key={swapPrices?.buyAmount!}
        disabled
        placeholder="0.0"
        value={to.inputValue}
        onChange={e => onQueryChange(e.target.value, 'to')}
      >
        <SwapModal action="to">
          <SwapToken token={to.token} />
        </SwapModal>
      </Input>
    </main>
  )
}

export default memo(SwapInputs)
