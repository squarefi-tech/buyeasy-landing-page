'use client'

import { useState } from 'react'
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
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <a href="/" className="text-xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors duration-300">
                BUYEASY
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
        <section className="pt-32 pb-20 px-6 animate-fade-in relative overflow-hidden">
          {/* Currency symbols background */}
          <div className="absolute top-20 right-10 text-9xl font-bold text-green-500/20 select-none pointer-events-none">$</div>
          <div className="absolute bottom-20 right-20 text-9xl font-bold text-blue-500/20 select-none pointer-events-none">€</div>
          
          <div className="max-w-full mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight animate-slide-up max-w-7xl mx-auto">
              Your trusted global partner<br />
              <span className="text-blue-400">for FX, payments &</span><br />
              money remittance
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-7xl mx-auto mb-10 leading-relaxed font-light animate-slide-up text-justify" style={{animationDelay: '0.2s'}}>
              BUYEASY is a financial services provider specializing in foreign exchange, 
              multi-currency accounts, and international money transfers. We deliver speed, security, 
              and full regulatory compliance for your business payments. Our platform enables businesses 
              of all sizes to manage their global finances efficiently, with access to competitive exchange 
              rates, transparent pricing, and dedicated support from our experienced team. Whether you're 
              making your first international payment or managing complex multi-currency operations, 
              BUYEASY provides the tools and expertise you need to succeed in the global marketplace.
            </p>
            <div className="max-w-7xl mx-auto">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition-all duration-300 text-sm hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 animate-slide-up group"
                style={{animationDelay: '0.4s'}}
              >
                Request a 15-Minute Demo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 border-y border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16 text-center">
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-5xl font-bold text-blue-400 mb-3">30+</div>
                <div className="text-sm text-gray-400 font-light">Currency Pairs</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-5xl font-bold text-blue-400 mb-3">180+</div>
                <div className="text-sm text-gray-400 font-light">Countries Supported</div>
              </div>
              <div className="hover:scale-110 transition-transform duration-300">
                <div className="text-5xl font-bold text-blue-400 mb-3">24/7</div>
                <div className="text-sm text-gray-400 font-light">Global Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-32 px-6 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 tracking-tight">
              Our <span className="text-blue-400">Solutions</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* FX */}
              <div className="group p-8 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="text-blue-400" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Foreign Exchange
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Competitive FX rates for 30+ currency pairs. Convert and settle in real-time with full transparency. 
                  Our advanced trading platform provides access to institutional-grade pricing with no hidden markups. 
                  Lock in rates for future transactions with forward contracts, or take advantage of spot rates for 
                  immediate settlements. Benefit from our deep liquidity pools and execute large volume trades with 
                  minimal slippage. Our expert dealers are available around the clock to provide market insights and 
                  help you optimize your foreign exchange strategy.
                </p>
              </div>

              {/* Multi-Currency Accounts */}
              <div className="group p-8 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Wallet className="text-blue-400" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Multi-Currency Accounts
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Open accounts in USD, EUR, GBP, CAD and more. Access SWIFT, SEPA, ACH, CHAPS, and Faster Payments 
                  from a single dashboard. Manage all your currencies in one place with our intuitive online platform. 
                  Hold balances in multiple currencies to hedge against exchange rate fluctuations and reduce conversion 
                  costs. Receive local account details for major currencies, making it easier for your international 
                  clients to pay you. Set up automated currency conversions and scheduled transfers to streamline your 
                  treasury operations. Enjoy competitive interest rates on your currency holdings and full visibility 
                  of all your transactions in real-time.
                </p>
              </div>

              {/* Send & Receive Payments */}
              <div className="group p-8 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Send className="text-blue-400" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Send & Receive Payments
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Transact effortlessly across borders. Pay suppliers, partners, and employees in their local currency. 
                  Our payment infrastructure supports both one-time and recurring transactions, with bulk payment 
                  capabilities for processing multiple transfers simultaneously. Enjoy fast settlement times with most 
                  payments arriving within 24 hours. Track every payment in real-time with detailed transaction history 
                  and automatic notifications. Set up beneficiary templates for frequent recipients to streamline future 
                  payments. Implement approval workflows for enhanced security and control over your corporate payments.
                </p>
              </div>

              {/* International Money Transfers */}
              <div className="group p-8 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Globe2 className="text-blue-400" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  International Money Transfers
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Fast, compliant cross-border remittances to 180+ countries. Transparent fees, real-time tracking. 
                  Our extensive global network ensures your funds reach their destination quickly and securely, regardless 
                  of the corridor. Benefit from our partnerships with local banks and payment providers for optimal routing 
                  and competitive pricing. All transfers are fully compliant with international regulations including AML 
                  and sanctions screening. Receive instant confirmation and detailed receipts for every transaction. 
                  Access dedicated support for urgent transfers and complex payment scenarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why BUYEASY Section */}
        <section id="why-buyeasy" className="py-32 px-6 bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-20 tracking-tight">
              Why <span className="text-blue-400">BUYEASY</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              {/* Speed Matters */}
              <div className="group p-8 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Zap className="text-blue-400" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Speed Matters
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Time-sensitive transactions demand instant execution. Our infrastructure processes payments 
                  in real-time, ensuring your business never misses a beat. Same-day settlements, instant FX 
                  conversions, and 24/7 availability mean you can operate on your schedule, not ours. Our 
                  automated systems eliminate manual processing delays, while our global network of banking 
                  partners ensures optimal routing for every transaction. Whether you're paying a supplier 
                  in Asia or receiving funds from Europe, our platform delivers the speed your business demands. 
                  Experience the difference that true real-time processing makes to your cash flow and operational 
                  efficiency.
                </p>
              </div>

              {/* Unmatched Security */}
              <div className="group p-8 rounded-3xl border border-gray-800 hover:border-blue-400 transition-all duration-500 hover:bg-gray-900/50">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Shield className="text-blue-400" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Unmatched Security
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                  Bank-grade encryption, SOC 2 compliance, and regulatory oversight ensure your funds and 
                  data are always protected. Multi-layered security protocols safeguard every transaction. 
                  Our advanced fraud detection systems monitor all activities in real-time, while two-factor 
                  authentication and biometric verification add extra layers of protection. Your funds are 
                  held in segregated accounts with tier-1 banking institutions, providing additional peace 
                  of mind. We maintain the highest standards of data privacy and undergo regular security 
                  audits by independent third parties. Trust is earned through consistent security practices, 
                  and we're committed to protecting your business every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Trust Section */}
        <section className="py-32 px-6 bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              {/* Left: Title */}
              <div className="lg:sticky lg:top-32">
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                  <span className="text-blue-400">Compliance</span><br />& Trust
                </h2>
                <p className="text-base text-gray-400 mt-8 leading-relaxed font-light text-justify">
                  Our commitment to regulatory compliance and transparency sets us apart in the financial 
                  services industry. We maintain the highest standards of corporate governance and work 
                  closely with regulators to ensure full compliance with all applicable laws and regulations.
                </p>
              </div>

              {/* Right: Stacked Cards */}
              <div className="relative">
                {/* Background glow effects */}
                <div className="absolute -top-16 left-0 right-0 h-48 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-[3rem] blur-3xl"></div>
                <div className="absolute bottom-0 left-8 right-0 h-48 bg-gradient-to-br from-blue-400/5 to-blue-600/5 rounded-[3rem] blur-3xl"></div>
                
                <div className="relative space-y-6">
                  {/* Card 1 - Regulated Entity */}
                  <div className="relative bg-gradient-to-br from-blue-400/10 to-blue-600/10 backdrop-blur-sm rounded-[2.5rem] p-10 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] group">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      Regulated Entity
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                      BuyEasy Technologies Limited is registered and regulated in Canada. Reg. № 1500317-2. 
                      We operate under strict regulatory oversight, ensuring that all our operations meet the 
                      highest standards of financial services provision. Our regulatory status provides you with 
                      the confidence that your transactions are handled by a legitimate, compliant financial institution.
                    </p>
                  </div>

                  {/* Card 2 - AML/KYC Compliance */}
                  <div className="relative bg-gradient-to-br from-blue-400/10 to-blue-600/10 backdrop-blur-sm rounded-[2.5rem] p-10 ml-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] group">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      AML/KYC Compliance
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                      Full adherence to Anti-Money Laundering and Know Your Customer requirements. Our robust 
                      compliance framework includes continuous transaction monitoring, enhanced due diligence 
                      procedures, and regular staff training. We maintain comprehensive records and work proactively 
                      to prevent financial crime while ensuring a smooth onboarding experience for legitimate businesses.
                    </p>
                  </div>

                  {/* Card 3 - Segregated Accounts */}
                  <div className="relative bg-gradient-to-br from-blue-400/10 to-blue-600/10 backdrop-blur-sm rounded-[2.5rem] p-10 ml-16 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:scale-[1.02] group">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      Segregated Accounts
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300 text-justify">
                      Client funds held in segregated accounts with tier-1 banking partners. Your money is 
                      kept separate from our operational funds, providing an additional layer of protection. 
                      This safeguarding arrangement ensures that your funds remain secure and accessible even 
                      in unlikely adverse scenarios, giving you complete peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-32 px-6 bg-black border-t border-gray-800">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to streamline your<br /><span className="text-blue-400">global payments?</span>
            </h2>
            <p className="text-base text-gray-400 mb-8 font-light leading-relaxed max-w-3xl mx-auto text-justify">
              Schedule a 15-minute consultation with our team to discuss your business needs. 
              Fill out the form below and one of our specialists will contact you shortly to 
              understand your requirements and demonstrate how BUYEASY can transform your 
              international payment operations.
            </p>
          </div>
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-20 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Left: License Info */}
              <div className="text-sm space-y-3">
                <p className="text-gray-400 font-light">
                  <strong className="text-blue-400 font-semibold text-base">BUYEASY TECHNOLOGY CO., LTD.</strong>
                </p>
                <p className="text-gray-400 font-light">2 Robert Speck Pkwy, Suite 750, Mississauga, ON L4Z 1H8, Canada</p>
                <p className="text-gray-400 font-light">MSB License Number: M23877619</p>
              </div>

              {/* Right: Legal Documents */}
              <div className="text-sm md:text-right">
                <h4 className="text-blue-400 font-semibold mb-4 uppercase tracking-wider text-xs">
                  Legal
                </h4>
                <ul className="space-y-2 md:inline-block md:text-left">
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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-gray-800 gap-4">
              <div className="text-xs text-gray-500 font-light">
                © 2026 BUYEASY. All rights reserved.
              </div>
              <div className="text-xs space-x-6">
                <span className="text-gray-400 font-light">
                  Email: <a href="mailto:info@buyeasy.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">info@buyeasy.it.com</a>
                </span>
                <span className="text-gray-400 font-light">
                  Phone: <a href="tel:+13438833504" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">+1 343 883 3504</a>
                </span>
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
