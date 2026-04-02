import linkedinLogo from '../images/Linkedin.png'

function Contact() {
  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2 className="section-title" id="contact-title">
        Contact
      </h2>

      <div className="contact-card">
        <div className="contact-copy">
          <h3 className="contact-heading">Let&apos;s connect</h3>
          <p className="contact-text">
            Reach out by email or connect with me on LinkedIn.
          </p>
        </div>

        <div className="contact-actions">
          <a
            className="contact-linkedin"
            href="https://www.linkedin.com/in/jason-simpson-429426244"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <span className="contact-linkedin-badge">
              <img
                className="contact-linkedin-logo"
                src={linkedinLogo}
                alt="LinkedIn logo"
              />
            </span>
            <span>LinkedIn</span>
          </a>

          <a className="contact-email-button" href="mailto:jasonsimpson09@gmail.com">
            jasonsimpson09@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
