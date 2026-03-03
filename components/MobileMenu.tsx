'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

interface MobileMenuProps {
  onLoginOpen: () => void
}

export function MobileMenu({ onLoginOpen }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[88px] left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-lg z-40 md:hidden">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#solutions"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
              >
                Solutions
              </a>
              <a
                href="#why-buyeasy"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
              >
                Contact
              </a>
              <Link
                href="/legal/terms"
                onClick={() => setIsOpen(false)}
                className="block text-sm text-gray-300 hover:text-white transition-colors py-2"
              >
                Legal
              </Link>
              <div className="border-t border-gray-800 pt-3">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    onLoginOpen()
                  }}
                  className="block w-full text-left text-sm text-gray-300 hover:text-blue-400 transition-colors py-2"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
