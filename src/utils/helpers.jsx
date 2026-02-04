export const formatPrice = (price) => {
  return new Intl.NumberFormat('fa-IR').format(price) + ' تومان'
}

export const calculateDiscount = (price, discountPercent) => {
  const discount = price * discountPercent / 100
  return {
    finalPrice: price - discount,
    discountAmount: discount
  }
}

export const truncateText = (text, maxLength) => {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^09[0-9]{9}$/
  return re.test(phone)
}