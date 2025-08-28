import React from 'react'
import type { Metadata } from 'next'
import { 
  Shield, 
  Clock, 
  Volume2, 
  Sparkles,
  Coffee,
  Users,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Regolamento',
  description: 'Regolamento completo del CROCO HUB - Regole e linee guida per l\'utilizzo del club',
}

export default function RegolamentoPage() {
  const sections = [
    {
      icon: Shield,
      title: 'Accesso e Membership',
      content: [
        'Il CROCO HUB è un club privato riservato esclusivamente ai membri del gruppo privato.',
        'L\'accesso è consentito solo tramite invito personale e approvazione del gruppo.',
        'Ogni membro è responsabile dei propri ospiti e del loro comportamento.',
        'È vietato condividere l\'ubicazione o i dettagli del club con persone non autorizzate.',
        'Il mancato rispetto delle regole può comportare la revoca dell\'accesso.'
      ]
    },
    {
      icon: Clock,
      title: 'Orari e Prenotazioni',
      content: [
        'Le prenotazioni devono essere effettuate tramite i canali ufficiali.',
        'Le prenotazioni sono confermate manualmente entro 24 ore.',
        'In caso di ritardo superiore a 30 minuti, lo slot può essere riassegnato.',
        'Disdette devono essere comunicate almeno 2 ore prima dell\'orario prenotato.'
      ]
    },
    {
      icon: Volume2,
      title: 'Rispetto del Vicinato',
      content: [
        'Mantenere sempre un volume moderato per rispettare i vicini.',
        'Evitare schiamazzi, specialmente durante gli orari serali.',
        'Parcheggiare negli spazi designati senza intralciare passaggi.',
        'Non sostare all\'esterno dell\'edificio creando assembramenti.',
        'Rispettare gli orari di chiusura senza prolungare oltre il consentito.'
      ]
    },
    {
      icon: Sparkles,
      title: 'Pulizia e Ordine',
      content: [
        'Lasciare sempre tutto pulito e in ordine dopo l\'utilizzo.',
        'Rimuovere i propri rifiuti e utilizzare correttamente la raccolta differenziata.',
        'Rimettere a posto console, controller e giochi dopo l\'uso.',
        'Pulire il tavolo da ping pong e riporlo correttamente.',
        'Segnalare immediatamente eventuali danni o malfunzionamenti.',
        'La pulizia è responsabilità condivisa di tutti i membri.'
      ]
    },
    {
      icon: Coffee,
      title: 'Consumazioni e Minibar',
      content: [
        'Il minibar funziona con sistema di "cassetta dell\'onestà".',
        'Annotare sempre le consumazioni nell\'apposito registro.',
        'Prezzi indicativi: bevande €1-2, snack €1-3.',
        'Non è consentito portare alcolici dall\'esterno.',
        'Mantenere il frigorifero e l\'area minibar sempre puliti.',
        'Segnalare quando le scorte sono in esaurimento.'
      ]
    },
    {
      icon: Users,
      title: 'Comportamento e Convivenza',
      content: [
        'Rispettare tutti i membri del club e i loro ospiti.',
        'Non monopolizzare le postazioni gaming per ore consecutive.',
        'Alternare l\'uso delle console quando ci sono più gruppi.',
        'Risolvere eventuali conflitti con dialogo e rispetto reciproco.',
        'Segnalare comportamenti inappropriate al team di gestione.',
        'Promuovere un ambiente inclusivo e accogliente per tutti.'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Responsabilità e Sicurezza',
      content: [
        'Ogni membro è responsabile per i danni causati da sé o dai propri ospiti.',
        'È vietato fumare all\'interno del club.',
        'Non lasciare mai oggetti di valore incustoditi.',
        'Segnalare immediatamente qualsiasi problema di sicurezza.',
        'Il club non è responsabile per furti o danni a oggetti personali.'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding container-width py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Regolamento CROCO HUB
            </h1>
            <p className="text-xl text-gray-400">
              Regole e linee guida per garantire un ambiente piacevole e rispettoso per tutti
            </p>
          </div>

          <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-6 mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-lime-500" />
              <h2 className="text-xl font-semibold text-white">
                Principi Fondamentali
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Il CROCO HUB si basa su rispetto reciproco, responsabilità condivisa e 
              divertimento in un ambiente privato e sicuro. Ogni membro contribuisce 
              a mantenere alta la qualità dell\'esperienza per tutti.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              
              return (
                <div
                  key={section.title}
                  className="card"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-lime-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {section.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Contatti per Chiarimenti
            </h2>
            <p className="text-gray-400 mb-4">
              Per domande sul regolamento o segnalazioni, contatta il team di gestione:
            </p>
            <a
              href="mailto:info@crocohub.club"
              className="text-lime-400 hover:text-lime-300 transition-colors font-medium"
            >
              info@crocohub.club
            </a>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 