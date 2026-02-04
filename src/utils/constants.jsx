import {  } from "../../public/assets/001.png";
// Service Categories
export const CATEGORIES = [
  { id: 1, name: 'همه', count: 6 },
  { id: 2, name: 'طراحی', count: 1 },
  { id: 3, name: 'برنامه‌نویسی', count: 1 },
  { id: 4, name: 'گرافیک', count: 1 },
  { id: 5, name: 'سئو', count: 1 },
  { id: 6, name: 'محتوا', count: 1 },
  { id: 7, name: 'پشتیبانی', count: 1 }
]

// Services Data with valid image URLs
export const SERVICES = [
  {
    id: 1,
    title: 'طراحی وب‌سایت فروشگاهی',
    description: 'طراحی وب‌سایت فروشگاهی حرفه‌ای با قابلیت‌های پیشرفته',
    price: 2500000,
    rating: 4.8,
    category: 'طراحی',
    deliveryTime: '۷ روز کاری',
    image: '../../public/assets/001.png',
    features: ['ریسپانسیو', 'بهینه‌شده برای SEO', 'پنل مدیریت', 'پشتیبانی ۶ ماه'],
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: 'اپلیکیشن موبایل اندروید',
    description: 'توسعه اپلیکیشن موبایل اندروید با جدیدترین تکنولوژی‌ها',
    price: 3500000,
    rating: 4.9,
    category: 'برنامه‌نویسی',
    deliveryTime: '۱۴ روز کاری',
    image: '../../public/assets/002.jpg',
    features: ['Material Design', 'آفلاین', 'نوتیفیکیشن', 'API Integration'],
    createdAt: '2024-01-10'
  },
  {
    id: 3,
    title: 'طراحی لوگو حرفه‌ای',
    description: 'طراحی لوگو منحصر به فرد و حرفه‌ای برای برند شما',
    price: 1500000,
    rating: 4.7,
    category: 'گرافیک',
    deliveryTime: '۵ روز کاری',
    image: '../../public/assets/003.jpg',
    features: ['۳ طرح پیشنهادی', 'فایل‌های وکتور', 'راهنمای برند', 'حق مالکیت'],
    createdAt: '2024-01-05'
  },
  {
    id: 4,
    title: 'بهینه‌سازی سایت برای SEO',
    description: 'بهینه‌سازی کامل سایت برای موتورهای جستجو',
    price: 2000000,
    rating: 4.6,
    category: 'سئو',
    deliveryTime: '۱۰ روز کاری',
    image: '../../public/assets/004.jpg',
    features: ['آنالیز سایت', 'بهینه‌سازی محتوا', 'لینک‌سازی', 'گزارش ماهانه'],
    createdAt: '2024-01-20'
  },
  {
    id: 5,
    title: 'تولید محتوای متنی',
    description: 'تولید محتوای متنی جذاب و بهینه‌شده برای سایت شما',
    price: 500000,
    rating: 4.5,
    category: 'محتوا',
    deliveryTime: '۳ روز کاری',
    image: '../../public/assets/005.png',
    features: ['تحقیق کلمات کلیدی', 'سئو داخلی', 'ویرایش حرفه‌ای', 'عکس‌های اختصاصی'],
    createdAt: '2024-01-25'
  },
  {
    id: 6,
    title: 'پشتیبانی فنی سایت',
    description: 'پشتیبانی فنی و نگهداری ماهانه سایت',
    price: 800000,
    rating: 4.9,
    category: 'پشتیبانی',
    deliveryTime: 'مداوم',
    image: '../../public/assets/006.jpg',
    features: ['مانیتورینگ', 'بکاپ روزانه', 'آپدیت سیستم', 'پشتیبانی ۲۴/۷'],
    createdAt: '2024-01-30'
  }
]

// Features Section Data
export const FEATURES = [
  {
    id: 1,
    title: 'کیفیت تضمینی',
    description: 'همه خدمات با کیفیت بالا و تضمین بازگشت وجه ارائه می‌شوند',
    icon: 'CheckCircle',
    color: 'green'
  },
  {
    id: 2,
    title: 'پشتیبانی ۲۴/۷',
    description: 'پشتیبانی تمام‌وقت برای پاسخگویی به سوالات شما',
    icon: 'Headphones',
    color: 'blue'
  },
  {
    id: 3,
    title: 'تحویل سریع',
    description: 'تحویل به موقع و سریع خدمات با بالاترین کیفیت',
    icon: 'Zap',
    color: 'yellow'
  },
  {
    id: 4,
    title: 'پرداخت امن',
    description: 'پرداخت‌های امن با درگاه‌های معتبر ایرانی',
    icon: 'Shield',
    color: 'purple'
  }
]

// Helper functions
export const getCategoryColor = (category) => {
  const colors = {
    'طراحی': 'from-blue-500 to-cyan-500',
    'برنامه‌نویسی': 'from-purple-500 to-pink-500',
    'گرافیک': 'from-green-500 to-emerald-500',
    'سئو': 'from-orange-500 to-red-500',
    'محتوا': 'from-yellow-500 to-amber-500',
    'پشتیبانی': 'from-indigo-500 to-blue-500'
  }
  return colors[category] || 'from-gray-500 to-gray-700'
}
