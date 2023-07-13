import Image from 'next/image'

function SectionMobile () {
  return (
    <section className='flex flex-col items-center gap-8'>
      <div>
        <h3>Access Clipboard Anywhere</h3>
        <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
      </div>
      <Image src='/img/image-devices.png' width={500} height={500} alt='Multiple devices' />
    </section>
  )
}

export default SectionMobile
