'use client'
import {Info, RotateCcw, Settings} from 'lucide-react'
import {Popover, PopoverContent, PopoverTrigger} from '~/components/ui/popover'
import {Tooltip, TooltipContent, TooltipTrigger} from '~/components/ui/tooltip'
import {useSwapActions, useSwapQuery} from '~/context/swap-context'
import {Button} from '../ui/button'
import {Separator} from '../ui/separator'

const tolerances = [0.5, 2.5, 5]

const SwapSettings = () => {
  const {tolerance} = useSwapQuery()
  const {onToleranceUpdate, resetState} = useSwapActions()

  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger>
          <RotateCcw className="size-4" onClick={resetState} />
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-semibold italic">Reset Swap</p>
        </TooltipContent>
      </Tooltip>
      <Popover>
        <PopoverTrigger>
          <Settings className="size-4 hover:animate-spin " />
        </PopoverTrigger>
        <PopoverContent align="end" onOpenAutoFocus={e => e.preventDefault()}>
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-md font-semibold">Settings</h2>
              <p className="text-muted-foreground text-xs">Adjust to your personal preferences.</p>
            </div>

            <Separator />
            <div className="flex items-center gap-1">
              <h3 className="font-medium text-sm">Slippage</h3>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="size-3" />
                </TooltipTrigger>
                <TooltipContent tabIndex={1} className="w-[300px]" align="start">
                  <p className="text-xs text-muted-foreground">
                    Slippage is the difference between the expected value of output from a trade and
                    the actual value due to asset volatility and liquidity depth. If the actual
                    slippage falls outside of the user-designated range, the transaction will
                    revert.
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex items-center gap-2">
              {tolerances.map((t, index) => (
                <Button
                  key={index}
                  size="xs"
                  variant={tolerance === t ? 'default' : 'outline'}
                  onClick={() => onToleranceUpdate(t)}
                >
                  {t}%
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default SwapSettings
