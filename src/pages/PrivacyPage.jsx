import { motion } from 'framer-motion'
import { 
  Shield, Lock, Eye, Database,
  Users, Globe, Bell, CheckCircle
} from 'lucide-react'

const PrivacyPage = () => {
  const sections = [
    {
      title: 'اطلاعات جمع‌آوری شده',
      icon: <Database className="w-6 h-6" />,
      items: [
        'اطلاعات شخصی (نام، ایمیل، شماره تماس)',
        'اطلاعات تراکنش‌های مالی',
        'اطلاعات فنی (IP، مرورگر، دستگاه)',
        'اطلاعات استفاده از خدمات',
        'اطلاعات تماس پشتیبانی'
      ]
    },
    {
      title: 'استفاده از اطلاعات',
      icon: <Eye className="w-6 h-6" />,
      content: `ما از اطلاعات شما برای: ارائه و بهبود خدمات، پردازش تراکنش‌ها، ارتباط با شما، ارسال اعلان‌های مهم و تحلیل استفاده می‌کنیم.`
    },
    {
      title: 'اشتراک‌گذاری اطلاعات',
      icon: <Users className="w-6 h-6" />,
      content: `اطلاعات شما را با هیچ شخص ثالثی به اشتراک نمی‌گذاریم، مگر در موارد: الزام قانونی، ارائه خدمات توسط همکاران مورد اعتماد (با حفظ حریم خصوصی)، یا با رضایت صریح شما.`
    },
    {
      title: 'امنیت اطلاعات',
      icon: <Lock className="w-6 h-6" />,
      items: [
        'رمزنگاری SSL برای انتقال داده',
        'سرورهای امن و محافظت شده',
        'دسترسی محدود به اطلاعات',
        'بک‌آپ منظم',
        'نظارت مستمر امنیتی'
      ]
    },
    {
      title: 'کوکی‌ها و ردیابی',
      icon: <Globe className="w-6 h-6" />,
      content: `ما از کوکی‌ها برای بهبود تجربه کاربری، تحلیل ترافیک و به‌خاطر سپاری تنظیمات استفاده می‌کنیم. می‌توانید تنظیمات کوکی را در مرورگر خود تغییر دهید.`
    },
    {
      title: 'حقوق کاربر',
      icon: <Shield className="w-6 h-6" />,
      items: [
        'دسترسی به اطلاعات شخصی',
        'درخواست تصحیح اطلاعات',
        'درخواست حذف اطلاعات',
        'اعتراض به پردازش اطلاعات',
        'دریافت کپی اطلاعات'
      ]
    },
    {
      title: 'اعلان‌ها و به‌روزرسانی',
      icon: <Bell className="w-6 h-6" />,
      content: `در صورت تغییر این سیاست، شما را از طریق ایمیل یا اعلان در پلتفرم مطلع خواهیم کرد. ادامه استفاده از خدمات پس از تغییرات به منزله پذیرش آنهاست.`
    }
  ]

  return (
    <div className="py-12">
      <div className="container-elegant">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">امنیت و حریم خصوصی</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            حریم خصوصی شما برای ما اهمیت دارد. در این صفحه نحوه جمع‌آوری، استفاده و محافظت از اطلاعات شما را توضیح می‌دهیم.
          </p>
        </div>

        {/* Last Update */}
        <div className="glass-card rounded-2xl p-6 mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-bold text-gray-900">آخرین بروزرسانی</h3>
                <p className="text-gray-700">۱۴۰۲/۱۰/۱۵ - نسخه ۲.۱</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white border border-green-200 text-green-700 rounded-xl hover:bg-green-50 transition-colors">
              دانلود PDF
            </button>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4 space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                  {section.content && (
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  )}
                  {section.items && (
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3 space-x-reverse">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Protection */}
        <div className="mt-12 glass-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">حفاظت از داده‌ها</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">رمزنگاری پیشرفته</h4>
              <p className="text-gray-600 text-sm">
                استفاده از استانداردهای رمزنگاری صنعتی برای محافظت از داده‌ها
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">دسترسی محدود</h4>
              <p className="text-gray-600 text-sm">
                تنها پرسنل مجاز به اطلاعات دسترسی دارند
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">بک‌آپ امن</h4>
              <p className="text-gray-600 text-sm">
                پشتیبان‌گیری منظم در سرورهای امن
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Support */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">سوالات حریم خصوصی</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            اگر سوالی در مورد سیاست حریم خصوصی دارید یا می‌خواهید از حقوق خود استفاده کنید، 
            با تیم حریم خصوصی ما تماس بگیرید.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 sm:space-x-reverse">
            <a href="mailto:privacy@netchi.ir" className="text-blue-600 hover:text-blue-700 font-medium">
              privacy@netchi.ir
            </a>
            <a href="/contact?type=privacy" className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all">
              ارسال درخواست حریم خصوصی
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage