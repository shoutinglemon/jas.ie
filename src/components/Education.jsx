import maynoothLogo from '../images/Maynooth.png'

const educationItems = [
  {
    award: 'BSc Computer Science',
    institution: 'Maynooth University',
    year: '2020-2024',
  },
]

function Education() {
  return (
    <section className="section" aria-labelledby="education-title">
      <h2 className="section-title" id="education-title">
        Education
      </h2>

      <div className="education-list">
        {educationItems.map((item) => (
          <article className="education-item" key={`${item.award}-${item.year}`}>
            <div className="education-meta">{item.year}</div>
            <div className="education-content">
              <img
                className="education-logo"
                src={maynoothLogo}
                alt="Maynooth University logo"
              />
              <div>
              <h3 className="education-award">{item.award}</h3>
                <p className="education-year">{item.institution}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
