// Components
import Icon from '../Icon'

function SectionFeatures (): JSX.Element {
  return (
    <section className='flex flex-col items-center gap-12'>
      <div>
        <h3>Supercharge your workflow</h3>
        <p>We’ve got the tools to boost your productivity..</p>
      </div>
      <div className='flex flex-col gap-8 md:flex-row'>
        <div className='flex flex-col items-center gap-2 sm:flex-1'>
          <Icon
            href='/img/feature-icons.svg'
            id='icon-blacklist' height={36} width={36} className='mb-4 text-color-text'
          />
          <h4>Create blacklists</h4>
          <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </div>
        <div className='flex flex-col items-center gap-2 sm:flex-1'>
          <Icon
            href='/img/feature-icons.svg'
            id='icon-text' height={36} width={36} className='mb-4 text-color-text'
          />
          <h4>Plain text snippets</h4>
          <p>Remove unwanted formatting from copied text for a consistent look.</p>
        </div>
        <div className='flex flex-col items-center gap-2 sm:flex-1'>
          <Icon
            href='/img/feature-icons.svg'
            id='icon-preview' height={36} width={36} className='mb-4 text-color-text'
          />
          <h4>Sneak preview</h4>
          <p>Quick preview of all snippets on your Clipboard for easy access.</p>
        </div>
      </div>
    </section>
  )
}

export default SectionFeatures
