const slider = {
    sliderElement: document.querySelector('.slider'),
    prevButton: document.querySelector('.prev'),
    nextButton: document.querySelector('.next'),
    visibleCard: 1,
    totalCards: 0,
    cardWidth: 0,
    gap: 30, // De som van de marges, 15px aan beide zijden van een kaart

    init() {
        // Bereken totalCards en cardWidth
        this.totalCards = this.sliderElement.querySelectorAll('.card').length;
        this.cardWidth = this.sliderElement.querySelector('.card').offsetWidth;

        // Voeg event listeners toe
        window.addEventListener('resize', () => this.setSlider());
        this.prevButton.addEventListener('click', () => this.prevCard());
        this.nextButton.addEventListener('click', () => this.nextCard());

        // Start de slider
        this.setSlider();
    },

    setSlider() {
        const offset = this.calculateOffset();
        //this.sliderElement.style.transform = `translateX(-${offset}px)`;
        this.sliderElement.style.transform = `translateX(${offset}px)`;
    },

    calculateOffset() {
        const centerOffset = 
            (this.cardWidth + this.gap) * (this.visibleCard - 1) - 
            ((this.sliderElement.parentElement.offsetWidth - this.cardWidth - this.gap) / 2);
        //return Math.max(0, centerOffset); // Zorg dat de offset niet negatief is
        return -centerOffset;
    },

    prevCard() {
        if (this.visibleCard > 1) {
            this.visibleCard--;
            this.setSlider();
        }
    },

    nextCard() {
        if (this.visibleCard < this.totalCards) {
            this.visibleCard++;
            this.setSlider();
        }
    },
};

// Initialiseer de slider
slider.init();