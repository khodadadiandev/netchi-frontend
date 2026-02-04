import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Clock, Send, 
  MessageSquare, Headphones, CheckCircle
} from 'lucide-react'
import Button from '../components/common/Button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, title: 'تلفن تماس', value: '۰۲۱-۱۲۳۴۵۶۷۸', action: 'tel:02112345678' },
    { icon: <Mail className="w-6 h-6" />, title: 'ایمیل', value: 'info@netchi.ir', action: 'mailto:info@netchi.ir' },
    { icon: <MapPin className="w-6 h-6" />, title: 'آدرس', value: 'تهران، خیابان ولیعصر، پلاک ۱۲۳' },
    { icon: <Clock className="w-6 h-6" />, title: 'ساعات کاری', value: 'شنبه تا پنجشنبه: ۸ صبح تا ۸ شب' }
  ]

  return (
    <div className="py-12">
      <div className="container-elegant">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">تماس با ما</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ما همیشه آماده پاسخگویی به سوالات و شنیدن پیشنهادات شما هستیم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:pr-12"
          >
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">پیام به ما</h3>
                  <p className="text-gray-600">در کمتر از ۲۴ ساعت پاسخ می‌دهیم</p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">پیام شما ارسال شد!</h4>
                  <p className="text-gray-600">کارشناسان ما به زودی با شما تماس خواهند گرفت</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full input-glass"
                        placeholder="علی محمدی"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ایمیل
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full input-glass"
                        placeholder="example@email.com"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        شماره تماس
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full input-glass"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        dir="ltr"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        موضوع
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full input-glass"
                        placeholder="موضوع پیام"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      متن پیام
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full input-glass"
                      placeholder="پیام خود را اینجا بنویسید..."
                    />
                  </div>

                  <Button type="submit" className="w-full group" size="large">
                    <span className="flex items-center justify-center">
                      ارسال پیام
                      <Send className="w-5 h-5 mr-3 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600 mt-1">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Support Section */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">پشتیبانی فنی</h3>
                  <p className="text-gray-600">۲۴ ساعته در ۷ روز هفته</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <h4 className="font-bold text-blue-900 mb-2">پشتیبانی فوری</h4>
                  <p className="text-blue-700 text-sm">
                    برای مشکلات فوری از طریق تلفن با ما در ارتباط باشید
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl">
                  <h4 className="font-bold text-green-900 mb-2">تیکت پشتیبانی</h4>
                  <p className="text-green-700 text-sm">
                    برای مسائل غیرفوری از طریق فرم ارسال پیام اقدام کنید
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="glass-card rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">سوالات متداول</h3>
              <p className="text-gray-600 mb-6">
                پاسخ بسیاری از سوالات خود را در بخش سوالات متداول پیدا کنید
              </p>
              <a
                href="/faq"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                مشاهده سوالات متداول
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage