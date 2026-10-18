/* Theme: follows the browser/system setting by default; the navbar button
   lets the visitor override it, and the choice is remembered. */
(function () {
    var root = document.documentElement;
    var KEY = 'portfolio-theme';
    var systemLight = window.matchMedia('(prefers-color-scheme: light)');

    // Runs in <head>, before first paint, so a saved choice never flashes the wrong theme.
    try {
        var saved = localStorage.getItem(KEY);
        if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
    } catch (e) { /* storage blocked: just follow the system */ }

    function current() {
        return root.getAttribute('data-theme') || (systemLight.matches ? 'light' : 'dark');
    }

    function syncButton() {
        var btn = document.getElementById('theme-toggle');
        if (!btn) return;
        var isLight = current() === 'light';
        var label = isLight ? 'Switch to dark mode' : 'Switch to light mode';
        btn.querySelector('i').className = isLight ? 'fas fa-moon' : 'fas fa-sun';
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

    if (systemLight.addEventListener) systemLight.addEventListener('change', syncButton);
})();
