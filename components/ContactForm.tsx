'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="bg-gradient-to-br from-blue-400/10 to-blue-600/10 backdrop-blur-sm rounded-[2rem] p-12 border border-blue-400/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Thank you for your interest!
          </h3>
          <p className="text-base text-gray-400 font-light">
            We have received your request and will contact you shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="bg-gray-900/50 rounded-[2rem] border border-gray-800 p-6 md:p-10 shadow-lg hover:border-blue-400/50 transition-all duration-500">
        <div className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-white mb-3">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-5 py-4 bg-black border border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-white font-light placeholder-gray-500"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 bg-black border border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-white font-light placeholder-gray-500"
              placeholder="john@company.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-3">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-5 py-4 bg-black border border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-white font-light placeholder-gray-500"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-3">
              Your Request *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-4 bg-black border border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all resize-none text-white font-light placeholder-gray-500"
              placeholder="Tell us about your business needs and how we can help..."
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition-all duration-300 text-sm mt-4 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 group"
          >
            Submit Request
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </form>
  )
}
