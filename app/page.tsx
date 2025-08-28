import React from 'react'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Pricing } from '@/components/Pricing'
import { AvailabilityTeaser } from '@/components/AvailabilityTeaser'
import { InstagramBanner } from '@/components/InstagramBanner'
import { RulesPreview } from '@/components/RulesPreview'
import { InterestForm } from '@/components/InterestForm'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <AvailabilityTeaser />
      <InstagramBanner />
      <RulesPreview />
      <InterestForm />
    </>
  )
} 