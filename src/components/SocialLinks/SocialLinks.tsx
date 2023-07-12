import Image from 'next/image'
import SocialIcon from '../SocialIcon'

const socialLinks = [
  {
    id: 'facebook',
    alt: 'Facebook',
    href: 'https://www.facebook.com/clipboard-app'
  },
  {
    id: 'instagram',
    alt: 'Twitter',
    href: 'https://www.twitter.com/clipboard-app'
  },
  {
    id: 'twitter',
    alt: 'Instagram',
    href: 'https://www.instagram.com/clipboard-app'
  },
  {
    id: 'threads',
    alt: 'Threads',
    href: 'https://threads.net/clipboard-app'
  }
]

function SocialLinks () {
  return (
    <div className='flex gap-12'>
      {
        socialLinks.map(({ id, alt, href }) => (
          <a
            key={alt}
            href={href}
            target='_blank'
            className='text-color-title hover:text-primary' rel='noreferrer'
          >
            <SocialIcon id={id} width={24} height={24} />
          </a>
        ))
}
    </div>
  )
}

export default SocialLinks
