document.addEventListener('DOMContentLoaded', (event) => {
    const loveRange = document.getElementById('loveRange');
    const loveValue = document.getElementById('loveValue');
    const heartsContainer = document.getElementById('hearts-container');
    const angryFace = document.getElementById('angry-face');
    let heartsInterval;

    // Ensure the page opens from the top
    window.scrollTo(0, 0);

    loveRange.addEventListener('input', function() {
        if (this.value >= 1000000) {
            loveValue.textContent = 'Infinity';
            startHearts();
        } else {
            loveValue.textContent = this.value;
        }
    });

    function startHearts() {
        if (!heartsInterval) {
            heartsInterval = setInterval(createHeart, 200);
        }
    }

    function stopHearts() {
        clearInterval(heartsInterval);
        heartsInterval = null;
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heartsContainer.appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            stopHearts();
        }

        const secondContentTop = document.querySelector('.second-content').offsetTop;
        const scrollBottom = window.scrollY + window.innerHeight;

        if (scrollBottom >= secondContentTop) {
            stopHearts(); // Stop hearts when angry face appears
            angryFace.style.display = 'block';
            angryFace.classList.add('fade-out');
            setTimeout(() => {
                angryFace.style.display = 'none';
            }, 2000); // Hide after 2 seconds
        } else {
            angryFace.style.display = 'none';
        }
    });
});
