import { useState, useEffect } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { useDebounce } from '../../hooks/useDebounce'

const SearchBar = ({ onSearch, placeholder = 'جستجوی خدمات...', className = '' }) => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    onSearch(debouncedQuery)
  }, [debouncedQuery, onSearch])

  const clearSearch = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="پاک کردن جستجو"
          >
            <FiX className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar