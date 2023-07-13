import Image from 'next/image'
import { Bai_Jamjuree as BaiJamjuree } from 'next/font/google'

// Components
import ActionButton from '../components/ActionButton'
import Icon from '../components/Icon'
import SectionCTA from '../components/SectionCTA'
import Footer from '../components/Footer'

const baiJamjuree = BaiJamjuree({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

const testimonialLogos = [
  {
    url: '/img/logo-google.png',
    alt: 'Google logo'
  },
  {
    url: '/img/logo-ibm.png',
    alt: 'IBM logo'
  },
  {
    url: '/img/logo-microsoft.png',
    alt: 'Microsoft logo'
  },
  {
    url: '/img/logo-hp.png',
    alt: 'HP logo'
  },
  {
    url: '/img/logo-vector-graphics.png',
    alt: 'Vector Graphics logo'
  }
]

export default function Home () {
  return (
    // Fondo
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

        <section className='flex flex-col items-center gap-8'>
          <div>
            <h3>Keep track of your snippets</h3>
            <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
          </div>
          <div className='flex flex-col items-center w-full gap-8 md:flex-row'>
            <div className='w-full h-full md:relative md:basis-1/2 md:h-[30rem]'>
              <Image
                className='h-full md:object-cover md:absolute md:top-0 md:right-0 md:overflow-x-visible md:-translate-x-[12rem] lg:-translate-x-[9rem] xl:-translate-x-24 transition-all duration-75'
                src='/img/image-computer.png'
                width={752}
                height={572}
                alt='Computer illustration'
              />
            </div>
            <div className='flex flex-col gap-8 md:text-left md:basis-2/3 md:pb-24'>
              <div className='flex flex-col gap-2'>
                <h4>Quick Search</h4>
                <p>Easily search your snippets by content, category, web address, application, and more.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4>iCloud Sync</h4>
                <p>Instantly saves and syncs snippets across all your devices.</p>
              </div>
              <div className='flex flex-col gap-2'>
                <h4>Complete History</h4>
                <p>Retrieve any snippets from the first moment you started using the app.</p>
              </div>
            </div>
          </div>
        </section>

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
        <section>
          <div className='grid gap-12 grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] items-center justify-items-center md:max-w-[900px] md:max-h-full'>
            {
              testimonialLogos.map(({ url, alt }) => (
                <div
                  key={alt}
                  className='relative w-32 h-12 md:w-[6.5rem]'
                >
                  <Image
                    className='object-contain'
                    src={url}
                    alt={alt}
                    fill
                  />
                </div>
              ))
            }
          </div>
        </section>

        <SectionCTA
          title='Clipboard for iOS and Mac OS'
          description='Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.'
        />

      </main>
      <Footer />
    </div>
  )
}
