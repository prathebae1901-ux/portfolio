/**
 * Portfolio Interactive Controller for Pratheba E
 */

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // Data Declarations
    // -------------------------------------------------------------

    const skills = [
        { name: "Python", level: 92, category: "languages", tags: ["Data Science", "Scripting", "Libraries"] },
        { name: "SQL", level: 88, category: "languages", tags: ["Database Queries", "Triggers", "Views"] },
        { name: "R", level: 75, category: "languages", tags: ["Biostatistics", "Visualization"] },
        { name: "Java", level: 70, category: "languages", tags: ["Object Oriented", "Core"] },
        { name: "C / C++", level: 78, category: "languages", tags: ["Algorithms", "Pointers"] },

        { name: "Scikit-learn", level: 88, category: "ml-dl", tags: ["Classifiers", "Regression", "Clusters"] },
        { name: "Pandas & NumPy", level: 92, category: "ml-dl", tags: ["Dataframes", "Data Wrangling"] },

        { name: "MySQL", level: 85, category: "databases", tags: ["Relational Models", "Normalization"] },
        { name: "Git & Version Control", level: 82, category: "databases", tags: ["Commits", "Branches", "Collaboration"] },
        { name: "Linux / Bash", level: 75, category: "databases", tags: ["Terminal commands", "Automation"] },
        { name: "Jupyter & Colab", level: 90, category: "databases", tags: ["Interactive notebooks", "Prototyping"] },
        { name: "Website Creation", level: 84, category: "databases", tags: ["HTML", "CSS", "JavaScript"] },

        { name: "Image Processing", level: 80, category: "concepts", tags: ["OpenCV", "Tesseract OCR", "Thresholds"] },
        { name: "Time-Series Analysis", level: 75, category: "concepts", tags: ["Smoothing", "Trends", "Seasonality"] },
        { name: "Data Visualization", level: 86, category: "concepts", tags: ["Matplotlib", "Seaborn", "Plots"] },
        { name: "Database Security", level: 70, category: "concepts", tags: ["Auth", "Schema Isolation"] }
    ];

    const projects = [
        {
            id: "cot-drug",
            title: "CoT Framework for Drug Interpretation via LLMs",
            subtitle: "Research In-Progress · NLP & Biomedical AI",
            category: "research",
            desc: "Developing a Chain-of-Thought prompting strategy to guide Large Language Models through multi-step drug interaction reasoning for clinical decision support.",
            tags: ["Python", "LLM APIs", "Prompt Engineering", "NLP", "Biomedical AI"],
            details: {
                background: "Large Language Models often struggle with complex clinical reasoning. Subtleties in molecular structures, biological pathways, and multi-stage interactions require structured thought representation. This research establishes explicit intermediate reasoning steps prior to giving recommendations.",
                contributions: [
                    "Collaborated with faculty to draft a detailed Chain-of-Thought (CoT) prompting structure for clinical drug interaction interpretation.",
                    "Configured biological token structures and context injection to minimize hallucination rates on rare compound queries.",
                    "Improved explanation scores and outcome safety levels across standard clinical scenario benchmarks.",
                    "Prepared drafts of the academic publication detailing the prompting architecture and empirical validation results."
                ]
            }
        },
        {
            id: "drug-mysql",
            title: "Drug Analysis System Using MySQL",
            subtitle: "Team Project · Image Processing & DB",
            category: "systems",
            desc: "Designed relational database schema to store and query 500+ pharmaceutical records, integrating an OpenCV scan lookup for visual-to-data mapping.",
            tags: ["Python", "MySQL", "Image Processing", "OpenCV", "Tkinter"],
            details: {
                background: "Pharmaceutical tracking systems require reliable record queries combined with intuitive, error-free lookup mechanisms. This project integrates optical text feature queries into database retrieval.",
                contributions: [
                    "Designed and normalized a relational database schema in MySQL managing dosage guidelines, therapeutic categories, and drug warnings.",
                    "Engineered a visual camera scanner module using OpenCV to locate text blocks on packaging wrappers.",
                    "Constructed SQL lookup indexes to accelerate pharmaceutical query returns under high record stress.",
                    "Built a fully custom Tkinter dashboard interface linking scanned OCR variables to immediate SQL queries."
                ]
            }
        },
        {
            id: "license-plate",
            title: "Automatic Vehicle Plate Detection (ANPR)",
            subtitle: "Team Project · Computer Vision",
            category: "ml",
            desc: "Built a custom automatic vehicle license plate recognition pipeline using OpenCV contours and Tesseract OCR, achieving ~90% extraction accuracy.",
            tags: ["Python", "OpenCV", "Tesseract OCR", "Image Processing"],
            details: {
                background: "Real-time license plate detection requires robust preprocessing to handle lighting distortions, environmental angle skew, and camera sensor noise.",
                contributions: [
                    "Developed image cleaning scripts utilizing bilateral filters, morphology operators, and adaptive threshold thresholding.",
                    "Designed a contour extraction search looking for rectangular aspect ratios matching license plate dimensions.",
                    "Integrated Tesseract OCR with tailored alphanumeric constraints (e.g. state codes, numbers) to improve validation scores.",
                    "Evaluated pipeline on real-world vehicle images in diverse lighting conditions, securing a ~90% recognition rate."
                ]
            }
        },
        {
            id: "aura-companion",
            title: "Aura Companion — AI Support App",
            subtitle: "Team Project · Voice & Natural Language",
            category: "systems",
            desc: "Developed an AI-powered wellness web app that combines voice chat and scheduled automated call-based check-ins to support users facing social isolation.",
            tags: ["Python", "Web APIs", "NLP", "Voice Synthesis", "Workflows"],
            details: {
                background: "Social isolation impacts physical and mental health. Aura Companion forms a consistent connection layer through schedule-triggered interactions rather than waiting for user initiation.",
                contributions: [
                    "Integrated Speech-to-Text APIs and NLP parsing to extract user status and response indicators during chat cycles.",
                    "Created check-in scheduler workflows utilizing cron jobs to trigger automated reminders and wellness outreach call notifications.",
                    "Implemented responsive UI dashboards using clean CSS layouts and glassmorphic designs to ensure high accessibility.",
                    "Structured data payloads and API integrations between dialogue state machines and the user contact database."
                ]
            }
        },
        {
            id: "sleep-analysis",
            title: "Multi-Stage Sleep Pattern Analysis",
            subtitle: "Team Project · Applied Machine Learning",
            category: "ml",
            desc: "Analyzed multi-stage sleep cycles (light, deep, REM) across 1,000+ data instances; trained three classifiers to predict optimal waking windows.",
            tags: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
            details: {
                background: "Predicting optimal wakefulness windows by evaluating sleep stage distributions provides actionable feedback metrics for consumer wellness trackers.",
                contributions: [
                    "Cleaned, normalized, and engineered features on 1,000+ clinical sleep stage distribution records.",
                    "Trained and cross-validated Logistic Regression, Random Forest, and SVM models to map cycle combinations to rest scores.",
                    "Achieved optimal classification scores using the Random Forest classifier, producing an F1-score of 0.83.",
                    "Built comprehensive correlation heatmaps and boxplots using Seaborn to highlight stage ratios versus overall recovery outcomes."
                ]
            }
        }
    ];

    const certs = [
        { title: "AWS VPC Project", issuer: "Coursera", date: "May 2026", icon: "cloud" },
        { title: "Intro to Machine Learning", issuer: "Kaggle", date: "May 2026", icon: "brain" },
        { title: "Pandas & Python", issuer: "Kaggle", date: "May 2026", icon: "code" },
        { title: "ICAT — CIT-P-3326004", issuer: "iCAT", date: "May 2026", icon: "award" },
        { title: "Cyber Job Simulation", issuer: "Deloitte / Forage", date: "Aug 2025", icon: "shield" },
        { title: "Google Gemini Quiz", issuer: "Google GSA", date: "Oct 2025", icon: "search" },
        { title: "AI & DS Workshop", issuer: "NoviTech R&D", date: "Sep 2024", icon: "cpu" }
    ];

    // SVG Icons Map to bypass external CDN requirements
    const iconSvgs = {
        cloud: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.42-1.04-1.21-1.92-2.2-2.5A6.5 6.5 0 0 0 2 13a4 4 0 0 0 4 4h11.5z"></path></svg>`,
        brain: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z"></path></svg>`,
        code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
        award: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
        shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
        search: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
        cpu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
        extern: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
    };

    // -------------------------------------------------------------
    // Canvas Background: Neural Wave Connection System
    // -------------------------------------------------------------
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');

    let particles = [];
    let waves = [];
    const maxParticles = 60;
    const connectionDist = 120;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    // Responsive Canvas Resizing
    window.addEventListener('resize', () => {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        initParticles();
    });

    window.addEventListener('mousemove', (e) => {
        const bounds = canvas.getBoundingClientRect();
        mouse.x = e.clientX - bounds.left;
        mouse.y = e.clientY - bounds.top;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Node particle class definition
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2 + 1.5;
            this.alpha = Math.random() * 0.5 + 0.3;
        }

        update() {
            // Base movement
            this.x += this.vx;
            this.y += this.vy;

            // Boundary checks
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse proximity influence (repelling force)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    // Subtle nudge away
                    this.x += Math.cos(angle) * force * 0.8;
                    this.y += Math.sin(angle) * force * 0.8;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 179, 135, ${this.alpha})`;
            ctx.fill();
        }
    }

    // Gold flow wave class definition (representing dance logic and flow)
    class GoldWave {
        constructor(yOffset, frequency, amplitude, speed, opacity) {
            this.yOffset = yOffset;
            this.frequency = frequency;
            this.amplitude = amplitude;
            this.speed = speed;
            this.opacity = opacity;
            this.phase = Math.random() * 100;
        }

        update() {
            this.phase += this.speed;
        }

        draw() {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 179, 135, ${this.opacity})`;
            ctx.lineWidth = 1;

            for (let x = 0; x < width; x += 5) {
                const angle = (x * this.frequency) + this.phase;
                const y = this.yOffset + Math.sin(angle) * this.amplitude;
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }

        // Initialize 3 flowing gold waves running across different height bands
        waves = [
            new GoldWave(height * 0.45, 0.002, 35, 0.002, 0.05),
            new GoldWave(height * 0.5, 0.003, 45, 0.003, 0.07),
            new GoldWave(height * 0.55, 0.0015, 25, 0.001, 0.04)
        ];
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDist) {
                    const alpha = (1 - (dist / connectionDist)) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(212, 179, 135, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
    }

    function animateBackground() {
        ctx.clearRect(0, 0, width, height);

        // Draw Waves first (acts as fluid background flow)
        waves.forEach(wave => {
            wave.update();
            wave.draw();
        });

        // Draw and update particle connection lattice
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        drawConnections();

        requestAnimationFrame(animateBackground);
    }

    initParticles();
    animateBackground();


    // -------------------------------------------------------------
    // Skills Rendering & Filtering
    // -------------------------------------------------------------
    const skillsGrid = document.getElementById('skills-grid');
    const skillTabBtns = document.querySelectorAll('.skills-tab-btn');

    function renderSkills(categoryFilter = 'all') {
        skillsGrid.innerHTML = '';
        const filtered = categoryFilter === 'all' 
            ? skills 
            : skills.filter(s => s.category === categoryFilter);

        filtered.forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card reveal';
            
            const tagsHTML = skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('');

            card.innerHTML = `
                <div class="skill-header">
                    <span class="skill-title">${skill.name}</span>
                    <span class="skill-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </span>
                </div>
                <div class="skill-level-container">
                    <div class="skill-level-info">
                        <span>Proficiency</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="skill-progress-bg">
                        <div class="skill-progress-bar" data-level="${skill.level}"></div>
                    </div>
                </div>
                <div class="skill-tags">
                    ${tagsHTML}
                </div>
            `;
            skillsGrid.appendChild(card);
        });

        // Trigger animations for bars shortly after inserting
        setTimeout(() => {
            document.querySelectorAll('.skill-progress-bar').forEach(bar => {
                const targetLevel = bar.getAttribute('data-level');
                bar.style.width = `${targetLevel}%`;
            });
            // Re-bind intersection observer triggers for new cards
            initObserver();
        }, 50);
    }

    // Bind skills filter tabs
    skillTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            skillTabBtns.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            
            // Nice fade transition
            skillsGrid.style.opacity = '0';
            setTimeout(() => {
                renderSkills(category);
                skillsGrid.style.opacity = '1';
            }, 200);
        });
    });

    // Initial Skills Load
    renderSkills();


    // -------------------------------------------------------------
    // Portfolio Rendering & Filtering
    // -------------------------------------------------------------
    const portfolioGrid = document.getElementById('portfolio-grid');
    const portfolioFilterBtns = document.querySelectorAll('.portfolio-filter-btn');

    // Create inline graphic symbols based on category to beautify card representations
    function getGraphicForCategory(category) {
        if (category === 'research') {
            return `<svg class="portfolio-card-graphic" viewBox="0 0 100 100" fill="none" stroke="rgba(212,179,135,0.15)" stroke-width="1.5">
                <circle cx="50" cy="50" r="40" stroke-dasharray="4,4" />
                <circle cx="50" cy="50" r="25" />
                <path d="M50 10 L50 90 M10 50 L90 50" />
            </svg>`;
        } else if (category === 'ml') {
            return `<svg class="portfolio-card-graphic" viewBox="0 0 100 100" fill="none" stroke="rgba(212,179,135,0.15)" stroke-width="1.5">
                <rect x="25" y="25" width="50" height="50" rx="6" />
                <circle cx="35" cy="35" r="4" fill="rgba(212,179,135,0.3)" />
                <circle cx="65" cy="35" r="4" fill="rgba(212,179,135,0.3)" />
                <circle cx="35" cy="65" r="4" fill="rgba(212,179,135,0.3)" />
                <circle cx="65" cy="65" r="4" fill="rgba(212,179,135,0.3)" />
                <line x1="35" y1="35" x2="65" y2="65" />
                <line x1="65" y1="35" x2="35" y2="65" />
            </svg>`;
        } else {
            return `<svg class="portfolio-card-graphic" viewBox="0 0 100 100" fill="none" stroke="rgba(212,179,135,0.15)" stroke-width="1.5">
                <path d="M15 25 L85 25 L85 75 L15 75 Z" />
                <path d="M15 35 L85 35" />
                <circle cx="25" cy="30" r="2" fill="rgba(212,179,135,0.3)" />
                <circle cx="35" cy="30" r="2" fill="rgba(212,179,135,0.3)" />
                <circle cx="45" cy="30" r="2" fill="rgba(212,179,135,0.3)" />
            </svg>`;
        }
    }

    function renderPortfolio(filter = 'all') {
        portfolioGrid.innerHTML = '';
        const filtered = filter === 'all'
            ? projects
            : projects.filter(p => p.category === filter);

        filtered.forEach(project => {
            const card = document.createElement('div');
            card.className = 'portfolio-item reveal';
            
            const techHTML = project.tags.map(t => `<span class="portfolio-tech-item">${t}</span>`).join('');
            const cardGraphic = getGraphicForCategory(project.category);
            const categoryLabel = project.category === 'research' ? 'Research Track' : project.category === 'ml' ? 'ML Engineering' : 'Systems & Dev';

            card.innerHTML = `
                <div class="portfolio-image-wrapper">
                    ${cardGraphic}
                    <span class="portfolio-category-tag">${categoryLabel}</span>
                </div>
                <div class="portfolio-item-content">
                    <h3 class="portfolio-item-title serif-font">${project.title}</h3>
                    <p class="portfolio-item-desc">${project.desc}</p>
                    <div class="portfolio-tech-list">
                        ${techHTML}
                    </div>
                    <div class="portfolio-more-link" data-id="${project.id}">
                        Read details
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
            `;
            portfolioGrid.appendChild(card);
        });

        // Add event listeners to portfolio detail triggers
        document.querySelectorAll('.portfolio-more-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const projectId = link.getAttribute('data-id');
                openProjectModal(projectId);
            });
        });

        setTimeout(initObserver, 50);
    }

    portfolioFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            portfolioFilterBtns.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            
            portfolioGrid.style.opacity = '0';
            setTimeout(() => {
                renderPortfolio(filter);
                portfolioGrid.style.opacity = '1';
            }, 200);
        });
    });

    // Load initial portfolio projects
    renderPortfolio();


    // -------------------------------------------------------------
    // Certifications Rendering
    // -------------------------------------------------------------
    const certsGrid = document.getElementById('certs-grid');

    function renderCertifications() {
        certsGrid.innerHTML = '';
        certs.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'cert-card reveal';
            const svgIcon = iconSvgs[cert.icon] || iconSvgs.award;

            card.innerHTML = `
                <div class="cert-icon">
                    ${svgIcon}
                </div>
                <div>
                    <h3 class="cert-title serif-font">${cert.title}</h3>
                    <div class="cert-issuer">${cert.issuer}</div>
                </div>
                <div class="cert-meta">
                    <span>Issued</span>
                    <span>${cert.date}</span>
                </div>
            `;
            certsGrid.appendChild(card);
        });
        setTimeout(initObserver, 50);
    }

    renderCertifications();


    // -------------------------------------------------------------
    // Modal Interaction (Project Details Popup)
    // -------------------------------------------------------------
    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function openProjectModal(id) {
        const project = projects.find(p => p.id === id);
        if (!project) return;

        const techHTML = project.tags.map(t => `<span class="portfolio-tech-item">${t}</span>`).join('');
        const bulletsHTML = project.details.contributions.map(bullet => `<li>${bullet}</li>`).join('');

        modalBody.innerHTML = `
            <h3 class="modal-project-title serif-font">${project.title}</h3>
            <div class="modal-project-meta">${project.subtitle}</div>
            
            <div class="modal-detail-section">
                <div class="modal-detail-title">Context & Challenge</div>
                <p class="modal-project-desc">${project.details.background}</p>
            </div>

            <div class="modal-detail-section">
                <div class="modal-detail-title">Key Contributions & Engineering</div>
                <ul class="modal-detail-bullets timeline-bullets">
                    ${bulletsHTML}
                </ul>
            </div>

            <div class="modal-detail-section" style="margin-bottom:0;">
                <div class="modal-detail-title" style="margin-bottom:15px;">Tools & Technologies</div>
                <div class="portfolio-tech-list">
                    ${techHTML}
                </div>
            </div>
        `;

        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background body scroll
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });


    // -------------------------------------------------------------
    // Reveal On Scroll (IntersectionObserver)
    // -------------------------------------------------------------
    let observer;
    function initObserver() {
        if (observer) {
            observer.disconnect();
        }

        const revealElements = document.querySelectorAll('.reveal');
        
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Once animated, no need to track it again
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }


    // -------------------------------------------------------------
    // Header Style changes on Scroll & Navigation ScrollSpy
    // -------------------------------------------------------------
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Sticky Header shrink
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scrollspy navigation highlight
        let currentSectionId = '';
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                currentSectionId = id;
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });


    // -------------------------------------------------------------
    // Mobile Responsive Menu Toggle
    // -------------------------------------------------------------
    const menuToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when links are clicked on mobile
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });


    // -------------------------------------------------------------
    // Form Submission Actions
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulating loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'TRANSMITTING DATA...';
        
        setTimeout(() => {
            // Success response mockup
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Message successfully received! Pratheba will review and connect shortly.';
            
            // Clear inputs
            contactForm.reset();
            
            // Restore button
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;

            // Remove success message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 6000);
        }, 1500);
    });
});
