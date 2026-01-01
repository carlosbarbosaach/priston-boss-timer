'use client'

import Header from './components/Header'
import Clock from './components/Clock'
import NextBoss from './components/NextBoss'
import BossGrid from './components/BossGrid'
import Footer from './components/Footer'
import { useFiveMinuteAlert } from './hooks/useFiveMinuteAlert'

export default function Home() {
  // 🔔 ALERTA AUTOMÁTICO 5 MIN ANTES
  useFiveMinuteAlert()

  return (
    <main
      className="min-h-screen text-zinc-100 flex flex-col"
      style={{
        backgroundImage: "url('/bg-home.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* OVERLAY ESCURO PARA LEGIBILIDADE */}
      <div className="min-h-screen bg-black/70 flex flex-col">
        <div className="flex-1">
          <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
            <Header />
            <Clock />
            <NextBoss />
            <BossGrid />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  )
}
