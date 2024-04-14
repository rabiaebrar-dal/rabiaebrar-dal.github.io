
document.addEventListener("DOMContentLoaded",changeBackgroundColor);
var kutu =document.querySelector(".header");

const colors2=['#3c393fc9','#161616','#301407f3','#362d29f3','#473f66f3']
const colors=['#ece9e9','#d6bbd2','#a8d3e0','#ceb9e0'];

function getRandomColor(){
    const randomIndex = Math.floor(Math.random() * colors2.length);
    return colors2[randomIndex];
}

function changeBackgroundColor(){
    const randomColor = getRandomColor();
    kutu.style.backgroundColor = randomColor;
}

const intervalId = setInterval(changeBackgroundColor, 5000); 
