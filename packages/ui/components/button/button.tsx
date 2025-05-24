import React from 'react'
import { cn } from '../../utils/cn'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

const buttonVariants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
  secondary:
    'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300',
  danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm',
  ghost: 'hover:bg-gray-100 text-gray-700',
}

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

// ✅ Cambio principal: quitar React.FC y usar función normal
export const Button = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        // Base styles
        'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        // Variants
        buttonVariants[variant],
        // Sizes
        buttonSizes[size],
        // Loading state
        loading && 'cursor-wait',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-transparent border-t-current" />
      )}
      {children}
    </button>
  )
}
