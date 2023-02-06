const ContactLink = ({ title, href, icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <li className="duration-250 mr-2 inline cursor-pointer text-3xl transition-colors ease-in hover:text-gray-400 sm:text-2xl md:text-5xl lg:text-6xl">
        <div className="flex">
          <span className="duration-250 transition-colors ease-in hover:text-primary-500 dark:hover:text-primary-400">
            {icon}
          </span>
          <span className="font-light opacity-50">@</span>
          <p className="duration-250 font-mono transition-colors ease-in hover:text-gray-500 ">
            {title}
          </p>
        </div>
      </li>
    </a>
  )
}

export default ContactLink
