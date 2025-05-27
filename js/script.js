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
    var printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.onclick = function(e) {
            e.preventDefault();
            stopAllAnimations();
            window.print();
        };
    }
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
                }, 400); // było 1000, teraz szybciej
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

    // --- Animacja wskaźnika kliknięcia na zdjęcie profilowe (emoji) ---
    function animateProfilePointer() {
        const pointer = document.getElementById('profile-pointer-anim');
        if (!pointer) return;
        const emoji = pointer.querySelector('.pointer-emoji');
        if (!emoji) return;
        emoji.style.opacity = 0;
        emoji.style.animation = 'profile-pointer-bounce 1.5s cubic-bezier(.68,-0.55,.27,1.55) 1.2s 2';
        pointer.style.display = 'block';
        setTimeout(() => {
            emoji.style.opacity = 0;
            emoji.style.animation = '';
            pointer.style.display = 'none';
        }, 4000);
    }
    // Uruchom animację tylko jeśli zdjęcie jest na ekranie
    const profileSection = document.querySelector('.profile-section');
    if (profileSection) {
        let pointerAnimated = false;
        function showProfilePointerIfVisible() {
            if (pointerAnimated) return;
            const rect = profileSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                pointerAnimated = true;
                animateProfilePointer();
            }
        }
        window.addEventListener('scroll', showProfilePointerIfVisible);
        setTimeout(showProfilePointerIfVisible, 400);
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const contactCard = document.querySelector('.contact-card');
  let hintInterval;
  let inactivityTimer;
  let isHintActive = false;
  const hintDuration = 5000; // 5 sekund pokazywania strzałki
  const hintDelay = 10000; // 15 sekund przerwy

  // Style dla wskazówki
  const setupStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .click-hint {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
        animation: bounce 2s infinite, fadeIn 0.5s ease-out;
        opacity: 0.8;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        pointer-events: none;
      }
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateX(-50%) translateY(0);
        }
        40% {
          transform: translateX(-50%) translateY(-10px);
        }
        60% {
          transform: translateX(-50%) translateY(-5px);
        }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateX(-50%) translateY(10px); }
        to { opacity: 0.8; transform: translateX(-50%) translateY(0); }
      }
      .click-hint svg {
        width: 60px;
        height: 60px;
      }
    `;
    document.head.appendChild(style);
  };

  // Tworzenie elementu strzałki
  const createHint = () => {
    const hint = document.createElement('div');
    hint.className = 'click-hint';
    hint.innerHTML = `
      <div class="click-hint-text" style="color:#fff; font-size:1.08em; font-weight:600; text-align:center; margin-bottom:2px; letter-spacing:0.2px;">
        Kliknij tutaj
      </div>
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 15V3M12 15L8 11M12 15L16 11" stroke="white" stroke-width="2" stroke-linecap="round"/>
        <path d="M5 18H19C20.1046 18 21 18.8954 21 20V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V20C3 18.8954 3.89543 18 5 18Z" fill="white"/>
      </svg>
    `;
    return hint;
  };

  // Pokazanie strzałki
  const showHint = () => {
    if (isHintActive) return;
    
    isHintActive = true;
    const hint = createHint();
    const backContent = contactCard.querySelector('.back-content');
    backContent.appendChild(hint);
    
    // Ukrycie po określonym czasie
    setTimeout(() => {
      if (hint.parentNode) {
        hint.style.transition = 'opacity 0.5s ease-out';
        hint.style.opacity = '0';
        setTimeout(() => {
          if (hint.parentNode) hint.parentNode.removeChild(hint);
          isHintActive = false;
        }, 500);
      }
    }, hintDuration);
  };

  // Resetowanie timera nieaktywności
  const resetInactivityTimer = () => {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
      showHint();
      // Ustawienie interwału dla kolejnych pokazań
      hintInterval = setInterval(showHint, hintDelay + hintDuration);
    }, hintDelay);
  };

  // Inicjalizacja
  setupStyles();
  
  // Pierwsze pokazanie strzałki po 1 sekundzie
  setTimeout(() => {
    showHint();
    resetInactivityTimer();
  }, 1000);

  // Obsługa interakcji
  const handleInteraction = () => {
    clearTimeout(inactivityTimer);
    clearInterval(hintInterval);
    resetInactivityTimer();
  };

  contactCard.addEventListener('mouseenter', handleInteraction);
  contactCard.addEventListener('click', handleInteraction);
  document.addEventListener('mousemove', handleInteraction);
  document.addEventListener('scroll', handleInteraction);
});

// Funkcja kończąca wszystkie animacje na stronie (usuwa dynamiczne elementy, resetuje style)
function stopAllAnimations() {
    // Usuń wszystkie dynamiczne ciastka
    document.querySelectorAll('.falling-cookie').forEach(el => el.remove());
    // Zatrzymaj animacje tła/particli jeśli są dynamiczne
    document.querySelectorAll('.shape, .particle').forEach(el => {
        el.style.animation = 'none';
        el.style.opacity = 1;
    });
    // Przywróć pełną widoczność sekcji, nagłówków itp.
    document.querySelectorAll('.name-title, .job-subtitle, .experience h2, .about-me.card, .skills.card, .interests.card, .references, .education, .education h2, .education .timeline, .experience .timeline, .timeline-item.card').forEach(el => {
        el.style.opacity = '';
        el.style.transform = '';
        el.style.transition = '';
    });
    // Usuń podpowiedzi kliknięcia
    document.querySelectorAll('.click-hint').forEach(el => el.remove());
}

// Dodaj obsługę przycisku printBtn do zatrzymania animacji przed drukiem
document.addEventListener('DOMContentLoaded', function() {
    // Usuń poprzednią obsługę printBtn, aby nie wywoływać window.print() dwa razy
    // document.getElementById('printBtn').onclick = function() {
    //   window.print();
    // };

    // Dodaj obsługę przycisku printBtn do zatrzymania animacji przed drukiem
    var printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.onclick = function(e) {
            e.preventDefault();
            stopAllAnimations();
            window.print();
        };
    }
});

function spawnCookie() {
    const cookie = document.createElement('div');
    cookie.className = 'falling-cookie';
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let left = Math.random();
    left = left < 0.5 ? left * 0.4 : 0.6 + (left - 0.5) * 0.8;
    cookie.style.left = (left * vw) + 'px';

    // Losowy początkowy obrót i kierunek obrotu
    const startRotate = Math.floor(Math.random() * 360);
    const endRotate = startRotate + (Math.random() > 0.5 ? 360 : -360) + Math.floor(Math.random() * 180 - 90);
    const animDuration = (1.8 + Math.random() * 1.7);

    // Ustaw animację z losowym obrotem (kluczowe: cookie-fall-custom w CSS)
    cookie.style.animation = `cookie-fall-custom ${animDuration}s linear forwards`;
    cookie.style.setProperty('--cookie-rotate-start', `${startRotate}deg`);
    cookie.style.setProperty('--cookie-rotate-end', `${endRotate}deg`);

    cookie.innerHTML = `
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M37 19c0 9.94-8.06 18-18 18S1 28.94 1 19C1 9.06 9.06 1 19 1c0 3.5 2.5 6 6 6 0 2.5 2 4.5 4.5 4.5 0 2.5 2 4.5 4.5 4.5z" fill="#f6c177"/>
        <circle cx="11" cy="13" r="2" fill="#a86b2d"/>
        <circle cx="22" cy="10" r="1.3" fill="#a86b2d"/>
        <circle cx="26" cy="22" r="1.5" fill="#a86b2d"/>
        <circle cx="16" cy="25" r="1.1" fill="#a86b2d"/>
        <circle cx="28" cy="14" r="1" fill="#a86b2d"/>
      </svg>
    `;
    document.body.appendChild(cookie);
    setTimeout(() => {
      cookie.remove();
    }, animDuration * 1000 + 200);
}

// Animacja 3D "moneta" dla zdjęcia profilowego - obrót od razu po załadowaniu strony, bez opóźnienia
document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.style.transition = 'transform 2.2s cubic-bezier(.68,-0.55,.27,1.55)';
        profilePic.style.transformStyle = 'preserve-3d';
        profilePic.style.transform = 'rotateY(360deg)';
        setTimeout(() => {
            profilePic.style.transform = '';
        }, 2200);
    }
});