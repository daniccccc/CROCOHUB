'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Users } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function Hero() {
  const scrollToInterestForm = () => {
    const element = document.getElementById('interest-form')
    if (element) {
      // Aggiunge un offset per compensare la navbar sticky
      const navbarHeight = 80 // Altezza approssimativa della navbar
      const elementPosition = element.offsetTop - navbarHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/home.png)'
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 section-padding container-width text-center pt-8 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo e payoff */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-lime-400 font-bold drop-shadow-lg">
                {siteConfig.tagline}
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-medium">Arceto, Via Gadda 4/1</span>
              </div>
            </motion.div>
          </div>

          {/* Descrizione */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed space-y-4"
          >
            <p>
              Vuoi guardare la partita insieme ai tuoi amici? Fuori piove e non sai cosa fare?
            </p>
            <p className="text-xl text-white font-semibold">
              CROCO HUB è qui per te!
            </p>
            <p>
              Un hub dove riunirsi per sfuggire alla routine quotidiana insieme agli amici: 
              giochi di società, carte, PlayStation5, Nintendo Switch, ping pong, film e partite. 
              Tutto accompagnato dal nostro minibar con prezzi accessibili.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-4 justify-center items-center max-w-md mx-auto"
          >
            <button
              onClick={scrollToInterestForm}
              className="btn-primary px-8 py-4 text-lg font-semibold w-full sm:w-auto flex items-center justify-center group"
            >
              <Users className="w-5 h-5 mr-2" />
              Partecipa al Progetto
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-sm text-gray-400 text-center">
              💡 Presenta il tuo interesse e aiutaci a creare il miglior hub mai visto!<br/>
              Le prenotazioni saranno disponibili a progetto approvato.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-lime-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 