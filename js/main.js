document.addEventListener('DOMContentLoaded', function() {
    // Funkcja do wyróżniania firm
    function highlightCompanyInfo() {
        const companyDateElements = document.querySelectorAll('.experience .timeline-item .company-date'); // Celujemy tylko w doświadczenie

        companyDateElements.forEach(element => {
            const text = element.textContent.toLowerCase();

            // Usuń poprzednie klasy highlight, aby uniknąć konfliktów
            element.classList.remove('highlight-euvic', 'highlight-media-saturn', 'highlight-qumak');

            if (text.includes('euvic it')) {
                element.classList.add('highlight-euvic');
            } else if (text.includes('media saturn') || text.includes('mms technology')) {
                element.classList.add('highlight-media-saturn');
            } else if (text.includes('qumak s.a')) {
                element.classList.add('highlight-qumak');
            }
            // Możesz dodać więcej warunków 'else if' dla innych firm
        });
    }

    // Uruchomienie funkcji
    highlightCompanyInfo();
});