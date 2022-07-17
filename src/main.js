// Navbar toggle
const menu = document.querySelector('.sg__link');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', (e) => {
	const visibility = menu.getAttribute('data-visible');
	if (visibility === 'false') {
		menu.setAttribute('data-visible', true);
	}
});

closeBtn.addEventListener('click', (e) => {
	const visibility = menu.getAttribute('data-visible');
	if (visibility === 'true') {
		menu.setAttribute('data-visible', false);
	}
});

menu.addEventListener('click', () => {
	const visibility = menu.getAttribute('data-visible');
	if (visibility === 'true') {
		menu.setAttribute('data-visible', false);
	}
});
