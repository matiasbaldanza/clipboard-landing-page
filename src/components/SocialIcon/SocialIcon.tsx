import type { SVGProps } from 'react'

function SocialIcon ({ id, ...props }: SVGProps<SVGSVGElement> & { id: string }): JSX.Element {
  return (
    <svg {...props}>
      <use href={`/img/social-icons.svg#${id}`} />
    </svg>
  )
}

export default SocialIcon
