'use client'
import {useAccount} from 'wagmi'
import {useTokenPrices} from '~/api/hooks/next-server'
import {useSwapActions, useSwapQuery} from '~/context/swap-context'
import {Input} from '../ui/input'
import {WalletBalance} from './swap-balance'
import SwapModal from './swap-modal'
import SwapToggle from './swap-toggle'
import SwapToken from './swap-token'

const SwapInputs = () => {
  const {from, to} = useSwapQuery()
  const {onQueryChange} = useSwapActions()
  const {address} = useAccount()

  const {data} = useTokenPrices(from.token.address!, to.token.address!)

  return (
    <main className="space-y-2 relative flex flex-col items-center w-full">
      <WalletBalance address={address} />

      <Input
        disabled={!data}
        placeholder="0.0"
        value={from.inputValue}
        onChange={e => {
          onQueryChange(e.target.value, 'from')
          if (data) {
            onQueryChange((Number(e.target.value) * Number(data.ratio)).toFixed(3), 'to')
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
        key={data?.tokenOne}
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

export default SwapInputs
