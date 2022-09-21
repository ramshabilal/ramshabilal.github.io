// JavaScript source code
console.log("Hello There");

let title = document.getElementById("title");
let ghostText = document.getElementById("ghost-text");

title.addEventListener('mouseenter', () => {
    ghostText.innerText = "Ever wonder what goes on in a cat's head?";
})

let ghostText3 = document.getElementById("ghost-text3");
window.addEventListener('scroll', () => {
    ghostText3.innerText = "Play the video below to hear what the campus cats at NYU Abu Dhabi have to say!";
})

let button = document.getElementById("button");

let index = 0;

const colors = ['darkblue', 'lightgrey'];

button.addEventListener('click', function onClick() {
    button.style.backgroundColor = colors[index];
    button.style.color = 'white';

    index = index >= colors.length - 1 ? 0 : index + 1;
});

title.style.transition = "all 2s";

let button2 = document.getElementById("button2");

let index2 = 0;

const colors2 = ['red', 'lightgrey'];

button2.addEventListener('click', function onClick() {
    button2.style.backgroundColor = colors2[index2];
    button2.style.color = 'white';

    index2 = index2 >= colors.length - 1 ? 0 : index2 + 1;
});

title.style.transition = "all 2s";



