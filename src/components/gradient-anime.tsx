'use client'
import * as React from 'react'
import {useMotionTemplate, useMotionValue, motion} from 'framer-motion'

const GradientAnime = ({children}: {children: React.ReactNode}) => {
  const radius = 100
  const [visible, setVisible] = React.useState(false)

  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({currentTarget, clientX, clientY}: any) {
    let {left, top} = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
    radial-gradient(
      ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
      var(--indigo-500),
      transparent 80%
    )
  `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg w-full transition duration-300 group/input"
    >
      {children}
    </motion.div>
  )
}

export default GradientAnime
