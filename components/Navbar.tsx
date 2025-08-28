'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/regolamento', label: 'Regolamento' },
    { href: '/privacy', label: 'Privacy' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="section-padding container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/Crocohublogo.png" 
              alt="Croco Hub Logo" 
              width={45} 
              height={45}
              className="rounded-lg hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-lime-400 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                const element = document.getElementById('interest-form')
                if (element) {
                  const navbarHeight = 80
                  const elementPosition = element.offsetTop - navbarHeight
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  })
                }
              }}
              className="btn-primary px-4 py-2"
            >
              Partecipa
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 border-t border-gray-700"
          >
            <div className="section-padding py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-gray-300 hover:text-lime-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false)
                  setTimeout(() => {
                    const element = document.getElementById('interest-form')
                    if (element) {
                      const navbarHeight = 80
                      const elementPosition = element.offsetTop - navbarHeight
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      })
                    }
                  }, 100) // Piccolo delay per permettere la chiusura del menu mobile
                }}
                className="btn-primary w-full mt-4 py-3 text-center"
              >
                Partecipa
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 