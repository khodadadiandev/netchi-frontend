import { createContext, useContext, useState, useCallback } from 'react'

const CartContext = createContext(null)

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = useCallback((service) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === service.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...service, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((serviceId) => {
    setCartItems(prev => prev.filter(item => item.id !== serviceId))
  }, [])

  const updateQuantity = useCallback((serviceId, quantity) => {
    if (quantity < 1) {
      removeFromCart(serviceId)
      return
    }
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === serviceId ? { ...item, quantity } : item
      )
    )
  }, [removeFromCart])

  const clearCart = useCallback(() => {
    setCartItems([])
  }, [])

  const getCartTotal = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    )
  }, [cartItems])

  const getCartCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }, [cartItems])

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}