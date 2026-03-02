'use client'

import { useState } from 'react'
import { X, AlertCircle } from 'lucide-react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onForgotPassword: () => void
}

export function LoginModal({ isOpen, onClose, onForgotPassword }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      />
      <div className="relative bg-gray-900 rounded-[2rem] shadow-2xl w-full max-w-md p-10 border border-gray-800 animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
            Login to <span className="text-blue-400">BUYEASY</span>
          </h2>
          <p className="text-sm text-gray-400 font-light">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-white mb-3">
              Email Address
            </label>
            <input
              type="email"
              id="login-email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError(false)
              }}
              className="w-full px-5 py-4 bg-black border border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-white font-light placeholder-gray-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-white mb-3">
              Password
            </label>
            <input
              type="password"
              id="login-password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(false)
              }}
              className="w-full px-5 py-4 bg-black border border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-white font-light placeholder-gray-500"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
              <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-red-400 font-light">
                Account not found. Please check your credentials or contact support.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition-all duration-300 text-sm mt-6 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            Sign In
          </button>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300 font-light"
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
