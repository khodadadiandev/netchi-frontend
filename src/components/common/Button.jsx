import { forwardRef } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  icon,
  iconPosition = 'right',
  ...props
}, ref) => {
  const baseClasses = 'font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center'
  
  const variants = {
    primary: 'btn-primary focus:ring-blue-500/50',
    secondary: 'btn-secondary focus:ring-gray-300',
    danger: 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white focus:ring-red-500/50 hover:shadow-xl hover:shadow-red-500/25 hover:-translate-y-0.5',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-200 border border-transparent hover:border-gray-200',
    outline: 'bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50 focus:ring-blue-500/50',
  }
  
  const sizes = {
    small: 'px-4 py-2.5 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  }
  
  const iconSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  }

  const classes = twMerge(
    clsx(baseClasses, variants[variant], sizes[size], className)
  )

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -mr-2 ml-3 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          در حال پردازش...
        </>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className={`${iconSizes[size]} ml-2`}>{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className={`${iconSizes[size]} mr-2`}>{icon}</span>
          )}
        </>
      )}
    </button>
  )
})

Button.displayName = 'Button'

export default Button