//6
import { comments } from "./comments.js";

//2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newArray = numbers.slice(4)
console.log(newArray)
//3
const fruits = ["Апельсин", "Слива", "Яблоко"];

//4
function turnOver(set, callback) {
    const arr = Array.from(set);
    for (let i = arr.length - 1; i >= 0; i--) {
        callback(arr[i], i, arr);
    }
}

turnOver(fruits, (i) => {
    console.log(i);
});
turnOver(numbers, (i) => {
    console.log(i);
});

//7
const filterComments = comments.filter(i => i.email.includes('.com'))
console.log(filterComments)

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