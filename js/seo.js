// SEO & Testing Section - Dynamic Lighthouse Score
document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching Lighthouse score
    setTimeout(() => {
        const seoScore = 92;
        const perfScore = 95;
        const a11yScore = 98;
        
        const scoreElements = document.querySelectorAll('.lighthouse-score');
        if (scoreElements.length > 0) {
            scoreElements[0].textContent = seoScore;
            scoreElements[1].textContent = perfScore;
            scoreElements[2].textContent = a11yScore;
        }
    }, 1500);

    // Animate progress bars
    const progressBars = document.querySelectorAll('.seo-progress-bar');
    if (progressBars.length > 0) {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width') || '100%';
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 500);
        });
    }
    
    // Tooltip functionality
    const tooltips = document.querySelectorAll('.seo-tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            this.setAttribute('data-tooltip', this.getAttribute('title'));
            this.removeAttribute('title');
        });
        
        tooltip.addEventListener('mouseleave', function() {
            this.setAttribute('title', this.getAttribute('data-tooltip'));
        });
    });
    
    // Dynamic metrics
    const metrics = [
        { element: '.organic-traffic', target: 120, suffix: '%' },
        { element: '.keyword-ranking', target: 95, suffix: '%' },
        { element: '.load-time', target: 2.1, suffix: 's' }
    ];
    
    metrics.forEach(metric => {
        const element = document.querySelector(metric.element);
        if (element) {
            let current = 0;
            const increment = metric.target / 20;
            const timer = setInterval(() => {
                current += increment;
                if (current >= metric.target) {
                    clearInterval(timer);
                    current = metric.target;
                }
                element.textContent = metric.target % 1 === 0 ? 
                    Math.floor(current) + metric.suffix : 
                    current.toFixed(1) + metric.suffix;
            }, 50);
        }
    });
});