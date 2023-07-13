import Image from 'next/image'
import { Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

// Components
import Icon from '../components/Icon'
import SectionCTA from '../components/SectionCTA'
import SectionHero from '../components/SectionHero'
import SectionTestimonialLogos from '../components/SectionTestimonialLogos'
import Footer from '../components/Footer'

const baiJamjuree = BaiJamjuree({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function Home () {
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

        <section className='flex flex-col items-center gap-8'>
          <div>
            <h3>Access Clipboard Anywhere</h3>
            <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
          </div>
          <Image src='/img/image-devices.png' width={500} height={500} alt='Multiple devices' />
        </section>

        <section className='flex flex-col items-center gap-12'>
          <div>
            <h3>Supercharge your workflow</h3>
            <p>We’ve got the tools to boost your productivity..</p>
          </div>
          <div className='flex flex-col gap-8 md:flex-row'>
            <div className='flex flex-col items-center gap-2 sm:flex-1'>
              <Icon
                href='/img/feature-icons.svg'
                id='icon-blacklist' height={36} width={36} className='mb-4 text-color-text'
              />
              <h4>Create blacklists</h4>
              <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
            </div>
            <div className='flex flex-col items-center gap-2 sm:flex-1'>
              <Icon
                href='/img/feature-icons.svg'
                id='icon-text' height={36} width={36} className='mb-4 text-color-text'
              />
              <h4>Plain text snippets</h4>
              <p>Remove unwanted formatting from copied text for a consistent look.</p>
            </div>
            <div className='flex flex-col items-center gap-2 sm:flex-1'>
              <Icon
                href='/img/feature-icons.svg'
                id='icon-preview' height={36} width={36} className='mb-4 text-color-text'
              />
              <h4>Sneak preview</h4>
              <p>Quick preview of all snippets on your Clipboard for easy access.</p>
            </div>
          </div>
        </section>

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
