const experienceItems = [
  {
    company: 'Workhuman',
    role: 'Data Infrastructure Engineer',
    period: 'July 2024 - Present',
    highlights: [
      'Designed and deployed AWS ECS-backed Jenkins infrastructure using Terraform, supporting CI/CD workflows for Epicor across development, pre-production, and production environments, as well as Oracle production and non-production systems. This infrastructure also supports non-prod environment database provisioning and the administration of data obfuscation processes for safely replicating production data.',
      'Developed multiple automation scripts primarily in Python and Bash. Notably built Python solutions that automate over 100 quarterly reports related to user access across internal application systems.',
      'Provide ongoing support for Oracle RDBMS infrastructure, including troubleshooting, performance tuning, and routine maintenance to ensure high availability and system reliability.',
      'Improved data infrastructure reliability and standardization by designing and implementing new database restore processes for non-production environments, resulting in more stable and consistent development workflows.',
      'Migrated legacy Jenkins MultiJob configurations to Groovy-based pipelines, improving scalability, maintainability, and long-term support for critical jobs.',
      'Participate in on-call rotations, providing out-of-hours incident response for emergency production issues and service outages',
    ],
  },
  {
    company: 'Workhuman',
    role: 'Data Infrastructure Intern',
    period: 'Jan 2023 - July 2023',
    location: 'Dublin, Ireland',
    highlights: [
      'Designed and implemented an automated solution to streamline Redshift access requests, improving efficiency and reducing manual intervention.',
      'Provided daily support for hot deploys, data access requests, and database account issues across production and non-production environments.',
      'Gained hands-on experience with AWS services including Aurora, Redshift, S3, Secrets Manager, and RDS.',
      'Collaborated with infrastructure and data engineering teams to support smooth operations and build foundational knowledge in cloud-based data systems.',
    ],
  },
  {
    company: 'Computer Science Dept. Maynooth University',
    role: 'Demonstrator - Algorithms and Data Structures',
    period: 'September 2023 - January 2024',
    location: 'Maynooth, Co. Kildare',
    highlights: [
      'Assessed and graded lab assignments, offering constructive feedback to support student learning and improve coding practices.',
      'Provided technical guidance to undergraduate students during practical lab sessions, clarifying complex concepts in algorithms, data structures, and problem-solving techniques.',
      'Facilitated an engaging learning environment by answering questions, demonstrating solutions, and encouraging best practices in programming and algorithmic thinking.',
    ],
  },
]

function Experience() {
  return (
    <section className="section" aria-labelledby="experience-title">
      <h2 className="section-title" id="experience-title">
        Experience
      </h2>

      <div className="experience-list">
        {experienceItems.map((item) => (
          <article className="experience-item" key={`${item.company}-${item.role}`}>
            <div className="experience-meta">
              <div>{item.period}</div>
              {item.location ? <div>{item.location}</div> : null}
            </div>
            <div>
              <h3 className="experience-company">{item.role}</h3>
              <p className="experience-role">{item.company}</p>
              <ul className="experience-bullets">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
