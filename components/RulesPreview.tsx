'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Clock, 
  Volume2, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react'
import { siteConfig } from '@/config/site'

const iconMap = {
  'Accesso solo su prenotazione': Shield,
  'Orari a slot': Clock,
  'Rispetto del vicinato': Volume2,
  'Pulizia condivisa': Sparkles,
}

export function RulesPreview() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="section-padding container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Regole Essenziali
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Poche regole semplici per garantire un ambiente piacevole per tutti
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {siteConfig.rules.map((rule, index) => {
            const IconComponent = iconMap[rule.title as keyof typeof iconMap] || Shield
            
            return (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-lime-500/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-6 h-6 text-lime-500" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {rule.title}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {rule.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Regolamento Completo
            </h3>
            <p className="text-gray-400 mb-6">
              Consulta il regolamento completo per tutti i dettagli su orari, 
              utilizzo degli spazi e comportamenti da tenere.
            </p>
            
            <Link
              href="/regolamento"
              className="btn-primary px-6 py-3 inline-flex items-center group"
            >
              Leggi il Regolamento
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>


      </div>
    </section>
  )
}