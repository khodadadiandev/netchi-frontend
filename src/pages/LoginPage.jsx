// src/pages/LoginPage.jsx
import { motion } from 'framer-motion'
import LoginForm from '../components/auth/LoginForm'
import { Shield, Zap, Headphones } from 'lucide-react'
import { useAuth } from '../context/AuthContext' // این خط را اصلاح کنید

const LoginPage = () => {
  const { user } = useAuth() // این هم اصلاح شود

  // اگر کاربر لاگین کرده باشد، به dashboard redirect کنید
  if (user) {
    window.location.href = '/dashboard'
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                خوش آمدید!
              </h1>
              <p className="text-gray-600">
                لطفاً برای ادامه وارد حساب کاربری خود شوید
              </p>
            </div>
            
            <LoginForm />
          </motion.div>

          {/* Right Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                مزایای حساب کاربری
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">امنیت بالا</h3>
                    <p className="text-gray-600 text-sm">
                      اطلاعات شما با بالاترین سطح امنیتی محافظت می‌شود
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">دسترسی سریع</h3>
                    <p className="text-gray-600 text-sm">
                      مدیریت سفارشات و پیگیری وضعیت در لحظه
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">پشتیبانی ویژه</h3>
                    <p className="text-gray-600 text-sm">
                      کاربران ثبت‌نام شده از پشتیبانی اختصاصی بهره‌مند می‌شوند
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600">۵۰۰۰+</div>
                <div className="text-sm text-gray-600">کاربر فعال</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-600">۹۸%</div>
                <div className="text-sm text-gray-600">رضایت</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-purple-600">۲۴/۷</div>
                <div className="text-sm text-gray-600">پشتیبانی</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage