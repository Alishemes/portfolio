// ================= MOBILE NAVBAR TOGGLE =================

const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
    });
});

document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', false);
    }
});

// ================= DARK / LIGHT THEME TOGGLE =================

const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

// Load saved preference
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('light');
    applyTheme(isDark ? 'light' : 'dark');
});

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light');
        themeIcon.className = 'fa-solid fa-sun';
    } else {
        document.body.classList.remove('light');
        themeIcon.className = 'fa-solid fa-moon';
    }
    localStorage.setItem('theme', theme);
}
