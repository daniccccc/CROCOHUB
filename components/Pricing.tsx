'use client'

import { motion } from 'framer-motion'
import { Check, Clock, Calendar, Star } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Pricing() {
  const plans = [
    {
      name: 'Infrasettimanale',
      price: siteConfig.pricing.weekday,
      period: 'a ingresso',
      description: 'Perfetto per sessioni dopo lavoro o studio',
      features: [
        'Accesso mer-ven',
        'Tutti i servizi inclusi',
        'Durata slot: 4 ore',

      ],
      icon: Clock,
      popular: false
    },
    {
      name: 'Festivo',
      price: siteConfig.pricing.weekend,
      period: 'a ingresso',
      description: 'Weekend e festivi per il massimo divertimento',
      features: [
        'Accesso sab-dom-festivi',
        'Tutti i servizi inclusi',
        'Durata slot: 4 ore',

      ],
      icon: Calendar,
      popular: true
    },
    {
      name: 'Abbonamento',
      price: siteConfig.pricing.subscription,
      period: 'al mese',
      description: 'La soluzione più conveniente per i veri appassionati',
      features: [
        'Accesso illimitato',
        'Priorità prenotazioni',
        'Eventi esclusivi',
        'Sconto su consumazioni'
      ],
      icon: Star,
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-gray-800">
      <div className="section-padding container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tariffe
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Quote e ingressi destinati esclusivamente ai membri del gruppo privato
          </p>
          <div className="inline-flex items-center space-x-2 bg-lime-500/10 border border-lime-500/20 rounded-full px-4 py-2">
            <span className="text-sm text-lime-400 font-medium">
              💰 Cassetta onestà per snack e bevande
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                                className="card relative overflow-hidden"
              >

                
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-lime-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}€
                      </span>
                      <span className="text-gray-400">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-lime-500 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <button 
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                        plan.popular
                          ? 'btn-primary'
                          : 'btn-secondary'
                      }`}
                    >
                      Soon
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            * I prezzi sono solo indicativi per i membri del gruppo privato<br/>
            Consumazioni e snack tramite cassetta onestà
          </p>
        </motion.div>
      </div>
    </section>
  )
} 