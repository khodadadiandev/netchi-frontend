import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search, ArrowRight, Frown, RefreshCw } from 'lucide-react'
import Button from '../components/common/Button'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="container-elegant">
        <div className="text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative mb-12"
          >
            <div className="text-9xl font-bold text-gray-900 opacity-10">404</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center">
                <Frown className="w-16 h-16 text-red-400" />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">صفحه مورد نظر یافت نشد!</h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            ممکن است آدرس وارد شده تغییر کرده باشد یا صفحه حذف شده باشد.
            می‌توانید از طریق جستجو یا بازگشت به صفحه اصلی ادامه دهید.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/">
              <Button size="large" className="group">
                <span className="flex items-center">
                  بازگشت به خانه
                  <Home className="w-5 h-5 mr-3" />
                </span>
              </Button>
            </Link>
            
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 font-medium rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all flex items-center justify-center group"
            >
              <RefreshCw className="w-5 h-5 ml-3 group-hover:rotate-180 transition-transform" />
              بارگذاری مجدد
            </button>
          </div>

          {/* Search Suggestion */}
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Search className="w-6 h-6 text-blue-600 ml-3" />
              صفحه مورد نظرتان را جستجو کنید
            </h3>
            
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="چه صفحه‌ای را دنبال می‌کنید؟"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
              <button className="absolute left-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all">
                جستجو
              </button>
            </div>

            {/* Suggested Pages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'صفحه اصلی', path: '/' },
                { title: 'خدمات', path: '/services' },
                { title: 'درباره ما', path: '/about' },
                { title: 'تماس با ما', path: '/contact' },
                { title: 'سوالات متداول', path: '/faq' },
                { title: 'قوانین', path: '/terms' }
              ].map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{page.title}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Text */}
          <div className="mt-12 text-gray-500 text-sm">
            <p>
              اگر فکر می‌کنید این یک خطا است، لطفاً با{' '}
              <a href="/contact" className="text-blue-600 hover:text-blue-700">
                پشتیبانی
              </a>{' '}
              تماس بگیرید.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage