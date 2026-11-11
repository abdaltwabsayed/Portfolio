import { useEffect, useRef, useState } from 'react';
import personalMark from '../../assets/Be_beautiful.png';

export default function Navbar({ language, onLanguageChange, theme, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const copy = language === 'ar' ? labels.ar : labels.en;

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="site-nav page-width" aria-label={copy.label}>
        <a className="brand" href="#home" onClick={closeMenu} aria-label={copy.home}>
          <img src={personalMark} alt="" />
          <span>Abdaltwab</span>
        </a>
        <button
          ref={menuButtonRef}
          id="menu-toggle"
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
        <div
          className={`nav-content${menuOpen ? ' nav-content-open' : ''}`}
          id="primary-navigation"
        >
          <div className="nav-links">
            <a href="#work" onClick={closeMenu}>{copy.work}</a>
            <a href="#services" onClick={closeMenu}>{copy.services}</a>
            <a href="#about" onClick={closeMenu}>{copy.about}</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              {copy.contact}<span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="nav-tools">
            <button
              id="lang-toggle"
              className="icon-btn lang-toggle"
              type="button"
              onClick={onLanguageChange}
              aria-label={copy.languageLabel}
              title={copy.languageLabel}
            >
              <span className="lang-label">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <button
              id="theme-toggle"
              className="icon-btn theme-toggle"
              type="button"
              onClick={onThemeChange}
              aria-label={theme === 'light' ? copy.darkLabel : copy.lightLabel}
              title={theme === 'light' ? copy.darkLabel : copy.lightLabel}
            >
              <span aria-hidden="true">{theme === 'light' ? '☾' : '☼'}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

const labels = {
  en: {
    label: 'Main navigation',
    home: 'Abdaltwab — home',
    work: 'Work',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    languageLabel: 'Switch to Arabic',
    lightLabel: 'Switch to light mode',
    darkLabel: 'Switch to dark mode',
  },
  ar: {
    label: 'التنقل الرئيسي',
    home: 'عبدالتواب — الرئيسية',
    work: 'أعمالي',
    services: 'الخدمات',
    about: 'نبذة عني',
    contact: 'تواصل',
    openMenu: 'فتح قائمة التنقل',
    closeMenu: 'إغلاق قائمة التنقل',
    languageLabel: 'التبديل إلى الإنجليزية',
    lightLabel: 'التبديل إلى الوضع الفاتح',
    darkLabel: 'التبديل إلى الوضع الداكن',
  },
};
