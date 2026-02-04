import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ShoppingCart, User,
  ChevronDown, LogOut, Settings, Bell,
  Home, Package, Info, Phone, Sparkles,
  CreditCard, Shield, Star
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
const { user, logout } = useAuth()
const isAuthenticated = !!user
  const { getCartCount } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const userMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setShowUserMenu(false)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/')
    setShowUserMenu(false)
  }

  const navItems = [
    { path: '/', label: 'خانه', icon: Home },
    { path: '/services', label: 'خدمات', icon: Package },
    { path: '/about', label: 'درباره ما', icon: Info },
    { path: '/contact', label: 'تماس با ما', icon: Phone }
  ]

  const userMenuItems = [
    { label: 'پروفایل', path: '/profile', icon: User },
    { label: 'سفارشات', path: '/orders', icon: ShoppingCart },
    { label: 'امنیت', path: '/security', icon: Shield },
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-2xl shadow-2xl shadow-blue-500/5 border-b border-blue-100/20'
          : 'bg-gradient-to-b from-white via-white/95 to-transparent'
      }`}>
        {/* Glowing Border Effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center group"
            >
              <Link to="/" className="relative">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    {/* Glass Morphism Logo Container */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 shadow-lg shadow-blue-500/10 flex items-center justify-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Floating Particles */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400/40 rounded-full blur-sm animate-pulse" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-indigo-400/40 rounded-full blur-sm animate-pulse delay-300" />
                  </div>
                  
                  <div className="text-right">
                    <h1 className="font-black text-3xl bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-700 bg-clip-text text-transparent tracking-tighter">
                      نتچی
                    </h1>
                    <p className="text-xs text-gray-500 font-medium tracking-wider mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      آنلاین
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="relative"
                  >
                    <Link
                      to={item.path}
                      className={`relative flex items-center gap-2 px-5 py-3 rounded-2xl transition-all duration-300 group ${
                        isActive 
                          ? 'text-blue-700 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 shadow-lg shadow-blue-200/50 ring-2 ring-blue-100/50' 
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                      }`}
                    >
                      {/* Icon Container with Active State */}
                      <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-br from-blue-100 to-indigo-100' 
                          : 'bg-gray-100 group-hover:bg-blue-100'
                      }`}>
                        <item.icon className={`w-4.5 h-4.5 transition-all duration-300 ${
                          isActive 
                            ? 'text-blue-600' 
                            : 'text-gray-500 group-hover:text-blue-500'
                        }`} />
                      </div>
                      
                      <span className={`text-sm font-semibold transition-all duration-300 ${
                        isActive 
                          ? 'text-blue-700' 
                          : 'text-gray-800 group-hover:text-blue-700'
                      }`}>
                        {item.label}
                      </span>
                      
                      {/* Active Glow Effect */}
                      {isActive && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 rounded-2xl blur-xl" />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Cart Button - Improved Design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  to="/cart"
                  className="relative p-3.5 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm border border-blue-100/50 hover:border-blue-200/50 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group"
                >
                  {/* Main Cart Icon */}
                  <div className="relative">
                    <ShoppingCart className="w-5.5 h-5.5 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" />
                    
                    {/* Cart Count Badge - Improved */}
                    {getCartCount() > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-3 -right-3"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 rounded-full blur-sm animate-pulse"></div>
                          <div className="relative w-7 h-7 bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg shadow-red-500/30 border-2 border-white/80">
                            {getCartCount()}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-blue-400/0 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Pulsing Ring for Active Cart */}
                  {getCartCount() > 0 && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-red-400/30 animate-ping opacity-0 group-hover:opacity-100"></div>
                  )}
                </Link>
                
                {/* Floating Tooltip */}
                {getCartCount() > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap z-10"
                  >
                    {getCartCount()} آیتم در سبد
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                  </motion.div>
                )}
              </motion.div>

              {/* Auth Buttons / User Menu */}
              {isAuthenticated ? (
                <div className="relative" ref={userMenuRef}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className={`flex items-center gap-3 p-2 rounded-2xl transition-all duration-300 ${
                      showUserMenu 
                        ? 'bg-gradient-to-r from-blue-50/80 to-indigo-50/80 ring-2 ring-blue-100/50' 
                        : 'bg-gradient-to-br from-white to-blue-50/50 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50'
                    } backdrop-blur-sm border border-blue-100/50 hover:border-blue-200/50 shadow-lg shadow-blue-500/10`}
                  >
                    {/* Avatar with Status */}
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md overflow-hidden">
                        {user?.avatar ? (
                          <img 
                            src={user.avatar} 
                            alt={user.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900 leading-none">
                        {user?.name?.split(' ')[0] || 'کاربر'}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {user?.credit?.toLocaleString()} تومان
                      </div>
                    </div>
                    
                    <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
                      showUserMenu 
                        ? 'rotate-180 text-blue-600' 
                        : 'text-gray-400'
                    }`} />
                  </motion.button>

                  {/* User Dropdown Menu */}
                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-3 w-72 bg-gradient-to-b from-white/95 to-blue-50/30 backdrop-blur-2xl rounded-2xl shadow-2xl shadow-blue-500/10 border border-white/20 overflow-hidden"
                      >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                              {user?.avatar ? (
                                <img 
                                  src={user.avatar} 
                                  alt={user.name}
                                  className="w-full h-full rounded-xl object-cover"
                                />
                              ) : (
                                <User className="w-6 h-6 text-white" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-bold text-gray-900 truncate">
                                {user?.name}
                              </div>
                              <div className="text-xs text-gray-600 truncate">
                                {user?.email}
                              </div>
                            </div>
                          </div>
                          
                          {/* Credit Card */}
                          <div className="relative p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-white/20 backdrop-blur-sm">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-semibold text-gray-700">اعتبار کیف پول</span>
                              <span className="text-sm font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                {user?.credit?.toLocaleString()} تومان
                              </span>
                            </div>
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full blur-sm animate-pulse" />
                          </div>
                        </div>
                        
                        {/* Menu Items */}
                        <div className="p-2">
                          {userMenuItems.map((item, index) => (
                            <motion.div
                              key={item.path}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              whileHover={{ x: 5 }}
                            >
                              <Link
                                to={item.path}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 group"
                                onClick={() => setShowUserMenu(false)}
                              >
                                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-300">
                                  <item.icon className="w-4 h-4 text-blue-600 group-hover:text-indigo-700" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-800">
                                  {item.label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                          
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleLogout}
                            className="w-full mt-2 flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-red-50/50 hover:to-pink-50/50 transition-all duration-300 group"
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-br from-red-100 to-pink-100 group-hover:from-red-200 group-hover:to-pink-200">
                              <LogOut className="w-4 h-4 text-red-600" />
                            </div>
                            <span className="text-sm font-bold text-red-600 group-hover:text-red-700">
                              خروج از حساب
                            </span>
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/login"
                      className="px-6 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-700 transition-colors duration-300 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 rounded-2xl border border-transparent hover:border-blue-100"
                    >
                      ورود
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  </motion.div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-2xl transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 ring-2 ring-blue-100' 
                  : 'bg-gradient-to-br from-white to-blue-50/50 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50'
              } backdrop-blur-sm border border-blue-100/50 shadow-lg shadow-blue-500/10`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-gradient-to-b from-black/50 via-black/30 to-black/20 backdrop-blur-xl lg:hidden"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 200,
                mass: 0.5
              }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-gradient-to-b from-white/95 via-blue-50/30 to-blue-50/10 backdrop-blur-2xl shadow-2xl shadow-blue-500/10 border-r border-white/20"
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-white/10 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
                <div className="flex items-center justify-between mb-6">
                  <Link 
                    to="/" 
                    onClick={() => setIsMenuOpen(false)} 
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="font-black text-2xl bg-gradient-to-r from-gray-900 to-indigo-700 bg-clip-text text-transparent">
                        نتچی
                      </span>
                      <p className="text-xs text-gray-500">سرویس آنلاین</p>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-xl hover:bg-white/30 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* User Info */}
                {isAuthenticated ? (
                  <div className="mb-6 p-4 bg-gradient-to-r from-white/80 to-blue-50/50 rounded-2xl shadow-lg border border-white/20 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                          {user?.avatar ? (
                            <img 
                              src={user.avatar} 
                              alt={user.name}
                              className="w-full h-full rounded-2xl object-cover"
                            />
                          ) : (
                            <User className="w-7 h-7 text-white" />
                          )}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-gray-900 truncate">
                          {user?.name}
                        </div>
                        <div className="text-xs text-gray-600 truncate">
                          {user?.email}
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/60 rounded-xl border border-white/30">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-gray-700">اعتبار</span>
                        <span className="text-sm font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {user?.credit?.toLocaleString()} تومان
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-3 mb-6">
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex-1 py-3 text-center text-sm font-semibold text-gray-700 bg-white/60 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-300 border border-white/30"
                    >
                      ورود
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex-1 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                    >
                      ثبت نام
                    </Link>
                  </div>
                )}
              </div>

              {/* Menu Items */}
              <div className="p-4 overflow-y-auto h-[calc(100vh-250px)]">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      whileHover={{ x: -5 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                          location.pathname === item.path
                            ? 'bg-gradient-to-r from-blue-50/80 to-indigo-50/80 text-blue-700 font-bold shadow-md ring-2 ring-blue-100/50'
                            : 'text-gray-800 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg ${
                          location.pathname === item.path 
                            ? 'bg-gradient-to-br from-blue-100 to-indigo-100' 
                            : 'bg-gray-100'
                        }`}>
                          <item.icon className={`w-4.5 h-4.5 ${
                            location.pathname === item.path ? 'text-blue-600' : 'text-gray-500'
                          }`} />
                        </div>
                        <span className="text-sm font-semibold">{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Cart Item - Improved */}
                  <motion.div
                    whileHover={{ x: -5 }}
                  >
                    <Link
                      to="/cart"
                      onClick={() => setIsMenuOpen(false)}
                      className="relative flex items-center justify-between px-4 py-3.5 rounded-2xl text-gray-800 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="p-1.5 rounded-lg bg-gray-100 group-hover:bg-blue-100">
                            <ShoppingCart className="w-4.5 h-4.5 text-gray-500 group-hover:text-blue-500" />
                          </div>
                          {getCartCount() > 0 && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <span className="text-sm font-semibold">سبد خرید</span>
                      </div>
                      
                      {getCartCount() > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">({getCartCount()} آیتم)</span>
                          <span className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-500 text-white text-xs font-black rounded-full flex items-center justify-center shadow-md">
                            {getCartCount()}
                          </span>
                        </div>
                      )}
                    </Link>
                  </motion.div>
                </nav>

                {/* User Menu Items */}
                {isAuthenticated && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h3 className="text-xs font-bold text-gray-500 mb-3 px-4">حساب کاربری</h3>
                    <div className="space-y-1">
                      {userMenuItems.slice(0, 4).map((item) => (
                        <motion.div
                          key={item.path}
                          whileHover={{ x: -5 }}
                        >
                          <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-800 hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-colors"
                          >
                            <div className="p-1.5 rounded-lg bg-gray-100">
                              <item.icon className="w-4 h-4 text-gray-500" />
                            </div>
                            <span className="text-sm font-semibold">{item.label}</span>
                          </Link>
                        </motion.div>
                      ))}
                      <motion.button
                        whileHover={{ x: -5 }}
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-gradient-to-r hover:from-red-50/30 hover:to-pink-50/30 transition-colors mt-2"
                      >
                        <div className="p-1.5 rounded-lg bg-red-100">
                          <LogOut className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-bold">خروج از حساب</span>
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* Quick Links */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-xs font-bold text-gray-500 mb-3 px-4">پیوندهای سریع</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['سوالات متداول', 'پشتیبانی', 'قوانین', 'حریم خصوصی'].map((text, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        href={`/${text.includes('سوال') ? 'faq' : text.includes('پشتیبانی') ? 'contact' : text.includes('قوانین') ? 'terms' : 'privacy'}`}
                        className="p-3 text-xs text-center font-semibold text-gray-700 bg-white/30 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 transition-all duration-300 border border-white/30"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {text}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-r from-white/30 to-blue-50/10 backdrop-blur-sm">
                <div className="text-center">
                  <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    © {new Date().getFullYear()} Netchi
                  </span>
                  <div className="text-xs text-gray-500 mt-1">
                    Premium Digital Services
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-gray-400">همه سرویس‌ها فعال</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-20" />
    </>
  )
}

export default Header