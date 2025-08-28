import React from 'react'
import type { Metadata } from 'next'
import { Shield, Mail, Eye, Trash2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Informativa privacy del CROCO HUB - Come trattiamo i tuoi dati personali',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding container-width py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Informativa Privacy
            </h1>
            <p className="text-xl text-gray-400">
              Come raccogliamo e utilizziamo i tuoi dati personali
            </p>
          </div>

          <div className="space-y-8">
            <div className="card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-lime-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Chi Siamo
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                CROCO HUB è un club privato tra amici che raccoglie dati personali 
                esclusivamente per la gestione delle prenotazioni e la comunicazione 
                con i membri del gruppo privato.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-lime-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Dati Raccolti
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Raccogliamo i seguenti dati personali tramite i moduli presenti sul sito:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Nome e cognome:</strong> per identificare i membri</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Email:</strong> per comunicazioni e conferme prenotazioni</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Preferenze attività:</strong> per migliorare l'esperienza</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Note e commenti:</strong> per gestire richieste speciali</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-lime-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Come Utilizziamo i Dati
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  I tuoi dati personali vengono utilizzati esclusivamente per:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Gestire le prenotazioni e confermare gli slot</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Comunicare informazioni sul club e gli eventi</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Valutare richieste di accesso al gruppo privato</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Migliorare i servizi offerti dal club</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-4">
                Condivisione dei Dati
              </h2>
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                <p className="text-green-400 font-medium">
                  ✅ I tuoi dati NON vengono mai ceduti, venduti o condivisi con terze parti.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Rimangono esclusivamente all'interno del gruppo di gestione del club.
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-4">
                Conservazione dei Dati
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                I dati personali vengono conservati per il tempo strettamente necessario 
                alla gestione del club e delle prenotazioni. In particolare:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Dati di prenotazione: fino a 12 mesi dalla data dell'evento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Dati di contatto: fino alla richiesta di cancellazione</span>
                </li>
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center">
                  <Trash2 className="w-6 h-6 text-lime-500" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  I Tuoi Diritti
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  In qualsiasi momento puoi esercitare i seguenti diritti:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Accesso:</strong> richiedere copia dei tuoi dati</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Rettifica:</strong> correggere dati inesatti</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Cancellazione:</strong> eliminare i tuoi dati</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Opposizione:</strong> opporti al trattamento</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-4">
                Cookie e Tracciamento
              </h2>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-blue-400 font-medium">
                  🍪 Questo sito NON utilizza cookie di tracciamento o analytics.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Vengono utilizzati solo cookie tecnici necessari per il funzionamento del sito.
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-4">
                Contatti
              </h2>
              <p className="text-gray-300 mb-4">
                Per esercitare i tuoi diritti o per qualsiasi domanda sulla privacy:
              </p>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <a
                  href="mailto:privacy@crocohub.club"
                  className="text-lime-400 hover:text-lime-300 transition-colors font-medium"
                >
                  privacy@crocohub.club
                </a>
                <p className="text-gray-500 text-sm mt-2">
                  Risponderemo entro 30 giorni dalla ricezione della richiesta.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}<br/>
              Questa informativa è soggetta a modifiche. Ti informeremo di eventuali cambiamenti.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 