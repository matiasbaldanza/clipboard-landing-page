import Image from 'next/image'
import { Bai_Jamjuree } from 'next/font/google'

// Components
import ActionButton from '../components/ActionButton'

const baiJamjuree = Bai_Jamjuree({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'] 
})

export default function Home() {
  return (
    <div className={`${baiJamjuree.className} min-h-screen bg-background text-color-text bg-[url('/img/bg-header-mobile.png')] bg-top bg-no-repeat bg-contain`}>
      <div className='container flex flex-col items-center w-full px-8 text-center'>
        <main className='flex flex-col items-center pt-[125px]'>
          <h1 className='h-0 opacity-0'>Clipboard</h1>
          <Image src='/img/logo.svg' height={125} width={125} alt='Clipboard logo' />
          <div className='mb-8'>
            <h2>A history of everything you copy</h2>
            <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
          </div>
          <div className='flex flex-col justify-center w-full gap-6 sm:flex-row'>
            <ActionButton color='primary'>
              Download for iOS
            </ActionButton>
            <ActionButton color='secondary'>
              Download for Mac
            </ActionButton>
          </div>
        </main>
      </div>
    </div>
  )
}
