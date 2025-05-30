import React from 'react'
import { cn } from '../../utils/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  border?: boolean
}

const paddingVariants = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const shadowVariants = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
}

// ✅ Cambio principal: quitar React.FC y usar función normal
export const Card = ({
  children,
  padding = 'md',
  shadow = 'sm',
  border = true,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-lg bg-white',
        border && 'border border-gray-200',
        paddingVariants[padding],
        shadowVariants[shadow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
