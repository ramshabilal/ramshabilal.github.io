// JavaScript source code

let face = document.getElementById("Face");

function changeBackground(color) {
    document.body.style.background = color;
}

changeBackground('lightyellow');


    face.addEventListener("click", () => {
        document.getElementById("textbox").innerText = "Heyy!";
        document.getElementById("textbox2").innerText = "By Ramsha Bilal";
        changeBackground('lightblue');
    })
