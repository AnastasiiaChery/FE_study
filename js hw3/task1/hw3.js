
// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let person = {
   name: "Igor",
    pets: {
        type: 'dog',
        name_name: 'Ray'
    },
   car: false,
   apartment: true,
   like_book: 'The little Prince'

}
console.log(person)


// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let breed = ['Labrador', 'Bulldog', 'Poodle', 'Husky', 'Malamute'];
let people = ['Olga', 'Dima', 'Katya', 'Oleg', 'Valya'];
let car = ['Mersedes', 'BMW', 'Niva', 'Audi', 'Lexus'];
console.log(breed);
console.log(people);
console.log(car);





// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let object = {
        driver: {
            name: 'Alex',
            city: 'Lviv'

        },
     home: 'flat',
     toys: 'doll',
     table: 'wooden',
     bag: ['prado', 'gucci']
}
 
console.log(object)



// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
 
for(let i=0; i<users.length; i++ ){
    if(users[i].name==='andrey'){console.log(users[i].status)}
}


// - статус Максима

for(let i=0; i<users.length; i++ ){
    if(users[i].name==='max'){console.log(users[i].status)}
}

// - ім'я передостаннього об'єкту

console.log(users[users.length-2].name)

// - ім'я третього об'єкта

console.log(users[2].name)

// - вік Олега

for(let i=0; i<users.length; i++ ){
    if(users[i].name==='oleg'){console.log(users[i].age)}
}
// - вік Олі

for(let i=0; i<users.length; i++ ){
    if(users[i].name==='olya'){console.log(users[i].age)}
}
// - вік + ім'я 5го об'єкта

console.log(users[4].name, users[4].age)

// - вік + сатус Анни

for(let i=0; i<users.length; i++ ){
    if(users[i].name==='anya'){console.log(users[i].age, users[i].status )}
}


