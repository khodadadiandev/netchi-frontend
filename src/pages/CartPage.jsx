import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Package, Shield, Truck } from 'lucide-react'
import { useCart } from '../context/CartContext'
import Button from '../components/common/Button'
import { formatPrice } from '../utils/helpers'

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-12">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-8">
          <ShoppingCart className="w-16 h-16 text-gray-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">سبد خرید شما خالی است</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          برای مشاهده خدمات و اضافه کردن آنها به سبد خرید، به صفحه خدمات مراجعه کنید
        </p>
        <Link to="/services">
          <Button size="large" className="group">
            <span className="flex items-center">
              مشاهده خدمات
              <ArrowRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container-elegant">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <ShoppingCart className="w-8 h-8 text-blue-600 ml-3" />
            سبد خرید
          </h1>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-700 flex items-center text-sm font-medium"
          >
            <Trash2 className="w-4 h-4 ml-1" />
            خالی کردن سبد
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6">
              <div className="space-y-6">
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-6 space-x-reverse p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  >
                    <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold gradient-text">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                        <div className="flex items-center space-x-3 space-x-reverse">
                          <div className="flex items-center border border-gray-200 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 h-10 flex items-center justify-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[
                { icon: <Shield className="w-6 h-6" />, title: 'ضمانت بازگشت وجه', desc: '۷ روز مهلت تست' },
                { icon: <Truck className="w-6 h-6" />, title: 'ارسال فوری', desc: 'تحویل در کمترین زمان' },
                { icon: <Package className="w-6 h-6" />, title: 'پشتیبانی دائمی', desc: '۲۴ ساعته، ۷ روز هفته' }
              ].map((benefit, index) => (
                <div key={index} className="glass-card p-4 rounded-xl text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-3">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="glass-card rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">خلاصه سفارش</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">تعداد آیتم‌ها:</span>
                    <span className="font-medium">{cartItems.reduce((sum, item) => sum + item.quantity, 0)} عدد</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">جمع کل:</span>
                    <span className="text-2xl font-bold gradient-text">
                      {formatPrice(getCartTotal())}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-green-600">
                    <span>تخفیف:</span>
                    <span className="font-medium">۰ تومان</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>مبلغ قابل پرداخت:</span>
                      <span className="text-2xl gradient-text">
                        {formatPrice(getCartTotal())}
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="w-full mb-4" size="large">
                  ادامه جهت پرداخت
                </Button>
                
                <Link to="/services">
                  <Button variant="secondary" className="w-full">
                    ادامه خرید
                  </Button>
                </Link>

                {/* Promo Code */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">کد تخفیف دارید؟</h4>
                  <div className="flex space-x-2 space-x-reverse">
                    <input
                      type="text"
                      placeholder="کد تخفیف"
                      className="flex-1 input-glass"
                    />
                    <button className="px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all">
                      اعمال
                    </button>
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

export default CartPage