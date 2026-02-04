import { useState } from 'react'
import { FiStar, FiClock, FiCheck, FiShoppingCart } from 'react-icons/fi'
import Button from '../common/Button'
import { formatPrice } from '../../utils/helpers'
import { useCart } from '../../context/CartContext'

const ServiceDetails = ({ service }) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    const serviceWithQuantity = { ...service, quantity }
    addToCart(serviceWithQuantity)
  }

  const handleBuyNow = () => {
    handleAddToCart()
    // Redirect to checkout
    window.location.href = '/checkout'
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Image & Details */}
        <div>
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Description */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">توضیحات خدمات</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
            
            {/* Features List */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">ویژگی‌های خدمات</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 space-x-reverse">
                    <FiCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Panel */}
        <div>
          <div className="sticky top-24">
            <div className="card p-6">
              {/* Title & Rating */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-amber-500 ml-1">{service.rating}</span>
                    <FiStar className="w-5 h-5 text-amber-500 fill-current" />
                    <span className="text-gray-500 mr-2">
                      ({Math.floor(Math.random() * 100) + 50} نظر)
                    </span>
                  </div>
                  <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-blue-600">
                  {formatPrice(service.price)}
                </div>
                <div className="flex items-center text-gray-500 mt-2">
                  <FiClock className="w-4 h-4 ml-1" />
                  <span>زمان تحویل: {service.deliveryTime}</span>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  تعداد
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-r-lg hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <div className="w-16 h-10 flex items-center justify-center border-t border-b border-gray-300">
                    <span className="text-lg font-medium">{quantity}</span>
                  </div>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-l-lg hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  variant="primary"
                  className="w-full"
                  size="large"
                  onClick={handleBuyNow}
                >
                  خرید آنی
                </Button>
                
                <Button
                  variant="secondary"
                  className="w-full"
                  size="large"
                  onClick={handleAddToCart}
                >
                  <FiShoppingCart className="w-5 h-5 ml-2" />
                  افزودن به سبد خرید
                </Button>
              </div>

              {/* Guarantee Badges */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <FiCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">کیفیت تضمینی</div>
                      <div className="text-xs text-gray-500">۷ روز بازگشت وجه</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FiClock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">تحویل به موقع</div>
                      <div className="text-xs text-gray-500">تضمین بازگشت پول</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="card p-6 mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                درباره فروشنده
              </h4>
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h5 className="font-medium text-gray-900">تیم نتچی</h5>
                  <p className="text-sm text-gray-500 mt-1">
                    عضو از ۱۴۰۰ • ۹۸% رضایت‌مندی
                  </p>
                  <div className="flex items-center mt-2">
                    <FiStar className="w-4 h-4 text-amber-500 fill-current ml-1" />
                    <span className="text-sm font-medium">۴.۹</span>
                    <span className="text-gray-500 text-sm mr-2">(۴۵۳ نظر)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails