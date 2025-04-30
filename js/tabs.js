document.addEventListener('DOMContentLoaded', function() {
    const tabContainers = document.querySelectorAll('.tabs-container');
    
    tabContainers.forEach(container => {
        const tabButtons = container.querySelectorAll('.tab-btn');
        const tabPanels = container.querySelectorAll('.tab-panel');
        
        // Function to handle tab switching
        function switchTab(e) {
            // Prevent default if it's a click event
            if (e.type === 'click') {
                e.preventDefault();
            }
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(button => {
                button.classList.remove('active');
                button.setAttribute('aria-selected', 'false');
            });
            
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.setAttribute('aria-hidden', 'true');
            });
            
            // Add active class to clicked button
            const button = e.type === 'click' ? e.currentTarget : document.querySelector(`.tab-btn[data-tab="${window.location.hash.substring(1)}"]`) || tabButtons[0];
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');
            
            // Show corresponding panel
            const panelId = button.getAttribute('data-tab');
            const panel = document.getElementById(panelId);
            panel.classList.add('active');
            panel.setAttribute('aria-hidden', 'false');
            
            // Update URL hash if it's a click event
            if (e.type === 'click') {
                history.pushState(null, null, `#${panelId}`);
            }
            
            // Focus the panel for keyboard users
            panel.focus();
        }
        
        // Add click event to tabs
        tabButtons.forEach(button => {
            button.addEventListener('click', switchTab);
            
            // Add keyboard navigation
            button.addEventListener('keydown', function(e) {
                const index = Array.from(tabButtons).indexOf(button);
                
                // Right arrow key
                if (e.key === 'ArrowRight') {
                    const nextIndex = (index + 1) % tabButtons.length;
                    tabButtons[nextIndex].focus();
                    tabButtons[nextIndex].click();
                    e.preventDefault();
                }
                
                // Left arrow key
                if (e.key === 'ArrowLeft') {
                    const prevIndex = (index - 1 + tabButtons.length) % tabButtons.length;
                    tabButtons[prevIndex].focus();
                    tabButtons[prevIndex].click();
                    e.preventDefault();
                }
                
                // Home key
                if (e.key === 'Home') {
                    tabButtons[0].focus();
                    tabButtons[0].click();
                    e.preventDefault();
                }
                
                // End key
                if (e.key === 'End') {
                    tabButtons[tabButtons.length - 1].focus();
                    tabButtons[tabButtons.length - 1].click();
                    e.preventDefault();
                }
            });
        });
        
        // Initialize tabs
        function initializeTabs() {
            const hash = window.location.hash.substring(1);
            const initialTab = hash 
                ? container.querySelector(`.tab-btn[data-tab="${hash}"]`) 
                : container.querySelector('.tab-btn');
            
            if (initialTab) {
                initialTab.click();
            } else {
                // Fallback if no matching tab found
                tabButtons[0].classList.add('active');
                tabButtons[0].setAttribute('aria-selected', 'true');
                tabPanels[0].classList.add('active');
                tabPanels[0].setAttribute('aria-hidden', 'false');
            }
        }
        
        // Handle back/forward navigation
        window.addEventListener('hashchange', initializeTabs);
        
        // Initialize on load
        initializeTabs();
    });
    
    // Enhance print functionality
    window.addEventListener('beforeprint', function() {
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.style.display = 'block';
        });
    });
});