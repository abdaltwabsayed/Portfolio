export default function Process({ copy }) {
  return (
    <section className="process-section">
      <div className="page-width process-inner">
        <div>
          <p className="mono-label">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
        </div>
        <div className="process-steps">
          {copy.steps.map((step, index) => (
            <div className="process-step" key={step.title}>
              <span className="mono-label">0{index + 1}</span>
              <p>{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
