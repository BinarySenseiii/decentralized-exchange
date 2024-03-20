import React, {useMemo} from 'react'
import {Separator} from '../ui/separator'
import {useSwapQuery} from '~/context/swap-context'
import {useTokenPrices} from '~/api/hooks/next-server'

const SummaryItem = ({
  label,
  value,
  muted = false,
}: {
  label: string
  value: string
  muted?: boolean
}) => (
  <div className="flex items-center gap-2 text-xs justify-between text-muted-foreground">
    <h3 className="font-medium">{label}</h3>
    <span className={!muted ? 'text-black dark:text-white' : 'text-inherit'}>{value}</span>
  </div>
)

const SwapSummary = () => {
  const {from, to} = useSwapQuery()
  const {data, isLoading} = useTokenPrices(from.token.address!, to.token.address!)
  const summary = useMemo(
    () => [
      {id: 1, label: 'Commission', value: '$2.48'},
      {id: 2, label: 'Total Expected After Fees', value: '$714.98'},
      {id: 3, label: "The Least You'll Get At 1.00% Slippage", value: '$710.54'},
    ],
    [],
  )
  return (
    <div className="space-y-4 mt-3 mb-4">
      <SummaryItem
        label="Conversion Rate"
        value={`1 ${from.token.name} = ${isLoading ? 0 : (1 * data?.ratio!).toFixed(3)} ${
          to.token.name
        }`}
        muted
      />

      <Separator />

      <div className="space-y-2">
        {summary.map(s => (
          <SummaryItem key={s.id} {...s} />
        ))}
      </div>
    </div>
  )
}

export default SwapSummary
