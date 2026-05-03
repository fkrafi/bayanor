/**
 * BAYANOR — Premium JavaScript
 * UAE Global Trading Company
 * Features: Navbar scroll, mobile menu, theme toggle,
 *           scroll reveal, back-to-top, smooth scroll,
 *           contact form validation
 */

(function () {
  'use strict';

  /* ============================================================
     Utility: Debounce
  ============================================================ */
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /* ============================================================
     1. Navbar — Scroll to solid + mobile menu
  ============================================================ */
  (function initNavbar() {
    const navbar     = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!navbar) return;

    // Scroll effect: transparent → solid
    function onScroll() {
      if (window.scrollY > 60) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', debounce(onScroll, 10), { passive: true });
    onScroll(); // run on load

    // Mobile menu toggle
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function () {
        const isOpen = mobileMenu.classList.toggle('is-open');
        menuToggle.classList.toggle('is-open', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        mobileMenu.setAttribute('aria-hidden', String(!isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      // Close menu on mobile link click
      mobileMenu.querySelectorAll('.mobile-menu__link, .btn').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.remove('is-open');
          menuToggle.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        });
      });

      // Close menu on outside click
      document.addEventListener('click', function (e) {
        if (
          mobileMenu.classList.contains('is-open') &&
          !mobileMenu.contains(e.target) &&
          !menuToggle.contains(e.target)
        ) {
          mobileMenu.classList.remove('is-open');
          menuToggle.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          mobileMenu.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
      });
    }
  })();

  /* ============================================================
     2. Theme Toggle — Dark / Light
  ============================================================ */
  (function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const html      = document.documentElement;

    if (!toggleBtn) return;

    // Read persisted preference
    const savedTheme = localStorage.getItem('bayanor-theme');
    if (savedTheme) {
      html.setAttribute('data-theme', savedTheme);
    }

    toggleBtn.addEventListener('click', function () {
      const current = html.getAttribute('data-theme') || 'dark';
      const next    = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('bayanor-theme', next);
    });
  })();

  /* ============================================================
     3. Scroll Reveal — IntersectionObserver
  ============================================================ */
  (function initScrollReveal() {
    const revealClasses = [
      '.reveal-fade',
      '.reveal-slide-left',
      '.reveal-slide-right',
      '.stat-card',
      '.service-card',
      '.why-card',
      '.contact__info-card',
    ];

    const elements = document.querySelectorAll(revealClasses.join(', '));
    if (!elements.length) return;

    // Add base reveal class to cards that don't have one
    elements.forEach(function (el) {
      if (
        !el.classList.contains('reveal-fade') &&
        !el.classList.contains('reveal-slide-left') &&
        !el.classList.contains('reveal-slide-right')
      ) {
        el.classList.add('reveal-fade');
      }
    });

    // Apply staggered delays via data-delay or index
    document.querySelectorAll('[data-delay]').forEach(function (el) {
      el.style.transitionDelay = el.getAttribute('data-delay') + 'ms';
    });

    // Observer
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Re-query after adding classes
    document.querySelectorAll('.reveal-fade, .reveal-slide-left, .reveal-slide-right')
      .forEach(function (el) { observer.observe(el); });

  })();

  /* ============================================================
     4. Stagger Children — apply to grids
  ============================================================ */
  (function initStaggerChildren() {
    const grids = document.querySelectorAll(
      '.about__stats, .footer__grid'
    );

    grids.forEach(function (grid) {
      Array.from(grid.children).forEach(function (child, i) {
        if (!child.classList.contains('reveal-fade')) {
          child.classList.add('reveal-fade');
        }
        child.style.transitionDelay = (i * 80) + 'ms';
      });
    });
  })();

  /* ============================================================
     5. Back to Top Button
  ============================================================ */
  (function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener(
      'scroll',
      debounce(function () {
        btn.classList.toggle('is-visible', window.scrollY > 400);
      }, 50),
      { passive: true }
    );

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();

  /* ============================================================
     6. Smooth Scroll for anchor links
  ============================================================ */
  (function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href').slice(1);
        if (!id) return;

        const target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();

        const navHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--navbar-h') || '76',
          10
        );

        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  })();

  /* ============================================================
     7. Contact Form — Validation & Submission
  ============================================================ */
  (function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const STATUS_EL_ID = 'form-status';

    function showStatus(msg, type) {
      let el = document.getElementById(STATUS_EL_ID);
      if (!el) {
        el = document.createElement('p');
        el.id = STATUS_EL_ID;
        el.style.cssText = [
          'margin-top: 1rem',
          'font-size: 0.8rem',
          'letter-spacing: 0.1em',
          'text-align: center',
          'padding: 0.75rem',
          'border-radius: 4px',
        ].join(';');
        form.appendChild(el);
      }

      el.textContent = msg;
      el.style.color  = type === 'success' ? '#25D366' : '#e57373';
      el.style.background = type === 'success'
        ? 'rgba(37, 211, 102, 0.08)'
        : 'rgba(229, 115, 115, 0.08)';
      el.style.border = type === 'success'
        ? '1px solid rgba(37, 211, 102, 0.25)'
        : '1px solid rgba(229, 115, 115, 0.25)';
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameEl    = form.querySelector('[name="name"]');
      const emailEl   = form.querySelector('[name="email"]');
      const messageEl = form.querySelector('[name="message"]');

      // Basic validation
      if (!nameEl || !nameEl.value.trim()) {
        showStatus('Please enter your full name.', 'error');
        nameEl && nameEl.focus();
        return;
      }
      if (!emailEl || !isValidEmail(emailEl.value.trim())) {
        showStatus('Please enter a valid email address.', 'error');
        emailEl && emailEl.focus();
        return;
      }
      if (!messageEl || !messageEl.value.trim()) {
        showStatus('Please enter your message.', 'error');
        messageEl && messageEl.focus();
        return;
      }

      // Show submitting state
      const submitBtn = form.querySelector('[type="submit"]');
      const origText  = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.textContent = 'Sending…';
        submitBtn.disabled = true;
      }

      // Simulate submission (replace with real endpoint / Formspree)
      setTimeout(function () {
        showStatus(
          'Thank you. Your enquiry has been received. Our team will be in touch within 24 hours.',
          'success'
        );
        form.reset();
        if (submitBtn) {
          submitBtn.textContent = origText;
          submitBtn.disabled = false;
        }
      }, 1200);
    });
  })();

  /* ============================================================
     8. Animated counter for stat numbers
  ============================================================ */
  (function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1400;
      const step = 16;
      const increment = target / (duration / step);
      let current = 0;

      const interval = setInterval(function () {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        el.textContent = Math.floor(current) + suffix;
      }, step);
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (el) { observer.observe(el); });
  })();

})();
