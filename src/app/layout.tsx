import './globals.css'
import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'

import { NextAuthProvider } from '@/providers/auth'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'FSW Trips',
  description: 'Sistema de reserva de viagens!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-gray bg-white`}>
        <NextAuthProvider>
          <Header />

          {children}

          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
