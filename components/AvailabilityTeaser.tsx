'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

export function AvailabilityTeaser() {
  return (
    <section className="py-8 md:py-16 bg-gray-900">
      <div className="section-padding container-width">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Orari di Apertura
            </h2>
            <p className="text-lg md:text-xl text-gray-400">
              Il tuo hub sociale ti aspetta! Prenotazioni disponibili a progetto approvato.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-10 max-w-5xl mx-auto">
            {siteConfig.schedule.hours.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="flex flex-col items-center space-y-3 md:space-y-4">
                  {day.time === "Chiuso" ? (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-lime-500/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 md:w-8 md:h-8 text-lime-500" />
                    </div>
                  )}
                  
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {day.day}
                  </h3>
                  
                  <p className={`text-base md:text-lg font-mono ${day.time === "Chiuso" ? "text-red-400" : "text-lime-400"}`}>
                    {day.time}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{day.time === "Chiuso" ? "Riposo" : "Aperto"}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>



          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-6 text-center"
          >
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-400 text-sm font-medium">
                💡 Questo sito serve a presentare il progetto e raccogliere consensi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 