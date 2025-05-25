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