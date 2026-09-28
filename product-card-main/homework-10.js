import { products } from "./productsCatalog.js";
const PATH = "images/";
const cardTemplate = document.getElementById("card-template");
const cardList = document.getElementById("card-list");
const numberCards = getNumberCards();
function renderCards(products) {
    products.forEach((products) => {
      const cardClone = cardTemplate.content.cloneNode(true);
      cardClone.querySelector(".image").src = PATH + products.image;
      cardClone.querySelector(".image").alt = products.alt;
      cardClone.querySelector(".product-card__name").textContent = products.name;
      cardClone.querySelector(".product-card__caption").textContent = products.caption;
      cardClone.querySelector(".product-card__description").textContent = products.description;
      cardClone.querySelector(".product-card__price").textContent = products.price;
      const compoundItems = products.compound.map((item) => {
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
if (numberCards) renderCards(products.slice(0, numberCards));

const namesDescriptions = products.reduce((acc, products) => {
  acc.push({ [products.name]: products.description });
  return acc;
}, []);

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