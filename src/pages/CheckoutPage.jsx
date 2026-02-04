import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CreditCard, Wallet, Banknote, 
  CheckCircle, Lock, Shield,
  ArrowRight, ShoppingBag
} from 'lucide-react'
import Button from '../components/common/Button'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/helpers'

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    postalCode: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Process payment
    alert('سفارش با موفقیت ثبت شد!')
    clearCart()
    window.location.href = '/orders'
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const paymentMethods = [
    { id: 'card', title: 'کارت بانکی', icon: <CreditCard className="w-6 h-6" /> },
    { id: 'wallet', title: 'کیف پال', icon: <Wallet className="w-6 h-6" /> },
    { id: 'cash', title: 'پرداخت در محل', icon: <Banknote className="w-6 h-6" /> }
  ]

  return (
    <div className="py-12">
      <div className="container-elegant">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">تکمیل خرید</h1>
          <p className="text-gray-600">لطفاً اطلاعات خود را وارد کرده و روش پرداخت را انتخاب کنید</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div>
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Contact Information */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShoppingBag className="w-6 h-6 text-blue-600 ml-3" />
                  اطلاعات تماس
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full input-glass"
                      placeholder="علی محمدی"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      شماره تماس
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full input-glass"
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      dir="ltr"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      آدرس دقیق
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full input-glass"
                      placeholder="آدرس کامل شامل خیابان، کوچه، پلاک و واحد"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      کد پستی
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className="w-full input-glass"
                      placeholder="۱۲۳۴۵۶۷۸۹۰"
                      dir="ltr"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CreditCard className="w-6 h-6 text-blue-600 ml-3" />
                  روش پرداخت
                </h3>
                
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 ${
                        paymentMethod === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3 space-x-reverse">
                        {method.icon}
                        <span className="font-medium">{method.title}</span>
                      </div>
                      {paymentMethod === method.id && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </motion.form>
          </div>

          {/* Right Column - Order Summary */}
          <div>
            <div className="sticky top-24">
              <div className="glass-card rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">جزئیات سفارش</h3>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 space-x-reverse p-3 rounded-lg bg-gray-50">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 line-clamp-1">{item.title}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm text-gray-600">تعداد: {item.quantity}</span>
                          <span className="font-medium gradient-text">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Order Summary */}
                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">جمع آیتم‌ها:</span>
                    <span className="font-medium">{cartItems.reduce((sum, item) => sum + item.quantity, 0)} عدد</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">مبلغ کل:</span>
                    <span className="font-medium">{formatPrice(getCartTotal())}</span>
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
                
                {/* Security Badge */}
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div>
                      <h4 className="font-medium text-green-900">پرداخت امن</h4>
                      <p className="text-sm text-green-700">اطلاعات شما به صورت رمزنگاری شده منتقل می‌شود</p>
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full mt-6 group"
                  size="large"
                >
                  <span className="flex items-center justify-center">
                    پرداخت و تکمیل سفارش
                    <Lock className="w-5 h-5 ml-3" />
                    <ArrowRight className="w-5 h-5 mr-3 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                {/* Terms */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  با کلیک بر روی دکمه پرداخت، با{' '}
                  <a href="/terms" className="text-blue-600 hover:text-blue-700">
                    شرایط و قوانین
                  </a>{' '}
                  موافقت می‌کنید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage