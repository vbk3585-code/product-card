//6
import { comments } from "./comments.js";

//2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArray = numbers.slice(4)
console.log(newArray)
//3
const fruits = ["Апельсин", "Слива", "Яблоко"];
function findElement(array, i) {
    if (typeof i !== 'string') {
        return "Некорректные входные данные";
    }
    return array.includes(i);
}
console.log(findElement(fruits, "Слива"));
console.log(findElement(fruits, "1"));

//4
function turnOver(arr) {
    return arr.reverse();
}

turnOver(fruits);
turnOver(numbers);

console.log(fruits);
console.log(numbers);

//7
const dotComEmails = comments.filter(i => i.email.includes('.com'))
console.log(dotComEmails)

//8-10
const newComments = comments.map(i => ({...i, postId: i.id <= 5 ? 2 : 1, isInvalid: i.body.length > 180}))
console.log(newComments)

//9
const idAndName = comments.map(({ id, name }) => ({ id, name }));
console.log(idAndName)

//11
//map
const emails = comments.map(i => i.email)
console.log(emails)

//reduce

const emailsReduce = comments.reduce((acc, i) => [...acc, i.email], []);
console.log(emailsReduce);

//12
const result = comments
    .map(c => `${c.email}`)
    .join(' || ')
    .toString();
console.log(result);
