import Button from './Button.jsx';
import atlasPreview from '../../assets/Character-Atlas.png';
import portrait from '../../assets/My_Picture.png';

export default function Hero({ copy }) {
  return (
    <section className="hero page-width" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot bg-coral" />{copy.eyebrow}</p>
        <h1>{copy.title} <span>{copy.titleAccent}</span></h1>
        <p className="hero-intro">{copy.intro}</p>
        <div className="hero-actions">
          <Button href="#contact">{copy.discuss}<span aria-hidden="true">↗</span></Button>
          <a className="text-link" href="#work">{copy.explore}<span aria-hidden="true">↓</span></a>
        </div>
        <p className="hero-footnote"><span className="footnote-mark" />{copy.note}</p>
      </div>
      <div className="hero-visual" role="group" aria-label={copy.visualLabel}>
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="browser-card">
          <div className="browser-bar">
            <span /><span /><span />
            <small>Engineer / Web Developer</small>
          </div>
          <img src={portrait} alt={copy.imageAlt} />
          <div className="browser-caption">
            <span>PERSONAL INTRODUCTION</span>
            <strong>Web Developer</strong>
          </div>
        </div>
        <div className="floating-label label-code"><span>&lt;/&gt;</span> JavaScript</div>
        <div className="floating-label label-responsive"><span>✳</span> Responsive UI</div>
        <div z-index="1"  className="portrait-chip">
          <img src={portrait} alt="" />
          <span>{copy.portrait}</span>
        </div>
        <span className="visual-spark" aria-hidden="true">✳</span>
      </div>
      <a className="scroll-cue mono-label" href="#tech-stack">{copy.scroll}<span aria-hidden="true">↓</span></a>
    </section>
  );
}
