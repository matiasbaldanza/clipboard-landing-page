interface ActionButtonProps extends React.ComponentProps<'button'> {
  color: 'primary' | 'secondary';
  children: React.ReactNode;
}

function ActionButton({ color, children }: ActionButtonProps) {
  const defaultStyles = `w-full sm:w-auto sm:px-8 p-3 text-lg text-white border-b-4 rounded-full bg-${color} border-b-black/25 active:border-b-transparent active:translate-y-[2px] transition duration-150 shadow-lg shadow-${color}/25 active:shadow-xs active:shadow-${color}/10 hover:bg-${color}/95 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-${color}/25`

  return <button className={defaultStyles}>
  {children}
</button>
}

export default ActionButton;
