document.addEventListener('DOMContentLoaded', (event) => {
    const loveRange = document.getElementById('loveRange');
    const loveValue = document.getElementById('loveValue');

    loveRange.addEventListener('input', function() {
        loveValue.textContent = this.value;
    });
});
