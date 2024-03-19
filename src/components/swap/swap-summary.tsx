import React, {useMemo} from 'react'
import {Separator} from '../ui/separator'

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
    <span className={!muted ? 'text-white' : 'text-inherit'}>{value}</span>
  </div>
)

const SwapSummary = () => {
  const summary = useMemo(
    () => [
      {id: 1, label: 'Commission', value: '$2.48'},
      {id: 1, label: 'Total Expected After Fees', value: '$714.98'},
      {id: 1, label: "The Least You'll Get At 1.00% Slippage", value: '$710.54'},
    ],
    [],
  )
  return (
    <div className="space-y-4 mt-3 mb-4">
      <SummaryItem label="Conversion Rate" value="1 BUSD = 0.799059 MATIC" muted />

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
