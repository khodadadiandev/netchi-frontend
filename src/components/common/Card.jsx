const Card = ({ children, className = '', hoverable = true, ...props }) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-md border border-gray-100
        ${hoverable ? 'hover:shadow-xl transition-shadow duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 border-b border-gray-100 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-6 border-t border-gray-100 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card