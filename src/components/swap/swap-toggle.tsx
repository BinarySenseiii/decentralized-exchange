'use client'
import {ArrowUpDown} from 'lucide-react'
import {useState} from 'react'

const SwapToggle = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="cursor-pointer " onClick={() => setIsActive(p => !p)}>
      <ArrowUpDown
        size={20}
        className="text-muted-foreground hover:text-black dark:hover:text-white"
      />
    </div>
  )
}

export default SwapToggle
