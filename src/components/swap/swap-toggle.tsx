'use client'
import React, {useState} from 'react'
import {Button} from '../ui/button'
import {ArrowUpDown} from 'lucide-react'

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
