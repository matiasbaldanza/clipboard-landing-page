import type { SVGProps } from "react";

function SocialIcon ({ id, ...props }: SVGProps<SVGSVGElement> & { id: string}) {
  return (
    <svg {...props}>
      <use href={`/img/social-icons.svg#${id}`} />
    </svg>  
    )
}

export default SocialIcon;
