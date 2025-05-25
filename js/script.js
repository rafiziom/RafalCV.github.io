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
