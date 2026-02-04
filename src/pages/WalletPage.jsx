import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CreditCard, Wallet, PlusCircle, History,
  CheckCircle, AlertCircle, ArrowUpRight
} from 'lucide-react'

const WalletPage = () => {
  const [balance, setBalance] = useState(1250000)
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'deposit', amount: 500000, description: 'افزایش اعتبار', date: '۱۴۰۲/۱۰/۲۰', status: 'موفق' },
    { id: 2, type: 'withdraw', amount: -200000, description: 'خرید سرویس', date: '۱۴۰۲/۱۰/۱۸', status: 'موفق' },
    { id: 3, type: 'deposit', amount: 1000000, description: 'شارژ کیف پول', date: '۱۴۰۲/۱۰/۱۵', status: 'موفق' },
    { id: 4, type: 'withdraw', amount: -300000, description: 'پرداخت سفارش', date: '۱۴۰۲/۱۰/۱۰', status: 'ناموفق' },
  ])

  const chargeAmounts = [50000, 100000, 200000, 500000, 1000000]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">کیف پول</h1>
          <p className="text-gray-600">مدیریت اعتبار و تراکنش‌های مالی</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Balance & Charge */}
          <div className="lg:col-span-2 space-y-8">
            {/* Balance Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Wallet className="w-8 h-8" />
                  <h2 className="text-xl font-bold">موجودی کیف پول</h2>
                </div>
                <CreditCard className="w-8 h-8 opacity-80" />
              </div>
              
              <div className="text-center mb-8">
                <div className="text-5xl font-black mb-2">{balance.toLocaleString()}</div>
                <div className="text-blue-200">تومان</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 py-3 rounded-xl transition-colors">
                  <PlusCircle className="w-5 h-5" />
                  افزایش موجودی
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 py-3 rounded-xl transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                  برداشت وجه
                </button>
              </div>
            </motion.div>

            {/* Quick Charge */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">شارژ سریع</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {chargeAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setBalance(balance + amount)}
                    className="p-4 rounded-xl border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                  >
                    <div className="text-lg font-bold text-gray-900 group-hover:text-blue-700">
                      {amount.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-blue-600">تومان</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recent Transactions */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">تراکنش‌های اخیر</h3>
                <History className="w-6 h-6 text-gray-400" />
              </div>

              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="p-4 rounded-xl bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-gray-900">{transaction.description}</div>
                      <div className={`text-lg font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}{transaction.amount.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">{transaction.date}</div>
                      <div className={`flex items-center gap-1 text-sm ${transaction.status === 'موفق' ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.status === 'موفق' ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <AlertCircle className="w-4 h-4" />
                        )}
                        {transaction.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletPage