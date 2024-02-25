document.addEventListener("DOMContentLoaded", function() {
    const numStars = 350; 
    const starsContainer = document.querySelector('.stars');
    const { offsetWidth: skyWidth, offsetHeight: skyHeight } = starsContainer;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.floor(Math.random() * skyWidth)}px`;
        star.style.top = `${Math.floor(Math.random() * skyHeight)}px`;
        star.style.animationDelay = `${Math.random() * 10}s`; 
        starsContainer.appendChild(star);
    }

    const romanticButton = document.querySelector('.romantic-button');

    romanticButton.addEventListener('click', () => {
        romanticButton.classList.add('clicked');
        window.location.href = 'cards.html';
    });
});
