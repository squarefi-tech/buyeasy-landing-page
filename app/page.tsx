import { ArrowRight, TrendingUp, Wallet, Send, Globe2, Zap, Shield, CheckCircle, FileText, Lock, Building2 } from 'lucide-react'
import { CookieConsent } from '@/components/CookieConsent'
import { MobileMenu } from '@/components/MobileMenu'

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <a href="/" className="text-xl font-bold text-gray-900">
                BUYEASY
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a href="#solutions" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Solutions
                </a>
                <a href="#why-buyeasy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </a>
                <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MobileMenu />
              <a
                href="https://calendly.com/buyeasy/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Book a call
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your trusted global partner<br />for FX, payments & money remittance
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              BUYEASY is a licensed financial services provider specializing in foreign exchange, 
              multi-currency accounts, and international money transfers. We deliver speed, security, 
              and full regulatory compliance for your business payments.
            </p>
            <a
              href="https://calendly.com/buyeasy/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Request a 15-Minute Demo
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">30+</div>
                <div className="text-sm text-gray-600">Currency Pairs</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">180+</div>
                <div className="text-sm text-gray-600">Countries Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600">Multi-Currency Accounts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Global Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* FX */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Foreign Exchange
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Competitive FX rates for 30+ currency pairs. Convert and settle in real-time with full transparency.
                </p>
              </div>

              {/* Multi-Currency Accounts */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Wallet className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Multi-Currency Accounts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Open accounts in USD, EUR, GBP, CAD and more. Access SWIFT, SEPA, ACH, CHAPS, and Faster Payments from a single dashboard.
                </p>
              </div>

              {/* Send & Receive Payments */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Send className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Send & Receive Payments
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transact effortlessly across borders. Pay suppliers, partners, and employees in their local currency.
                </p>
              </div>

              {/* International Money Transfers */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe2 className="text-gray-900" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  International Money Transfers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fast, compliant cross-border remittances to 180+ countries. Transparent fees, real-time tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why BUYEASY Section */}
        <section id="why-buyeasy" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Why BUYEASY
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Speed Matters */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Zap className="text-gray-900" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Speed Matters
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Time-sensitive transactions demand instant execution. Our infrastructure processes payments 
                    in real-time, ensuring your business never misses a beat. Same-day settlements, instant FX 
                    conversions, and 24/7 availability.
                  </p>
                </div>
              </div>

              {/* Unmatched Security */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Shield className="text-gray-900" size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Unmatched Security
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Bank-grade encryption, SOC 2 compliance, and regulatory oversight ensure your funds and 
                    data are always protected. Multi-layered security protocols safeguard every transaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Trust Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Compliance & Trust
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Regulated Entity */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="text-gray-900" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Regulated Entity
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  BuyEasy Technologies Limited is registered and regulated in Canada. Reg. № 1500317-2.
                </p>
              </div>

              {/* AML/KYC Compliance */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-gray-900" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  AML/KYC Compliance
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Full adherence to Anti-Money Laundering and Know Your Customer requirements.
                </p>
              </div>

              {/* Segregated Accounts */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="text-gray-900" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Segregated Accounts
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Client funds held in segregated accounts with tier-1 banking partners.
                </p>
              </div>

              {/* Audit & Reporting */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="text-gray-900" size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Audit & Reporting
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Regular independent audits and transparent reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to streamline your global payments?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a 15-minute consultation with our team to discuss your business needs.
            </p>
            <a
              href="https://calendly.com/buyeasy/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              Request a 15-Minute Demo
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand Column */}
              <div>
                <div className="text-xl font-bold text-white mb-4">BUYEASY</div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Licensed financial services provider for foreign exchange, multi-currency accounts, and international payments.
                </p>
              </div>

              {/* Company Column */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Company
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#why-buyeasy" className="text-sm hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm hover:text-white transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Solutions Column */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Solutions
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#solutions" className="text-sm hover:text-white transition-colors">
                      Foreign Exchange
                    </a>
                  </li>
                  <li>
                    <a href="#solutions" className="text-sm hover:text-white transition-colors">
                      Multi-Currency Accounts
                    </a>
                  </li>
                  <li>
                    <a href="#solutions" className="text-sm hover:text-white transition-colors">
                      Payments
                    </a>
                  </li>
                  <li>
                    <a href="#solutions" className="text-sm hover:text-white transition-colors">
                      Money Remittance
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://mosta-legal-portal.vercel.app/v1/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="https://mosta-legal-portal.vercel.app/v1/privacy-policy-buyeasy" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://mosta-legal-portal.vercel.app/v1/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-8 border-t border-gray-800">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="text-sm space-y-1">
                  <p className="text-gray-400">
                    <strong className="text-white">BuyEasy Technologies Limited</strong>
                  </p>
                  <p className="text-gray-400">2 Robert Speck Pkwy, Suite 750, Mississauga, ON L4Z 1H8, Canada</p>
                  <p className="text-gray-400">Reg. № 1500317-2</p>
                </div>
                <div className="text-sm space-y-1 md:text-right">
                  <p className="text-gray-400">
                    Email: <a href="mailto:info@buyeasy.app" className="text-white hover:underline">info@buyeasy.app</a>
                  </p>
                  <p className="text-gray-400">
                    Phone: <a href="tel:+13438833504" className="text-white hover:underline">+1 343 883 3504</a>
                  </p>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500">
                © 2026 BUYEASY. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>

      <CookieConsent />
    </>
  )
}
