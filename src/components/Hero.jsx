import cartoonJason from '../images/Cartoon_Jason.png'

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-eyebrow">Jason Simpson</p>
          <h1 className="hero-title" id="hero-title">
            Cloud/Data Infrastructure &amp; Automation Engineer
          </h1>
          <p className="hero-description">
            Data Infrastructure Engineer with experience in Oracle DBMS and cloud
            infrastructure with AWS, Terraform, and CI/CD pipelines utilising tools such as
            Jenkins. Strong focus on reliability, scalability, and improving operational
            efficiency through automation. Interested in building and supporting large
            systems and backend services.
          </p>
          <a className="hero-contact-button" href="#contact">
            Contact
          </a>
        </div>

        <div className="hero-portrait">
          <div className="hero-portrait-ring">
            <img
              className="hero-portrait-image"
              src={cartoonJason}
              alt="Cartoon portrait of Jason Simpson"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
