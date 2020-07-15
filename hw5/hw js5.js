// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================


// function Tag(name, action, attributes){
//     this.name = name;
//     this.action = action;
//     this.attributes = attributes;
// }
// let a = new Tag('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`, 
// [{title:'accesskey', act:'Активация ссылки с помощью комбинации клавиш.' }, 
// {title:'title', act :'Добавляет всплывающую подсказку к тексту ссылки.'}, 
// {title: 'name', act :'Устанавливает имя якоря внутри документа.'}
// ])

// let div = new Tag('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. `, 
// [{title:'align', act:'Задает выравнивание содержимого тега <div>. ' }, 
// {title:'title', act :'Добавляет всплывающую подсказку к тексту ссылки.'}
// ])

// let h1 = new Tag('h1', `Тег <h1> представляет собой наиболее важный заголовок первого уровня `, 
// [{title:'align', act:'Определяет выравнивание заголовка. ' }
// ])

// let span = new Tag('span', `Тег <span> предназначен для определения строчных элементов документа. `, 
// [{title:'dir', act:'Задает направление и отображение текста — слева направо или справа налево.' }, 
// {title:'class', act :'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}, 
// {title: 'hidden', act :'Скрывает содержимое элемента от просмотра.'}
// ])

// let input = new Tag('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.  `, 
// [{title:'form', act:'Связывает поле с формой по её идентификатору.' }, 
// {title:'size', act :'Ширина текстового поля.'}
// ])

// let option = new Tag('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. `, 
// [{title:'label', act:'Указание метки пункта списка.' }, 
// {title:'value', act :'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}
// ])

// let select = new Tag('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. `, 
// [{title:'disabled', act:'Блокирует доступ и изменение элемента. ' }, 
// {title:'required', act :'Список обязателен для выбора перед отправкой формы.'}
// ])
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input );
// console.log(option);
// console.log(select);



// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

class Tag {
    constructor(name, action, attributes){
            this.name = name;
            this.action = action;
            this.attributes = attributes;
        }
}

let a = new Tag('a', `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`, 
[{title:'accesskey', act:'Активация ссылки с помощью комбинации клавиш.' }, 
{title:'title', act :'Добавляет всплывающую подсказку к тексту ссылки.'}, 
{title: 'name', act :'Устанавливает имя якоря внутри документа.'}
])

let div = new Tag('div', `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. `, 
[{title:'align', act:'Задает выравнивание содержимого тега <div>. ' }, 
{title:'title', act :'Добавляет всплывающую подсказку к тексту ссылки.'}
])

let h1 = new Tag('h1', `Тег <h1> представляет собой наиболее важный заголовок первого уровня `, 
[{title:'align', act:'Определяет выравнивание заголовка. ' }
])

let span = new Tag('span', `Тег <span> предназначен для определения строчных элементов документа. `, 
[{title:'dir', act:'Задает направление и отображение текста — слева направо или справа налево.' }, 
{title:'class', act :'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}, 
{title: 'hidden', act :'Скрывает содержимое элемента от просмотра.'}
])

let input = new Tag('input', `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.  `, 
[{title:'form', act:'Связывает поле с формой по её идентификатору.' }, 
{title:'size', act :'Ширина текстового поля.'}
])

let option = new Tag('option', `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. `, 
[{title:'label', act:'Указание метки пункта списка.' }, 
{title:'value', act :'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}
])

let select = new Tag('select', `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. `, 
[{title:'disabled', act:'Блокирует доступ и изменение элемента. ' }, 
{title:'required', act :'Список обязателен для выбора перед отправкой формы.'}
])
console.log(a);
console.log(div);
console.log(h1);
console.log(span);
console.log(input );
console.log(option);
console.log(select);



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// let car = {
//     model: 'BMW X5', 
//     producer: 'BMW',
//     year: 2018,
//     max_speed: 280,
//     volume: 50,
//     drive: function(){console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)},
//     info: function(){console.log(`Модель: ${this.model}, Виробник:${this.producer}, 
//     Рiк випуску:${this.year}, Mаксимальна швидкість:${this.max_speed}, Об'єм двигуна :${this.volume}`)},
//     increaseMaxSpeed: function(newSpeed){
//         this.max_speed+=newSpeed;
//         console.log(`${this.max_speed}`)},
//     changeYear: function(newValue){
//         this.year=newValue;
//         console.log(`${this.year}`)},
//      addDriver: function (driver){this.driver = driver
//     console.log(`${this.driver.name}`)}
// }

// car.drive()
// car.info()
// car.increaseMaxSpeed(50)
// car.changeYear(2006)
// car.addDriver(
//     {
// name:'Oleg',
// year: 1960
//     }
// )

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Cars(model, producer, year, max_speed, volume){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.volume = volume;

//     this.drive = function (){ console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)};

//     this.info = function(){ console.log(`Модель: ${this.model}, Виробник:${this.producer}, 
//     Рiк випуску:${this.year}, Mаксимальна швидкість:${this.max_speed}, Об'єм двигуна :${this.volume}`)};

//     this.increaseMaxSpeed = function(newSpeed){
//         this.max_speed+=newSpeed;
//         console.log(`${this.max_speed}`)};


//     this.changeYear = function(newValue){
//         this.year=newValue;
//         console.log(`${this.year}`)};



//     this.addDriver = function (driver){this.driver = driver
//     console.log(`${this.driver.name}`)};
// } 

// let lexus = new Cars ( 'Lexus', 'Lexus manufacture', 1975, 220, 70 )

// lexus.drive()
// lexus.info()
// lexus.increaseMaxSpeed(50)
// lexus.changeYear(2006)
// lexus.addDriver(
//     {
// name:'Oleg',
// year: 1973
//     }
// )

// // ==============================================
// // - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// // ==============================================

// class Cars_cl {
//     constructor (model, producer, year, max_speed, volume){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.volume = volume;}


//      drive (){console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)};

//     info (){console.log(`Модель: ${this.model}, Виробник:${this.producer}, 
//     Рiк випуску:${this.year}, Mаксимальна швидкість:${this.max_speed}, Об'єм двигуна :${this.volume}`)};

//     increaseMaxSpeed (newSpeed){
//         this.max_speed+=newSpeed;
//         console.log(`${this.max_speed}`)};

//     changeYear (newValue){
//         this.year=newValue;
//         console.log(`${this.year}`)};

//      addDriver (driver){this.driver = driver
//     console.log(`${this.driver.name}`)}

//      }

//  let niva = new Cars_cl ( 'Niva', 'Manufacture', 2005, 210, 50 )

// niva.drive()
// niva.info()
// niva.increaseMaxSpeed(50)
// niva.changeYear(2006)
// niva.addDriver(
//     {
// name:'Oleg',
// year: 1995
//     }
// )


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
//     constructor(name, age, foot_size){
//         this.name = name,
//         this.age = age,
//         this.foot_size = foot_size
//     }
// }

// let mas = [];


// let Anna = new Cinderella('Anna', 18, 37);
// let Inna = new Cinderella('Inna', 20, 39);
// let Katya = new Cinderella('Katya', 18, 38);
// let Elina = new Cinderella('Elina', 16, 39);
// let Ira = new Cinderella('Ira', 21, 37);
// let Svitlana = new Cinderella('Svitlana', 18, 35);
// let Olga = new Cinderella('Olga', 15, 37);
// let Alina = new Cinderella('Alina', 16, 36);
// let Karina = new Cinderella('Karina', 17, 39);
// let Elya = new Cinderella('Elya', 18, 40);

// mas.push(Anna)
// mas.push(Inna)
// mas.push(Katya)
// mas.push(Elina)
// mas.push(Ira)
// mas.push(Svitlana)
// mas.push(Olga)
// mas.push(Alina)
// mas.push(Karina)
// mas.push(Elya)



// console.log(mas)

// class Prince {
//     constructor(name, age, shoes_size){
//         this.name = name,
//         this.age = age,
//         this.shoes_size= shoes_size
//     }
// }

// let eric = new Prince('Eric', 23, 36);

// for(let i =0; i<mas.length; i++){
//     if(mas[i].foot_size === eric.shoes_size){
//         console.log(mas[i].name)
//     }
// }

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function Cinderella (name, age, foot_size){
            this.name = name,
            this.age = age,
            this.foot_size = foot_size
        }
let mas = [];


let Anna = new Cinderella('Anna', 18, 37);
let Inna = new Cinderella('Inna', 20, 39);
let Katya = new Cinderella('Katya', 18, 38);
let Elina = new Cinderella('Elina', 16, 39);
let Ira = new Cinderella('Ira', 21, 37);
let Svitlana = new Cinderella('Svitlana', 18, 35);
let Olga = new Cinderella('Olga', 15, 37);
let Alina = new Cinderella('Alina', 16, 36);
let Karina = new Cinderella('Karina', 17, 39);
let Elya = new Cinderella('Elya', 18, 40);

mas.push(Anna)
mas.push(Inna)
mas.push(Katya)
mas.push(Elina)
mas.push(Ira)
mas.push(Svitlana)
mas.push(Olga)
mas.push(Alina)
mas.push(Karina)
mas.push(Elya)



console.log(mas)

class Prince {
    constructor(name, age, shoes_size){
        this.name = name,
        this.age = age,
        this.shoes_size= shoes_size

        this.findCinderela = function(array){
     for(let i =0; i<array.length; i++){
    if(array[i].foot_size === this.shoes_size){
        console.log(array[i].name)
    }
}

        }
    }
}

let eric = new Prince('Eric', 23, 36);

eric.findCinderela(mas)
