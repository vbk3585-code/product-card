//7-1

function cityTemp(city, temp) {
    console.log(`Сейчас в ${city} температура — ${temp} градусов по Цельсию`)
}
cityTemp('Москва', 20);

//7-2

const speedOfLight = 299792458;
chekSpeed(2997924581)
function chekSpeed(speed) {
    if (speed > speedOfLight) {
        console.log("Сверхсветовая скорость")
    } else if (speed < speedOfLight) {
        console.log ("Субсветовая скорость")
    } else if (speed === speedOfLight) {
        console.log ("Скорость света")
    }
}

//7-3

let product1 = "Продукт"
let priceProduct = 100
currentBudget(115)

function currentBudget (budget) {
    if (budget >= priceProduct) {
         console.log(`${product1} приобретён. Спасибо за покупку!`);
         console.log(`Остаток в балансе ${budget-priceProduct} \u20BD.`);
    } else {
        console.log(`Вам не хватает ${priceProduct-budget} \u20BD, пополните баланс.`);
    }
}



