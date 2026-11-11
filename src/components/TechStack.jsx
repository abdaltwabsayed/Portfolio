import { coreSkills } from '../data/skills.js';

export default function TechStack({ copy }) {
  return (
    <section className="tech-strip" id="tech-stack" aria-label={copy.label}>
      <div className="tech-strip-inner page-width">
        <span className="mono-label">{copy.label}</span>
        <div className="tech-list">
          {coreSkills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
        <span className="tech-note text-muted">{copy.note}</span>
      </div>
    </section>
  );
}
