/* =========================================
   PORTFOLIO JAVASCRIPT (optimized)
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initTypewriter();
    initParticles();
    initScrollReveal();
    initCountUp();
    initSmoothScroll();
    initMobileNav();
});

/* =========================================
   NAVBAR SCROLL (throttled)
   ========================================= */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
}

/* =========================================
   TYPEWRITER (fixed)
   ========================================= */
function initTypewriter() {
    const element = document.getElementById('typewriter');
    if (!element) return;

    const phrases = [
        'FPGA-based systems.',
        'IoT solutions.',
        'embedded firmware.',
        'web applications.',
        'real-time dashboards.',
        'sustainable tech.'
    ];

    let phraseIndex = 0, charIndex = 0, isDeleting = false;
    let typingSpeed = 80;
    let timeoutId;

    function type() {
        const current = phrases[phraseIndex];
        if (isDeleting) {
            element.textContent = current.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            element.textContent = current.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === current.length) {
            typingSpeed = 2200;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400;
        }

        timeoutId = setTimeout(type, typingSpeed);
    }

    timeoutId = setTimeout(type, 1200);
}

/* =========================================
   PARTICLES (dynamic count, performance)
   ========================================= */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    let isAnimating = false;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function initParticlesArray() {
        const area = canvas.width * canvas.height;
        let numParticles = Math.min(60, Math.floor(area / 18000));
        if (window.innerWidth < 768) numParticles = Math.min(30, numParticles);
        particles = [];
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle(canvas.width, canvas.height));
        }
    }

    class Particle {
        constructor(w, h) {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.hue = Math.random() > 0.5 ? 280 : 190;
        }
        update(w, h) {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > w) this.speedX *= -1;
            if (this.y < 0 || this.y > h) this.speedY *= -1;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;
            ctx.fill();
        }
    }

    function connectParticles(ctx, particles, w, h) {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);
                if (dist < 150) {
                    const opacity = (1 - dist / 150) * 0.12;
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        if (!isAnimating) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let p of particles) {
            p.update(canvas.width, canvas.height);
            p.draw(ctx);
        }
        connectParticles(ctx, particles, canvas.width, canvas.height);
        animationId = requestAnimationFrame(animate);
    }

    function start() {
        if (animationId) cancelAnimationFrame(animationId);
        resizeCanvas();
        initParticlesArray();
        isAnimating = true;
        animate();
    }

    function stop() {
        isAnimating = false;
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener('resize', () => {
        if (isAnimating) {
            resizeCanvas();
            initParticlesArray();
        }
    });

    const hero = document.getElementById('hero');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) start();
            else stop();
        });
    }, { threshold: 0.1 });
    observer.observe(hero);
}

/* =========================================
   SCROLL REVEAL
   ========================================= */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('revealed'), idx * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(el => observer.observe(el));
}

/* =========================================
   COUNT UP (single-run)
   ========================================= */
function initCountUp() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;
    const observer = new IntersectionObserver((entries) => {
        if (animated) return;
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'), 10);
                    if (isNaN(target)) return;
                    const duration = 1500;
                    const startTime = performance.now();
                    function update(now) {
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const ease = 1 - Math.pow(1 - progress, 3);
                        counter.textContent = Math.floor(ease * target);
                        if (progress < 1) requestAnimationFrame(update);
                        else counter.textContent = target;
                    }
                    requestAnimationFrame(update);
                });
            }
        });
    }, { threshold: 0.5 });
    const stats = document.querySelector('.hero-stats');
    if (stats) observer.observe(stats);
}

/* =========================================
   SMOOTH SCROLL & MOBILE NAV
   ========================================= */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                document.getElementById('nav-links')?.classList.remove('open');
                document.getElementById('nav-toggle')?.classList.remove('active');
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (!toggle || !navLinks) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
            toggle.classList.remove('active');
            navLinks.classList.remove('open');
        }
    });
}
