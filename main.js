// Покраска всех карточек

const changeColorAllCard = document.querySelector('#change-color-all-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';

// Покраска всех карточек
changeColorAllCard.addEventListener('click', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card) => {
        card.style.backgroundColor = greenColorHash;
    });
});

// Покраска первой карточки
changeColorFirstCardButton.addEventListener('click', () => {
    const firstProductCard = document.querySelector('.product-card');
    if (firstProductCard) {
        firstProductCard.style.backgroundColor = blueColorHash;
    }
});

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


const changeColorMeButton = document.querySelector('.btn');
if (changeColorMeButton) {
    changeColorMeButton.addEventListener('click', () => {
        changeColorMeButton.style.backgroundColor = '#ff2222';
    });
}
