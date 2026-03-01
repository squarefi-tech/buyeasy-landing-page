'use client'

import { useState } from 'react'
import { ArrowRight, TrendingUp, Wallet, Send, Globe2, Zap, Shield, CheckCircle, FileText, Lock, Building2 } from 'lucide-react'
import { CookieConsent } from '@/components/CookieConsent'
import { MobileMenu } from '@/components/MobileMenu'
import { ContactForm } from '@/components/ContactForm'
import { LoginModal } from '@/components/LoginModal'

export default function LandingPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-12">
              <a href="/" className="text-xl font-bold text-black tracking-tight">
                BUYEASY
              </a>
              <div className="hidden md:flex items-center gap-8">
                <a href="#solutions" className="text-sm text-gray-500 hover:text-black transition-colors font-light">
                  Solutions
                </a>
                <a href="#why-buyeasy" className="text-sm text-gray-500 hover:text-black transition-colors font-light">
                  About
                </a>
                <a href="#contact" className="text-sm text-gray-500 hover:text-black transition-colors font-light">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MobileMenu />
              <button
                onClick={() => setIsLoginOpen(true)}
                className="px-5 py-2 text-black text-sm font-light hover:text-gray-600 transition-colors"
              >
                Login
              </button>
              <a
                href="#contact"
                className="px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Book a call
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-[1.1] tracking-tight">
              Your trusted global partner<br />for FX, payments &<br />money remittance
            </h1>
            <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              BUYEASY is a financial services provider specializing in foreign exchange, 
              multi-currency accounts, and international money transfers. We deliver speed, security, 
              and full regulatory compliance for your business payments. Our platform enables businesses 
              of all sizes to manage their global finances efficiently, with access to competitive exchange 
              rates, transparent pricing, and dedicated support from our experienced team. Whether you're 
              making your first international payment or managing complex multi-currency operations, 
              BUYEASY provides the tools and expertise you need to succeed in the global marketplace.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-sm"
            >
              Request a 15-Minute Demo
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold text-black mb-3">30+</div>
                <div className="text-sm text-gray-500 font-light">Currency Pairs</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-3">180+</div>
                <div className="text-sm text-gray-500 font-light">Countries Supported</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-3">50+</div>
                <div className="text-sm text-gray-500 font-light">Multi-Currency Accounts</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-3">24/7</div>
                <div className="text-sm text-gray-500 font-light">Global Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-20 text-center tracking-tight">
              Our Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* FX */}
              <div className="group">
                <div className="mb-4">
                  <TrendingUp className="text-black" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Foreign Exchange
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  — Competitive FX rates for 30+ currency pairs. Convert and settle in real-time with full transparency. 
                  Our advanced trading platform provides access to institutional-grade pricing with no hidden markups. 
                  Lock in rates for future transactions with forward contracts, or take advantage of spot rates for 
                  immediate settlements. Benefit from our deep liquidity pools and execute large volume trades with 
                  minimal slippage. Our expert dealers are available around the clock to provide market insights and 
                  help you optimize your foreign exchange strategy.
                </p>
              </div>

              {/* Multi-Currency Accounts */}
              <div className="group">
                <div className="mb-4">
                  <Wallet className="text-black" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Multi-Currency Accounts
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  — Open accounts in USD, EUR, GBP, CAD and more. Access SWIFT, SEPA, ACH, CHAPS, and Faster Payments 
                  from a single dashboard. Manage all your currencies in one place with our intuitive online platform. 
                  Hold balances in multiple currencies to hedge against exchange rate fluctuations and reduce conversion 
                  costs. Receive local account details for major currencies, making it easier for your international 
                  clients to pay you. Set up automated currency conversions and scheduled transfers to streamline your 
                  treasury operations. Enjoy competitive interest rates on your currency holdings and full visibility 
                  of all your transactions in real-time.
                </p>
              </div>

              {/* Send & Receive Payments */}
              <div className="group">
                <div className="mb-4">
                  <Send className="text-black" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Send & Receive Payments
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  — Transact effortlessly across borders. Pay suppliers, partners, and employees in their local currency. 
                  Our payment infrastructure supports both one-time and recurring transactions, with bulk payment 
                  capabilities for processing multiple transfers simultaneously. Enjoy fast settlement times with most 
                  payments arriving within 24 hours. Track every payment in real-time with detailed transaction history 
                  and automatic notifications. Set up beneficiary templates for frequent recipients to streamline future 
                  payments. Implement approval workflows for enhanced security and control over your corporate payments.
                </p>
              </div>

              {/* International Money Transfers */}
              <div className="group">
                <div className="mb-4">
                  <Globe2 className="text-black" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  International Money Transfers
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  — Fast, compliant cross-border remittances to 180+ countries. Transparent fees, real-time tracking. 
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
        <section id="why-buyeasy" className="py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-20 text-center tracking-tight">
              Why BUYEASY
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              {/* Speed Matters */}
              <div>
                <div className="mb-4">
                  <Zap className="text-black" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Speed Matters
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  — Time-sensitive transactions demand instant execution. Our infrastructure processes payments 
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
              <div>
                <div className="mb-4">
                  <Shield className="text-black" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Unmatched Security
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  — Bank-grade encryption, SOC 2 compliance, and regulatory oversight ensure your funds and 
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
        <section className="py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              {/* Left: Title */}
              <div className="lg:sticky lg:top-32">
                <h2 className="text-5xl md:text-6xl font-bold text-black leading-[1.1] tracking-tight">
                  Compliance<br />& Trust
                </h2>
                <p className="text-base text-gray-500 mt-8 leading-relaxed font-light">
                  Our commitment to regulatory compliance and transparency sets us apart in the financial 
                  services industry. We maintain the highest standards of corporate governance and work 
                  closely with regulators to ensure full compliance with all applicable laws and regulations.
                </p>
              </div>

              {/* Right: Stacked Cards */}
              <div className="relative">
                {/* Background oval shapes */}
                <div className="absolute -top-16 left-0 right-0 h-48 bg-gradient-to-br from-lime-50/30 to-yellow-50/30 rounded-[3rem] blur-2xl"></div>
                <div className="absolute bottom-0 left-8 right-0 h-48 bg-gradient-to-br from-lime-50/20 to-yellow-50/20 rounded-[3rem] blur-2xl"></div>
                
                <div className="relative space-y-6">
                  {/* Card 1 - Regulated Entity */}
                  <div className="relative bg-gradient-to-br from-lime-50/40 to-yellow-50/40 backdrop-blur-sm rounded-[2.5rem] p-10 border border-lime-100/30">
                    <h3 className="text-xl font-semibold text-black mb-3">
                      Regulated Entity
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm">
                      — BuyEasy Technologies Limited is registered and regulated in Canada. Reg. № 1500317-2. 
                      We operate under strict regulatory oversight, ensuring that all our operations meet the 
                      highest standards of financial services provision. Our regulatory status provides you with 
                      the confidence that your transactions are handled by a legitimate, compliant financial institution.
                    </p>
                  </div>

                  {/* Card 2 - AML/KYC Compliance */}
                  <div className="relative bg-gradient-to-br from-lime-50/40 to-yellow-50/40 backdrop-blur-sm rounded-[2.5rem] p-10 ml-8 border border-lime-100/30">
                    <h3 className="text-xl font-semibold text-black mb-3">
                      AML/KYC Compliance
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm">
                      — Full adherence to Anti-Money Laundering and Know Your Customer requirements. Our robust 
                      compliance framework includes continuous transaction monitoring, enhanced due diligence 
                      procedures, and regular staff training. We maintain comprehensive records and work proactively 
                      to prevent financial crime while ensuring a smooth onboarding experience for legitimate businesses.
                    </p>
                  </div>

                  {/* Card 3 - Segregated Accounts */}
                  <div className="relative bg-gradient-to-br from-lime-50/40 to-yellow-50/40 backdrop-blur-sm rounded-[2.5rem] p-10 ml-16 border border-lime-100/30">
                    <h3 className="text-xl font-semibold text-black mb-3">
                      Segregated Accounts
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-light text-sm">
                      — Client funds held in segregated accounts with tier-1 banking partners. Your money is 
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
        <section id="contact" className="py-32 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">
              Ready to streamline your<br />global payments?
            </h2>
            <p className="text-base text-gray-500 mb-8 font-light leading-relaxed">
              Schedule a 15-minute consultation with our team to discuss your business needs. 
              Fill out the form below and one of our specialists will contact you shortly to 
              understand your requirements and demonstrate how BUYEASY can transform your 
              international payment operations.
            </p>
          </div>
          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="bg-black text-gray-400 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-16 mb-16">
              {/* Brand Column */}
              <div>
                <div className="text-xl font-bold text-white mb-5 tracking-tight">BUYEASY</div>
                <p className="text-sm text-gray-500 leading-relaxed font-light">
                  Financial services provider for foreign exchange, multi-currency accounts, and international payments. 
                  Trusted by businesses worldwide for secure, fast, and compliant cross-border transactions.
                </p>
              </div>

              {/* Company Column */}
              <div>
                <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">
                  Company
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#why-buyeasy" className="text-sm hover:text-white transition-colors font-light">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm hover:text-white transition-colors font-light">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Solutions Column */}
              <div>
                <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">
                  Solutions
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#solutions" className="text-sm hover:text-white transition-colors font-light">
                      Foreign Exchange
                    </a>
                  </li>
                  <li>
                    <a href="#solutions" className="text-sm hover:text-white transition-colors font-light">
                      Multi-Currency Accounts
                    </a>
                  </li>
                  <li>
                    <a href="#solutions" className="text-sm hover:text-white transition-colors font-light">
                      Payments
                    </a>
                  </li>
                  <li>
                    <a href="#solutions" className="text-sm hover:text-white transition-colors font-light">
                      Money Remittance
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">
                  Legal
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/legal/terms" className="text-sm hover:text-white transition-colors font-light">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="/legal/privacy" className="text-sm hover:text-white transition-colors font-light">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/legal/cookies" className="text-sm hover:text-white transition-colors font-light">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-12 border-t border-gray-800">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-sm space-y-2">
                  <p className="text-gray-500 font-light">
                    <strong className="text-white font-semibold">BuyEasy Technologies Limited</strong>
                  </p>
                  <p className="text-gray-500 font-light">2 Robert Speck Pkwy, Suite 750, Mississauga, ON L4Z 1H8, Canada</p>
                  <p className="text-gray-500 font-light">Reg. № 1500317-2</p>
                </div>
                <div className="text-sm space-y-2 md:text-right">
                  <p className="text-gray-500 font-light">
                    Email: <a href="mailto:info@buyeasy.app" className="text-white hover:underline">info@buyeasy.app</a>
                  </p>
                  <p className="text-gray-500 font-light">
                    Phone: <a href="tel:+13438833504" className="text-white hover:underline">+1 343 883 3504</a>
                  </p>
                </div>
              </div>
              
              {/* License Information */}
              <div className="py-8 border-t border-gray-800">
                <div className="text-sm space-y-2">
                  <p className="text-gray-500 font-light">
                    <strong className="text-white font-semibold">BUYEASY TECHNOLOGY CO., LTD.</strong>
                  </p>
                  <p className="text-gray-500 font-light">Money Services Business (MSB)</p>
                  <p className="text-gray-500 font-light">Registration Number: M23877619</p>
                </div>
              </div>

              <div className="text-center text-xs text-gray-600 pt-8 font-light">
                © 2026 BUYEASY. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>

      <CookieConsent />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  )
}
