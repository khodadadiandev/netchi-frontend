import { CheckCircle, Headphones, Zap, Shield } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'کیفیت تضمینی',
      description: 'تمامی خدمات با کیفیت عالی و تضمین بازگشت وجه ارائه می‌شوند',
      icon: CheckCircle,
      color: 'emerald'
    },
    {
      id: 2,
      title: 'پشتیبانی ۲۴/۷',
      description: 'پشتیبانی دائمی و پاسخگویی سریع به تمام سوالات شما',
      icon: Headphones,
      color: 'blue'
    },
    {
      id: 3,
      title: 'تحویل سریع',
      description: 'ارائه خدمات با سرعت بالا و رعایت دقیق زمان‌بندی',
      icon: Zap,
      color: 'amber'
    },
    {
      id: 4,
      title: 'پرداخت امن',
      description: 'تراکنش‌های کاملاً امن با درگاه‌های معتبر ایرانی',
      icon: Shield,
      color: 'violet'
    }
  ]

  const getColorClasses = (color) => {
    switch(color) {
      case 'emerald': return 'text-emerald-600 bg-emerald-50 border-emerald-100'
      case 'blue': return 'text-blue-600 bg-blue-50 border-blue-100'
      case 'amber': return 'text-amber-600 bg-amber-50 border-amber-100'
      case 'violet': return 'text-violet-600 bg-violet-50 border-violet-100'
      default: return 'text-gray-600 bg-gray-50 border-gray-100'
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
            مزایای ما
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            چرا <span className="text-blue-600">نتچی</span> را انتخاب می‌کنند؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تجربه‌ای متفاوت از خدمات آنلاین با کیفیت و پشتیبانی عالی
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon
            const colorClasses = getColorClasses(feature.color)
            
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-gray-300"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colorClasses} mb-5 transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Subtle indicator */}
                <div className="absolute bottom-6 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gray-100 to-transparent group-hover:from-gray-200 group-hover:to-gray-200 transition-all duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              آماده شروع همکاری هستید؟
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              همین حالا خدمات مورد نظر خود را انتخاب کنید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg"
              >
                مشاهده خدمات
                <svg 
                  className="w-5 h-5 mr-2 transform -scale-x-100" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg border-2 border-white transition-colors duration-300"
              >
                تماس با ما
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection