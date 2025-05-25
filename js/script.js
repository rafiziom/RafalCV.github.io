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


    // Przycisk Drukuj
    const printButton = document.getElementById('printButton');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }

    // Przycisk Przewiń do Góry
    const scrollTopButton = document.getElementById('scrollTopButton');
    const actionButtonsContainer = document.querySelector('.action-buttons-container'); // Pobieramy kontener

    if (scrollTopButton && actionButtonsContainer) {
        // Pokaż/ukryj przycisk "Do Góry" i dostosuj pozycję kontenera
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollTopButton.style.opacity = "1";
                scrollTopButton.style.visibility = "visible";
                scrollTopButton.style.transform = "translateY(0)"; // Płynne pojawienie się
                actionButtonsContainer.classList.add('scrolled'); // Opcjonalnie, jeśli chcesz zmieniać kontener
            } else {
                scrollTopButton.style.opacity = "0";
                scrollTopButton.style.visibility = "hidden";
                scrollTopButton.style.transform = "translateY(10px)"; // Płynne znikanie
                actionButtonsContainer.classList.remove('scrolled');
            }
        };

        // Funkcja przewijania do góry po kliknięciu
        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
