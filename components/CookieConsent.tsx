'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('buyeasy-cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('buyeasy-cookie-consent', 'all')
    setIsVisible(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem('buyeasy-cookie-consent', 'necessary')
    setIsVisible(false)
  }

  const dismiss = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              We use cookies
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              We use cookies to enhance your browsing experience, analyze site traffic, and provide 
              personalized content. By clicking "Accept All", you consent to our use of cookies.{' '}
              <Link href="/legal/cookies" className="text-gray-900 underline hover:no-underline">
                Learn more
              </Link>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={acceptAll}
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                Necessary Only
              </button>
            </div>
          </div>
          <button
            onClick={dismiss}
            className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
