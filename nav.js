/* ============================================================
   nav.js — injects shared nav and footer into every page
   ============================================================ */

(function () {
  const path = window.location.pathname.replace(/\/$/, '') || '/';

  const LINKS = [
    { href: '/',        label: 'Calculator' },
    { href: '/tips',    label: 'Tips'       },
    { href: '/about',   label: 'About'      },
  ];

  function isActive(href) {
    if (href === '/') return path === '' || path === '/';
    return path === href || path.startsWith(href + '/');
  }

  /* ── NAV ─────────────────────────────────────────────────── */

  const navHTML = `
    <header class="site-nav" role="banner">
      <div class="nav-container">
        <a href="/" class="nav-brand" aria-label="Savings Roast — home">
          <span class="nav-brand-icon" aria-hidden="true">$</span>
          <span class="nav-brand-name">savingsroast</span>
        </a>
        <nav class="nav-links" role="navigation" aria-label="Main">
          ${LINKS.map(l => `
            <a href="${l.href}"
               class="nav-link${isActive(l.href) ? ' active' : ''}"
               ${isActive(l.href) ? 'aria-current="page"' : ''}>
              ${l.label}
            </a>`).join('')}
        </nav>
      </div>
    </header>`;

  const navRoot = document.getElementById('nav-root');
  if (navRoot) navRoot.outerHTML = navHTML;

  /* ── FOOTER ──────────────────────────────────────────────── */

  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <p class="disclaimer">
          &#9888;&#65039; This tool is for entertainment and general estimation only.
          Not financial advice. Talk to a real human if money is stressful.
        </p>
        <p class="footer-tag">
          <a href="/privacy" class="footer-link">Privacy</a>
          &middot;
          <a href="/about" class="footer-link">About</a>
          &middot; savingsroast.com &middot; Made with panic and spreadsheets.
        </p>
      </div>
    </footer>`;

  document.addEventListener('DOMContentLoaded', () => {
    const footerRoot = document.getElementById('footer-root');
    if (footerRoot) footerRoot.outerHTML = footerHTML;
  });
})();
