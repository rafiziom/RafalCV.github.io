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
    highlightCompanyInfo(); // Uruchomienie funkcji wyróżniania

    // Przycisk Drukuj
    const printButton = document.getElementById('printButtonFixed'); // Zaktualizowane ID
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }

    // Przycisk Przewiń do Góry
    const scrollTopButton = document.getElementById('scrollTopButtonFixed'); // Zaktualizowane ID
    if (scrollTopButton) {
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTopButton.style.display = "flex"; // Użyj flex dla centrowania ikony
            } else {
                scrollTopButton.style.display = "none";
            }
        };

        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
