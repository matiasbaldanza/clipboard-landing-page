import Image from 'next/image'

function SectionHero (): JSX.Element {
  return (
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
  )
}

export default SectionHero
