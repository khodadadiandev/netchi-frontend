import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  HelpCircle, ChevronDown, Search, 
  MessageSquare, BookOpen, Globe, 
  Smartphone, CreditCard, Shield,
  CheckCircle
} from 'lucide-react'

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const categories = [
    { id: 'all', label: 'همه دسته‌ها', icon: <Globe className="w-5 h-5" /> },
    { id: 'general', label: 'عمومی', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'technical', label: 'فنی', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'payment', label: 'پرداخت', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'security', label: 'امنیتی', icon: <Shield className="w-5 h-5" /> }
  ]

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'نتچی چیست و چه خدماتی ارائه می‌دهد؟',
      answer: 'نتچی یک پلتفرم جامع خدمات کافی نت است که شامل طراحی وب‌سایت، توسعه اپلیکیشن موبایل، خدمات سئو، طراحی گرافیک، تولید محتوا و پشتیبانی فنی می‌شود. ما با تیمی از متخصصان مجرب، کسب‌وکارها را در مسیر دیجیتال‌سازی همراهی می‌کنیم.'
    },
    {
      id: 2,
      category: 'technical',
      question: 'زمان تحویل پروژه‌ها چقدر است؟',
      answer: 'زمان تحویل به نوع سرویس و پیچیدگی پروژه بستگی دارد. به طور کلی: طراحی وب‌سایت ساده: ۷-۱۰ روز کاری، اپلیکیشن موبایل: ۱۴-۲۱ روز کاری، خدمات سئو: از همان روز شروع می‌شود. زمان دقیق در هنگام ثبت سفارش اعلام می‌شود.'
    },
    {
      id: 3,
      category: 'payment',
      question: 'روش‌های پرداخت چه هستند؟',
      answer: 'ما از روش‌های متنوع پرداخت پشتیبانی می‌کنیم: کارت‌های بانکی عضو شتاب، پرداخت از طریق درگاه‌های بانکی معتبر، کیف پول الکترونیکی، پرداخت حضوری و اقساطی (برای پروژه‌های بزرگ). تمام تراکنش‌ها به صورت کاملاً امن انجام می‌شوند.'
    },
    {
      id: 4,
      category: 'security',
      question: 'اطلاعات من چگونه محافظت می‌شود؟',
      answer: 'ما از استانداردهای امنیتی پیشرفته استفاده می‌کنیم: رمزنگاری SSL، احراز هویت دو مرحله‌ای، بک‌آپ روزانه، سرورهای امن و نظارت ۲۴ ساعته. اطلاعات شما نزد ما محرمانه باقی می‌ماند و با هیچ شخص ثالثی به اشتراک گذاشته نمی‌شود.'
    },
    {
      id: 5,
      category: 'general',
      question: 'آیا امکان بازگشت وجه وجود دارد؟',
      answer: 'بله! ما ۷ روز ضمانت بازگشت وجه داریم. اگر از کیفیت خدمات راضی نباشید، تا ۷ روز پس از تحویل می‌توانید درخواست بازگشت وجه دهید. مبلغ کامل (بدون کسر هیچ هزینه‌ای) به حساب شما بازگردانده می‌شود.'
    },
    {
      id: 6,
      category: 'technical',
      question: 'پس از تحویل پروژه، پشتیبانی دارید؟',
      answer: 'بله، تمام پروژه‌ها با پشتیبانی رایگان همراه هستند: طراحی وب‌سایت: ۶ ماه پشتیبانی رایگان، اپلیکیشن موبایل: ۱ سال پشتیبانی رایگان، خدمات سئو: ۳ ماه پشتیبانی رایگان. همچنین پشتیبانی ۲۴/۷ از طریق تیکت و تلفن ارائه می‌شود.'
    },
    {
      id: 7,
      category: 'payment',
      question: 'آیا امکان پرداخت اقساطی وجود دارد؟',
      answer: 'بله، برای پروژه‌های بالای ۵ میلیون تومان امکان پرداخت اقساطی وجود دارد. معمولاً به صورت ۵۰٪ پیش پرداخت و ۵۰٪ پس از تحویل، یا در ۳ قسط مساوی. شرایط دقیق اقساط با توجه به نوع پروژه متفاوت است.'
    },
    {
      id: 8,
      category: 'security',
      question: 'چگونه اطمینان حاصل کنم که پروژه مطابق خواسته من انجام شود؟',
      answer: 'ما در تمام مراحل با شما در ارتباط هستیم: ۱) جلسه مشاوره رایگان، ۲) ارائه طرح اولیه و تایید شما، ۳) گزارش روزانه پیشرفت، ۴) تست نهایی توسط شما، ۵) تحویل و آموزش استفاده. شما در هر مرحله حق وتو دارید.'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    
    return matchesSearch && matchesCategory
  })

  return (
    <div className="py-12">
      <div className="container-elegant">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-6">
            <HelpCircle className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">سوالات متداول</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            پاسخ سوالات متداول خود را در این بخش پیدا کنید. اگر پاسخ سوال خود را نیافتید، با ما تماس بگیرید.
          </p>
        </div>

        {/* Search Bar */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="چه سوالی دارید؟ (جستجو کنید...)"
              className="w-full pr-12 pl-4 py-4 input-glass"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Categories */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-blue-600 ml-3" />
                دسته‌بندی‌ها
              </h3>
              
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center space-x-3 space-x-reverse p-3 rounded-xl transition-all ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-r-4 border-blue-500'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    {category.icon}
                    <span className="font-medium">{category.label}</span>
                  </button>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">تعداد سوالات:</span>
                    <span className="font-bold text-gray-900">{faqs.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">دسته‌بندی‌ها:</span>
                    <span className="font-bold text-gray-900">{categories.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">بروزرسانی:</span>
                    <span className="font-bold text-gray-900">۱۴۰۲/۱۰</span>
                  </div>
                </div>
              </div>

              {/* Help CTA */}
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl text-center">
                <h4 className="font-bold text-gray-900 mb-2">پاسخ خود را نیافتید؟</h4>
                <p className="text-sm text-gray-600 mb-4">
                  تیم پشتیبانی ما آماده پاسخگویی است
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  ارسال تیکت پشتیبانی
                  <MessageSquare className="w-4 h-4 mr-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - FAQs */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-gray-900">
                  {activeCategory === 'all' ? 'همه سوالات' : 
                   categories.find(c => c.id === activeCategory)?.label}
                </h3>
                <span className="text-sm text-gray-600">
                  {filteredFaqs.length} سوال یافت شد
                </span>
              </div>

              {filteredFaqs.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">سوالی یافت نشد</h4>
                  <p className="text-gray-600 mb-6">
                    سوال شما در حال حاضر در بانک اطلاعاتی ما وجود ندارد
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    سوال خود را از پشتیبانی بپرسید
                    <MessageSquare className="w-5 h-5 mr-2" />
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border border-gray-200 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full flex items-center justify-between p-6 text-right hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-4 space-x-reverse">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <HelpCircle className="w-5 h-5 text-blue-600" />
                          </div>
                          <h4 className="font-bold text-gray-900 text-lg">{faq.question}</h4>
                        </div>
                        <motion.div
                          animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openItems.includes(faq.id) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0">
                              <div className="border-t border-gray-100 pt-6">
                                <div className="prose prose-lg max-w-none">
                                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                                <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                                  <div className="flex items-center text-sm text-gray-600">
                                    <span className="px-3 py-1 bg-gray-100 rounded-full">
                                      {categories.find(c => c.id === faq.category)?.label}
                                    </span>
                                    <span className="mr-4">•</span>
                                    <span>به‌روزرسانی: ۱۴۰۲/۱۰</span>
                                  </div>
                                  <div className="mr-auto flex items-center text-green-600 text-sm">
                                    <CheckCircle className="w-4 h-4 ml-2" />
                                    پاسخ تایید شده
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Help Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <MessageSquare className="w-5 h-5 text-blue-600 ml-3" />
                      سوال فنی دارید؟
                    </h4>
                    <p className="text-gray-700 mb-4">
                      تیم فنی ما آماده پاسخگویی به سوالات تخصصی شماست
                    </p>
                    <a
                      href="/contact?type=technical"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      ارسال سوال فنی
                    </a>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <Smartphone className="w-5 h-5 text-green-600 ml-3" />
                      نیاز به مشاوره دارید؟
                    </h4>
                    <p className="text-gray-700 mb-4">
                      جلسه مشاوره رایگان با متخصصان نتچی رزرو کنید
                    </p>
                    <a
                      href="/contact?type=consultation"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      رزرو مشاوره
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQPage