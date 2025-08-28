'use client'

import { motion } from 'framer-motion'
import { 
  Tv, 
  Gamepad2, 
  Dice6, 
  Wifi, 
  Coffee, 
  Users 
} from 'lucide-react'
import { siteConfig } from '@/config/site'

const iconMap = {
  'tv': Tv,
  'table-tennis': Gamepad2,
  'dice-6': Dice6,
  'wifi': Wifi,
  'coffee': Coffee,
  'users': Users,
}

export function Features() {
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
            Cosa Trovi da Noi
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Spazi attrezzati e pensati per ogni tipo di divertimento. 
            Dal gaming competitivo al relax più totale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Users
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-lime-500/10 flex items-center justify-center group-hover:bg-lime-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-lime-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}