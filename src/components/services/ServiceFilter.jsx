// src/components/services/ServiceFilter.jsx
import { useState, useEffect } from 'react'
import { Filter, X } from 'lucide-react'
import { CATEGORIES } from '../../utils/constants'

const ServiceFilter = ({ onFilterChange, currentFilters }) => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'newest'
  })

  // Sync with parent filters
  useEffect(() => {
    if (currentFilters) {
      setFilters(currentFilters)
    }
  }, [currentFilters])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleCategorySelect = (category) => {
    const newFilters = { ...filters, category }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleSortSelect = (sortBy) => {
    const newFilters = { ...filters, sortBy }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handlePriceRangeSelect = (min, max) => {
    const newFilters = {
      ...filters,
      minPrice: min || '',
      maxPrice: max || ''
    }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const resetFilters = () => {
    const resetFilters = {
      category: '',
      minPrice: '',
      maxPrice: '',
      sortBy: 'newest'
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  const hasActiveFilters = () => {
    return filters.category || filters.minPrice || filters.maxPrice || filters.sortBy !== 'newest'
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
            <Filter className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">فیلتر خدمات</h3>
            <p className="text-sm text-gray-500">خدمات مورد نظر خود را پیدا کنید</p>
          </div>
        </div>
        
        {hasActiveFilters() && (
          <button
            onClick={resetFilters}
            className="flex items-center text-sm text-red-600 hover:text-red-700 font-medium bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 ml-1" />
            حذف همه فیلترها
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            دسته‌بندی
          </label>
          <div className="space-y-2">
            <button
              onClick={() => handleCategorySelect('')}
              className={`w-full text-right px-4 py-2.5 rounded-lg border transition-all ${
                !filters.category
                  ? 'bg-blue-50 border-blue-200 text-blue-700'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              همه دسته‌بندی‌ها
            </button>
            
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.filter(cat => cat.name !== 'همه').map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.name)}
                  className={`px-3 py-2.5 rounded-lg border transition-all text-sm ${
                    filters.category === cat.name
                      ? 'bg-blue-50 border-blue-200 text-blue-700 font-medium'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{cat.name}</span>
                    <span className="text-xs bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">
                      {cat.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700">
              محدوده قیمت
            </label>
            <span className="text-xs text-gray-500">تومان</span>
          </div>
          
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="number"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleInputChange}
                  placeholder="حداقل قیمت"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-left"
                  min="0"
                  step="10000"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleInputChange}
                  placeholder="حداکثر قیمت"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-left"
                  min="0"
                  step="10000"
                />
              </div>
            </div>
            
            {/* Quick Price Filters */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'کمتر از ۱ میلیون', min: 0, max: 1000000 },
                { label: '۱ تا ۳ میلیون', min: 1000000, max: 3000000 },
                { label: '۳ تا ۵ میلیون', min: 3000000, max: 5000000 },
                { label: 'بیشتر از ۵ میلیون', min: 5000000, max: '' }
              ].map((priceFilter) => (
                <button
                  key={priceFilter.label}
                  onClick={() => handlePriceRangeSelect(priceFilter.min, priceFilter.max)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    filters.minPrice == priceFilter.min && filters.maxPrice == priceFilter.max
                      ? 'bg-blue-50 border-blue-200 text-blue-700'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {priceFilter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            مرتب‌سازی بر اساس
          </label>
          <div className="space-y-2">
            {[
              { value: 'newest', label: 'جدیدترین' },
              { value: 'popular', label: 'محبوب‌ترین' },
              { value: 'price-low', label: 'قیمت: کم به زیاد' },
              { value: 'price-high', label: 'قیمت: زیاد به کم' }
            ].map((sortOption) => (
              <button
                key={sortOption.value}
                onClick={() => handleSortSelect(sortOption.value)}
                className={`w-full text-right px-4 py-2.5 rounded-lg border transition-all ${
                  filters.sortBy === sortOption.value
                    ? 'bg-blue-50 border-blue-200 text-blue-700 font-medium'
                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {sortOption.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters() && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-700">فیلترهای فعال:</span>
            <button
              onClick={resetFilters}
              className="text-xs text-red-600 hover:text-red-700"
            >
              پاک کردن همه
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.category && (
              <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 text-sm rounded-lg border border-blue-100">
                دسته: {filters.category}
                <button
                  onClick={() => handleCategorySelect('')}
                  className="mr-2 text-blue-500 hover:text-blue-700"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.minPrice && (
              <span className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100">
                از {parseInt(filters.minPrice).toLocaleString()} تومان
                <button
                  onClick={() => handlePriceRangeSelect('', filters.maxPrice)}
                  className="mr-2 text-green-500 hover:text-green-700"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.maxPrice && (
              <span className="inline-flex items-center px-3 py-1.5 bg-amber-50 text-amber-700 text-sm rounded-lg border border-amber-100">
                تا {parseInt(filters.maxPrice).toLocaleString()} تومان
                <button
                  onClick={() => handlePriceRangeSelect(filters.minPrice, '')}
                  className="mr-2 text-amber-500 hover:text-amber-700"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.sortBy !== 'newest' && (
              <span className="inline-flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-lg border border-purple-100">
                مرتب‌سازی: {
                  filters.sortBy === 'popular' ? 'محبوب‌ترین' :
                  filters.sortBy === 'price-low' ? 'قیمت کم به زیاد' :
                  'قیمت زیاد به کم'
                }
                <button
                  onClick={() => handleSortSelect('newest')}
                  className="mr-2 text-purple-500 hover:text-purple-700"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ServiceFilter