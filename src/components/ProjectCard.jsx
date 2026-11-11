export default function ProjectCard({ project, copy, featured = false }) {
  const content = copy.projects[project.id];
  const imageLabel = content?.imageAlt || project.imageAlt;

  return (
    <article className={`project-card${featured ? ' project-featured' : ''}`}>
      {project.illustration ? (
        <div className={`project-image concept-image concept-${project.illustration}`} role="img" aria-label={imageLabel}>
          {project.illustration === 'pokemon' ? (
            <div className="pokemon-concept-card"><span>POKÉMON / DATA</span><strong>FETCH</strong><i>✳</i></div>
          ) : (
            <div className="nahed-concept-card">
              <div><i /><i className="bg-butter" /><i /><span>NAHED / BOT</span></div>
              <p>LOGIN <b>01</b></p><p>ASSIGNMENTS <b>02</b></p><p>FILE SHARING <b>03</b></p>
            </div>
          )}
          <span className="image-index mono-label">{project.id === 'nahed' ? 'TEAM PROJECT' : 'PROJECT STUDY'}</span>
        </div>
      ) : (
        <div className="project-image">
          <img src={project.image} alt={imageLabel} loading="lazy" decoding="async" />
          <span className="image-index mono-label">{project.category.toUpperCase()}</span>
        </div>
      )}
      <div className="project-meta">
        <span className="project-category mono-label">{content?.category || project.category}</span>
        <span className="project-links text-cobalt">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">{copy.live}<span aria-hidden="true">↗</span></a>}
          {project.sourceUrl && <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">{copy.code}<span aria-hidden="true">↗</span></a>}
        </span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{content?.description || project.description}</p>
      {project.contribution && (
        <p className="contribution-note">
          <strong>{copy.contributionLabel}</strong>
          {content?.contribution || project.contribution}
        </p>
      )}
      {project.technologies && (
        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span className="technology-chip text-cobalt" key={technology}>{technology}</span>
          ))}
        </div>
      )}
      {project.id === 'pokemon-fetcher' && <p className="illustration-note">{copy.illustrationNote}</p>}
    </article>
  );
}
