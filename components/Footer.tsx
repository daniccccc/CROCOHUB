import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Mail, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="section-padding container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">
              {siteConfig.name}
            </h3>
            <p className="text-gray-400">
            Community • Relax • Gaming 
            </p>
            <p className="text-sm text-gray-500">
              Club privato su invito
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Pagine</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-400 hover:text-lime-400 transition-colors"
              >
                Home
              </Link>

              <Link
                href="/regolamento"
                className="block text-gray-400 hover:text-lime-400 transition-colors"
              >
                Regolamento
              </Link>
              <Link
                href="/privacy"
                className="block text-gray-400 hover:text-lime-400 transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-200">Contatti & Social</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-lime-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="w-4 h-4 text-pink-400" />
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  @croc0hub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Club privato tra amici.
          </p>
        </div>
      </div>
    </footer>
  )
} 