import { useState, useEffect } from 'react'
import ServiceGrid from '../components/services/ServiceGrid'
import ServiceFilter from '../components/services/ServiceFilter'
import { SERVICES } from '../utils/constants'

const ServicesPage = () => {
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'newest'
  })
  
  const [filteredServices, setFilteredServices] = useState([])
  const [loading, setLoading] = useState(false)

  // Apply filters whenever they change
  useEffect(() => {
    setLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      let result = [...SERVICES]
      
      // Apply category filter
      if (filters.category && filters.category !== 'همه') {
        result = result.filter(service => service.category === filters.category)
      }
      
      // Apply price filters
      if (filters.minPrice) {
        const minPrice = parseInt(filters.minPrice)
        if (!isNaN(minPrice)) {
          result = result.filter(service => service.price >= minPrice)
        }
      }
      
      if (filters.maxPrice) {
        const maxPrice = parseInt(filters.maxPrice)
        if (!isNaN(maxPrice)) {
          result = result.filter(service => service.price <= maxPrice)
        }
      }
      
      // Apply sorting
      switch (filters.sortBy) {
        case 'newest':
          result.sort((a, b) => b.id - a.id)
          break
        case 'popular':
          result.sort((a, b) => b.rating - a.rating)
          break
        case 'price-low':
          result.sort((a, b) => a.price - b.price)
          break
        case 'price-high':
          result.sort((a, b) => b.price - a.price)
          break
        default:
          break
      }
      
      setFilteredServices(result)
      setLoading(false)
    }, 300)
  }, [filters])

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">خدمات نتچی</h1>
   
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filter Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <ServiceFilter 
              onFilterChange={handleFilterChange}
              currentFilters={filters}
            />
            
            {/* Statistics */}
            <div className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">آمار خدمات</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">کل خدمات:</span>
                  <span className="font-bold text-blue-600">{SERVICES.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">میانگین امتیاز:</span>
                  <span className="font-bold text-amber-600">
                    {(SERVICES.reduce((acc, s) => acc + s.rating, 0) / SERVICES.length).toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">خدمات فعال:</span>
                  <span className="font-bold text-green-600">{filteredServices.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="lg:col-span-3">
          <ServiceGrid 
            services={filteredServices}
            loading={loading}
            error={null}
          />
        </div>
      </div>
    </div>
  )
}

export default ServicesPage