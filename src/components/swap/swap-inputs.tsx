'use client'
import {useAccount} from 'wagmi'
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

  return (
    <main className="space-y-2 relative flex flex-col items-center w-full">
      <WalletBalance address={address} />

      <Input placeholder="0.0" value={from.inputValue} onChange={e => onQueryChange(e, 'from')}>
        <SwapModal action="from">
          <SwapToken token={from.token} />
        </SwapModal>
      </Input>
      <SwapToggle />
      <Input placeholder="0.0" value={to.inputValue} onChange={e => onQueryChange(e, 'to')}>
        <SwapModal action="to">
          <SwapToken token={to.token} />
        </SwapModal>
      </Input>
    </main>
  )
}

export default SwapInputs
