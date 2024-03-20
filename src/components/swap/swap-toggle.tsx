'use client'
import {ArrowUpDown} from 'lucide-react'
import {useState} from 'react'
import {useSwapActions, useSwapQuery} from '~/context/swap-context'

const SwapToggle = () => {
  const [isActive, setIsActive] = useState(false)
  const {onSwap} = useSwapActions()

  const onSwapHandle = () => {
    setIsActive(p => !p)
    onSwap()
  }

  return (
    <div className="cursor-pointer relative z-10" onClick={onSwapHandle}>
      <ArrowUpDown
        size={20}
        className="text-muted-foreground hover:text-black dark:hover:text-white"
      />
    </div>
  )
}

export default SwapToggle
