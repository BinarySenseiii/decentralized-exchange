import {Input} from '../ui/input'
import SwapToggle from './swap-toggle'

const SwapInputs = () => {
  return (
    <div className="space-y-2 relative flex flex-col items-center w-full">
      <Input />
      <SwapToggle />
      <Input />
    </div>
  )
}

export default SwapInputs
