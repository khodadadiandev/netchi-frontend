 ویژگی‌های اصلی
صفحه اصلی: نمایش خدمات برتر و ویژگی‌های پلتفرم

صفحه خدمات: فیلتر و جستجوی پیشرفته خدمات

جزئیات خدمت: نمایش کامل اطلاعات هر خدمت

سیستم سبد خرید: افزودن خدمات به سبد خرید

احراز هویت کاربران: ورود و ثبت‌نام

پنل کاربری: مدیریت پروفایل و سفارشات

پرداخت آنلاین: درگاه پرداخت امن

🛠️ تکنولوژی‌های استفاده شده
Frontend
React 18 - کتابخانه اصلی رابط کاربری

Vite - Build tool و dev server

React Router DOM - مدیریت مسیرها

Tailwind CSS - استایل‌دهی

Lucide React - آیکون‌ها

Framer Motion - انیمیشن‌ها

Axios - درخواست‌های HTTP

React Hook Form - مدیریت فرم‌ها

Zod - اعتبارسنجی فرم‌ها

State Management
React Context API - مدیریت وضعیت گلوبال

Custom Hooks - هوک‌های اختصاصی

📁 ساختار پروژه

netchi-frontend/
├── public/                    # فایل‌های استاتیک
│   ├── images/               # تصاویر
│   │   └──                   # تصاویر خدمات
│   └── index.html            # فایل اصلی HTML
├── src/                      # کد منبع
│   ├── components/           # کامپوننت‌ها
│   │   ├── auth/            # کامپوننت‌های احراز هویت
│   │   ├── common/          # کامپوننت‌های عمومی
│   │   ├── services/        # کامپوننت‌های خدمات
│   │   └── layout/          # کامپوننت‌های چیدمان
│   ├── context/             # Context providers
│   │   ├── AuthContext.jsx  # مدیریت احراز هویت
│   │   └── CartContext.jsx  # مدیریت سبد خرید
│   ├── hooks/               # Custom hooks
│   │   ├── useAuth.js       # هوک احراز هویت
│   │   └── useServices.js   # هوک مدیریت خدمات
│   ├── pages/               # صفحات اصلی
│   │   ├── HomePage.jsx     # صفحه اصلی
│   │   ├── ServicesPage.jsx # صفحه خدمات
│   │   ├── LoginPage.jsx    # صفحه ورود
│   │   ├── RegisterPage.jsx # صفحه ثبت‌نام
│   │   ├── CartPage.jsx     # صفحه سبد خرید
│   │   ├── CheckoutPage.jsx # صفحه پرداخت
│   │   └── ProfilePage.jsx  # صفحه پروفایل
│   ├── utils/               # ابزارهای کمکی
│   │   ├── api.js          # تنظیمات API
│   │   ├── constants.jsx   # داده‌های ثابت
│   │   └── helpers.js      # توابع کمکی
│   ├── App.jsx             # کامپوننت اصلی
│   └── main.jsx            # نقطه ورود
├── package.json            # تنظیمات npm
├── vite.config.js          # تنظیمات Vite
├── postcss.config.js       # تنظیمات PostCSS
└── README.md               # این فایل
