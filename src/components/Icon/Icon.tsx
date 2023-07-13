import type { SVGProps } from 'react'

function Icon ({ href, id, ...props }:
SVGProps<SVGSVGElement> & { href: string, id: string }): JSX.Element {
  return (
    <svg {...props}>
      <use href={`${href}#${id}`} />
    </svg>
  )
}

export default Icon
