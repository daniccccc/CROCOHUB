'use client'

import { AlertTriangle } from 'lucide-react'
import { motion } from 'framer-motion'

export function PrivateClubBanner() {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-lime-600 to-lime-500 text-gray-900"
    >
      <div className="section-padding container-width">
        <div className="flex items-center justify-center py-2 text-sm font-medium">
          <AlertTriangle className="w-4 h-4 mr-2" />
          <span>Club Privato - Accesso solo su invito</span>
        </div>
      </div>
    </motion.div>
  )
} 