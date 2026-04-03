/* =============================================
   AutoHub Turda — JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    // =============================================
    // SCROLL PROGRESS BAR
    // =============================================
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + '%';
        }, { passive: true });
    }

    // =============================================
    // CUSTOM CURSOR
    // =============================================
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        // Ring follows with smooth lag
        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        };
        animateRing();

        // Scale dot on clickable elements
        document.querySelectorAll('a, button, .service-card, .why-card, .stat').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
                cursorDot.style.background = 'var(--orange-dark)';
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDot.style.background = 'var(--orange)';
            });
        });
    }

    // =============================================
    // INTRO — Garage Door Animation
    // =============================================
    const intro = document.getElementById('intro-overlay');
    if (intro) {
        // After garage door animation completes, fade out overlay
        setTimeout(() => {
            intro.classList.add('done');
            document.body.style.overflow = '';
        }, 3800);
        // Prevent scroll during intro
        document.body.style.overflow = 'hidden';
    }

    // =============================================
    // NAVBAR — Scroll behavior
    // =============================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });
    }

    // Active link highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = navLinks.querySelector(`a[href="#${id}"]`);
            if (link) {
                if (scrollY >= top && scrollY < top + height) {
                    link.style.color = '#F97316';
                } else {
                    link.style.color = '';
                }
            }
        });
    });

    // =============================================
    // SCROLL REVEAL
    // =============================================
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // =============================================
    // CAR VIDEO — Smooth autoplay (slow speed)
    // =============================================
    const carVideo = document.getElementById('car-video');

    if (carVideo) {
        carVideo.playbackRate = 0.3; // Slow cinematic pace
        carVideo.loop = true;

        // Auto-play once loaded
        carVideo.addEventListener('canplay', () => {
            carVideo.play().catch(() => {
                // Autoplay blocked — will start on first user interaction
                document.addEventListener('click', () => carVideo.play(), { once: true });
                document.addEventListener('scroll', () => carVideo.play(), { once: true });
            });
        });

        carVideo.load();
    }

    // =============================================
    // HERO PARTICLES
    // =============================================
    const particlesContainer = document.getElementById('hero-particles');
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = (50 + Math.random() * 50) + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (6 + Math.random() * 6) + 's';
            particle.style.width = (1 + Math.random() * 2) + 'px';
            particle.style.height = particle.style.width;
            particlesContainer.appendChild(particle);
        }
    }

    // =============================================
    // COUNTER ANIMATION
    // =============================================
    const counters = document.querySelectorAll('.stat-number[data-target]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.target);
                const isDecimal = el.dataset.decimal === 'true';
                const duration = 2000;
                const start = performance.now();

                const animate = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = target * eased;

                    if (isDecimal) {
                        el.textContent = current.toFixed(1);
                    } else {
                        el.textContent = Math.floor(current);
                    }

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        if (isDecimal) {
                            el.textContent = target.toFixed(1);
                        } else {
                            el.textContent = target;
                        }
                    }
                };

                requestAnimationFrame(animate);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // =============================================
    // REVIEWS CAROUSEL
    // =============================================
    // Reviews marquee — handled via CSS animation

    // =============================================
    // APPOINTMENT FORM
    // =============================================
    const form = document.getElementById('appointment-form');
    const dateInput = document.getElementById('date');

    // Set minimum date to today
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Show success message
            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;

            btn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span>Programare trimisă!</span>
            `;
            btn.style.background = '#16a34a';
            btn.disabled = true;

            // Construct WhatsApp message
            const message = `Bună ziua! Aș dori o programare:\n` +
                `Nume: ${data.name}\n` +
                `Telefon: ${data.phone}\n` +
                `Serviciu: ${data.service}\n` +
                `Data dorită: ${data.date}\n` +
                `Mașina: ${data.car || 'Nespecificat'}\n` +
                `Detalii: ${data.message || 'Fără detalii suplimentare'}`;

            // In production, this would send the form data
            console.log('Form submitted:', data);
            console.log('WhatsApp message:', message);

            // Reset after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }

    // =============================================
    // SMOOTH SCROLL — Offset for fixed navbar
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const position = target.offsetTop - offset;
                window.scrollTo({ top: position, behavior: 'smooth' });
            }
        });
    });

});
