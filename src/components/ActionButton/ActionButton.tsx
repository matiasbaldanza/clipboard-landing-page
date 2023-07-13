import clsx from 'clsx'

interface ActionButtonProps extends React.ComponentProps<'button'> {
  color: 'primary' | 'secondary'
  children: React.ReactNode
}

function ActionButton ({ color, children }: ActionButtonProps) {
  const defaultStyles = 'w-full sm:w-auto sm:px-8 p-3 text-lg text-white border-b-4 rounded-full border-b-black/25 active:border-b-transparent active:translate-y-[2px] transition duration-150 shadow-lg  active:shadow-xs hover:translate-y-[-2px] hover:shadow-xl'

  const colorVariants = {
    primary: 'bg-primary shadow-primary/25 active:shadow-primary/10 hover:bg-primary/95 hover:shadow-primary/25',
    secondary: 'bg-secondary shadow-secondary/25 active:shadow-secondary/10 hover:bg-secondary/95 hover:shadow-secondary/25'
  }

  return (
    <button className={clsx(defaultStyles, colorVariants[color])}>
      {children}
    </button>
  )
}

export default ActionButton
