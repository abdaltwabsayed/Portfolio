import { useEffect, useState } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Process from './components/Process.jsx';
import Projects from './components/Projects.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';
import TechStack from './components/TechStack.jsx';
import { translations } from './data/translations.js';

function readPreference(key, fallback, allowedValues) {
  try {
    const savedValue = localStorage.getItem(key);
    return allowedValues.includes(savedValue) ? savedValue : fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [language, setLanguage] = useState(() =>
    readPreference('portfolio-lang', 'en', ['en', 'ar']),
  );
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );

  const copy = translations[language];

  useEffect(() => {
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.title = language === 'ar'
      ? 'عبدالتواب عكاشة الشيخ — مطوّر ويب'
      : 'Abdaltwab Okasha Elsheikh — Web Developer';

    try {
      localStorage.setItem('portfolio-lang', language);
    } catch {
      // The selected language still applies for this page view.
    }
  }, [language]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)');
    function updateFromSystem(event) {
      if (readPreference('portfolio-theme', null, ['light', 'dark']) !== null) return;
      setTheme(event.matches ? 'light' : 'dark');
    }

    systemTheme.addEventListener('change', updateFromSystem);
    return () => systemTheme.removeEventListener('change', updateFromSystem);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // The selected theme still applies for this page view.
    }
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell min-h-screen bg-paper text-ink">
      <a className="skip-link" href="#main-content">{language === 'ar' ? 'انتقل إلى المحتوى' : 'Skip to content'}</a>
      <Navbar
        language={language}
        onLanguageChange={() => setLanguage((current) => current === 'ar' ? 'en' : 'ar')}
        theme={theme}
        onThemeChange={toggleTheme}
      />
      <main id="main-content">
        <Hero copy={copy.hero} />
        <TechStack copy={copy.tech} />
        <Projects copy={copy.work} />
        <Services copy={copy.services} />
        <Process copy={copy.process} />
        <About copy={copy.about} />
        <Skills copy={copy.skills} />
        <Contact copy={copy.contact} />
      </main>
      <Footer copy={copy.footer} />
    </div>
  );
}
