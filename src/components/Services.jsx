import { services } from '../data/services.js';
import SectionHeading from './SectionHeading.jsx';

export default function Services({ copy }) {
  return (
    <section className="services-section page-width" id="services">
      <SectionHeading
        eyebrow={copy.eyebrow}
        title={<>{copy.title} <span>{copy.titleAccent}</span></>}
        description={copy.intro}
      />
      <div className="services-grid">
        {services.map((service, index) => {
          const text = copy.items[service.id];
          return (
            <article className="service-card" key={service.id}>
              <span className="mono-label">{service.number} / {copy.labels[index]}</span>
              <span className={`service-icon icon-${service.tone}`} aria-hidden="true">{service.icon}</span>
              <h3>{text.title}</h3>
              <p>{text.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
