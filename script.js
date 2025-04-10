document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.heart-container');
    const mainHeart = document.getElementById('main-heart');
    
    // Make the main heart also clickable
    mainHeart.addEventListener('click', (e) => {
        e.stopPropagation();
        createHearts(e.clientX, e.clientY, 5);
    });
    
    // Add click event to the entire document
    document.addEventListener('click', (e) => {
        createHearts(e.clientX, e.clientY, 8);
    });
    
    // Function to create hearts at click position
    function createHearts(x, y, count) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('mini-heart');
                
                // Random size between 10px and 40px
                const size = Math.random() * 30 + 10;
                heart.style.width = `${size}px`;
                heart.style.height = `${size}px`;
                
                // Slightly randomize the position
                const offsetX = (Math.random() - 0.5) * 100;
                const offsetY = (Math.random() - 0.5) * 100;
                heart.style.left = `${x + offsetX}px`;
                heart.style.top = `${y + offsetY}px`;
                
                // Add random hue variation to make it more colorful
                const hue = Math.floor(Math.random() * 30) + 340; // Red to pink range
                heart.style.backgroundColor = `hsl(${hue}, 100%, 65%)`;
                heart.style.setProperty('--heart-color', `hsl(${hue}, 100%, 65%)`);
                
                // Random animation duration
                const animDuration = Math.random() * 2 + 2;
                heart.style.animationDuration = `${animDuration}s, 3s`;
                
                heartContainer.appendChild(heart);
                
                // Remove heart from DOM after animation completes
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 100);
        }
    }

    // Create some initial floating hearts for visual appeal
    function createInitialHearts() {
        for (let i = 0; i < 15; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            setTimeout(() => {
                createHearts(x, y, 1);
            }, i * 300);
        }
    }
    
    createInitialHearts();
}); 