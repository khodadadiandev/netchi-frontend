import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { Sparkles, CheckCircle } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-16 lg:py-24">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-100 rounded-full opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>رتبه اول خدمات کافی نت</span>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              <span className="block text-blue-600">خدمات حرفه‌ای</span>
              <span className="block mt-2">کافی نت و طراحی سایت</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              با تیم متخصص نتچی، کسب و کار آنلاین خود را 
              <span className="text-blue-600 font-medium"> با کیفیت بالا </span>
              و 
              <span className="text-blue-600 font-medium"> قیمت مناسب </span>
              راه‌اندازی کنید
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">طراحی سایت حرفه‌ای</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">کافی نت ۲۴ ساعته</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">پشتیبانی دائمی</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="w-full sm:w-auto">
              <Button 
                size="large" 
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg"
              >
                مشاهده خدمات
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="large"
                className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 shadow-sm"
              >
                تماس رایگان
              </Button>
            </Link>
          </div>

          {/* Stats with Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">۵۰۰+</div>
              <div className="text-gray-600 text-sm">پروژه موفق</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">۲۰۰+</div>
              <div className="text-gray-600 text-sm">مشتری راضی</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">۹۸٪</div>
              <div className="text-gray-600 text-sm">رضایت مشتری</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">۵۰+</div>
              <div className="text-gray-600 text-sm">متخصص فعال</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection