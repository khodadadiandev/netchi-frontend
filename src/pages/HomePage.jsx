import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import StatsSection from '../components/home/StatsSection'
import ServiceGrid from '../components/services/ServiceGrid'
import { SERVICES } from '../utils/constants'

const HomePage = () => {
  const featuredServices = SERVICES.slice(0, 6)

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      
      {/* Featured Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدمات <span className="text-blue-600">پرطرفدار</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              بهترین خدمات کافی نت را با کیفیت و قیمت مناسب تجربه کنید
            </p>
          </div>
          
          <ServiceGrid services={featuredServices} loading={false} error={null} />
          
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg"
            >
              مشاهده همه خدمات
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      <StatsSection />
    </div>
  )
}

export default HomePage