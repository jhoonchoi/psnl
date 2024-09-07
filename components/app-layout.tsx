'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/research', label: 'Research' },
    { href: '/publications', label: 'Publications' },
    { href: '/people', label: 'People' },
  ]

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href
    return (
      <Link
        href={href}
        className={`text-gray-800 hover:text-gray-600 ${
          isActive ? 'font-bold border-b-2 border-primary' : ''
        }`}
      >
        {label}
      </Link>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">PSNL</Link>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} />
              ))}
            </div>
            <Button variant="outline" className="md:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            </Button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'text-primary bg-primary-foreground'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          © {new Date().getFullYear()} Psychopathology & Social Neuroscience Lab. All rights reserved.
        </div>
      </footer>
    </div>
  )
}