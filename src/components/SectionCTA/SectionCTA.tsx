import ActionButton from '../ActionButton'

interface SectionCTAProps {
  title: string
  description: string
}

function SectionCTA ({ title, description }: SectionCTAProps): JSX.Element {
  return (
    <section className='flex flex-col items-center gap-10'>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <DownloadButtons />
    </section>
  )
}

function DownloadButtons (): JSX.Element {
  return (
    <div className='flex flex-col justify-center w-full gap-6 sm:flex-row'>
      <ActionButton color='primary'>
        Download for iOS
      </ActionButton>
      <ActionButton color='secondary'>
        Download for Mac
      </ActionButton>
    </div>
  )
}

export default SectionCTA
