import { education, exploring, foundations } from '../data/skills.js';
import SectionHeading from './SectionHeading.jsx';

export default function About({ copy }) {
  return (
    <section className="about-section page-width" id="about">
      <div className="about-copy">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={<>{copy.title}<br />{copy.titleAccent && <span>{copy.titleAccent}</span>}</>}
        />
        <p>{copy.intro}</p>
        <p className="about-secondary">{copy.background}</p>
        <div className="about-values">
          {copy.values.map((value) => <span key={value}>{value}</span>)}
        </div>
      </div>
      <div className="about-details">
        <div className="education-list">
          {education.map((item) => {
            const translated = copy.education[item.id];
            return (
              <article className="education-item" key={item.id}>
                <span className="mono-label">{translated.label}</span>
                <h3>{translated.title}</h3>
                <p>{translated.detail}</p>
              </article>
            );
          })}
        </div>
        <div className="skills-block">
          <h3 className="mono-label">{copy.foundations}</h3>
          <div className="skill-chips">
            {foundations.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className="skills-block">
          <h3 className="mono-label">{copy.exploring}</h3>
          <div className="skill-chips">
            {exploring.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <p className="language-note">{copy.languages}</p>
      </div>
    </section>
  );
}
