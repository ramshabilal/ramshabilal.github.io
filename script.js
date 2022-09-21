// JavaScript source code
console.log("Hello There");

//get title and ghostext as elements from the home page
let title = document.getElementById("title");
let ghostText = document.getElementById("ghost-text");

//if the user moves the mouse above the title, the ghost text appears
title.addEventListener('mouseenter', () => {
    ghostText.innerText = "Ever wonder what goes on in a cat's head?";
})
//get ghosText3 as the other line of ghost text
let ghostText3 = document.getElementById("ghost-text3");

//this ghostText3 appears when the user scrolls
window.addEventListener('scroll', () => {
    ghostText3.innerText = "Play the video below to hear what the campus cats at NYU Abu Dhabi have to say!";
})

//get the like button from the home page
let button = document.getElementById("button");

//set an index to 0
let index = 0;

//two colors that the like button will alternate between
const colors = ['darkblue', 'lightgrey'];

//in case that the user clicks on the like button, change its color - if color is grey, change it to blue, and vice versa
button.addEventListener('click', function onClick() {
    button.style.backgroundColor = colors[index];
    button.style.color = 'white';
    index = index >= colors.length - 1 ? 0 : index + 1;
});

//repeat the same for the subscribe button but with red and grey color
let button2 = document.getElementById("button2");
let index2 = 0;

const colors2 = ['red', 'lightgrey'];

button2.addEventListener('click', function onClick() {
    button2.style.backgroundColor = colors2[index2];
    button2.style.color = 'white';

    index2 = index2 >= colors.length - 1 ? 0 : index2 + 1;
});



