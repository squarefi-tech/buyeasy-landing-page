'use client'

import { useState } from 'react'
import { X, AlertCircle } from 'lucide-react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
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
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-md p-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-3 tracking-tight">
            Login to BUYEASY
          </h2>
          <p className="text-sm text-gray-500 font-light">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-black mb-3">
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
              className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-black font-light"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-black mb-3">
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
              className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-black font-light"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="flex items-start gap-3 p-4 bg-red-50/50 border border-red-100 rounded-2xl">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <p className="text-sm text-red-600 font-light">
                Account not found. Please check your credentials or contact support.
              </p>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-sm mt-6"
          >
            Sign In
          </button>

          <div className="text-center pt-2">
            <a href="#contact" onClick={onClose} className="text-sm text-gray-500 hover:text-black transition-colors font-light">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
