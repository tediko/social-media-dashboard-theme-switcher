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
export default counters.forEach(counter => counterAnimation(counter));