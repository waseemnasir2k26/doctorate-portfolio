import { ExternalLink, BookOpen, FileText, Presentation } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Publications.css'

const publications = [
  {
    type: 'Journal Article',
    icon: <BookOpen size={18} />,
    title: 'Integrated Approaches to Adolescent Mental Health: A Systematic Review',
    journal: 'Journal of Adolescent Health & Wellbeing',
    year: '2025',
    status: 'Published',
  },
  {
    type: 'Journal Article',
    icon: <BookOpen size={18} />,
    title: 'Digital Interventions for Youth Mental Health: Efficacy and Engagement Patterns',
    journal: 'Child & Adolescent Mental Health',
    year: '2025',
    status: 'Published',
  },
  {
    type: 'Conference Paper',
    icon: <Presentation size={18} />,
    title: 'Peer Support Models in School-Based Mental Health Programs',
    journal: 'International Conference on Youth Mental Health',
    year: '2024',
    status: 'Presented',
  },
  {
    type: 'Book Chapter',
    icon: <FileText size={18} />,
    title: 'Cultural Considerations in Adolescent Mental Health Interventions',
    journal: 'Handbook of Youth Mental Health (ed. forthcoming)',
    year: '2026',
    status: 'In Press',
  },
  {
    type: 'Journal Article',
    icon: <BookOpen size={18} />,
    title: 'Measuring Resilience: Validating Assessment Tools for Adolescent Populations',
    journal: 'Assessment in Mental Health Practice',
    year: '2024',
    status: 'Published',
  },
]

export default function Publications() {
  const sectionRef = useScrollReveal()

  return (
    <section className="section" ref={sectionRef}>
      <div className="publications__header fade-in">
        <p className="section-label">Publications & Presentations</p>
        <h2 className="section-title">
          Contributing to the <br />
          <span className="gradient-text">Body of Knowledge</span>
        </h2>
      </div>

      <div className="publications__list">
        {publications.map((pub, i) => (
          <div
            key={i}
            className="publications__item fade-in"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="publications__item-type">
              {pub.icon}
              <span>{pub.type}</span>
            </div>
            <div className="publications__item-content">
              <h3 className="publications__item-title">{pub.title}</h3>
              <p className="publications__item-journal">
                {pub.journal} &middot; {pub.year}
              </p>
            </div>
            <div className="publications__item-status">
              <span className={`publications__status publications__status--${pub.status.toLowerCase().replace(' ', '-')}`}>
                {pub.status}
              </span>
              <button className="publications__link" aria-label="View publication">
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
