let links = document.querySelectorAll('.contact_FAQ-dropdown');
let spans = document.querySelectorAll('.menu-span');
let answers = document.querySelectorAll('.FAQ-answer');

for (let i = 0; i <= links.length; i++) {
	links[i].addEventListener('click', function() {
		spans.forEach(deselect);

		function deselect(span) {
			span.classList.remove('menu-span-active');
		}

		answers.forEach(hide);

		function hide(answer) {
			answer.classList.add('hidden');
		}
		// answers.classList.remove('hidden');
		spans[i].classList.toggle('menu-span-active');
		answers[i].classList.toggle('hidden');
	});
}
