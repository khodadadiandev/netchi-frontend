import { motion } from 'framer-motion'
import { 
  FileText, Shield, Lock, UserCheck,
  AlertCircle, CheckCircle, XCircle, BookOpen
} from 'lucide-react'

const TermsPage = () => {
  const sections = [
    {
      title: 'مقدمه و تعاریف',
      icon: <BookOpen className="w-6 h-6" />,
      content: `نتچی یک پلتفرم ارائه خدمات کافی نت است که با هدف تسهیل دسترسی به خدمات دیجیتال ایجاد شده است. استفاده از خدمات این پلتفرم به منزله پذیرش کامل این شرایط است.`
    },
    {
      title: 'شرایط استفاده',
      icon: <UserCheck className="w-6 h-6" />,
      content: `کاربران موظفند اطلاعات دقیق و صحیح ارائه دهند. هرگونه استفاده غیرمجاز از پلتفرم ممنوع است. کاربر مسئول حفظ محرمانگی اطلاعات حساب خود است.`
    },
    {
      title: 'خدمات و مسئولیت‌ها',
      icon: <FileText className="w-6 h-6" />,
      content: `نتچی متعهد به ارائه خدمات با کیفیت است اما هیچ تضمین صریح یا ضمنی در مورد عملکرد بدون وقفه خدمات نمی‌دهد. ما در صورت بروز مشکل فنی، برای رفع آن تلاش خواهیم کرد.`
    },
    {
      title: 'حریم خصوصی',
      icon: <Lock className="w-6 h-6" />,
      content: `ما اطلاعات شخصی شما را مطابق با قوانین حریم خصوصی محافظت می‌کنیم. اطلاعات فقط برای ارائه خدمات و بهبود تجربه کاربری استفاده می‌شود.`
    },
    {
      title: 'مالکیت فکری',
      icon: <Shield className="w-6 h-6" />,
      content: `تمام حقوق مادی و معنوی پلتفرم، محتوا و خدمات متعلق به نتچی است. هرگونه کپی‌برداری، توزیع یا استفاده تجاری بدون مجوز کتبی ممنوع است.`
    },
    {
      title: 'تعهدات کاربر',
      icon: <AlertCircle className="w-6 h-6" />,
      items: [
        'ارائه اطلاعات صحیح و به‌روز',
        'عدم استفاده از خدمات برای فعالیت‌های غیرقانونی',
        'رعایت حقوق دیگر کاربران',
        'عدم تلاش برای نفوذ به سیستم'
      ]
    },
    {
      title: 'ضمانت و بازگشت وجه',
      icon: <CheckCircle className="w-6 h-6" />,
      content: `ما ۷ روز ضمانت بازگشت وجه داریم. در صورت عدم رضایت از خدمات، تا ۷ روز پس از تحویل می‌توانید درخواست بازگشت وجه دهید.`
    },
    {
      title: 'تغییرات شرایط',
      icon: <XCircle className="w-6 h-6" />,
      content: `نتچی حق تغییر این شرایط را در هر زمان دارد. ادامه استفاده از خدمات پس از اعمال تغییرات به منزله پذیرش شرایط جدید است.`
    }
  ]

  return (
    <div className="py-12">
      <div className="container-elegant">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">قوانین و مقررات</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            لطفاً قبل از استفاده از خدمات نتچی، شرایط استفاده را به دقت مطالعه فرمایید.
          </p>
        </div>

        {/* Important Notice */}
        <div className="glass-card rounded-2xl p-6 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100">
          <div className="flex items-start space-x-4 space-x-reverse">
            <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">توجه مهم</h3>
              <p className="text-gray-700">
                با استفاده از خدمات نتچی، شما تمامی شرایط و قوانین مندرج در این صفحه را می‌پذیرید. 
                در صورت عدم توافق با هر یک از بندهای زیر، لطفاً از خدمات ما استفاده نکنید.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
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

        {/* Acceptance Section */}
        <div className="mt-12 glass-card rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">تایید نهایی</h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            با ثبت‌نام در پلتفرم نتچی یا استفاده از خدمات آن، شما تمامی شرایط و قوانین فوق را می‌پذیرید 
            و متعهد می‌شوید که آنها را رعایت کنید. در صورت هرگونه سوال یا ابهام، با پشتیبانی تماس بگیرید.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-2">۷ روز</div>
              <div className="font-medium text-gray-900">ضمانت بازگشت وجه</div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">۲۴/۷</div>
              <div className="font-medium text-gray-900">پشتیبانی تخصصی</div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">۱۰۰٪</div>
              <div className="font-medium text-gray-900">رضایت مشتری</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="font-bold text-gray-900 mb-4">اطلاعات تماس</h4>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 sm:space-x-reverse">
              <a href="mailto:legal@netchi.ir" className="text-blue-600 hover:text-blue-700">
                legal@netchi.ir
              </a>
              <a href="tel:+982112345678" className="text-blue-600 hover:text-blue-700">
                ۰۲۱-۱۲۳۴۵۶۷۸
              </a>
              <a href="/contact" className="text-blue-600 hover:text-blue-700">
                صفحه تماس
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage