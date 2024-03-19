import {Button} from '../ui/button'
import SwapSettings from './swap-settings'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'

const SwapWidget = () => {
  return (
    <Card>
      {/* <div className="flex items-center justify-between">
        <h2 className="italic font-bold">
          Dex<span className="text-primary">Bridge</span>
        </h2>
        <SwapSettings />
      </div> */}

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="italic">
            Dex<span className="text-primary">Bridge</span>
          </CardTitle>

          <SwapSettings />
        </div>
        <CardDescription className="text-xs">
          serves as a secure bridge between various decentralized ecosystems, empowering users to
          effortlessly swap tokens across different blockchain networks.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Connect Wallet</Button>
      </CardFooter>
    </Card>
  )
}

export default SwapWidget