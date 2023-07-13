import Image from 'next/image'
import { Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

// Components
import SectionCTA from '../components/SectionCTA'
import SectionHero from '../components/SectionHero'
import SectionTestimonialLogos from '../components/SectionTestimonialLogos'
import SectionMobile from '../components/SectionMobile'
import SectionFeatures from '../components/SectionFeatures'
import Footer from '../components/Footer'

const baiJamjuree = BaiJamjuree({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function Home (): JSX.Element {
  return (
    // Header background image
    <div className={`${baiJamjuree.className} min-h-screen bg-neutral-50 text-color-text bg-[url('/img/bg-header-mobile.png')] md:bg-[url('/img/bg-header-desktop.png')] bg-top bg-no-repeat bg-contain`}>

      {/* container */}
      <main className='container flex flex-col items-center gap-32 px-8 m-auto text-center md:max-w-screen-xl'>

        <header className='mt-32'>
          <h1 className='h-0 opacity-0'>Clipboard</h1>
          <Image src='/img/logo.svg' height={125} width={125} alt='Clipboard logo' />
        </header>

        <SectionCTA
          title='A history of everything you copy'
          description='Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.'
        />

        <SectionHero />
        <SectionMobile />
        <SectionFeatures />
        <SectionTestimonialLogos />

        <SectionCTA
          title='Clipboard for iOS and Mac OS'
          description='Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.'
        />

      </main>
      <Footer />
    </div>
  )
}
