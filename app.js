let button = document.querySelector('button');

button.addEventListener('click', function() {
	let i = Math.floor(Math.random() * data.length);
	let image = document.querySelector('img');
	image.src = data[i].src;
	let sentence = document.querySelector('p');
	sentence.innerHTML = data[i].title;
});
