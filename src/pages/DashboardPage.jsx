import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, ShoppingBag, CreditCard, Star, 
  Bell, Settings, Clock, CheckCircle,
  TrendingUp, DollarSign, Package, HelpCircle
} from 'lucide-react'
import { useAuth } from '../context/AuthContext' // تغییر این خط

const DashboardPage = () => {
  const { user } = useAuth() // تغییر این خط
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { label: 'سفارشات فعال', value: '۳', icon: <ShoppingBag className="w-6 h-6" />, change: '+۲۰%', color: 'from-blue-500 to-cyan-500' },
    { label: 'مجموع خرید', value: '۱,۲۵۰,۰۰۰', unit: 'تومان', icon: <DollarSign className="w-6 h-6" />, change: '+۳۵%', color: 'from-green-500 to-emerald-500' },
    { label: 'امتیاز کاربری', value: '۴.۸', icon: <Star className="w-6 h-6" />, change: '+۰.۲', color: 'from-yellow-500 to-amber-500' },
    { label: 'پروژه‌ها', value: '۷', icon: <Package className="w-6 h-6" />, change: '+۲', color: 'from-purple-500 to-pink-500' }
  ]

  const recentOrders = [
    { id: 1, service: 'طراحی وبسایت', date: '۱۴۰۲/۱۰/۱۵', amount: '۲,۵۰۰,۰۰۰', status: 'تکمیل شده', color: 'text-green-600' },
    { id: 2, service: 'اپلیکیشن موبایل', date: '۱۴۰۲/۱۰/۱۰', amount: '۵,۰۰۰,۰۰۰', status: 'در حال انجام', color: 'text-blue-600' },
    { id: 3, service: 'سئو و بهینه‌سازی', date: '۱۴۰۲/۱۰/۰۵', amount: '۱,۲۰۰,۰۰۰', status: 'در انتظار', color: 'text-yellow-600' }
  ]

  const tabs = [
    { id: 'overview', label: 'نمای کلی', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'orders', label: 'سفارشات', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'profile', label: 'پروفایل', icon: <User className="w-5 h-5" /> },
    { id: 'notifications', label: 'اعلان‌ها', icon: <Bell className="w-5 h-5" /> }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">داشبورد کاربری</h1>
            <p className="text-gray-600">خوش آمدید، {user?.name || 'کاربر عزیز'} 👋</p>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-xl font-medium hover:from-blue-100 hover:to-blue-200 transition-all">
              ارتقاء حساب
            </button>
            <button className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center hover:shadow-md transition-shadow">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}{stat.unit && <span className="text-sm mr-1">{stat.unit}</span>}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tabs & Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex space-x-4 space-x-reverse mb-6 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 space-x-reverse px-4 py-3 rounded-xl whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              {activeTab === 'overview' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">آمار فعالیت‌های اخیر</h3>
                  
                  {/* Recent Orders */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-900 mb-4">سفارشات اخیر</h4>
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-1">{order.service}</h5>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 ml-1" />
                            {order.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600 mb-1">{order.amount} تومان</div>
                          <span className={`text-sm font-medium ${order.color}`}>{order.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">تاریخچه سفارشات</h3>
                  <div className="text-center py-12 text-gray-500">
                    <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p>هیچ سفارشی یافت نشد</p>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">اطلاعات حساب کاربری</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 space-x-reverse">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{user?.name || 'کاربر'}</h4>
                        <p className="text-gray-600">{user?.email || 'کاربر نتچی'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div>
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">دسترسی سریع</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group">
                    <span className="font-medium text-blue-700">ارتقاء حساب</span>
                    <TrendingUp className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-xl bg-green-50 hover:bg-green-100 transition-colors group">
                    <span className="font-medium text-green-700">درخواست پشتیبانی</span>
                    <HelpCircle className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors group">
                    <span className="font-medium text-purple-700">افزایش اعتبار</span>
                    <CreditCard className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">آخرین اعلان‌ها</h3>
                <div className="space-y-4">
                  {[
                    { text: 'سفارش شما تایید شد', time: '۲ ساعت پیش', read: false },
                    { text: 'پروژه در حال انجام است', time: '۱ روز پیش', read: true },
                    { text: 'اعتبار حساب شما افزایش یافت', time: '۳ روز پیش', read: true }
                  ].map((notification, index) => (
                    <div key={index} className={`p-3 rounded-xl ${!notification.read ? 'bg-blue-50 border-r-4 border-blue-500' : 'bg-gray-50'}`}>
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <Bell className={`w-5 h-5 mt-1 ${!notification.read ? 'text-blue-500' : 'text-gray-400'}`} />
                        <div>
                          <p className="font-medium text-gray-900">{notification.text}</p>
                          <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage