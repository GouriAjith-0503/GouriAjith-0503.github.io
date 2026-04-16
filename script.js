/* =========================================
   DESIGN TOKENS (condensed)
   ========================================= */
:root {
    --bg-primary: #0a0a0f;
    --bg-secondary: #12121a;
    --bg-card: #16161f;
    --text-primary: #e8e8f0;
    --text-secondary: #9898a8;
    --text-muted: #5c5c6e;
    --accent-cyan: #00d4ff;
    --accent-purple: #a855f7;
    --accent-green: #22c55e;
    --gradient-primary: linear-gradient(135deg, #00d4ff, #a855f7);
    --gradient-hero: linear-gradient(135deg, #0a0a0f 0%, #1a1030 50%, #0a0a0f 100%);
    --border-subtle: rgba(255, 255, 255, 0.06);
    --shadow-glow: 0 0 30px rgba(168, 85, 247, 0.15);
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
    --radius-md: 12px;
    --transition-smooth: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* =========================================
   BASE & RESET
   ========================================= */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
}

body {
    font-family: var(--font-sans);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

::selection {
    background: rgba(168, 85, 247, 0.3);
    color: #fff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

/* =========================================
   NAVBAR (optimized)
   ========================================= */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 16px 0;
    transition: var(--transition-smooth);
}

.navbar.scrolled {
    padding: 10px 0;
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-subtle);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-logo {
    font-family: var(--font-mono);
    font-size: 1.3rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    transition: 0.2s;
}

.logo-bracket {
    color: var(--accent-cyan);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 8px;
}

.nav-link {
    padding: 8px 18px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-secondary);
    border-radius: 8px;
    transition: 0.2s;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: var(--transition-smooth);
    transform: translateX(-50%);
}

.nav-link:hover {
    color: var(--text-primary);
}

.nav-link:hover::after {
    width: 60%;
}

.nav-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
}

.hamburger {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text-primary);
    position: relative;
    transition: 0.2s;
}

.hamburger::before,
.hamburger::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--text-primary);
    transition: 0.2s;
}

.hamburger::before {
    top: -7px;
}

.hamburger::after {
    bottom: -7px;
}

.nav-toggle.active .hamburger {
    background: transparent;
}

.nav-toggle.active .hamburger::before {
    transform: rotate(45deg);
    top: 0;
}

.nav-toggle.active .hamburger::after {
    transform: rotate(-45deg);
    bottom: 0;
}

/* =========================================
   HERO SECTION
   ========================================= */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: var(--gradient-hero);
    overflow: hidden;
    padding: 120px 24px 60px;
}

#particles-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.hero::before,
.hero::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%);
    animation: floatOrb 15s ease-in-out infinite;
}

.hero::after {
    bottom: -40%;
    left: -20%;
    background: radial-gradient(circle, rgba(0, 212, 255, 0.06) 0%, transparent 70%);
    animation-duration: 12s;
    animation-direction: reverse;
}

@keyframes floatOrb {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    33% {
        transform: translate(40px, -30px) scale(1.05);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.95);
    }
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    text-align: center;
    animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 20px;
    border-radius: 50px;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: var(--accent-green);
    font-size: 0.85rem;
    margin-bottom: 32px;
}

.badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent-green);
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
    }

    70% {
        box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);
    }

    100% {
        box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
    }
}

.hero-title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
    letter-spacing: -1.5px;
}

.gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-subtitle-wrapper {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    color: var(--text-secondary);
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
}

.typewriter {
    color: var(--accent-cyan);
    font-weight: 600;
}

.cursor {
    color: var(--accent-cyan);
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.hero-description {
    font-size: 1.05rem;
    color: var(--text-secondary);
    max-width: 650px;
    margin: 0 auto 36px;
}

.hero-cta {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 48px;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    border-radius: var(--radius-md);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition-smooth);
    border: none;
}

.btn-primary {
    background: var(--gradient-primary);
    color: #0a0a0f;
    box-shadow: 0 4px 20px rgba(0, 212, 255, 0.2);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 212, 255, 0.35);
}

.btn-outline {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid rgba(168, 85, 247, 0.3);
}

.btn-outline:hover {
    background: rgba(168, 85, 247, 0.1);
    border-color: var(--accent-purple);
    transform: translateY(-3px);
}

.hero-stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
}

.stat {
    text-align: center;
}

.stat-number {
    font-size: 2rem;
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline;
}

.stat-plus {
    font-size: 1.5rem;
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.stat-label {
    display: block;
    font-size: 0.8rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1.5px;
}

.stat-divider {
    width: 1px;
    height: 40px;
    background: var(--border-subtle);
}

.scroll-indicator {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    color: var(--text-muted);
    font-size: 0.75rem;
}

.mouse {
    width: 24px;
    height: 38px;
    border-radius: 12px;
    border: 2px solid var(--text-muted);
    position: relative;
}

.mouse-wheel {
    width: 3px;
    height: 8px;
    border-radius: 2px;
    background: var(--accent-cyan);
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    animation: scrollWheel 2s ease-in-out infinite;
}

@keyframes scrollWheel {
    0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }

    100% {
        opacity: 0;
        transform: translateX(-50%) translateY(14px);
    }
}

/* =========================================
   SECTION COMMON
   ========================================= */
.section {
    padding: 120px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 72px;
}

.section-tag {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: var(--accent-cyan);
    display: block;
    margin-bottom: 12px;
}

.section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    letter-spacing: -1px;
    margin-bottom: 16px;
}

.section-line {
    width: 60px;
    height: 3px;
    background: var(--gradient-primary);
    margin: 0 auto;
    border-radius: 3px;
}

/* =========================================
   ABOUT
   ========================================= */
.about {
    background: var(--bg-secondary);
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.about-text p {
    color: var(--text-secondary);
    margin-bottom: 20px;
}

.about-highlights {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 32px;
}

.highlight-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 16px;
    border-radius: var(--radius-md);
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    transition: var(--transition-smooth);
}

.highlight-item:hover {
    border-color: rgba(168, 85, 247, 0.3);
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
}

.highlight-icon {
    font-size: 1.4rem;
    flex-shrink: 0;
}

.highlight-item strong {
    display: block;
    font-size: 0.9rem;
    margin-bottom: 2px;
}

.highlight-item span {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.code-window {
    border-radius: var(--radius-md);
    overflow: hidden;
    background: #1e1e2e;
    border: 1px solid var(--border-subtle);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
}

.code-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 20px;
    background: rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid var(--border-subtle);
}

.code-dots {
    display: flex;
    gap: 6px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.dot.red {
    background: #ff5f57;
}

.dot.yellow {
    background: #febc2e;
}

.dot.green {
    background: #28c840;
}

.code-title {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--text-muted);
}

.code-body {
    padding: 24px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    line-height: 1.8;
    overflow-x: auto;
    color: #cdd6f4;
}

.code-keyword {
    color: #cba6f7;
}

.code-class {
    color: #89dceb;
}

.code-func {
    color: #89b4fa;
}

.code-var {
    color: #f9e2af;
}

.code-string {
    color: #a6e3a1;
}

/* =========================================
   PROJECTS
   ========================================= */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
}

.project-card {
    background: var(--bg-card);
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid var(--border-subtle);
    transition: var(--transition-smooth);
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    border-color: rgba(168, 85, 247, 0.3);
    transform: translateY(-6px);
    box-shadow: var(--shadow-glow);
}

.project-card.featured {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
}

.project-image-placeholder {
    aspect-ratio: 16 / 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
}

.project-card.featured .project-image-placeholder {
    aspect-ratio: auto;
    min-height: 100%;
}

.project-icon {
    width: 100px;
    height: 80px;
    color: rgba(255, 255, 255, 0.6);
    transition: var(--transition-smooth);
}

.project-card:hover .project-icon {
    color: rgba(255, 255, 255, 0.9);
    transform: scale(1.1);
}

.sdg-gradient {
    background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
}

.visai-gradient {
    background: linear-gradient(135deg, #1a1025, #2d1b4e, #4a1942);
}

.freqdiv-gradient {
    background: linear-gradient(135deg, #1a0f27, #2e1a3d, #3d1a52);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 10, 15, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition-smooth);
}

.project-image {
    position: relative;
    overflow: hidden;
}

.project-image:hover .project-overlay {
    opacity: 1;
}

.project-link-btn {
    padding: 12px 28px;
    background: var(--gradient-primary);
    color: #0a0a0f;
    border-radius: 8px;
    font-weight: 600;
    transform: translateY(10px);
    transition: var(--transition-smooth);
}

.project-image:hover .project-link-btn {
    transform: translateY(0);
}

.project-content {
    padding: 28px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
}

.tag {
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
}

.tag-hardware {
    background: rgba(249, 115, 22, 0.15);
    color: #f97316;
    border: 1px solid rgba(249, 115, 22, 0.3);
}

.tag-iot {
    background: rgba(0, 212, 255, 0.12);
    color: #00d4ff;
    border: 1px solid rgba(0, 212, 255, 0.3);
}

.tag-web {
    background: rgba(34, 197, 94, 0.12);
    color: #22c55e;
    border: 1px solid rgba(34, 197, 94, 0.3);
}

.tag-competition {
    background: rgba(236, 72, 153, 0.12);
    color: #ec4899;
    border: 1px solid rgba(236, 72, 153, 0.3);
}

.project-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 12px;
}

.project-desc {
    color: var(--text-secondary);
    font-size: 0.92rem;
    line-height: 1.7;
    margin-bottom: 16px;
    flex: 1;
}

.project-features {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
    font-size: 0.82rem;
    color: var(--text-muted);
}

.project-github {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: var(--text-secondary);
    transition: 0.2s;
    margin-top: auto;
}

.project-github:hover {
    color: var(--accent-cyan);
}

/* =========================================
   TIMELINE (Experience)
   ========================================= */
.experience {
    background: var(--bg-primary);
}

.timeline {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    padding-left: 40px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), transparent);
}

.timeline-item {
    position: relative;
    margin-bottom: 40px;
}

.timeline-marker {
    position: absolute;
    left: -33px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-cyan);
    border: 3px solid var(--bg-primary);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.2);
}

.timeline-content {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 28px;
    transition: var(--transition-smooth);
}

.timeline-content:hover {
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: var(--shadow-glow);
    transform: translateX(4px);
}

.timeline-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;
}

.timeline-header h3 {
    font-size: 1.1rem;
    font-weight: 700;
}

.timeline-company {
    font-size: 0.85rem;
    color: var(--accent-cyan);
}

.timeline-date {
    display: inline-block;
    font-size: 0.8rem;
    color: var(--text-muted);
    font-family: var(--font-mono);
    margin-bottom: 16px;
}

.timeline-details {
    list-style: none;
}

.timeline-details li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.timeline-details li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-cyan);
}

/* =========================================
   SKILLS
   ========================================= */
.skills {
    background: var(--bg-secondary);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.skill-category {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 28px;
    transition: var(--transition-smooth);
}

.skill-category:hover {
    border-color: rgba(168, 85, 247, 0.3);
    transform: translateY(-4px);
    box-shadow: var(--shadow-glow);
}

.skill-category-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
}

.skill-category-icon {
    font-size: 1.5rem;
}

.skill-category h3 {
    font-size: 1rem;
    font-weight: 700;
}

.skill-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.skill-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.88rem;
    color: var(--text-secondary);
    padding: 8px 12px;
    border-radius: 8px;
    transition: 0.2s;
}

.skill-item:hover {
    background: rgba(255, 255, 255, 0.03);
    color: var(--text-primary);
}

.skill-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.skill-dot.hardware {
    background: #f97316;
}

.skill-dot.iot {
    background: #00d4ff;
}

.skill-dot.web {
    background: #22c55e;
}

.skill-dot.tools {
    background: #a855f7;
}

/* =========================================
   CONTACT
   ========================================= */
.contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 900px;
    margin: 0 auto;
}

.contact-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    padding: 36px 28px;
    text-align: center;
    transition: var(--transition-smooth);
    position: relative;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    display: block;
}

.contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: var(--transition-smooth);
}

.contact-card:hover {
    border-color: rgba(168, 85, 247, 0.3);
    transform: translateY(-6px);
    box-shadow: var(--shadow-glow);
}

.contact-card:hover::before {
    transform: scaleX(1);
}

.contact-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: var(--radius-md);
    background: rgba(168, 85, 247, 0.1);
    color: var(--accent-purple);
    margin-bottom: 16px;
    transition: var(--transition-smooth);
}

.contact-card:hover .contact-icon {
    background: rgba(168, 85, 247, 0.2);
    transform: scale(1.1);
}

.contact-card h3 {
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 8px;
}

.contact-card p {
    font-size: 0.88rem;
    color: var(--text-secondary);
    word-break: break-word;
}

.contact-arrow {
    display: block;
    margin-top: 16px;
    font-size: 1.2rem;
    color: var(--accent-cyan);
    opacity: 0;
    transform: translateX(-10px);
    transition: var(--transition-smooth);
}

.contact-card:hover .contact-arrow {
    opacity: 1;
    transform: translateX(0);
}

/* =========================================
   FOOTER
   ========================================= */
.footer {
    padding: 40px 0;
    border-top: 1px solid var(--border-subtle);
    background: var(--bg-primary);
    text-align: center;
}

.footer-logo {
    font-family: var(--font-mono);
    font-size: 1.2rem;
    font-weight: 700;
    display: block;
    margin-bottom: 12px;
}

.footer p {
    font-size: 0.88rem;
    color: var(--text-muted);
}

.footer-year {
    margin-top: 4px;
}

/* =========================================
   REVEAL ANIMATIONS
   ========================================= */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.revealed {
    opacity: 1;
    transform: translateY(0);
}

/* =========================================
   RESPONSIVE
   ========================================= */
@media (max-width: 1024px) {
    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .project-card.featured {
        grid-column: auto;
        display: flex;
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .nav-links {
        position: fixed;
        top: 0;
        right: -100%;
        width: 75%;
        max-width: 320px;
        height: 100vh;
        background: var(--bg-secondary);
        flex-direction: column;
        align-items: flex-start;
        padding: 100px 40px 40px;
        gap: 4px;
        transition: var(--transition-smooth);
        border-left: 1px solid var(--border-subtle);
    }

    .nav-links.open {
        right: 0;
    }

    .nav-toggle {
        display: block;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .about-highlights {
        grid-template-columns: 1fr;
    }

    .hero-stats {
        gap: 20px;
    }

    .stat-number {
        font-size: 1.6rem;
    }

    .contact-grid {
        grid-template-columns: 1fr;
    }

    .section {
        padding: 80px 0;
    }

    .hero {
        padding: 100px 20px 60px;
    }

    .hero-subtitle-wrapper {
        flex-direction: column;
        gap: 2px;
    }
}

@media (max-width: 480px) {
    .skills-grid {
        grid-template-columns: 1fr;
    }

    .hero-cta {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 280px;
        justify-content: center;
    }
}

/* Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}
