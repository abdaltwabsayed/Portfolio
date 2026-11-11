import { coreSkills } from '../data/skills.js';

export default function Skills({ copy }) {
  return (
    <section className="skills-section page-width">
      <span className="skills-star text-coral" aria-hidden="true">✳</span>
      <p className="mono-label">{copy.eyebrow}</p>
      <h2>{copy.title}</h2>
      <p>{copy.description}</p>
      <div className="skills-list">
        {coreSkills.map((skill) => <span key={skill}>{skill}</span>)}
      </div>
    </section>
  );
}
