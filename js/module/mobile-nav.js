/**
 * Mobile navigation
 */

export default {
	init () {
		const trigger = document.querySelector('.header__hamburger');
		const body = document.querySelector('body');

		const toggle = function (event) {
			event.preventDefault();
			event.stopPropagation();

			body.classList.toggle('nav-open');
		};

		if (trigger) {
			trigger.addEventListener('click', toggle);
		}
	}
};
