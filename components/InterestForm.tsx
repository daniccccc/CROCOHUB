'use client'

import { motion } from 'framer-motion'
import { Users, Mail, Heart, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useState } from 'react'

export function InterestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      // Invia al Google Form in background
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSc7peX_GclOwtu3P4Swn8eDnhu5K6Lm6SZ2jztjns-NHnwNJQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      })
      
      setIsSubmitted(true)
    } catch (error) {
      // Anche in caso di errore, mostriamo conferma (no-cors non restituisce response)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="interest-form" className="py-20 bg-gray-800">
        <div className="section-padding container-width">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-lime-500/20 to-green-500/20 border border-lime-500/30 rounded-3xl p-12">
                <CheckCircle className="w-20 h-20 text-lime-500 mx-auto mb-6" />
                
                <h2 className="text-4xl font-bold text-white mb-6">
                  Richiesta Inviata!
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Grazie per aver manifestato il tuo interesse per il CROCO HUB! 
                  La tua richiesta è stata ricevuta correttamente.
                </p>
                
                <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-lime-400 mb-3">
                    Cosa succede ora?
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Valuteremo la tua richiesta entro qualche giorno</p>
                    <p>• Ti contatteremo al numero fornito se approvata</p>
                    <p>• Riceverai l'invito al gruppo privato</p>
                    <p>• Segui @croc0hub su Instagram per aggiornamenti!</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/"
                    className="btn-primary px-6 py-3 inline-flex items-center justify-center"
                  >
                    Torna alla Home
                  </a>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-6 py-3 inline-flex items-center justify-center"
                  >
                    Seguici su Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="interest-form" className="py-20 bg-gray-800">
      <div className="section-padding container-width">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unisciti a Noi
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-8">
              Compila il modulo per manifestare il tuo interesse. 
              Ti contatteremo per l'invito al gruppo privato.
            </p>
            
            {/* Info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-6">
                <Users className="w-8 h-8 text-lime-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                      Chi Può Partecipare
                    </h3>
                <p className="text-gray-400 text-sm">
                  Club riservato a un gruppo ristretto di amici fidati
                    </p>
                </div>

              <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-6">
                <Mail className="w-8 h-8 text-lime-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                      Come Funziona
                    </h3>
                <p className="text-gray-400 text-sm">
                  Valuteremo la richiesta e invieremo l'invito se approvata
                </p>
              </div>

              <div className="bg-lime-500/10 border border-lime-500/20 rounded-xl p-6">
                <Heart className="w-8 h-8 text-lime-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  La Community
                </h3>
                <p className="text-gray-400 text-sm">
                  Ambiente rilassato per gaming, sport e relax
                </p>
              </div>
              </div>
            </motion.div>

          {/* Form section - Full width */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            className="card max-w-6xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Modulo di Interesse
              </h3>

                            {/* Custom Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                
                {/* Domanda principale - Partecipazione */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Parteciperesti al progetto CROCO HUB? *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="entry.1914620531"
                        value="Assolutamente sì!"
                        required
                        className="w-4 h-4 text-lime-500 bg-gray-800 border-gray-600 focus:ring-lime-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-300">Assolutamente sì!</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="entry.1914620531"
                        value="Forse, vorrei saperne di più"
                        className="w-4 h-4 text-lime-500 bg-gray-800 border-gray-600 focus:ring-lime-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-300">Forse, vorrei saperne di più</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="entry.1914620531"
                        value="Non credo"
                        className="w-4 h-4 text-lime-500 bg-gray-800 border-gray-600 focus:ring-lime-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-300">Non credo</span>
                    </label>
                  </div>
                </div>

                {/* Preferenza tariffa */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    A quale tariffa saresti più interessato? *
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="entry.1582713179"
                        value="Infrasettimanale 7€ (a ingresso)"
                        required
                        className="w-4 h-4 text-lime-500 bg-gray-800 border-gray-600 focus:ring-lime-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-300">Infrasettimanale 7€ (a ingresso)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="entry.1582713179"
                        value="Festivo 10€ (a ingresso)"
                        className="w-4 h-4 text-lime-500 bg-gray-800 border-gray-600 focus:ring-lime-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-300">Festivo 10€ (a ingresso)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="entry.1582713179"
                        value="Abbonamento 25€ (al mese)"
                        className="w-4 h-4 text-lime-500 bg-gray-800 border-gray-600 focus:ring-lime-500 focus:ring-2"
                      />
                      <span className="ml-2 text-gray-300">Abbonamento 25€ (al mese)</span>
                    </label>
                  </div>
                </div>

                {/* Ingressi mensili per tariffa ad ingresso */}
                <div>
                  <label htmlFor="monthly-entries" className="block text-sm font-medium text-gray-300 mb-2">
                    Se hai votato tariffa ad ingresso, indicativamente a quanti ingressi mensili saresti interessato?
                  </label>
                  <select
                    id="monthly-entries"
                    name="entry.1990074340"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
                  >
                    <option value="">Seleziona un'opzione</option>
                    <option value="1">1</option>
                    <option value="2-3">2-3</option>
                    <option value="3-4">3-4</option>
                  </select>
                </div>

                {/* Nome e Cognome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="entry.388650291"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
                    placeholder="Il tuo nome completo"
                  />
                </div>

                {/* Cosa si potrebbe migliorare */}
                <div>
                  <label htmlFor="miglioramenti" className="block text-sm font-medium text-gray-300 mb-2">
                    Cosa si potrebbe migliorare o aggiungere?
                  </label>
                  <textarea
                    id="miglioramenti"
                    name="entry.1033217347"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors resize-none"
                    placeholder="Condividi le tue idee per migliorare l'esperienza del club..."
                  ></textarea>
                </div>

                {/* Contatto telefonico */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                    Contatto telefonico *
                    <span className="text-gray-500 text-xs block mt-1">(per invito al gruppo privato)</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="entry.1864190822"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-colors"
                    placeholder="+39 123 456 7890"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg font-semibold hover:scale-105 transform transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta di Interesse'}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">
                  I tuoi dati saranno trattati nel rispetto della privacy e 
                  utilizzati solo per la gestione degli accessi al club.
                </p>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
} 