import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Package, Clock, CheckCircle, XCircle, 
  Filter, Download, Eye, Repeat, 
  Truck, CreditCard, Star, Calendar
} from 'lucide-react'
import Button from '../components/common/Button'
import { formatPrice } from '../utils/helpers'

const OrdersPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedOrder, setSelectedOrder] = useState(null)

  // Sample orders data
  const orders = [
    {
      id: 'ORD-2023-001',
      service: 'طراحی وبسایت فروشگاهی',
      date: '۱۴۰۲/۱۰/۱۵',
      amount: 2500000,
      status: 'completed',
      statusText: 'تکمیل شده',
      color: 'bg-green-100 text-green-800',
      icon: <CheckCircle className="w-5 h-5" />,
      items: 3,
      deliveryDate: '۱۴۰۲/۱۰/۲۲'
    },
    {
      id: 'ORD-2023-002',
      service: 'اپلیکیشن موبایل',
      date: '۱۴۰۲/۱۰/۱۰',
      amount: 5000000,
      status: 'processing',
      statusText: 'در حال انجام',
      color: 'bg-blue-100 text-blue-800',
      icon: <Clock className="w-5 h-5" />,
      items: 1,
      deliveryDate: '۱۴۰۲/۱۰/۳۰'
    },
    {
      id: 'ORD-2023-003',
      service: 'بهینه‌سازی سئو',
      date: '۱۴۰۲/۱۰/۰۵',
      amount: 1200000,
      status: 'pending',
      statusText: 'در انتظار پرداخت',
      color: 'bg-yellow-100 text-yellow-800',
      icon: <Clock className="w-5 h-5" />,
      items: 2,
      deliveryDate: '۱۴۰۲/۱۰/۲۰'
    },
    {
      id: 'ORD-2023-004',
      service: 'طراحی لوگو و هویت بصری',
      date: '۱۴۰۲/۰۹/۲۸',
      amount: 800000,
      status: 'cancelled',
      statusText: 'لغو شده',
      color: 'bg-red-100 text-red-800',
      icon: <XCircle className="w-5 h-5" />,
      items: 1,
      deliveryDate: '۱۴۰۲/۱۰/۰۵'
    },
    {
      id: 'ORD-2023-005',
      service: 'تولید محتوای شبکه‌های اجتماعی',
      date: '۱۴۰۲/۰۹/۲۰',
      amount: 400000,
      status: 'completed',
      statusText: 'تکمیل شده',
      color: 'bg-green-100 text-green-800',
      icon: <CheckCircle className="w-5 h-5" />,
      items: 30,
      deliveryDate: '۱۴۰۲/۰۹/۳۰'
    },
    {
      id: 'ORD-2023-006',
      service: 'مشاوره دیجیتال مارکتینگ',
      date: '۱۴۰۲/۰۹/۱۵',
      amount: 600000,
      status: 'completed',
      statusText: 'تکمیل شده',
      color: 'bg-green-100 text-green-800',
      icon: <CheckCircle className="w-5 h-5" />,
      items: 1,
      deliveryDate: '۱۴۰۲/۰۹/۱۵'
    }
  ]

  const filters = [
    { id: 'all', label: 'همه سفارشات', count: orders.length },
    { id: 'completed', label: 'تکمیل شده', count: orders.filter(o => o.status === 'completed').length },
    { id: 'processing', label: 'در حال انجام', count: orders.filter(o => o.status === 'processing').length },
    { id: 'pending', label: 'در انتظار', count: orders.filter(o => o.status === 'pending').length },
    { id: 'cancelled', label: 'لغو شده', count: orders.filter(o => o.status === 'cancelled').length }
  ]

  const filteredOrders = activeFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === activeFilter)

  const stats = [
    { label: 'کل سفارشات', value: orders.length, icon: <Package className="w-6 h-6" />, color: 'from-blue-500 to-cyan-500' },
    { label: 'مبلغ کل', value: formatPrice(orders.reduce((sum, order) => sum + order.amount, 0)), icon: <CreditCard className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { label: 'میانگین امتیاز', value: '۴.۸', icon: <Star className="w-6 h-6" />, color: 'from-yellow-500 to-amber-500' },
    { label: 'نرخ تکمیل', value: '۸۵٪', icon: <CheckCircle className="w-6 h-6" />, color: 'from-purple-500 to-pink-500' }
  ]

  const handleViewDetails = (order) => {
    setSelectedOrder(order)
  }

  const handleCloseDetails = () => {
    setSelectedOrder(null)
  }

  return (
    <div className="py-12">
      <div className="container-elegant">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">سفارشات من</h1>
            <p className="text-gray-600">مدیریت و پیگیری تمام سفارشات شما</p>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse mt-4 md:mt-0">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-xl font-medium hover:from-blue-100 hover:to-blue-200 transition-all flex items-center">
              <Download className="w-5 h-5 ml-2" />
              گزارش سفارشات
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <div className="text-white">{stat.icon}</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center mb-4 sm:mb-0">
              <Filter className="w-6 h-6 text-blue-600 ml-3" />
              فیلتر سفارشات
            </h3>
            <div className="text-sm text-gray-600">
              نمایش {filteredOrders.length} از {orders.length} سفارش
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl transition-all flex items-center ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
                <span className={`mr-2 text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.id
                    ? 'bg-white/20'
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table */}
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="py-4 px-6 text-right font-semibold text-gray-900">شماره سفارش</th>
                  <th className="py-4 px-6 text-right font-semibold text-gray-900">خدمات</th>
                  <th className="py-4 px-6 text-right font-semibold text-gray-900">تاریخ</th>
                  <th className="py-4 px-6 text-right font-semibold text-gray-900">مبلغ</th>
                  <th className="py-4 px-6 text-right font-semibold text-gray-900">وضعیت</th>
                  <th className="py-4 px-6 text-right font-semibold text-gray-900">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="font-mono font-bold text-gray-900">{order.id}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-900">{order.service}</div>
                      <div className="text-sm text-gray-600 mt-1">{order.items} آیتم</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 ml-2" />
                        {order.date}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-bold gradient-text">{formatPrice(order.amount)}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className={`inline-flex items-center px-3 py-1.5 rounded-full ${order.color}`}>
                        {order.icon}
                        <span className="mr-2 font-medium">{order.statusText}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <button
                          onClick={() => handleViewDetails(order)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="مشاهده جزئیات"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        {order.status === 'completed' && (
                          <button
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="سفارش مجدد"
                          >
                            <Repeat className="w-5 h-5" />
                          </button>
                        )}
                        {order.status === 'pending' && (
                          <button className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm hover:shadow-lg transition-all">
                            پرداخت
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">هیچ سفارشی یافت نشد</h4>
              <p className="text-gray-600 mb-6">شما هنوز سفارشی در این دسته ثبت نکرده‌اید</p>
              <a
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                مشاهده خدمات
                <ArrowRight className="w-5 h-5 mr-2" />
              </a>
            </div>
          )}
        </div>

        {/* Order Details Modal */}
        {selectedOrder && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">جزئیات سفارش</h3>
                  <button
                    onClick={handleCloseDetails}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <XCircle className="w-6 h-6 text-gray-500" />
                  </button>
                </div>

                {/* Order Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600">شماره سفارش</label>
                      <div className="font-mono font-bold text-gray-900">{selectedOrder.id}</div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">خدمات</label>
                      <div className="font-medium text-gray-900">{selectedOrder.service}</div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">تاریخ ثبت</label>
                      <div className="flex items-center text-gray-700">
                        <Calendar className="w-4 h-4 ml-2" />
                        {selectedOrder.date}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="text-sm text-gray-600">وضعیت</label>
                      <div className={`inline-flex items-center px-3 py-1.5 rounded-full ${selectedOrder.color}`}>
                        {selectedOrder.icon}
                        <span className="mr-2 font-medium">{selectedOrder.statusText}</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">تاریخ تحویل</label>
                      <div className="flex items-center text-gray-700">
                        <Truck className="w-4 h-4 ml-2" />
                        {selectedOrder.deliveryDate}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">مبلغ</label>
                      <div className="text-2xl font-bold gradient-text">{formatPrice(selectedOrder.amount)}</div>
                    </div>
                  </div>
                </div>

                {/* Status Timeline */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-4">روند سفارش</h4>
                  <div className="space-y-4">
                    {[
                      { status: 'ثبت سفارش', date: selectedOrder.date, completed: true },
                      { status: 'تایید پرداخت', date: selectedOrder.date, completed: selectedOrder.status !== 'pending' },
                      { status: 'در حال انجام', date: selectedOrder.date, completed: ['processing', 'completed'].includes(selectedOrder.status) },
                      { status: 'تحویل', date: selectedOrder.deliveryDate, completed: selectedOrder.status === 'completed' }
                    ].map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                          step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                        }`}>
                          {step.completed ? <CheckCircle className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{step.status}</div>
                          <div className="text-sm text-gray-600">{step.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end space-x-4 space-x-reverse pt-6 border-t border-gray-200">
                  <Button variant="secondary" onClick={handleCloseDetails}>
                    بستن
                  </Button>
                  {selectedOrder.status === 'completed' && (
                    <Button className="flex items-center">
                      <Star className="w-5 h-5 ml-2" />
                      ثبت نظر
                    </Button>
                  )}
                  <Button className="flex items-center">
                    <Download className="w-5 h-5 ml-2" />
                    دانلود فاکتور
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Pagination */}
        {filteredOrders.length > 0 && (
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-gray-600">
              نمایش ۱ تا {filteredOrders.length} از {orders.length} سفارش
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                <span>«</span>
              </button>
              {[1, 2, 3].map(page => (
                <button
                  key={page}
                  className={`w-10 h-10 flex items-center justify-center border rounded-lg ${
                    page === 1
                      ? 'border-blue-500 bg-blue-50 text-blue-600'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-50">
                <span>»</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrdersPage