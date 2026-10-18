/* Theme: follows the browser/system setting by default; the navbar button
   lets the visitor override it, and the choice is remembered. */
(function () {
    var root = document.documentElement;
    var KEY = 'portfolio-theme';
    var systemLight = window.matchMedia('(prefers-color-scheme: light)');
    var LABELS = {
        en: { light: 'Switch to light mode', dark: 'Switch to dark mode' },
        ar: { light: 'التبديل إلى الوضع الفاتح', dark: 'التبديل إلى الوضع الداكن' }
    };

    // Runs in <head>, before first paint, so a saved choice never flashes the wrong theme.
    try {
        var saved = localStorage.getItem(KEY);
        if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
    } catch (e) { /* storage blocked: just follow the system */ }

    function current() {
        return root.getAttribute('data-theme') || (systemLight.matches ? 'light' : 'dark');
    }

    // The sun/moon icon itself is switched by CSS; this only keeps the label in sync.
    function syncButton() {
        var btn = document.getElementById('theme-toggle');
        if (!btn) return;
        var set = LABELS[root.lang === 'ar' ? 'ar' : 'en'];
        var label = current() === 'light' ? set.dark : set.light;
        btn.setAttribute('aria-label', label);
        btn.title = label;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var btn = document.getElementById('theme-toggle');
        if (!btn) return;
        syncButton();
        btn.addEventListener('click', function () {
            var next = current() === 'light' ? 'dark' : 'light';
            root.setAttribute('data-theme', next);
            try { localStorage.setItem(KEY, next); } catch (e) { }
            syncButton();
        });
    });

    document.addEventListener('langchange', syncButton);
    if (systemLight.addEventListener) systemLight.addEventListener('change', syncButton);
})();
