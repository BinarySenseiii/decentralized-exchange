'use client'
import {Info, Settings} from 'lucide-react'
import {Popover, PopoverContent, PopoverTrigger} from '~/components/ui/popover'
import {Tooltip, TooltipContent, TooltipTrigger} from '~/components/ui/tooltip'
import {Separator} from '../ui/separator'
import {Button} from '../ui/button'
import {useState} from 'react'

const tolerances = [0.5, 2.5, 5]

const SwapSettings = () => {
  const [tolerance, setTolerance] = useState(0.5)
  return (
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
                  slippage falls outside of the user-designated range, the transaction will revert.
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
                onClick={() => setTolerance(t)}
              >
                {t}%
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default SwapSettings