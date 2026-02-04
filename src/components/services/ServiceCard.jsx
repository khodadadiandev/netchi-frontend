import { Link } from 'react-router-dom'
import { Star, Clock, ShoppingCart, Zap, Sparkles } from 'lucide-react'
import Button from '../common/Button'
import { formatPrice } from '../../utils/helpers'
import { useCart } from '../../context/CartContext'

const ServiceCard = ({ service }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(service)
  }

  const getCategoryColor = (category) => {
    const colors = {
      'طراحی': 'from-blue-500 to-cyan-500',
      'برنامه‌نویسی': 'from-purple-500 to-pink-500',
      'گرافیک': 'from-green-500 to-emerald-500',
      'سئو': 'from-orange-500 to-red-500',
      'محتوا': 'from-yellow-500 to-amber-500',
      'پشتیبانی': 'from-indigo-500 to-blue-500'
    }
    return colors[category] || 'from-gray-500 to-gray-700'
  }

  // Create fallback image URL based on category
  const getFallbackImage = (category) => {
    const colors = {
      'طراحی': '3B82F6', // Blue
      'برنامه‌نویسی': '8B5CF6', // Purple
      'گرافیک': '10B981', // Green
      'سئو': 'F59E0B', // Orange
      'محتوا': 'EF4444', // Red
      'پشتیبانی': '6366F1' // Indigo
    }
    
    const bgColor = colors[category] || '6B7280' // Gray
    const text = category || 'Service'
    
    return `https://via.placeholder.com/400x250/${bgColor}/FFFFFF?text=${encodeURIComponent(text)}`
  }

  const handleImageError = (e) => {
    console.log('Image failed to load, using fallback')
    const fallbackUrl = getFallbackImage(service.category)
    if (e.target.src !== fallbackUrl) {
      e.target.src = fallbackUrl
    } else {
      // If fallback also fails, show a colored div
      e.target.style.display = 'none'
      const parent = e.target.parentNode
      const colorClass = getCategoryColor(service.category).replace('from-', 'bg-gradient-to-r from-')
      
      const fallbackDiv = document.createElement('div')
      fallbackDiv.className = `absolute inset-0 ${colorClass} flex items-center justify-center`
      fallbackDiv.innerHTML = `
        <div class="text-center text-white p-4">
          <div class="text-xl font-bold">${service.category || 'خدمت'}</div>
          <div class="text-sm mt-2 opacity-80">${service.title?.substring(0, 30) || ''}</div>
        </div>
      `
      parent.appendChild(fallbackDiv)
    }
  }

  // Check if service is valid
  if (!service || !service.id) {
    return (
      <div className="glass-card rounded-2xl p-6 animate-pulse">
        <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="flex justify-between">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-10 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    )
  }

  return (
    <Link to={`/services/${service.id}`}>
      <div className="group relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative glass-card rounded-2xl overflow-hidden card-hover border border-white/20">
          {/* Image with Overlay */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <img
              src={service.image || getFallbackImage(service.category)}
              alt={service.title || 'سرویس'}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              onError={handleImageError}
              loading="lazy"
            />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(service.category)} shadow-lg`}>
                <Zap className="w-3 h-3 ml-1" />
                {service.category || 'دسته‌بندی'}
              </span>
            </div>
            
            {/* Popular Badge */}
            {service.rating > 4.5 && (
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-yellow-500 to-amber-500 shadow-lg">
                  <Sparkles className="w-3 h-3 ml-1" />
                  پرفروش
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                {service.title || 'عنوان سرویس'}
              </h3>
              <div className="flex items-center bg-gradient-to-r from-amber-100 to-yellow-100 px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 text-amber-500 fill-current" />
                <span className="text-sm font-bold text-amber-700 mr-1">{service.rating || 0}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
              {service.description || 'توضیحات سرویس'}
            </p>

            {/* Features */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {service.features?.slice(0, 2).map((feature, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-100"
                  >
                    {feature}
                  </span>
                ))}
                {service.features?.length > 2 && (
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                    +{service.features.length - 2} بیشتر
                  </span>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="space-y-2">
                <div className="text-xl font-bold gradient-text">
                  {formatPrice(service.price || 0)}
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 ml-1" />
                  <span>{service.deliveryTime || 'تعیین نشده'}</span>
                </div>
              </div>

              <Button
                size="small"
                onClick={handleAddToCart}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg shadow-green-500/25"
              >
                <ShoppingCart className="w-4 h-4 ml-1" />
                افزودن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard