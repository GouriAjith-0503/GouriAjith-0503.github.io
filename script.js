// ========== PORTFOLIO JS – OPTIMIZED ==========
(function() {
  'use strict';

  // ----- helper: throttle (for scroll/resize) -----
  const throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
      const now = Date.now();
      if (now - last >= delay) {
        fn(...args);
        last = now;
      }
    };
  };

  // ----- NAVBAR SCROLL (add/remove .scrolled) -----
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    };
    window.addEventListener('scroll', throttle(handleScroll, 20));
    handleScroll(); // initial check
  }

  // ----- MOBILE NAV TOGGLE -----
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    const closeMenu = () => {
      toggle.classList.remove('active');
      navLinks.classList.remove('open');
    };
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    // close when clicking any nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    // close on click outside
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) closeMenu();
    });
  }

  // ----- TYPEWRITER (smooth, endless) -----
  const typeEl = document.getElementById('typewriter');
  if (typeEl) {
    const phrases = ['FPGA-based systems.', 'IoT solutions.', 'embedded firmware.', 'real-time dashboards.'];
    let idx = 0, charIdx = 0, isDeleting = false;
    let timer;

    const type = () => {
      const current = phrases[idx];
      if (isDeleting) {
        typeEl.textContent = current.substring(0, charIdx - 1);
        charIdx--;
      } else {
        typeEl.textContent = current.substring(0, charIdx + 1);
        charIdx++;
      }

      if (!isDeleting && charIdx === current.length) {
        isDeleting = true;
        timer = setTimeout(type, 1800);
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        idx = (idx + 1) % phrases.length;
        timer = setTimeout(type, 300);
      } else {
        const speed = isDeleting ? 40 : 80;
        timer = setTimeout(type, speed);
      }
    };
    timer = setTimeout(type, 300);
  }

  // ----- PARTICLES (calm mint circles, only visible in hero) -----
  const canvas = document.getElementById('particles-canvas');
  if (canvas && canvas.getContext) {
    let ctx = canvas.getContext('2d');
    let width = window.innerWidth, height = window.innerHeight;
    let particles = [];
    let animationId = null;
    let isVisible = false;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      const area = width * height;
      let num = Math.min(45, Math.floor(area / 22000));
      if (width < 768) num = Math.min(28, num);
      particles = [];
      for (let i = 0; i < num; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          rad: Math.random() * 2.5 + 1,
          dx: (Math.random() - 0.5) * 0.35,
          dy: (Math.random() - 0.5) * 0.35,
          opacity: Math.random() * 0.3 + 0.1,
          color: `rgba(139, 174, 159, ${Math.random() * 0.35 + 0.08})`
        });
      }
    };

    const drawParticles = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.rad, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      animationId = requestAnimationFrame(drawParticles);
    };

    const startParticles = () => {
      if (animationId) cancelAnimationFrame(animationId);
      resize();
      initParticles();
      isVisible = true;
      drawParticles();
    };

    const stopParticles = () => {
      isVisible = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      ctx.clearRect(0, 0, width, height);
    };

    // only animate when hero is in viewport
    const hero = document.getElementById('hero');
    if (hero) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) startParticles();
          else stopParticles();
        });
      }, { threshold: 0.1 });
      observer.observe(hero);
    }
    window.addEventListener('resize', throttle(() => {
      if (isVisible) {
        resize();
        initParticles();
      }
    }, 100));
  }

  // ----- COUNT-UP (single run, using data-count) -----
  const counters = document.querySelectorAll('.stat-number');
  let counted = false;
  if (counters.length) {
    const statsContainer = document.querySelector('.hero-stats');
    const countObserver = new IntersectionObserver((entries) => {
      if (counted) return;
      entries.forEach(entry => {
        if (entry.isIntersecting && !counted) {
          counted = true;
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            if (isNaN(target)) return;
            let current = 0;
            const step = Math.max(1, Math.ceil(target / 45));
            const update = () => {
              current += step;
              if (current >= target) {
                counter.textContent = target;
                return;
              }
              counter.textContent = current;
              requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
          });
        }
      });
    }, { threshold: 0.5 });
    if (statsContainer) countObserver.observe(statsContainer);
  }

  // ----- SCROLL REVEAL (fade-in on scroll) -----
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -20px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ----- SMOOTH ANCHOR SCROLL (internal links) + close mobile menu -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const hash = anchor.getAttribute('href');
      if (hash === '#') return;
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile menu if open
        if (navLinks && navLinks.classList.contains('open')) {
          navLinks.classList.remove('open');
          if (toggle) toggle.classList.remove('active');
        }
      }
    });
  });

  // ----- fallback for resume download button (optional) -----
  const resumeBtn = document.querySelector('#resumeDummy');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // you can replace with actual resume file if needed
      alert('📄 Download Resume: Gouri Ajith – please contact directly or request via email.');
    });
  }
})();
