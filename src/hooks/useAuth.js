import { useState, useEffect } from 'react'
import { authAPI } from '../utils/api'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem('token')
      
      if (token) {
        const userData = await authAPI.getProfile()
        setUser(userData)
      }
    } catch (err) {
      console.error('Auth check error:', err)
      localStorage.removeItem('token')
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (credentials) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await authAPI.login(credentials)
      
      if (response.token) {
        localStorage.setItem('token', response.token)
        setUser(response.user)
        return { success: true }
      }
      
      return { success: false, message: 'Invalid response' }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
      return { success: false, message: err.response?.data?.message || 'Login failed' }
    } finally {
      setLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await authAPI.register(userData)
      
      if (response.token) {
        localStorage.setItem('token', response.token)
        setUser(response.user)
        return { success: true }
      }
      
      return { success: false, message: 'Invalid response' }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
      return { success: false, message: err.response?.data?.message || 'Registration failed' }
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    try {
      await authAPI.logout()
    } catch (err) {
      console.error('Logout error:', err)
    } finally {
      localStorage.removeItem('token')
      setUser(null)
    }
  }

  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user
  }
}