import './globals.css'

export const metadata = {
  title: 'Priston Boss Timer',
  description: 'Horários e alertas de bosses do Priston Tale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  )
}
