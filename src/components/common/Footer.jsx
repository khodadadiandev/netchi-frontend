import { Link } from 'react-router-dom'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    خدمات: [
      { label: 'طراحی وب سایت', href: '/services?category=design' },
      { label: 'اپلیکیشن موبایل', href: '/services?category=mobile' },
      { label: 'گرافیک و لوگو', href: '/services?category=graphic' },
      { label: 'سئو و بهینه‌سازی', href: '/services?category=seo' },
    ],
    شرکت: [
      { label: 'درباره ما', href: '/about' },
      { label: 'تماس با ما', href: '/contact' },
      { label: 'قوانین', href: '/terms' },
      { label: 'حریم خصوصی', href: '/privacy' },
    ],
    پشتیبانی: [
      { label: 'سوالات متداول', href: '/faq' },
      { label: 'راهنمای خرید', href: '/guide' },
      { label: 'گزارش مشکل', href: '/support' },
      { label: 'وضعیت سفارش', href: '/orders' },
    ],
  }

  const socialLinks = [
    { icon: FiFacebook, href: 'https://facebook.com/netchi', label: 'فیسبوک' },
    { icon: FiTwitter, href: 'https://twitter.com/netchi', label: 'توییتر' },
    { icon: FiInstagram, href: 'https://instagram.com/netchi', label: 'اینستاگرام' },
    { icon: FiLinkedin, href: 'https://linkedin.com/company/netchi', label: 'لینکدین' },
  ]

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container-custom">
          <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="relative">
                   
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br rounded-full border-2 border-gray-900"></div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-black bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      نتچی
                    </h2>
                    <p className="text-gray-400 text-sm font-medium tracking-wider">NETCHI.IR</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  پلتفرم پیشرو خدمات کافی نت با تکنولوژی روز
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-gray-800/50 hover:bg-blue-600/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700/50 hover:border-blue-500/30"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 text-gray-400 hover:text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Columns */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-base font-semibold text-gray-200">{category}</h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800/30 py-6">
            <div className="flex justify-center">
              <p className="text-gray-500 text-sm text-center">
                © {currentYear} <span className="text-gray-300 font-semibold">نتچی</span>. تمامی حقوق محفوظ است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer