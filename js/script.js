document.addEventListener('DOMContentLoaded', function() {
    // Funkcja do wyróżniania firm
    function highlightCompanyInfo() {
        const companyDateElements = document.querySelectorAll('.experience .timeline-item .company-date');
        companyDateElements.forEach(element => {
            const text = element.textContent.toLowerCase();
            element.classList.remove('highlight-euvic', 'highlight-media-saturn', 'highlight-qumak');
            if (text.includes('euvic it')) {
                element.classList.add('highlight-euvic');
            } else if (text.includes('media saturn') || text.includes('mms technology')) {
                element.classList.add('highlight-media-saturn');
            } else if (text.includes('qumak s.a')) {
                element.classList.add('highlight-qumak');
            }
        });
    }
    // Uruchomienie funkcji wyróżniania
    highlightCompanyInfo();

    // Przycisk przewijania do góry pojawia się po przewinięciu 300px
    window.addEventListener('scroll', function() {
      const scrollBtn = document.getElementById('scrollToTopBtn');
      if (window.scrollY > 300) {
        scrollBtn.style.display = 'flex';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
    document.getElementById('scrollToTopBtn').onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    document.getElementById('printBtn').onclick = function() {
      window.print();
    };
});
  // Create geometric shapes
        function createShapes() {
            const background = document.getElementById('geometric-background');
            const shapeTypes = ['square', 'circle', 'triangle', 'rectangle'];
            
            for (let i = 0; i < 40; i++) {
                const shape = document.createElement('div');
                const shapeClass = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
                shape.className = `shape ${shapeClass}`;
                
                // Random positions
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // Random animation properties
                const delay = Math.random() * 10;
                const duration = Math.random() * 10 + 10;
                
                // Apply styles
                shape.style.left = `${posX}%`;
                shape.style.top = `${posY}%`;
                shape.style.animationDelay = `${delay}s`;
                shape.style.animationDuration = `${duration}s`;
                
                background.appendChild(shape);
            }
        }

        // Create particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            
            for (let i = 0; i < 100; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random positions
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                // Random animation properties
                const delay = Math.random() * 8;
                const duration = Math.random() * 4 + 4;
                
                // Apply styles
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDelay = `${delay}s`;
                particle.style.animationDuration = `${duration}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Mouse movement interaction
        function addMouseInteraction() {
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                const shapes = document.querySelectorAll('.shape');
                shapes.forEach(shape => {
                    const speed = 0.05;
                    const shapeX = parseFloat(shape.style.left);
                    const shapeY = parseFloat(shape.style.top);
                    
                    shape.style.left = `${shapeX + (x - 0.5) * speed}%`;
                    shape.style.top = `${shapeY + (y - 0.5) * speed}%`;
                });
            });
        }

        // Initialize animation
        document.addEventListener('DOMContentLoaded', () => {
            createShapes();
            createParticles();
            addMouseInteraction();
        });
// --- ANIMACJE CV PO URUCHOMIENIU STRONY ---
document.addEventListener('DOMContentLoaded', function() {
    // Helper: sprawdza czy element jest widoczny w oknie
    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // 1. Animacja losowania liter dla imienia i nazwiska (wolniejsze, styl "hakier/kodowanie") - tylko gdy na ekranie
    const nameTitle = document.querySelector('.name-title');
    if (nameTitle) {
        nameTitle.style.opacity = 0;
        let nameAnimated = false;
        function animateNameOnScreen() {
            if (nameAnimated) return;
            if (isInViewport(nameTitle)) {
                nameAnimated = true;
                nameTitle.style.opacity = 1;
                function animateName(selector, text, speed = 65) {
                    const el = document.querySelector(selector);
                    if (!el) return;
                    let frame = 0;
                    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?[]{}|';
                    let interval = setInterval(() => {
                        let displayed = '';
                        for (let i = 0; i < text.length; i++) {
                            if (i < frame) {
                                displayed += text[i];
                            } else if (text[i] === ' ') {
                                displayed += ' ';
                            } else {
                                displayed += charset[Math.floor(Math.random() * charset.length)];
                            }
                        }
                        el.textContent = displayed;
                        if (frame < 3) {
                            frame += 1;
                        } else {
                            frame += 0.5;
                        }
                        if (frame >= text.length) {
                            el.textContent = text;
                            clearInterval(interval);
                        }
                    }, speed);
                }
                animateName('.name-title', 'RAFAŁ CZERNIAK');
            }
        }
        window.addEventListener('scroll', animateNameOnScreen);
        setTimeout(animateNameOnScreen, 300);
    }

    // 2. Animacja powiększenia/pomniejszenia podtytułu + efekt "uderzenia" - tylko gdy na ekranie
    const subtitle = document.querySelector('.job-subtitle');
    if (subtitle) {
        subtitle.style.opacity = 0;
        let subtitleAnimated = false;
        function animateSubtitleOnScreen() {
            if (subtitleAnimated) return;
            if (isInViewport(subtitle)) {
                subtitleAnimated = true;
                subtitle.style.opacity = 1;
                subtitle.style.transition = 'transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
                subtitle.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    subtitle.style.transform = 'scale(1)';
                    setTimeout(() => {
                        subtitle.style.transition = 'transform 0.18s cubic-bezier(.68,-0.55,.27,1.55)';
                        subtitle.style.transform = 'scale(1.18) translateY(-8px)';
                        setTimeout(() => {
                            subtitle.style.transform = 'scale(1)';
                            subtitle.style.transition = 'transform 0.4s cubic-bezier(.68,-0.55,.27,1.55)';
                        }, 180);
                    }, 220);
                }, 700);
            }
        }
        window.addEventListener('scroll', animateSubtitleOnScreen);
        setTimeout(animateSubtitleOnScreen, 300);
    }

    // 3. Fade-in dla nagłówka "Doświadczenie Zawodowe" - tylko gdy na ekranie
    const expHeader = document.querySelector('.experience h2');
    if (expHeader) {
        expHeader.style.opacity = 0;
        let expHeaderAnimated = false;
        function animateExpHeaderOnScreen() {
            if (expHeaderAnimated) return;
            if (isInViewport(expHeader)) {
                expHeaderAnimated = true;
                expHeader.style.transition = 'opacity 0.8s cubic-bezier(.68,-0.55,.27,1.55)';
                setTimeout(() => {
                    expHeader.style.opacity = 1;
                }, 200);
            }
        }
        window.addEventListener('scroll', animateExpHeaderOnScreen);
        setTimeout(animateExpHeaderOnScreen, 300);
    }

    // 4. Linia czasu - wjazd z prawego boku, powiększenie najnowszej pracy - tylko gdy na ekranie
    const timeline = document.querySelector('.experience .timeline');
    if (timeline) {
        timeline.style.opacity = 0;
        timeline.style.transform = 'translateX(180px)';
        timeline.style.transition = 'opacity 0.9s, transform 0.9s cubic-bezier(.68,-0.55,.27,1.55)';
        const items = timeline.querySelectorAll('.timeline-item.card');
        items.forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateX(120px)';
            item.style.transition = 'none';
        });
        let timelineAnimated = false;
        function animateTimelineOnScreen() {
            if (timelineAnimated) return;
            if (isInViewport(timeline)) {
                timelineAnimated = true;
                setTimeout(() => {
                    timeline.style.opacity = 1;
                    timeline.style.transform = 'translateX(0)';
                    items.forEach((item, idx) => {
                        setTimeout(() => {
                            item.style.transition = 'opacity 0.85s, transform 0.85s cubic-bezier(.68,-0.55,.27,1.55)';
                            item.style.opacity = 1;
                            item.style.transform = 'translateX(0)';
                            if (idx === 0) {
                                setTimeout(() => {
                                    item.style.transition = 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.5s';
                                    item.style.transform = 'scale(1.04)';
                                    item.style.boxShadow = '0 8px 32px rgba(30,144,255,0.18)';
                                    setTimeout(() => {
                                        item.style.transform = '';
                                        item.style.boxShadow = '';
                                    }, 700);
                                }, 1200);
                            }
                        }, 400 + idx * 350); // było 600 + idx * 350, teraz szybciej
                    });
                }, 1200); // było 1600, teraz szybciej
            }
        }
        window.addEventListener('scroll', animateTimelineOnScreen);
        setTimeout(animateTimelineOnScreen, 300);
    }

    // 5. Animacje dla sekcji kontakt, podsumowanie, umiejętności, o mnie
    function fadeUpSectionOnScreen(selector, delay = 0) {
        const el = document.querySelector(selector);
        if (el) {
            el.style.opacity = 0;
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'opacity 0.7s, transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
            let animated = false;
            function animateSection() {
                if (animated) return;
                if (isInViewport(el)) {
                    animated = true;
                    setTimeout(() => {
                        el.style.opacity = 1;
                        el.style.transform = 'translateY(0)';
                    }, delay);
                }
            }
            window.addEventListener('scroll', animateSection);
            setTimeout(animateSection, 300);
        }
    }
    fadeUpSectionOnScreen('.contact-card', 400);

    // Podsumowanie Zawodowe: wjazd od dołu do góry, tylko gdy pojawi się na ekranie
    const aboutSection = document.querySelector('.about-me.card');
    if (aboutSection) {
        aboutSection.style.opacity = 0;
        aboutSection.style.transform = 'translateY(80px)';
        aboutSection.style.transition = 'opacity 0.8s, transform 0.8s cubic-bezier(.68,-0.55,.27,1.55)';
        let aboutAnimated = false;
        function animateAbout() {
            if (aboutAnimated) return;
            if (isInViewport(aboutSection)) {
                aboutAnimated = true;
                setTimeout(() => {
                    aboutSection.style.opacity = 1;
                    aboutSection.style.transform = 'translateY(0)';
                }, 700);
            }
        }
        window.addEventListener('scroll', animateAbout);
        setTimeout(animateAbout, 300);
    }

    // fadeUpSection('.about-me.card', 700); // Usunięte, bo powyżej jest własna animacja
    // fadeUpSection('.skills.card', 900); // Usuwamy tę linię, bo robimy własną animację dla umiejętności
    fadeUpSectionOnScreen('.interests.card', 1100);

    // Animacja dla sekcji Umiejętności: kategorie pojawiają się normalnie, a liście wjeżdżają na swoje miejsce po pojawieniu się sekcji na ekranie
    const skillsSection = document.querySelector('.skills.card');
    if (skillsSection) {
        skillsSection.style.opacity = 0;
        skillsSection.style.transform = 'translateY(40px)';
        skillsSection.style.transition = 'opacity 0.7s, transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
        let skillsAnimated = false;
        function animateSkills() {
            if (skillsAnimated) return;
            if (isInViewport(skillsSection)) {
                skillsAnimated = true;
                setTimeout(() => {
                    skillsSection.style.opacity = 1;
                    skillsSection.style.transform = 'translateY(0)';
                    const skillLists = skillsSection.querySelectorAll('ul');
                    let liDelay = 0;
                    skillLists.forEach((ul, ulIdx) => {
                        const lis = ul.querySelectorAll('li');
                        lis.forEach((li, liIdx) => {
                            li.style.opacity = 0;
                            li.style.transform = 'translateX(40px)';
                            li.style.transition = 'none';
                        });
                        lis.forEach((li, liIdx) => {
                            setTimeout(() => {
                                li.style.transition = 'opacity 0.6s, transform 0.6s cubic-bezier(.68,-0.55,.27,1.55)';
                                li.style.opacity = 1;
                                li.style.transform = 'translateX(0)';
                            }, 400 + (ulIdx * 100) + liDelay);
                            liDelay += 120;
                        });
                    });
                }, 1000);
            }
        }
        window.addEventListener('scroll', animateSkills);
        setTimeout(animateSkills, 300);
    }

    // Dodatkowa animacja dla sekcji kontakt: obrót karty
    const contactCard = document.querySelector('.contact-card .content');
    if (contactCard) {
        contactCard.style.transition = 'transform 1.1s cubic-bezier(.68,-0.55,.27,1.55)';
        contactCard.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            contactCard.style.transform = '';
        }, 900);
    }

    // 6. Efekt podświetlenia referencji po pojawieniu się sekcji
    const referencesSection = document.querySelector('.references');
    if (referencesSection) {
        let referencesAnimated = false;
        function animateReferences() {
            if (referencesAnimated) return;
            if (isInViewport(referencesSection)) {
                referencesAnimated = true;
                setTimeout(() => {
                    const thumbIcon = referencesSection.querySelector('.fa-thumbs-up.icon-main');
                    if (thumbIcon) {
                        thumbIcon.style.transition = 'transform 0.5s cubic-bezier(.68,-0.55,.27,1.55), filter 0.5s';
                        thumbIcon.style.transform = 'scale(1.5) rotate(-18deg) translateY(-18px) translateX(12px)';
                        thumbIcon.style.filter = 'drop-shadow(0 8px 24px #1e90ff88)';
                        setTimeout(() => {
                            thumbIcon.style.transform = 'scale(1.5) rotate(18deg) translateY(-18px) translateX(12px)';
                            setTimeout(() => {
                                thumbIcon.style.transform = 'scale(1) rotate(0deg) translateY(0) translateX(0)';
                                thumbIcon.style.filter = '';
                            }, 350);
                        }, 350);
                    }
                    const refs = document.querySelectorAll('.reference-list .reference-item.card');
                    let order = [0, 1, 2, 0, 1, 2];
                    order.forEach((idx, i) => {
                        setTimeout(() => {
                            if (refs[idx]) {
                                refs[idx].style.transition = 'box-shadow 0.5s, transform 0.5s';
                                refs[idx].style.boxShadow = '0 0 24px 6px #1e90ff88';
                                refs[idx].style.transform = 'scale(1.08) translateY(-10px)';
                                setTimeout(() => {
                                    refs[idx].style.boxShadow = '';
                                    refs[idx].style.transform = '';
                                }, 400);
                            }
                        }, 400 + i * 350);
                    });
                }, 1000);
            }
        }
        window.addEventListener('scroll', animateReferences);
        setTimeout(animateReferences, 300);
    }

    // Animacja dla sekcji Wykształcenie - nagłówek wyjeżdża od dołu, karty zaraz po tym, tylko gdy na ekranie
    const eduSection = document.querySelector('.education');
    const eduHeader = document.querySelector('.education h2');
    const eduTimeline = document.querySelector('.education .timeline');
    if (eduSection && eduHeader && eduTimeline) {
        eduHeader.style.opacity = 0;
        eduHeader.style.transform = 'translateY(80px)';
        eduHeader.style.transition = 'opacity 0.8s, transform 0.8s cubic-bezier(.68,-0.55,.27,1.55)';
        eduTimeline.style.opacity = 0;
        eduTimeline.style.transition = 'opacity 0.8s 0.3s, transform 0.8s 0.3s cubic-bezier(.68,-0.55,.27,1.55)';
        let eduAnimated = false;
        function animateEdu() {
            if (eduAnimated) return;
            if (isInViewport(eduSection)) {
                eduAnimated = true;
                setTimeout(() => {
                    eduHeader.style.opacity = 1;
                    eduHeader.style.transform = 'translateY(0)';
                    setTimeout(() => {
                        eduTimeline.style.opacity = 1;
                        eduTimeline.style.transform = 'scale(1.03)';
                        setTimeout(() => {
                            eduTimeline.style.transform = 'scale(1)';
                        }, 400);
                    }, 400);
                }, 1000);
            }
        }
        window.addEventListener('scroll', animateEdu);
        setTimeout(animateEdu, 300);
    }

    // Zainteresowania / O Mnie: animacja bicia serca, tylko gdy pojawi się na ekranie, z opóźnieniem
    const interestsSection = document.querySelector('.interests.card');
    if (interestsSection) {
        interestsSection.style.opacity = 0;
        interestsSection.style.transform = 'translateY(40px)';
        interestsSection.style.transition = 'opacity 0.7s, transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
        let interestsAnimated = false;
        function animateInterests() {
            if (interestsAnimated) return;
            if (isInViewport(interestsSection)) {
                interestsAnimated = true;
                setTimeout(() => {
                    interestsSection.style.opacity = 1;
                    interestsSection.style.transform = 'translateY(0)';
                    const heart = interestsSection.querySelector('.fa-heart');
                    if (heart) {
                        let beat = 0;
                        function heartBeat() {
                            if (beat >= 6) {
                                heart.style.transform = '';
                                heart.style.transition = '';
                                return;
                            }
                            heart.style.transition = 'transform 0.33s cubic-bezier(.68,-0.55,.27,1.55)';
                            heart.style.transform = 'scale(1.32)';
                            setTimeout(() => {
                                heart.style.transform = 'scale(1)';
                                setTimeout(() => {
                                    beat++;
                                    heartBeat();
                                }, 260);
                            }, 330);
                        }
                        setTimeout(heartBeat, 400);
                    }
                }, 1200);
            }
        }
        window.addEventListener('scroll', animateInterests);
        setTimeout(animateInterests, 300);
    }
});