import { useParams } from 'react-router-dom'
import ServiceDetails from '../components/services/ServiceDetails'
import { SERVICES } from '../utils/constants'

const ServiceDetailsPage = () => {
  const { id } = useParams()
  const service = SERVICES.find(s => s.id === parseInt(id))

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">سرویس یافت نشد</h2>
        <p className="text-gray-600 mb-8">سرویس مورد نظر وجود ندارد یا حذف شده است</p>
        <a
          href="/services"
          className="bg-blue-600 text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          بازگشت به لیست خدمات
        </a>
      </div>
    )
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        <ServiceDetails service={service} />
        
        {/* Related Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            خدمات <span className="text-blue-600">مشابه</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES
              .filter(s => s.category === service.category && s.id !== service.id)
              .slice(0, 3)
              .map(relatedService => (
                <div key={relatedService.id} className="card p-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={relatedService.image}
                        alt={relatedService.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {relatedService.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {relatedService.description}
                      </p>
                      <a
                        href={`/services/${relatedService.id}`}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        مشاهده جزئیات →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailsPage