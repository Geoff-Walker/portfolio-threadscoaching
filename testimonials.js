const imgDark = document.querySelector('.img-dark');
const imgMid = document.querySelector('.img-mid');
const imgLight = document.querySelector('.img-light');
const slides = document.querySelectorAll('.slide');

const gap = 16;
const carousel = document.getElementById('carousel'),
	content = document.getElementById('content'),
	next = document.getElementById('next'),
	prev = document.getElementById('prev');

next.addEventListener('click', (e) => {
	animateWaves();
	setTimeout(() => {
		carousel.scrollBy(width + gap, 0);
		if (carousel.scrollWidth !== 0) {
			prev.style.display = 'flex';
		}
		if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
			next.style.display = 'none';
		}
	}, 1500);
});
prev.addEventListener('click', (e) => {
	animateWaves();
	setTimeout(() => {
		carousel.scrollBy(-(width + gap), 0);

		if (carousel.scrollLeft - width - gap <= 0) {
			prev.style.display = 'none';
		}
		if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
			next.style.display = 'flex';
		}
	}, 1500);
});

let width = carousel.offsetWidth;
window.addEventListener('resize', (e) => (width = carousel.offsetWidth));

function animateWaves() {
	imgDark.classList.add('img-dark-animate');
	imgMid.classList.add('img-mid-animate');
	imgLight.classList.add('img-light-animate');

	slides.forEach((slide) => {
		slide.classList.add('slide-animate');
	});

	setTimeout(() => {
		imgDark.classList.remove('img-dark-animate');
		imgMid.classList.remove('img-mid-animate');
		imgLight.classList.remove('img-light-animate');

		slides.forEach((slide) => {
			slide.classList.remove('slide-animate');
		});
	}, 3000);
}
