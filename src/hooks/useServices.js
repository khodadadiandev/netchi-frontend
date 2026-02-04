import { useState, useEffect, useCallback } from 'react'
import { servicesAPI } from '../utils/api'
import { SERVICES } from '../utils/constants'

export const useServices = (initialFilters = {}) => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState(initialFilters)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 1
  })

  const fetchServices = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const params = {
        page: pagination.page,
        limit: pagination.limit,
        ...filters
      }
      
      // Try to fetch from API
      const response = await servicesAPI.getAll(params)
      const { data, pagination: paginationData } = response
      
      setServices(data)
      setPagination(paginationData)
    } catch (err) {
      console.warn('API Error, using mock data:', err.message)
      
      // Fallback to local data with filtering
      let filtered = [...SERVICES]
      
      // Apply filters
      if (filters.category && filters.category !== 'همه') {
        filtered = filtered.filter(s => s.category === filters.category)
      }
      
      if (filters.minPrice) {
        filtered = filtered.filter(s => s.price >= Number(filters.minPrice))
      }
      
      if (filters.maxPrice) {
        filtered = filtered.filter(s => s.price <= Number(filters.maxPrice))
      }
      
      // Apply sorting
      switch (filters.sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price)
          break
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price)
          break
        case 'popular':
          filtered.sort((a, b) => b.rating - a.rating)
          break
        default: // 'newest'
          filtered.sort((a, b) => b.id - a.id)
          break
      }
      
      // Apply pagination
      const start = (pagination.page - 1) * pagination.limit
      const end = start + pagination.limit
      
      setServices(filtered.slice(start, end))
      setPagination({
        ...pagination,
        total: filtered.length,
        totalPages: Math.ceil(filtered.length / pagination.limit)
      })
      
      // Only show error for serious errors
      if (!err.message.includes('Network Error')) {
        setError('داده‌ها از حافظه موقت بارگذاری شدند')
      }
    } finally {
      setLoading(false)
    }
  }, [filters, pagination.page, pagination.limit])

  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
    setPagination(prev => ({ ...prev, page: 1 })) // Reset to first page
  }, [])

  const changePage = useCallback((page) => {
    setPagination(prev => ({ ...prev, page }))
  }, [])

  useEffect(() => {
    fetchServices()
  }, [fetchServices])

  return {
    services,
    loading,
    error,
    filters,
    pagination,
    fetchServices,
    updateFilters,
    changePage
  }
}