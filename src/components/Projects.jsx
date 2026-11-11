import { featuredProjects, miniProjects, teamProject } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Projects({ copy }) {
  return (
    <section className="work-section" id="work">
      <div className="page-width">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={<>{copy.title} <span>{copy.titleAccent}</span></>}
          description={copy.intro}
        />
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} copy={copy} featured={index === 0} />
          ))}
          {miniProjects.map((project) => (
            <ProjectCard key={project.id} project={project} copy={copy} />
          ))}
          <ProjectCard project={teamProject} copy={copy} />
        </div>
        <a
          className="all-projects-link"
          href="https://github.com/abdaltwabsayed/My-Web-Development/tree/master/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.allProjects}<span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
