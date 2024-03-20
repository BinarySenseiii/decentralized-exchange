'use client'
import {useSwapActions, useSwapQuery} from '~/context/swap-context'
import {Input} from '../ui/input'
import SwapModal from './swap-modal'
import SwapToggle from './swap-toggle'
import SwapToken from './swap-token'

const SwapInputs = () => {
  const {from, to} = useSwapQuery()
  const {onQueryChange} = useSwapActions()

  return (
    <div className="space-y-2 relative flex flex-col items-center w-full">
      <p className="text-right text-muted-foreground text-xs w-full pr-1">
        Current Balance = 20ETH
      </p>
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
    </div>
  )
}

export default SwapInputs
