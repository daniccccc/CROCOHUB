'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, FileText } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function BookingTabs() {
  const [activeTab, setActiveTab] = useState('form')

  const tabs = [
    {
      id: 'form',
      label: 'Modulo Prenotazione',
      icon: FileText,
      description: 'Compila il form per richiedere uno slot'
    },
    {
      id: 'calendly',
      label: 'Calendario Online',
      icon: Calendar,
      description: 'Scegli direttamente dal calendario'
    }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Tab Headers */}
      <div className="flex flex-col sm:flex-row bg-gray-800/50 rounded-xl p-2 mb-8">
        {tabs.map((tab) => {
          const IconComponent = tab.icon
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-3 px-6 py-4 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-lime-500 text-gray-900 shadow-lg'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <div className="text-left">
                <div className="font-semibold">{tab.label}</div>
                <div className="text-xs opacity-80">{tab.description}</div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="card"
      >
        {activeTab === 'form' && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Richiedi Prenotazione
            </h3>
            
            <div className="relative">
              <iframe
                src={siteConfig.links.googleForm}
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
                title="Modulo prenotazione CROCO HUB"
              >
                Caricamento modulo...
              </iframe>

              {/* Fallback for no-JS */}
              <noscript>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 text-center">
                  <p className="text-yellow-400 mb-4">
                    JavaScript è disabilitato. Clicca il link qui sotto:
                  </p>
                  <a
                    href={siteConfig.links.googleForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Apri Modulo Prenotazione
                  </a>
                </div>
              </noscript>
            </div>

            <div className="mt-6 bg-gray-700/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">
                📝 Informazioni Richieste:
              </h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Data e fascia oraria preferita</li>
                <li>• Numero di partecipanti</li>
                <li>• Nome gruppo/referente</li>
                <li>• Contatti per conferma</li>
                <li>• Eventuali note speciali</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'calendly' && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Calendario Prenotazioni
            </h3>
            
            <div className="relative">
              <iframe
                src={siteConfig.links.calendly}
                width="100%"
                height="800"
                frameBorder="0"
                className="rounded-lg"
                title="Calendario prenotazioni CROCO HUB"
              >
                Caricamento calendario...
              </iframe>

              {/* Fallback for no-JS */}
              <noscript>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 text-center">
                  <p className="text-yellow-400 mb-4">
                    JavaScript è disabilitato. Clicca il link qui sotto:
                  </p>
                  <a
                    href={siteConfig.links.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-block"
                  >
                    Apri Calendario Calendly
                  </a>
                </div>
              </noscript>
            </div>

            <div className="mt-6 bg-gray-700/50 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">
                📅 Come Funziona:
              </h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Scegli data e orario disponibili</li>
                <li>• Inserisci i tuoi dati nel form</li>
                <li>• Riceverai email di conferma</li>
                <li>• Il team confermerà entro 24 ore</li>
              </ul>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
} 