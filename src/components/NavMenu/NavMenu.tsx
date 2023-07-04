import Link from "next/link";

const menuItems = [
  {
    title: 'FAQs',
    href: 'faqs'
  },
  {
    title: 'Contact Us',
    href: 'contact-us'
  },
  {
    title: 'Privacy Policy',
    href: 'privacy'
  },
  {
    title: 'Press Kit',
    href: 'press-kit'
  },
  {
    title: 'Install Guide',
    href: 'install-guide'
  }
]

function NavMenu() {
  return (
    <nav className='flex flex-col flex-wrap items-center gap-6 text-lg text-color-title md:flex-row md:text-base md:gap-3'>
    {
      menuItems.map(({title, href}) => (
        <Link 
          key={href}
          href={href}
          className='md:w-1/4 hover:text-primary'
        >
          {title}
        </Link>
      ))
    }
  </nav>
  )
}

export default NavMenu;
