import { card } from "./card.js";
const PATH = "/images/";
const cardTemplate = document.getElementById("card-template");
const cardList = document.getElementById("card-list");
const numberCards = getNumberCards();
function renderCards(card) {
    card.forEach((card) => {
      const cardClone = cardTemplate.content.cloneNode(true);
      cardClone.querySelector(".image").src = PATH + card.image;
      cardClone.querySelector(".image").alt = card.alt;
      cardClone.querySelector(".product-card__name").textContent = card.name;
      cardClone.querySelector(".product-card__caption").textContent = card.caption;
      cardClone.querySelector(".product-card__description").textContent = card.description;
      cardClone.querySelector(".product-card__price").textContent = card.price;
      const compoundItems = card.compound.map((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        return li;
      });
      const compoundList = cardClone.querySelector(".product-list");
        compoundItems.forEach((item) => {
            compoundList.appendChild(item);
      });
      cardList.appendChild(cardClone);
    });
}
if (numberCards) renderCards(card.slice(0, numberCards));

const namesDescriptions = card.reduce((acc, card) => {
  acc.push({ [card.name]: card.description });
  return acc;
}, {});

console.log(namesDescriptions);

function getNumberCards({ min = 1, max = 5, question = "Сколько карточек отобразить?" } = {}) 
  {
    while (true) {
      const raw = prompt(question);
      if (raw === null) return null;
      const answer = Number(raw);
      if (Number.isInteger(answer) && answer >= min && answer <= max) {
        return answer;
      }
      alert(`Нужно целое число от ${min} до ${max}. Попробуйте снова.`);
    }
  }