'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[57px] left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40 md:hidden">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#solutions"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Solutions
              </a>
              <a
                href="#why-buyeasy"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Contact
              </a>
              <Link
                href="/v1/terms-and-conditions"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Legal
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
}
