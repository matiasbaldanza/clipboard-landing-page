import Image from 'next/image'

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

function SectionTestimonialLogos (): JSX.Element {
  return (
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
  )
}

export default SectionTestimonialLogos
