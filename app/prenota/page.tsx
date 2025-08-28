import React from 'react'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { BookingTabs } from '@/components/BookingTabs'

export const metadata: Metadata = {
  title: 'Prenota',
  description: 'Prenota il tuo slot al CROCO HUB - Sistema di prenotazione semplice e veloce',
}

export default function PrenotaPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding container-width py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prenota il Tuo Slot
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Scegli il metodo di prenotazione che preferisci. 
              Tutte le prenotazioni sono soggette a conferma manuale.
            </p>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 mb-8 text-center">
            <p className="text-orange-400 font-medium">
              ⚠️ Le prenotazioni sono confermate manualmente dal team entro 24 ore
            </p>
          </div>

          <BookingTabs />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">
                📋 Informazioni Utili
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Orari apertura disponibili</li>

                <li>• Durata slot: 4 ore</li>
                <li>• Conferma entro 24 ore</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">
                📞 Contatti
              </h3>
              <div className="space-y-2 text-gray-400">
                <p>Per informazioni o modifiche:</p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-lime-400 hover:text-lime-300 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 