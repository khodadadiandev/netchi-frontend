import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, CheckCircle, Clock, AlertTriangle,
  FileText, Download, RefreshCw, DollarSign
} from 'lucide-react'

const GuaranteePage = () => {
  const [activeRequests, setActiveRequests] = useState([
    { id: 1, service: 'طراحی وبسایت', amount: 2500000, date: '۱۴۰۲/۱۰/۱۸', status: 'در حال بررسی' },
    { id: 2, service: 'اپلیکیشن موبایل', amount: 5000000, date: '۱۴۰۲/۱۰/۱۰', status: 'تایید شده' },
  ])

  const guaranteeItems = [
    { 
      icon: <Shield className="w-6 h-6" />,
      title: 'تضمین کیفیت',
      description: 'کیفیت تمام خدمات ما تضمین شده است',
      details: 'در صورت عدم رضایت از کیفیت خدمات'
    },
    { 
      icon: <Clock className="w-6 h-6" />,
      title: 'تضمین زمان',
      description: 'تحویل به موقع یا بازگشت وجه',
      details: 'در صورت تاخیر غیرموجه در تحویل'
    },
    { 
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'تضمین رضایت',
      description: 'رضایت کامل شما اولویت ماست',
      details: 'در صورت عدم رضایت از نتیجه نهایی'
    },
  ]

  const policies = [
    'بازگشت وجه تا ۷ روز پس از تحویل سرویس',
    'عدم رضایت از کیفیت خدمات ارائه شده',
    'تاخیر بیش از ۴۸ ساعت در تحویل سرویس',
    'عدم تطابق سرویس با توافق اولیه',
    'مشکلات فنی که قابل حل نباشند'
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">تضمین بازگشت پول</h1>
          <p className="text-gray-600">سیستم تضمین کیفیت و بازگشت وجه نتچی</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Guarantee Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Guarantee Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  <h2 className="text-xl font-bold">تضمین ۱۰۰٪ بازگشت وجه</h2>
                </div>
                <div className="text-2xl font-black">۱۰۰٪</div>
              </div>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-black mb-2">۷ روز</div>
                <div className="text-green-200">مهلت درخواست بازگشت وجه</div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">۹۸٪</div>
                  <div className="text-sm text-green-200">رضایت مشتریان</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">۴۸h</div>
                  <div className="text-sm text-green-200">پاسخگویی به درخواست</div>
                </div>
              </div>
            </motion.div>

            {/* Guarantee Items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {guaranteeItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-blue-600">{item.icon}</div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <p className="text-blue-600 text-xs font-medium">{item.details}</p>
                </div>
              ))}
            </div>

            {/* Request Refund */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-bold text-gray-900">درخواست بازگشت وجه</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    انتخاب سفارش
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>طراحی وبسایت فروشگاهی - ۲,۵۰۰,۰۰۰ تومان</option>
                    <option>اپلیکیشن موبایل - ۵,۰۰۰,۰۰۰ تومان</option>
                    <option>سئو و بهینه‌سازی - ۱,۲۰۰,۰۰۰ تومان</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    دلیل درخواست
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>عدم رضایت از کیفیت خدمات</option>
                    <option>تاخیر در تحویل</option>
                    <option>عدم تطابق با توافق اولیه</option>
                    <option>مشکلات فنی</option>
                    <option>سایر دلایل</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    توضیحات تکمیلی
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="لطفاً دلیل درخواست بازگشت وجه را به طور کامل شرح دهید..."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                    ثبت درخواست
                  </button>
                  <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-5 h-5" />
                    قوانین
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Active Requests & Policies */}
          <div className="space-y-8">
            {/* Active Requests */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">درخواست‌های فعال</h3>
                <AlertTriangle className="w-6 h-6 text-gray-400" />
              </div>

              <div className="space-y-4">
                {activeRequests.map((request) => (
                  <div key={request.id} className="p-4 rounded-xl bg-gray-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium text-gray-900">{request.service}</div>
                      <div className="text-lg font-bold text-gray-900">{request.amount.toLocaleString()}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">{request.date}</div>
                      <div className={`px-3 py-1 text-xs font-medium rounded-full ${request.status === 'تایید شده' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {request.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Policies */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">شرایط بازگشت وجه</h3>
              </div>

              <div className="space-y-3">
                {policies.map((policy, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{policy}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">آمار بازگشت وجه</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">مجموع بازگشت‌ها</div>
                      <div className="text-sm text-gray-600">از ابتدا</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-900">۱۲,۵۰۰,۰۰۰</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">درخواست‌های موفق</div>
                      <div className="text-sm text-gray-600">تایید شده</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-900">۹۵٪</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">پیوندهای سریع</h3>
              
              <div className="space-y-3">
                <a href="/terms" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">قوانین و مقررات</div>
                </a>
                <a href="/contact" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">پشتیبانی تضمین</div>
                </a>
                <a href="/faq" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">سوالات متداول</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuaranteePage