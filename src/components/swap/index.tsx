'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import {Button} from '../ui/button'
import SwapSettings from './swap-settings'
import SwapInputs from './swap-inputs'
import SwapSummary from './swap-summary'

const SwapWidget = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="italic">
            Dex<span className="text-primary">Bridge</span>
          </CardTitle>

          <SwapSettings />
        </div>
        <CardDescription className="text-xs !mt-3">
          Empowering users to effortlessly swap tokens across different blockchain networks.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <SwapInputs />
        <SwapSummary />
      </CardContent>

      <CardFooter>
        <Button className="w-full">Connect Wallet</Button>
      </CardFooter>
    </Card>
  )
}

export default SwapWidget
