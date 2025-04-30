// Text size adjustments
const textSmaller = document.getElementById('text-smaller');
const textReset = document.getElementById('text-reset');
const textLarger = document.getElementById('text-larger');
const contrastToggle = document.getElementById('contrast-toggle');
const animationToggle = document.getElementById('animation-toggle');

textSmaller.addEventListener('click', () => {
    document.documentElement.style.fontSize = '90%';
    localStorage.setItem('textSize', 'smaller');
});

textReset.addEventListener('click', () => {
    document.documentElement.style.fontSize = '';
    localStorage.removeItem('textSize');
});

textLarger.addEventListener('click', () => {
    document.documentElement.style.fontSize = '110%';
    localStorage.setItem('textSize', 'larger');
});

// High contrast mode
contrastToggle.addEventListener('change', function() {
    if(this.checked) {
        document.body.classList.add('high-contrast');
        localStorage.setItem('highContrast', 'enabled');
    } else {
        document.body.classList.remove('high-contrast');
        localStorage.removeItem('highContrast');
    }
});

// Reduce animations
animationToggle.addEventListener('change', function() {
    if(this.checked) {
        document.body.classList.add('reduce-motion');
        localStorage.setItem('reduceMotion', 'enabled');
    } else {
        document.body.classList.remove('reduce-motion');
        localStorage.removeItem('reduceMotion');
    }
});

// Check for saved preferences on load
window.addEventListener('DOMContentLoaded', () => {
    const textSize = localStorage.getItem('textSize');
    if (textSize === 'smaller') {
        document.documentElement.style.fontSize = '90%';
    } else if (textSize === 'larger') {
        document.documentElement.style.fontSize = '110%';
    }
    
    if (localStorage.getItem('highContrast') === 'enabled') {
        document.body.classList.add('high-contrast');
        contrastToggle.checked = true;
    }
    
    if (localStorage.getItem('reduceMotion') === 'enabled') {
        document.body.classList.add('reduce-motion');
        animationToggle.checked = true;
    }
});