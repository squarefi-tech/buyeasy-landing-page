'use client'

import { useState } from 'react'
import { X, ArrowLeft } from 'lucide-react'

interface ForgotPasswordModalProps {
  isOpen: boolean
  onClose: () => void
  onBack: () => void
}

export function ForgotPasswordModal({ isOpen, onClose, onBack }: ForgotPasswordModalProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      />
      <div className="relative bg-gray-900 rounded-[2rem] shadow-2xl w-full max-w-md p-6 md:p-10 border border-gray-800 animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {!submitted ? (
          <>
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300 mb-6"
            >
              <ArrowLeft size={18} strokeWidth={1.5} />
              <span className="text-sm font-light">Back to Login</span>
            </button>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">
                Forgot <span className="text-blue-400">Password?</span>
              </h2>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Enter your email address below. If you were previously registered, 
                a recovery code will be sent to your email. If not, please contact us 
                for a consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="forgot-email" className="block text-sm font-medium text-white mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  id="forgot-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 bg-black border border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-white font-light placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition-all duration-300 text-sm mt-6 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Send Recovery Code
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-2xl p-8 border border-blue-400/30 mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Check Your Email
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                If you were previously registered, a recovery code has been sent to <strong className="text-white">{email}</strong>.
              </p>
              <p className="text-sm text-gray-400 font-light leading-relaxed mt-4">
                If you don't receive an email within a few minutes, please contact us for assistance.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300 font-light"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
