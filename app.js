let button = document.querySelector('button');
let data;

fetch('https://raw.githubusercontent.com/mkrivickas/sentencijos/main/api.json')
	.then((response) => response.json())
	.then((data) => imageUpload(data));

function imageUpload(api) {
	data = api;
}

button.addEventListener('click', function() {
	let i = Math.floor(Math.random() * data.length);
	let image = document.querySelector('img');
	image.src = data[i].src;
	let sentence = document.querySelector('p');
	sentence.innerHTML = data[i].title;
});
