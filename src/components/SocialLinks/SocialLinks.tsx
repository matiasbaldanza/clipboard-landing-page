import Image from 'next/image'
import {  iconFacebook,
          iconInstagram,
          iconTwitter,
          iconThreads } from '../icons/icons.tsx'

const socialLinks = [
  { 
    icon: iconFacebook,
    alt: 'Facebook',
    href: 'https://www.facebook.com/clipboard-app'
  },
  {
    icon: iconInstagram,
    alt: 'Twitter',
    href: 'https://www.twitter.com/clipboard-app'
  },
  {
    icon: iconTwitter,
    alt: 'Instagram',
    href: 'https://www.instagram.com/clipboard-app'
  },
  {
    icon: iconThreads,
    alt: 'Threads',
    href: 'https://threads.net/clipboard-app'
  }
]

function SocialLinks() {
  return (
    <div className='flex gap-12'>
      {
        socialLinks.map(({icon, alt, href}) => (
          <a
            key={alt}
            href={href}
            target='_blank'
          >
            {icon}
          </a>
        ))}
    </div>
    )
}

export default SocialLinks;
