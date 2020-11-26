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

switchBtn.addEventListener('click', themeToggle);

const counters = document.querySelectorAll('[data-counter]');
const animationDuration = 1000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( animationDuration / frameDuration ); //calculate how many frames we need to complete the animation

// Counter animation function
const counterAnimation = el => {
	let frame = 0;
    const countTo = +el.getAttribute('data-counter');

	// Start the animation running every frameDuration value
	const counter = setInterval(() => {
        frame++;
        
		// Use the progress value to calculate the current count
		const progress = frame / totalFrames;
		const currentCount = Math.round(countTo * progress);

		// If the current count has changed, update the element
		if (el.firstChild.innerHTML !== currentCount) {
			el.firstChild.innerHTML = currentCount;
		}

		// If we’ve reached our last frame, stop the animation
		if (frame === totalFrames) {
			clearInterval(counter);
		}
	}, frameDuration);
};

// Run the animation on all elements with a class of ‘countup’
counters.forEach(counter => counterAnimation(counter));