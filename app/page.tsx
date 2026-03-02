'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Wallet, Send, Globe2, Zap, Shield, CheckCircle, FileText, Lock, Building2 } from 'lucide-react'
import { CookieConsent } from '@/components/CookieConsent'
import { MobileMenu } from '@/components/MobileMenu'
import { ContactForm } from '@/components/ContactForm'
import { LoginModal } from '@/components/LoginModal'
import { ForgotPasswordModal } from '@/components/ForgotPasswordModal'

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)

  const handleForgotPassword = () => {
    setIsLoginOpen(false)
    setIsForgotPasswordOpen(true)
  }

  const handleBackToLogin = () => {
    setIsForgotPasswordOpen(false)
    setIsLoginOpen(true)
  }

  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <a href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
                <Image src="/logo.svg" alt="BUYEASY" width={144} height={144} className="w-36 h-36" />
              </a>
              <div className="hidden md:flex items-center gap-8">
                <a href="#solutions" className="text-sm text-blue-400 hover:text-blue-300 transition-all duration-300 font-light hover:scale-105">
                  Solutions
                </a>
                <a href="#why-buyeasy" className="text-sm text-blue-400 hover:text-blue-300 transition-all duration-300 font-light hover:scale-105">
                  About
                </a>
                <a href="#contact" className="text-sm text-blue-400 hover:text-blue-300 transition-all duration-300 font-light hover:scale-105">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MobileMenu />
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-5 py-2 text-gray-300 text-sm font-light hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Login
              </button>
              <a
                href="#contact"
                className="px-6 py-2.5 bg-blue-500 text-white text-sm font-semibold rounded-full hover:bg-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                Book a call
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-56 pb-16 px-6 animate-fade-in relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight animate-slide-up text-left">
              Your trusted global partner<br />
              <span className="text-blue-400">for FX, payments &</span><br />
              money remittance
            </h1>
            <p className="text-sm md:text-base text-gray-300 max-w-5xl mb-8 leading-relaxed font-light animate-slide-up text-left" style={{animationDelay: '0.2s'}}>
              BUYEASY specializes in foreign exchange, multi-currency accounts, and international money transfers. We deliver speed, security, and full regulatory compliance with competitive rates, transparent pricing, and dedicated expert support for your global business payments.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 animate-slide-up group"
                style={{animationDelay: '0.4s'}}
              >
                Request a 15-Minute Demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-6 border-y border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2 italic" style={{letterSpacing: '-0.11em'}}>30+</div>
                <div className="text-sm text-gray-400 font-light">Currency Pairs</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2 italic" style={{letterSpacing: '-0.11em'}}>180+</div>
                <div className="text-sm text-gray-400 font-light">Countries Supported</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2 italic" style={{letterSpacing: '-0.11em'}}>24/7</div>
                <div className="text-sm text-gray-400 font-light">Global Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tight italic">
              Our <span className="text-blue-400">Solutions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* FX */}
              <div className="group p-6 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-3">
                  <TrendingUp className="text-blue-400" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  Foreign Exchange
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Access institutional-grade FX rates for 30+ currency pairs with real-time conversion and full transparency. Lock in rates with forward contracts or use spot rates for immediate settlements. Expert dealers available 24/7 to optimize your foreign exchange strategy.
                </p>
              </div>

              {/* Multi-Currency Accounts */}
              <div className="group p-6 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4">
                  <Wallet className="text-blue-400" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  Multi-Currency Accounts
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Hold and manage USD, EUR, GBP, CAD and more from a single dashboard. Access SWIFT, SEPA, ACH, CHAPS, and Faster Payments with local account details. Hedge against exchange rate fluctuations, automate conversions, and enjoy competitive interest rates with full transaction visibility.
                </p>
              </div>

              {/* Send & Receive Payments */}
              <div className="group p-6 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4">
                  <Send className="text-blue-400" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  Send & Receive Payments
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Pay suppliers, partners, and employees in their local currency with fast settlement (within 24 hours). Support for one-time, recurring, and bulk payments with real-time tracking. Beneficiary templates and approval workflows ensure security and streamline your corporate payment operations.
                </p>
              </div>

              {/* International Money Transfers */}
              <div className="group p-6 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4">
                  <Globe2 className="text-blue-400" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  International Money Transfers
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Send compliant cross-border remittances to 180+ countries with transparent fees and real-time tracking. Our global network ensures fast, secure delivery with optimal routing and competitive pricing. Full AML compliance and dedicated support for urgent transfers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why BUYEASY Section */}
        <section id="why-buyeasy" className="py-20 px-6 bg-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 tracking-tight italic">
              Why <span className="text-blue-400">BUYEASY</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              {/* Speed Matters */}
              <div className="group p-6 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4">
                  <Zap className="text-blue-400" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  Speed Matters
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Real-time payment processing with same-day settlements and instant FX conversions. Our automated infrastructure operates 24/7, eliminating manual delays and ensuring optimal routing through our global banking network for maximum speed and efficiency.
                </p>
              </div>

              {/* Unmatched Security */}
              <div className="group p-6 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4">
                  <Shield className="text-blue-400" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  Unmatched Security
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Bank-grade encryption, multi-factor authentication, and real-time fraud detection protect every transaction. Your funds are held in segregated accounts with tier-1 banking institutions. Regular independent security audits ensure the highest standards of data privacy and protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Trust Section */}
        <section className="py-20 px-6 bg-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Title */}
              <div className="lg:sticky lg:top-24">
                <h2 className="text-4xl font-bold text-white leading-[1.1] tracking-tight italic">
                  <span className="text-blue-400">Compliance</span><br />& Trust
                </h2>
                <p className="text-sm text-gray-400 mt-6 leading-relaxed font-light text-justify">
                  Our commitment to regulatory compliance and transparency sets us apart. We maintain the highest standards of corporate governance and work closely with regulators to ensure full compliance.
                </p>
              </div>

              {/* Right: Stacked Cards */}
              <div className="relative">
                {/* Background glow effects */}
                <div className="absolute -top-16 left-0 right-0 h-48 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-[3rem] blur-3xl"></div>
                <div className="absolute bottom-0 left-8 right-0 h-48 bg-gradient-to-br from-blue-400/5 to-blue-600/5 rounded-[3rem] blur-3xl"></div>
                
                <div className="relative space-y-6">
                  {/* Card 1 - Regulated Entity */}
                  <div className="relative bg-gradient-to-br from-blue-400/10 to-blue-600/10 backdrop-blur-sm rounded-[2.5rem] p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] group">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      Regulated Entity
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                      BuyEasy Technologies Limited is registered and regulated in Canada (Reg. № 1500317-2). We operate under strict regulatory oversight, ensuring all operations meet the highest standards of financial services provision.
                    </p>
                  </div>

                  {/* Card 2 - AML/KYC Compliance */}
                  <div className="relative bg-gradient-to-br from-blue-400/10 to-blue-600/10 backdrop-blur-sm rounded-[2.5rem] p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] group">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      AML/KYC Compliance
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                      Full AML/KYC compliance with continuous transaction monitoring and enhanced due diligence. We maintain comprehensive records and proactively prevent financial crime while ensuring a smooth onboarding experience for legitimate businesses.
                    </p>
                  </div>

                  {/* Card 3 - Segregated Accounts */}
                  <div className="relative bg-gradient-to-br from-blue-400/10 to-blue-600/10 backdrop-blur-sm rounded-[2.5rem] p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] group">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      Segregated Accounts
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                      Client funds held in segregated accounts with tier-1 banking partners, kept separate from operational funds. This safeguarding arrangement ensures your funds remain secure and accessible, providing complete peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-6 bg-black border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Ready to streamline your<br /><span className="text-blue-400">global payments?</span>
            </h2>
            <p className="text-base text-gray-400 mb-8 font-light leading-relaxed max-w-3xl mx-auto text-justify">
              Schedule a 15-minute consultation to discuss your business needs. Fill out the form below and our specialist will contact you to demonstrate how BUYEASY can transform your international payment operations.
            </p>
          </div>
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-12 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              {/* Left: License Info */}
              <div className="text-sm space-y-1.5">
                <p className="text-gray-400 font-light">
                  <strong className="text-blue-400 font-semibold text-base">BUYEASY TECHNOLOGY CO., LTD.</strong>
                </p>
                <p className="text-gray-400 font-light">2 Robert Speck Pkwy, Suite 750, Mississauga, ON L4Z 1H8, Canada</p>
                <p className="text-gray-400 font-light">MSB License Number: M23877619</p>
              </div>

              {/* Right: Legal Documents */}
              <div className="text-sm flex justify-end pr-16">
                <ul className="space-y-1.5 text-left pl-8">
                  <li>
                    <a href="/legal/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-light">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/legal/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-light">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/legal/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-light">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom row: Copyright and Contact */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between pt-6 border-t border-gray-800 gap-3">
              <div className="text-xs text-gray-500 font-light">
                © 2026 BUYEASY. All rights reserved.
              </div>
              <div className="text-xs space-y-1">
                <div className="text-gray-400 font-light">
                  Email: <a href="mailto:info@buyeasy.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">info@buyeasy.it.com</a>
                </div>
                <div className="text-gray-400 font-light">
                  Phone: <a href="tel:+13438833504" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">+1 343 883 3504</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <CookieConsent />
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onForgotPassword={handleForgotPassword}
      />
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        onBack={handleBackToLogin}
      />
    </>
  )
}
