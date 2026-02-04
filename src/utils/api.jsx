const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// Mock auth API
export const authAPI = {
  login: async (credentials) => {
    await delay(500)
    
    if (credentials.email === 'test@example.com' && credentials.password === 'password') {
      return {
        token: 'mock-jwt-token-12345',
        user: {
          id: 1,
          name: 'کاربر تست',
          email: 'test@example.com',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop'
        }
      }
    }
    
    throw new Error('Invalid credentials')
  },
  
  register: async (userData) => {
    await delay(500)
    
    return {
      token: 'mock-jwt-token-12345',
      user: {
        id: 2,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop'
      }
    }
  },
  
  logout: async () => {
    await delay(200)
    return { success: true }
  },
  
  getProfile: async () => {
    await delay(300)
    const token = localStorage.getItem('token')
    
    if (token === 'mock-jwt-token-12345') {
      return {
        id: 1,
        name: 'کاربر تست',
        email: 'test@example.com',
        phone: '09123456789',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop'
      }
    }
    
    throw new Error('Not authenticated')
  }
}

// Mock services API
export const servicesAPI = {
  getAll: async (params = {}) => {
    await delay(600)
    
    const { SERVICES } = await import('./constants')
    let filtered = [...SERVICES]
    
    // Simulate filtering
    if (params.category && params.category !== 'همه') {
      filtered = filtered.filter(s => s.category === params.category)
    }
    
    if (params.minPrice) {
      filtered = filtered.filter(s => s.price >= Number(params.minPrice))
    }
    
    if (params.maxPrice) {
      filtered = filtered.filter(s => s.price <= Number(params.maxPrice))
    }
    
    // Simulate sorting
    switch (params.sortBy) {
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
    
    // Simulate pagination
    const page = params.page || 1
    const limit = params.limit || 12
    const start = (page - 1) * limit
    const end = start + limit
    
    return {
      data: filtered.slice(start, end),
      pagination: {
        page,
        limit,
        total: filtered.length,
        totalPages: Math.ceil(filtered.length / limit)
      }
    }
  },
  
  getById: async (id) => {
    await delay(400)
    
    const { SERVICES } = await import('./constants')
    const service = SERVICES.find(s => s.id === parseInt(id))
    
    if (!service) {
      throw new Error('Service not found')
    }
    
    return service
  }
}

// Mock orders API
export const ordersAPI = {
  create: async (orderData) => {
    await delay(500)
    return { success: true, orderId: Math.floor(Math.random() * 1000) + 1 }
  }
}