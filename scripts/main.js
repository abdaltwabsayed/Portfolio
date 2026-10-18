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

/* Hero typewriter. The CSS animation loops forever; here we (1) size it to
   its real text, which changes with language and screen size, and (2) restart
   it when the pointer ENTERS the role text. Leaving does nothing, so it just
   carries on from where it is. */
const typewriter = document.querySelector('.typewriter');
const heroRole = document.querySelector('.hero-role');

function fitTypewriter() {
    if (!typewriter) return;
    const probe = typewriter.cloneNode(true);
    probe.removeAttribute('data-i18n');
    probe.style.cssText = 'position:absolute;visibility:hidden;width:auto;animation:none;border:0;';
    typewriter.parentNode.appendChild(probe);
    const textWidth = Math.ceil(probe.getBoundingClientRect().width);
    probe.remove();
    typewriter.style.setProperty('--tw-w', (textWidth + 6) + 'px');
    typewriter.style.setProperty('--tw-n', Array.from(typewriter.textContent.trim()).length);
}

function restartTypewriter() {
    if (!typewriter) return;
    typewriter.style.animation = 'none';
    void typewriter.offsetWidth;
    typewriter.style.animation = '';
}

if (heroRole) heroRole.addEventListener('pointerenter', restartTypewriter);

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitTypewriter, 150);
});
document.addEventListener('langchange', () => { fitTypewriter(); restartTypewriter(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitTypewriter);
fitTypewriter();
