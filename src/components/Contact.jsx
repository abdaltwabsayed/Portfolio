import Button from './Button.jsx';

const socials = [
  { label: 'GitHub', href: 'https://github.com/abdaltwabsayed/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdaltwab-sayed-fullstackdeveloper' },
  { label: 'Facebook', href: 'https://www.facebook.com/abdaltwab.sayed' },
  { label: 'X', href: 'https://x.com/AbdeltwabSayed1' },
  { label: 'Phone', href: 'tel:+201119318089' },
];

export default function Contact({ copy }) {
  return (
    <section className="contact-section page-width" id="contact">
      <div className="contact-main">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}<br /><span>{copy.titleAccent}</span></h2>
        <p className="contact-intro">{copy.intro}</p>
        <Button href="mailto:abdaltwabsayed89@gmail.com">
          {copy.button}<span aria-hidden="true">↗</span>
        </Button>
      </div>
      <div className="contact-bottom">
        <a className="email-link" href="mailto:abdaltwabsayed89@gmail.com">
          abdaltwabsayed89@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="social-links">
          {socials.map(({ label, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
              {copy.socials[label] || label}
              {href.startsWith('http') && <span aria-hidden="true">↗</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
