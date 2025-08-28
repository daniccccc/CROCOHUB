'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

export function Gallery() {
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
            I Nostri Spazi
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Scopri l'ambiente accogliente e moderno del CROCO HUB
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.gallery.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 relative">
                {/* Placeholder image */}
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${image.placeholder})`,
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.alt}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-lime-500/50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 transform group-hover:rotate-180" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            📸 Immagini di esempio - Gli spazi reali potrebbero variare
          </p>
        </motion.div>
      </div>
    </section>
  )
} 