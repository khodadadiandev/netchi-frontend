import { createContext, useContext, useState, useEffect, useCallback } from 'react'

// Create Auth Context
const AuthContext = createContext()

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Main Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Load user from localStorage on initial load
  useEffect(() => {
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('netchi-user')
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser)
          setUser(parsedUser)
        }
      } catch (err) {
        console.error('Error loading user from localStorage:', err)
        localStorage.removeItem('netchi-user')
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  // Login function only
  const login = useCallback(async (credentials) => {
    setLoading(true)
    setError(null)
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Simple validation
      if (!credentials.email || !credentials.password) {
        throw new Error('ایمیل و رمز عبور الزامی است')
      }

      // Check if user exists in localStorage
      const existingUserJson = localStorage.getItem('netchi-user')
      let userData

      if (existingUserJson) {
        // User exists - use existing data
        const existingUser = JSON.parse(existingUserJson)
        if (existingUser.email === credentials.email.toLowerCase()) {
          userData = existingUser
        } else {
          // Different email - create new user with email as name
          userData = {
            id: 'user_' + credentials.email.toLowerCase().replace(/[^a-z0-9]/g, '_'),
            name: credentials.email.split('@')[0],
            email: credentials.email.toLowerCase(),
            phone: '09123456789',
            token: 'demo-jwt-token-' + Date.now(),
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${credentials.email.toLowerCase()}`,
            credit: 1250000,
            createdAt: new Date().toISOString()
          }
        }
      } else {
        // No existing user - create new with email as name
        userData = {
          id: 'user_' + credentials.email.toLowerCase().replace(/[^a-z0-9]/g, '_'),
          name: credentials.email.split('@')[0],
          email: credentials.email.toLowerCase(),
          phone: '09123456789',
          token: 'demo-jwt-token-' + Date.now(),
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${credentials.email.toLowerCase()}`,
          credit: 1250000,
          createdAt: new Date().toISOString()
        }
      }
      
      // Save to localStorage
      localStorage.setItem('netchi-user', JSON.stringify(userData))
      localStorage.setItem('netchi-token', userData.token)
      
      // Update state
      setUser(userData)
      setError(null)
      
      return userData
    } catch (err) {
      const errorMessage = err.message || 'ورود ناموفق بود. لطفاً مجدداً تلاش کنید.'
      setError(errorMessage)
      throw new Error(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [])

  // Logout function
  const logout = useCallback(() => {
    // Clear localStorage
    localStorage.removeItem('netchi-user')
    localStorage.removeItem('netchi-token')
    
    // Update state
    setUser(null)
    setError(null)
    
    // Redirect to home page
    window.location.href = '/'
  }, [])

  // Update user function
  const updateUser = useCallback((updatedData) => {
    if (!user) return
    
    const updatedUser = {
      ...user,
      ...updatedData,
      updatedAt: new Date().toISOString()
    }
    
    // Save to localStorage
    localStorage.setItem('netchi-user', JSON.stringify(updatedUser))
    
    // Update state
    setUser(updatedUser)
    
    return updatedUser
  }, [user])

  // Check if user is authenticated
  const isAuthenticated = !!user

  // Value to provide to context consumers
  const value = {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    updateUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext