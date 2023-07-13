import Image from 'next/image'
import fswLogo from '../assets/fsw-trips-logo.svg'

export function Footer() {
  return (
    <footer className="bg-light-purple">
      <div className="container mx-auto p-5 flex flex-col items-center gap-1.5">
        <Image src={fswLogo} alt="FSW Trips" />

        <p className="text-sm font-medium text-dark-purple">
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
