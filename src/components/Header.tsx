'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Menu } from 'lucide-react'

import fswLogo from '../assets/fsw-trips-logo.svg'
import userIcon from '../assets/user-icon.svg'

export function Header() {
  const { data, status } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (status === 'loading') return null

  function handleSignIn() {
    signIn()
  }

  function handleSignOut() {
    setIsMenuOpen(false)
    signOut()
  }

  return (
    <header className="container mx-auto h-20 flex items-center justify-between px-5">
      <Link href="/">
        <Image src={fswLogo} alt="FSW Trips" />
      </Link>

      {status === 'unauthenticated' ? (
        <button onClick={handleSignIn} className="text-purple font-semibold">
          Entrar
        </button>
      ) : (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative flex items-center gap-5 py-3 pl-4 pr-3 rounded-full border border-light-gray"
        >
          <Menu size={24} />

          {data?.user ? (
            <Image
              src={data.user.image ?? ''}
              alt={data.user.name ?? ''}
              width={24}
              height={24}
              className="h-6 w-6 rounded-full"
            />
          ) : (
            <Image width={24} height={24} src={userIcon} alt="" />
          )}

          {isMenuOpen && (
            <div className="absolute h-full w-full top-full right-0 mt-3 flex items-center justify-center bg-white rounded-full border border-light-gray">
              <span
                onClick={handleSignOut}
                className="text-red flex-1 cursor-pointer font-semibold"
              >
                Sair
              </span>
            </div>
          )}
        </button>
      )}
    </header>
  )
}
