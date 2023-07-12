import Image from 'next/image'

// Components
import NavMenu from '../NavMenu'
import SocialLinks from '../SocialLinks'

function Footer () {
  return (
    <footer className='py-16 m-auto mt-32 bg-background min-h-7xl'>
      <div className='flex flex-col items-center gap-12 px-8 m-auto md:flex-row md:justify-between md:max-w-screen-2xl'>
        <Image src='/img/logo.svg' height={72} width={72} alt='Clipboard logo' />
        <NavMenu />
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer
