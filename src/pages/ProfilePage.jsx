import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, Mail, Phone, MapPin,
  Calendar, Edit, Camera, Save
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const ProfilePage = () => {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user?.name || 'کاربر نتچی',
    email: user?.email || 'user@netchi.ir',
    phone: user?.phone || '۰۹۱۲۳۴۵۶۷۸۹',
    address: 'تهران، خیابان ولیعصر',
    birthDate: '۱۳۷۰/۰۱/۰۱'
  })

  const stats = [
    { label: 'سفارشات', value: '۱۲' },
    { label: 'نظرات', value: '۸' },
    { label: 'امتیاز', value: '۴.۸' },
    { label: 'اعتبار', value: '۵۰۰,۰۰۰' }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">پروفایل کاربری</h1>
            <p className="text-gray-600">اطلاعات حساب کاربری خود را مدیریت کنید</p>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${isEditing ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
          >
            {isEditing ? (
              <>
                <Save className="w-5 h-5" />
                ذخیره تغییرات
              </>
            ) : (
              <>
                <Edit className="w-5 h-5" />
                ویرایش پروفایل
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </button>
                  )}
                </div>
                
                <div className="flex-1 text-center md:text-right">
                  {isEditing ? (
                    <input
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="text-3xl font-bold text-gray-900 bg-gray-50 border-b-2 border-blue-500 text-center md:text-right w-full md:w-auto"
                    />
                  ) : (
                    <h2 className="text-3xl font-bold text-gray-900">{profileData.name}</h2>
                  )}
                  <div className="flex items-center justify-center md:justify-start gap-6 mt-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <Mail className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">ایمیل</div>
                    {isEditing ? (
                      <input
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-gray-300"
                      />
                    ) : (
                      <div className="font-medium text-gray-900">{profileData.email}</div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <Phone className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">شماره تماس</div>
                    {isEditing ? (
                      <input
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full bg-transparent border-b border-gray-300"
                      />
                    ) : (
                      <div className="font-medium text-gray-900">{profileData.phone}</div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">آدرس</div>
                    {isEditing ? (
                      <input
                        value={profileData.address}
                        onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                        className="w-full bg-transparent border-b border-gray-300"
                      />
                    ) : (
                      <div className="font-medium text-gray-900">{profileData.address}</div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <Calendar className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">تاریخ تولد</div>
                    {isEditing ? (
                      <input
                        value={profileData.birthDate}
                        onChange={(e) => setProfileData({...profileData, birthDate: e.target.value})}
                        className="w-full bg-transparent border-b border-gray-300"
                      />
                    ) : (
                      <div className="font-medium text-gray-900">{profileData.birthDate}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Account Status */}
          <div className="space-y-6">
            {/* Account Status */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">وضعیت حساب</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">تایید ایمیل</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    تایید شده
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">تایید شماره</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    تایید شده
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">نوع حساب</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    عادی
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">تاریخ عضویت</span>
                  <span className="font-medium text-gray-900">۱۴۰۲/۰۸/۱۵</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">دسترسی سریع</h3>
              
              <div className="space-y-3">
                <a href="/security" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">تنظیمات امنیتی</div>
                </a>
                <a href="/wallet" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">کیف پول و اعتبار</div>
                </a>
                <a href="/orders" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">سفارشات من</div>
                </a>
                <a href="/comments" className="block p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">نظرات من</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage