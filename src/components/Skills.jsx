const skillGroups = [
  {
    title: 'Cloud Infrastructure',
    items: 'AWS, Terraform, Jenkins',
  },
  {
    title: 'Data Infrastructure',
    items: 'Oracle, MS SQL Server',
  },
  {
    title: 'Software Development',
    items: 'Python, Bash, Java, React.js',
  },
  {
    title: 'Other Strengths',
    items: 'Problem Solving, Taking Ownership and Responsibility',
  },
]

function Skills() {
  return (
    <section className="section" aria-labelledby="skills-title">
      <h2 className="section-title" id="skills-title">
        Skills
      </h2>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.items}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
