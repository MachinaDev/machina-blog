import siteMetadata from '@/data/siteMetadata'
import ContactLink from '@/components/ContactLink'
import { PageSEO } from '@/components/SEO'

const Contact = () => {
  return (
    <>
      <PageSEO
        title={`Contact - ${siteMetadata.author}`}
        description="Tous les moyens de me contacter"
      />
      <div className="mx-auto max-w-3xl overflow-hidden">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Contact
        </h1>
        <div className="pt-10 pb-8">
          <ul className="font-semi-bold flex flex-col space-y-4">
            <ContactLink
              href="https://www.linkedin.com/in/maxime-noel-machina/"
              title="linkedin"
              icon="Maxime_N"
            />
            <ContactLink href="https://github.com/MachinaDev" title="github" icon="MachinaDev" />
            <ContactLink
              href="https://twitter.com/Machina_Dev"
              title="twitter"
              icon="Machina_Dev"
            />
            <ContactLink href="mailto:contact@machina-dev.com" title="machina-dev" icon="contact" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
