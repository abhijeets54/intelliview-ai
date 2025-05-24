'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="bg-white min-h-screen flex items-center">
      <div className="relative isolate px-6 pt-14 lg:px-8 w-full">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-float">
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
            <div className="text-left animate-slide-in">
              <div className="hidden sm:mb-8 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 smooth-transition hover:scale-105">
                  How to use this AI interview mocker{' '}
                  <a href="/how-it-works" className="font-semibold text-indigo-600 hover:text-indigo-500 smooth-transition">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Read more <span aria-hidden="true" className="ml-1 animate-pulse-slow">→</span>
                  </a>
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                Your AI-Powered Interview Coach
              </h1>
              <p className="text-lg leading-8 text-gray-600 mb-8 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                Practice interviews with our AI, get instant feedback, and improve your skills.
              </p>
              <div className="flex gap-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <a
                  href="/dashboard"
                  className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 smooth-transition hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/how-it-works"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 smooth-transition hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <img
                src="/hero-image.webp"
                alt="AI Interview"
                className="w-full h-auto rounded-lg shadow-2xl hover-scale"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl animate-float"
          style={{ animationDelay: '0.3s' }}
        >
          <div
            style={{
              clipPath:
                'polygon(24% 0%, 100% 0%, 76% 100%, 0% 100%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9089fc] to-[#ff80b5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse-slow"
          />
        </div>
      </div>
    </div>
  )
}