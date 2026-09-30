// Покраска всех карточек

const ProductCard = document.querySelectorAll('.product-card');
const changeColorAllCard= document.querySelector('#change-color-all-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';

changeColorAllCard.addEventListener('click', () => {
    ProductCard.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покраска первой карточки

const firstProductCard = document. querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть Google

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle)
function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');
    if (answer === true) {
        window.open('https://google.com')
    } else {
        return;
    }
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');
outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))
function outputConsoleLog(message){
    alert(message)
    console.log(message)
}

// 6
const titleCard = document.querySelector(".title");
    titleCard.addEventListener("mouseover", () => {
    console.log(titleCard.textContent);
});

//7


const changeColorButton = document.querySelector('#change-color-button');
const colors = ['#4CAF50', '#FF5722', '#2196F3', '#9C27B0',];
let index = 0;
changeColorButton.addEventListener('click', function() {
    index = (index + 1) % colors.length;
    changeColorButton.style.backgroundColor = colors[index];
});