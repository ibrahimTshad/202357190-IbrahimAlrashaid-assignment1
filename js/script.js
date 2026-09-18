// Theme toggle: persist and respect OS preference
(function () {
    const STORAGE_KEY = 'theme';
    const DARK = 'dark';
    const LIGHT = 'light';
    const BTN_ID = 'theme-toggle';
    const root = document.documentElement;
    const btn = document.getElementById(BTN_ID);

    function applyTheme(theme) {
        if (theme === DARK) root.setAttribute('data-theme', DARK);
        else root.removeAttribute('data-theme');
        try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* ignore */ }
        updateButton(theme);
    }

    function updateButton(theme) {
        if (!btn) return;
        const isDark = theme === DARK;
        btn.setAttribute('aria-pressed', String(isDark));
        btn.textContent = isDark ? 'Light mode' : 'Dark mode';
    }

    function detectInitialTheme() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === DARK || stored === LIGHT) return stored;
        } catch (e) { /* ignore */ }

        // Respect OS preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? DARK : LIGHT;
    }

    function toggleTheme() {
        const current = root.getAttribute('data-theme') === DARK ? DARK : LIGHT;
        applyTheme(current === DARK ? LIGHT : DARK);
    }

    // Init
    const initial = detectInitialTheme();
    applyTheme(initial);

    // Listen for button
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    }

    // If user changes OS preference while page is open, update unless they've explicitly chosen
    if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener && mq.addEventListener('change', (e) => {
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored !== DARK && stored !== LIGHT) {
                    applyTheme(e.matches ? DARK : LIGHT);
                }
            } catch (err) { /* ignore */ }
        });
    }

    // Optional: update year element if present
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
})();