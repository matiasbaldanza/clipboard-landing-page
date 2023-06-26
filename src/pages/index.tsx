import Image from 'next/image'
import { Bai_Jamjuree } from 'next/font/google'

const baiJamjuree = Bai_Jamjuree({ 
  weight: ['400', '600'],
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
          <button className='w-full p-3 mt-6 text-lg text-white border-b-4 rounded-full bg-primary border-b-black/25 active:border-b-transparent active:translate-y-[2px] transition duration-150 shadow-lg shadow-primary/25 active:shadow-xs active:shadow-primary/10 hover:bg-primary/95 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/25'>
            Download for iOS
          </button>
          <button className='w-full p-3 mt-6 text-lg text-white border-b-4 rounded-full bg-secondary border-b-black/25 active:border-b-transparent active:translate-y-[2px] transition duration-150 shadow-lg shadow-secondary/25 active:shadow-xs active:shadow-secondary/10 hover:bg-secondary/95 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-secondary/25'>
            Download for Mac
          </button>
        </main>
      </div>
    </div>
  )
}
