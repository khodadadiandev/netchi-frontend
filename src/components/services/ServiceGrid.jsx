// src/components/services/ServiceGrid.jsx
import ServiceCard from './ServiceCard'
import LoadingSpinner from '../common/LoadingSpinner'

const ServiceGrid = ({ services = [], loading, error }) => {
  console.log('ServiceGrid Props:', { services, loading, error, count: services?.length })

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-20">
        <div className="text-red-500 text-lg mb-4">خطا در بارگذاری خدمات</div>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white hover:bg-blue-700 font-medium py-2 px-6 rounded-lg transition-colors"
        >
          تلاش مجدد
        </button>
      </div>
    )
  }

  // Empty state
  if (!services || services.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">📭</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">خدمتی یافت نشد</h3>
        <p className="text-gray-600 mb-6">متأسفیم، هیچ خدمتی مطابق با جستجوی شما پیدا نشد.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.href = '/services'}
            className="bg-blue-600 text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            مشاهده همه خدمات
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            بارگذاری مجدد
          </button>
        </div>
      </div>
    )
  }

  // Success state - display services
  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {services.length} خدمت پیدا شد
          </h2>
          <p className="text-gray-600 text-sm">خدمات حرفه‌ای برای نیازهای شما</p>
        </div>
        <div className="text-gray-500 text-sm">
          صفحه ۱ از {Math.ceil(services.length / 6)}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </>
  )
}

export default ServiceGrid