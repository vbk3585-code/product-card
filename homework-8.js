// 3
let user = {
  name: "Bilol",
  surname: "Vafaboev",
  age: 26,
  mail: "vbk3585@gmail.com",
  work: "Welder",
  country: "Russia",
  city: "Moscow"
}

// 4
let car = {
  brand: "Toyota",
  namecar: "Camry",
  year_of_manufacture: 2022,
  color: "black",
  box_view: "Direct Shift-CVT",
}

car.carOwner = user.name;

// 5
function testSpeed(car, maxSpeed) {
    if("maxSpeed" in car) {
        return;
    }
    car.maxSpeed = maxSpeed;
}

testSpeed(car, 220);
console.log(car);

// 6
function property(object, object_property) {
    console.log(object[object_property]);
}

property(car, "box_view");

// 7
let fruits = ["Яблоко", "Апельсин", "Слива"];

// 8
let books = [
    {
        name: "Crime and Punishment",
        author: "Dostoyevskiy",
        year_of_manufacture: 1866,
        cover_color: "red",
        genre: "nover, criminal",
    },
    {
        name: "Fahrenheit 451",
        author: "Rey Bredberi",
        year_of_manufacture: 1953,
        cover_color: "green",
        genre: "nover, science fiction",
    },
    {
        name: "Teacher of Merchants",
        author: "Ahadkuli",
        year_of_manufacture: 2024,
        cover_color: "orange",
        genre: "biographical and instructive prose",
    }
];

books.push({
    name: "The Truman Show",
    author: "Piter Uir",
    year_of_manufacture: 1998,
    cover_color: "white",
    genre: "drama",
})

// 9
let booksHarryPotter = [
    garriPotter1 = {
        name: "Гарри Поттер и философский камень",
        author: "Дж.К. Роулинг",
        year_of_manufacture: 2002,
        cover_color: "Белый",
        genre: "фэнтези, приключения",
    },
    garriPotter2 = {
        name: "Гарри Поттер и Тайная комната",
        author: "Дж.К. Роулинг",
        year_of_manufacture: 2002,
        cover_color: "Серый",
        genre: "фэнтези, приключения",
    },
    garriPotter2 = {
        name: "Гарри Поттер и узник Азкабана",
        author: "Дж.К. Роулинг",
        year_of_manufacture: 2004,
        cover_color: "Черный",
        genre: "фэнтези, приключения",
    },
];

const allBooks = [...books, ...booksHarryPotter];
///console.log(allBooks);

// 10
function addRarity(books) {
    return books.map((book) => {
        return {
            ...book,
            isRare: book.year_of_manufacture > 2000 ? "да, это редкий": "значит это не редкий"
        };
    });
}

const booksWithRarity = addRarity(allBooks);
console.log(booksWithRarity);