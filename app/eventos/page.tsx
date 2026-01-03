'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WeekendEvents from '../components/WeekendEvents'
import AncientsFloor1 from '../components/AncientsFloor1'
import AncientsFloor2 from '../components/AncientsFloor2'
import AncientsFloor3 from '../components/AncientsFloor3'
import AccordionSection from '../components/AccordionSection'

export default function EventosPage() {
  const [openFloor, setOpenFloor] = useState<
    'floor1' | 'floor2' | 'floor3' | null
  >('floor1') // começa com 1º andar aberto

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
      <div className="min-h-screen bg-black/70 flex flex-col">
        <div className="flex-1 max-w-7xl mx-auto px-6 py-10 space-y-16">

          <WeekendEvents />

          {/* CALABOUÇO DOS ANCIÕES */}
          <AccordionSection
            title="Calabouço dos Anciões – 1º Andar"
            subtitle="Disponível para jogadores nível 1–109"
            isOpen={openFloor === 'floor1'}
            onToggle={() =>
              setOpenFloor(openFloor === 'floor1' ? null : 'floor1')
            }
          >
            <AncientsFloor1 />
          </AccordionSection>

          <AccordionSection
            title="Calabouço dos Anciões – 2º Andar"
            subtitle="Recomendado para níveis mais avançados"
            isOpen={openFloor === 'floor2'}
            onToggle={() =>
              setOpenFloor(openFloor === 'floor2' ? null : 'floor2')
            }
          >
            <AncientsFloor2 />
          </AccordionSection>

          <AccordionSection
            title="Calabouço dos Anciões – 3º Andar"
            subtitle="Alto nível – dificuldade elevada"
            isOpen={openFloor === 'floor3'}
            onToggle={() =>
              setOpenFloor(openFloor === 'floor3' ? null : 'floor3')
            }
          >
            <AncientsFloor3 />
          </AccordionSection>
        </div>

        <Footer />
      </div>
    </main>
  )
}
