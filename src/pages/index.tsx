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
    <div className={`${baiJamjuree.className} min-h-screen bg-background text-color-text bg-[url('/img/bg-header-mobile.png')] md:bg-[url('/img/bg-header-desktop.png')] bg-top bg-no-repeat bg-contain`}>
      <div className='container flex flex-col items-center px-8 m-auto text-center md:max-w-screen-2xl'>
        <main className='flex flex-col items-center pt-[125px]'>
          <h1 className='h-0 opacity-0'>Clipboard</h1>
          <Image src='/img/logo.svg' height={125} width={125} alt='Clipboard logo' />
          <div className='mt-16 mb-10'>
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

        <section className='flex flex-col items-center mt-16'>
          <div className='mb-8'>
            <h3>Keep track of your snippets</h3>
            <p>Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
          </div>
          <div className='flex flex-col items-center gap-8 md:flex-row md:gap-14'>
            <Image src='/img/image-computer.png' width={500} height={500} alt='Computer illustration'/>
            <div className='flex flex-col gap-8 md:text-left'>
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

        <section className='flex flex-col items-center mt-16'>
          <div className='mb-8'>
            <h3>Access Clipboard Anywhere</h3>
            <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
          </div>
          <Image src='/img/image-devices.png' width={500} height={500} alt='Multiple devices'/>
        </section>

        <section className='flex flex-col items-center mt-16'>
          <div className='mb-8'>
            <h3>Supercharge your workflow</h3>
            <p>We’ve got the tools to boost your productivity..</p>
          </div>
          <div className='flex flex-col gap-8 sm:flex-row'>
              <div className='flex flex-col items-center gap-2'>
                <Image src='/img/icon-blacklist.svg' height={36} width={36} alt='Blacklist icon' className='mb-4'/>
                <h4>Create blacklists</h4>
                <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Image src='/img/icon-text.svg' height={36} width={36} alt='Text icon' className='mb-4'/>
                <h4>Plain text snippets</h4>
                <p>Remove unwanted formatting from copied text for a consistent look.</p>
              </div>
              <div className='flex flex-col items-center gap-2'>
                <Image src='/img/icon-preview.svg' height={36} width={36} alt='Preview icon' className='mb-4'/>
                <h4>Sneak preview</h4>
                <p>Quick preview of all snippets on your Clipboard for easy access.</p>
              </div>
          </div>
        </section>
        <section className='mt-16'>
          <div className='flex flex-col items-center gap-12'>
            <img 
              src='/img/logo-google.png' 
              alt="Google logo" 
              className='w-32'
            />
            <img 
              src='/img/logo-ibm.png' 
              alt="IBM logo" 
              className='w-32'
            />
            <img 
              src='/img/logo-microsoft.png' 
              alt="Microsoft logo" 
              className='w-32'
            />
            <img 
              src='/img/logo-hp.png' 
              alt="HP logo" 
              className='w-32'
            />
            <img 
              src='/img/logo-vector-graphics.png' 
              alt="Vector Graphics logo" 
              className='w-32'
            />
          </div>
        </section>
      </div>
    </div>
  )
}
