/* Scroll-reveal for the Work cards.
   Depends on the classes .project, .hidden and .in-view (see the CSS). */
const projects = document.querySelectorAll('.project');

const revealProjects = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('in-view');
            entry.target.classList.add('hidden');
        }
    });
}, { threshold: 0.2 });

projects.forEach((project) => {
    project.classList.add('hidden');
    revealProjects.observe(project);
});

/* Separate reveal system for whole sections (.reveal -> .section-visible).
   The class is toggled, so each section's animation replays every time it
   scrolls back into view. A low threshold keeps very tall sections
   (like Work on a phone) from never triggering. */
const revealSections = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('section-visible', entry.isIntersecting);
    });
}, { threshold: 0.1 });

revealSections.forEach((section) => revealObserver.observe(section));
