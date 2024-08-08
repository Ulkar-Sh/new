document.addEventListener('DOMContentLoaded', (event) => {
    const loveRange = document.getElementById('loveRange');
    const loveValue = document.getElementById('loveValue');
    const heartsContainer = document.getElementById('hearts-container');

    loveRange.addEventListener('input', function() {
        if (this.value >= 1000000) {
            loveValue.textContent = 'Infinity';
            createHearts();
        } else {
            loveValue.textContent = this.value;
        }
    });

    function createHearts() {
        for (let i = 0; i < 50; i++) {
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
    }
});
