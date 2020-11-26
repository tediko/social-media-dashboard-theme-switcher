const body = document.querySelector('[data-theme]');
const switchBtn = document.querySelector('[data-switch]');
const cards = document.querySelectorAll('[data-anim]');
const cardsReverse = [...cards].reverse();
const lightTheme = 'light';
const darkTheme = 'dark';
let bodyTheme = body.dataset;

//Cards transition effect
const cardsAnimation = () => {
    const delay = 50;
    if (bodyTheme.theme == lightTheme) {
        cards.forEach((card, index) => {
            card.style.transition = `background 250ms ease-in ${index * delay}ms`;
        })
    } else {
        cardsReverse.forEach((card, index) => {
            card.style.transition = `background 250ms ease-in ${index * delay}ms`;
        })
    }

    //Remove transition from cards after all transition ends.
    cards.forEach(card => {
        card.addEventListener('transitionend', () => card.style.transition = ``)
    })
}

//Change body theme color
const themeToggle = () => {
    bodyTheme.theme == darkTheme ?
        (bodyTheme.theme = lightTheme, switchBtn.classList.add('active')) : 
        (bodyTheme.theme = darkTheme, switchBtn.classList.remove('active'));
    cardsAnimation();
}

export default switchBtn.addEventListener('click', themeToggle);