'use client'

import { motion } from 'framer-motion'
import { Instagram, Bell, Star, Users } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function InstagramBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-orange-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.1),transparent_50%)]" />
      
      <div className="section-padding container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main heading */}
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mr-4"
            >
              <Instagram className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Seguici su Instagram!
              </h2>
              <p className="text-lg text-purple-300 font-medium">
                @croc0hub
              </p>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Rimani aggiornato su eventi, novità del club e momenti speciali della nostra community!
          </motion.p>

          {/* Features grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <Bell className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Aggiornamenti Live</h3>
              <p className="text-gray-400 text-sm">Novità, eventi e aperture straordinarie in tempo reale</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-pink-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <Users className="w-8 h-8 text-pink-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-400 text-sm">Foto dei membri, tornei e momenti divertenti del club</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <Star className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Anteprime</h3>
              <p className="text-gray-400 text-sm">Nuove attrezzature, giochi e miglioramenti in arrivo</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-lg">Seguici ora!</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-2xl"
              >
                →
              </motion.div>
            </a>
          </motion.div>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mt-6"
          >
            Non perdere nessuna novità dal CROCO HUB! 🐊🎮
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-500/10 rounded-full blur-xl animate-pulse delay-500" />
    </section>
  )
}

