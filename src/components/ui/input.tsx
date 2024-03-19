'use client'
import * as React from 'react'
import {cn} from '~/lib/utils'
import GradientAnime from '../gradient-anime'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({className, type, ...props}, ref) => {
  return (
    <GradientAnime>
      <div className="h-10 bg-gray-200 dark:bg-gray-900 rounded-md">
        <input
          type={type}
          className={cn(
            `flex h-full w-full border-none shadow-none bg-transparent  px-3 py-2 text-sm
          focus-visible:outline-none focus-visible:ring-0
           disabled:cursor-not-allowed disabled:opacity-50
           `,
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    </GradientAnime>
  )
})
Input.displayName = 'Input'

export {Input}
