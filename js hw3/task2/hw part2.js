// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
let obj1_person = {
    name: 'Ivan',
    age: 35,
    city: 'London'
}

let obj2_pet ={
    pet: 'Dog',
    color: 'White',
    friend: false
}

let obj3_film ={
    type: "Movie",
    year: 1975,
    countries: 'USA'
}

let obj4_work = {
 job: "teacher",
 salary: 5000,
 bonus: true

}

let obj5_point ={
    x: 52,
    y:38,
    z:79
}


// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let car = {
    brand: 'BMW',
    engine: {
        mark: "XV-221.1",
        capacity: 40,
        cyl: 2
    },
    additional: ['tone glass', 'massage chairs', 'blue color']
}

let triangle = {
    points: [{x:0,y:0},{x:12,y:-6},{x:26,y:12}],
    fill_color: "blue",
    ca_be_modificated: true
}

let fleet = {
    admiral: {
        name: "Spire",
        rank: "Lord High-Admiral"
    },
    ships: [
        {
            name: "Lunar Lady",
            class: 'Light Cruiser "Lunnar"',
            length_km: 5,
            flagship: true,
            weapons: ['2 Macro-cannons','6 Torpedo launchers']
        },
        {
            name: "Malcador's Vengense",
            class: "Dictator-class Cruiser",
            crew: 85000,
            hangar: true,             
        }
    ]
}

let junk_data = {
    trash: [1, true, 17, -8, 'lorem ipsum', 0.012, false,false, [1,2,3,4,8], {first: false, levele: 21}],
    hull:{
        max: 50,
        is_full: false
    }
}

let dress ={
    brand: 'Valentino',
    color: [ 'blue', 'red'],
    print: false

}


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

for (const key in obj1_person ) {
    console.log(key);
  };
  for (const key1 in obj2_pet ) {
    console.log(key1);
  };
  for (const key2 in obj3_film ) {
    console.log(key2);
  };
  for (const key3 in obj4_work ) {
    console.log(key3);
  };
  for (const key4 in obj5_point ) {
    console.log(key4);
  };
  for (const key5 in car ) {
    console.log(key5);
  };
  for (const key6 in triangle ) {
    console.log(key6);
  };
  for (const key7 in fleet ) {
    console.log(key7);
  };
  for (const key8 in junk_data ) {
    console.log(key8);
  };
  for (const key9 in dress ) {
    console.log(key9);
  };
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

let key10 = Object.keys( obj1_person);
console.log(key10);
let key11 = Object.keys( obj2_pet);
console.log(key11);
let key12 = Object.keys( obj3_film );
console.log(key12);
let key13 = Object.keys( obj4_work);
console.log(key13);
let key14 = Object.keys(obj5_point );
console.log(key14);
let key15 = Object.keys(car  );
console.log(key15);
let key16 = Object.keys(triangle);
console.log(key16);
let key17 = Object.keys(fleet  );
console.log(key17);
let key18 = Object.keys(junk_data );
console.log(key18);
let key19 = Object.keys(dress);
console.log(key19);
// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let cars =[
     {model: 'BMW', year: 2012 , power: 300 , color: 'red'},
    {model: 'Audi', year: 215, power: 309, color:'blue'},
    {model: 'Chery', year: 2017, power: 207 , color: 'black'},
    {model: 'Citroen', year: 217, power: 112, color:'white'},
    {model: 'Fiat', year: 2019 , power: 95, color:'green'},
    {model: 'Honda', year: 2005, power: 329, color:'yelow'},
    {model: 'Jeep', year: 2008 , power: 134, color:'red'},
    {model: 'Lexus', year: 2016, power: 575, color:'white'},
    {model: 'Mersedes', year: 2019 , power:257 , color:'green'},
    {model: 'Nissan', year: 2005 , power: 145, color:'black'}
        
]
console.log(cars)

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
    { name:'Lviv', population: 1003924, country: 'Ukraine', region:'West'},
    { name:'Kiev', population: 1703915, country: 'Ukraine', region:'Center'},
    { name:'Dnipro', population:903994 , country: 'Ukraine', region:'East'},
    { name:'Rivne', population: 203354 , country: 'Ukraine', region:'West'},
    { name:'Odesa', population: 1203927, country: 'Ukraine', region:'South'},
]
console.log(cities)
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let cars_and_driver =[
    {model: 'BMW', year: 2012 , power: 300 , color: 'red', driver:{ 
        name: 'Igor', age: 35, gender: 'm', experience: 10
    }},
   {model: 'Audi', year: 215, power: 309, color:'blue', driver:{ 
    name: 'Kate', age: 23, gender: 'f', experience: 2
}},
   {model: 'Chery', year: 2017, power: 207 , color: 'black', driver:{ 
    name: 'Max', age: 30, gender: 'm', experience: 7
}},
   {model: 'Citroen', year: 217, power: 112, color:'white', driver:{ 
    name: 'Inna', age: 45, gender: 'f', experience: 22
}},
   {model: 'Fiat', year: 2019 , power: 95, color:'green', driver:{ 
    name: 'Ivan', age: 57, gender: 'm', experience: 35
}},
   {model: 'Honda', year: 2005, power: 329, color:'yelow', driver:{ 
    name: 'Anna', age: 25, gender: 'f', experience: 6
}}      
]
console.log(cars_and_driver)
// - проитерировать каждый массив из задания 5,6,7 при помощи while
let i = 0;
while (i < cars.length) {
    console.log(cars[i])
   i++;
  }
i=0;
  while (i < cities.length) {
    console.log(cities[i])
   i++;
  }

  i=0;
  while (i < cars_and_driver.length) {
    console.log(cars_and_driver[i])
   i++;
  }

// - проитерировать каждый массив из задания 5,6,7 при помощи for .

for(let i=0; i<cars.length; i++){
    console.log(cars[i])
}
for(let i=0; i<cities.length; i++){
    console.log(cities[i])
}
for(let i=0; i<cars_and_driver.length; i++){
    console.log(cars_and_driver[i])
}
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

for( let el of cars){
    console.log(el)
}
for( let el of cities){
    console.log(el)
}
for( let el of cars_and_driver){
    console.log(el)
}
// - взять объекты из задания 1 и превратить каждый в json.

let jsonUser = JSON.stringify(obj1_person);
let jsonUser1 = JSON.stringify(obj2_pet);
let jsonUser2 = JSON.stringify(obj3_film);
let jsonUser3 = JSON.stringify(obj4_work);
let jsonUser4 = JSON.stringify(obj5_point);
console.log(jsonUser)
console.log(jsonUser1)
console.log(jsonUser2)
console.log(jsonUser3)
console.log(jsonUser4)

// - взять json из задания 11 и превратить их обратно в объекты.

let parsedUser = JSON.parse(jsonUser);
console.log(parsedUser)
let parsedUser1 = JSON.parse(jsonUser1);
console.log(parsedUser1)
let parsedUser2 = JSON.parse(jsonUser2);
console.log(parsedUser2)
let parsedUser3 = JSON.parse(jsonUser3);
console.log(parsedUser3)
let parsedUser4 = JSON.parse(jsonUser4);
console.log(parsedUser4)
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
for(let i=0; i<cars.length; i++){
    let j_obj1 = JSON.stringify(cars[i]);
    console.log(j_obj1)
}


// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

for(let i=0; i<cities.length; i++){
    let j_obj = JSON.stringify(cities[i]);
    console.log(j_obj)
}
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

for(let i=0; i<cars_and_driver.length; i++){
    let new_m = JSON.stringify(cars_and_driver[i]);
    console.log(new_m)
}
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills

let m_user = [ {name:"Anya", skills:['sing', 'theatre', 'sport']},
{name:"Sasha", skills:[ 'sql', 'pyton', 'poetry', 'history'] }, 
{name:"Inna", skills:[ 'js', 'cooking', 'angular', 'smm']}, 
{name:"Vanya", skills:['note.js', 'java']}
 
]
for(let i =0; i<m_user.length; i++){
    console.log(m_user[i])

}
for(let i =0; i<m_user.length; i++){     
    console.log(m_user[i].skills)

}

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

 let users1 = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
 {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
 {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
 {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
 {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

 for(let i =0; i<users1.length; i++){
    console.log(users1[i])
 }

 for(let i =0; i<users1.length; i++){     
    console.log(users1[i].skills)
 }

// -


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];



//З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let new_mas =[];
for(let i =0; i<users.length; i++){     
  new_mas.push(users[i].address);
  
 }
 console.log( new_mas);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

for (let i = 0; i<users.length; i++) {
    let new_el = document.createElement(users[i].name);
    console.log(new_el)
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

for (let i = 0; i<users.length; i++) {
    let new_el1 = document.createElement(users[i].name);
    console.log(new_el1)
    }

    
     for (let i = 0; i<users.length; i++) {
         let new_el2 = document.createElement('bla');
         new_el2 = users[i].age;
         console.log(new_el2)
         }

 for (let i = 0; i<users.length; i++) {
      let new_el3 = document.createElement(users[i].status);
     console.log(new_el3)
 }    

 
 for (let i = 0; i<users.length; i++) {
 let new_el4 = document.createElement('bla');
  new_el4 = users[i].address;
   console.log(new_el4)
}   

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
            let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false},
             {id: 2, name: 'petya', age: 30, status: true}, 
             {id: 3, name: 'kolya', age: 29, status: true}, 
             {id: 4, name: 'olya', age: 28, status: false},];
            let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'},
             {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
             {user_id: 2, country: 'Poland', city: 'Krakow'}, 
             {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let masiv = [];
for (let i = 0; i<usersWithId.length; i++){
    for(let el of citiesWithId)
    {
        if(usersWithId[i].id === el.user_id){
            usersWithId[i].adress = el;
    
           masiv.push(usersWithId)
        
    }
}
}

console.log(masiv);
