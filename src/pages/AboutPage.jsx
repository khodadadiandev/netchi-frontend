import TeamSection from '../components/about/TeamSection'

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            درباره <span className="text-blue-600">نتچی</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            پلتفرم جامع نتچی با هدف ارائه خدمات کافی نت با کیفیت و قیمت مناسب 
            در سال ۱۴۰۰ تأسیس شد. ما با تیمی از متخصصان مجرب، همراه کسب‌وکارها 
            در مسیر دیجیتال‌سازی هستیم.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="card p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl text-blue-600">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ماموریت ما</h3>
            <p className="text-gray-600 leading-relaxed">
              ارائه خدمات کافی نت با بالاترین کیفیت و پشتیبانی دائمی به کسب‌وکارهای 
              ایرانی. ما با استفاده از تکنولوژی‌های روز دنیا و تیمی متخصص، 
              همراه شما در موفقیت دیجیتال هستیم.
            </p>
          </div>
          
          <div className="card p-8">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl text-green-600">🌟</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">چشم‌انداز</h3>
            <p className="text-gray-600 leading-relaxed">
              تبدیل شدن به برترین پلتفرم خدمات کافی نت در سطح منطقه تا سال ۱۴۰۵. 
              ما به دنبال ایجاد اکوسیستمی کامل از خدمات دیجیتال برای حمایت از 
              رشد کسب‌وکارهای ایرانی هستیم.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            ارزش‌های <span className="text-blue-600">نتچی</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'کیفیت',
                description: 'تضمین کیفیت تمام خدمات با استانداردهای بین‌المللی',
                icon: '🏆'
              },
              {
                title: 'پشتیبانی',
                description: 'پشتیبانی ۲۴ ساعته و پاسخگویی سریع به نیازهای شما',
                icon: '🤝'
              },
              {
                title: 'شفافیت',
                description: 'قیمت‌گذاری شفاف و بدون هیچ هزینه پنهان',
                icon: '🔍'
              }
            ].map((value, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <TeamSection />

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            آماده شروع همکاری هستید؟
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            تیم نتچی منتظر است تا بهترین خدمات کافی نت را در اختیار شما قرار دهد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              مشاهده خدمات
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              تماس با ما
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage