'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  // Fallback image URL if the main image fails to load
  const fallbackImage = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1920&auto=format&fit=crop";
  
  return (
    <div className="bg-white min-h-screen flex items-center">
      <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse-slow"
          />
        </div>

        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-slide-up">
              <div className="hidden sm:mb-8 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 smooth-transition hover:scale-105">
                  How to use this AI interview mocker{' '}
                  <a href="/how-it-works" className="font-semibold text-indigo-600 hover:text-indigo-500 smooth-transition">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true" className="ml-1 animate-pulse-slow">→</span>
                  </a>
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Your AI-Powered Interview Coach
              </h1>
              <p className="text-lg leading-8 text-gray-600 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                Practice interviews with our AI, get instant feedback, and improve your skills.
              </p>
              <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <a
                  href="/dashboard"
                  className="rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/how-it-works"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-md hover:shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative animate-slide-up overflow-hidden rounded-xl shadow-2xl" style={{ animationDelay: '0.5s' }}>
              <div className="aspect-[4/3] relative">
                <Image
                  src={imageError ? fallbackImage : '/images/hero-interview.webp'}
                  alt="AI Interview Platform"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  onError={() => setImageError(true)}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full blur-xl opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full blur-xl opacity-50" />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(24% 0%, 100% 0%, 76% 100%, 0% 100%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}