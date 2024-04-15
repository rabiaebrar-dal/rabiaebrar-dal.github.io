
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



// form inputtaki dataları alıp consolda göstermek için

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Adınız:', name);
    console.log('E-posta:', email);
    console.log('Mesaj:', message);

    form.reset(); //veriler girildikten sonra input temizlendi

    alert("Başarıyla Gönderildi...");
});
