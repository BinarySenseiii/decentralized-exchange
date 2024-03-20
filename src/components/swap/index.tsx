'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import WalletBtn from '../ui/wallet-button'
import SwapInputs from './swap-inputs'
import SwapSettings from './swap-settings'
import SwapSummary from './swap-summary'

const SwapWidget = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="italic">Swap</CardTitle>
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
        <WalletBtn />
      </CardFooter>
    </Card>
  )
}

export default SwapWidget
