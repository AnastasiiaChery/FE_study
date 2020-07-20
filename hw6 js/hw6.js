// - создать массив с 20 числами.


let num_mas = [12, 7, 52, 95, 78, 409, -458, 578, 32, 89, 434, 10, 0, -8, 78, 345, -67, 34, 90, 55];

// -- при помощи метода sort и колбека  отсортировать массив.


// let sort = num_mas.sort((a, b) =>{
//     return a-b
// })
// console.log(sort)

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.


// let sort1 = num_mas.sort((a, b) =>{
//     return b-a
// })
// console.log(sort1)



// -- при помощи filter получить числа кратные 3


let filt3 = num_mas.filter((value) => {
 return value % 3 === 0;
 });
 console.log(filt3)

// -- при помощи filter получить числа кратные 10


 let filt10 = num_mas.filter((value) =>{
     return value % 10 === 0;
 })
 console.log(filt10)

 // -- перебрать (проитерировать) массив при помощи foreach()


 num_mas.forEach(value => {
      console.log(value)
     })

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

 let map = num_mas.map((value) => {
    return value * 3
       });
console.log(map)

// - создать массив со словами на 15-20 элементов.

let name = ['Katya', 'Olya', 'Inna', ' Arina', 'Oleg', 'Andrey', 'Max', 'Igor', 'Karina', 'Sergey', 'Olga', 'Anna', 'Sasha', 'Anton', 'Elina', 'Tim']

// -- отсортировать его по алфавиту в восходящем порядке.
let sort3 = name.sort()
console.log(sort3)

// -- отсортировать его по алфавиту  в нисходящем порядке.
let sort4 = name.sort((a, b) => {
    return b-a
})
console.log(sort4)

// -- отфильтровать слова длиной менее 4х символов 

let filt_four = name.filter(names => {
return names.length<=4}
);
console.log(filt_four)



// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце


let map_ind = name.map((value) => {
    return value + '!'
    });

    console.log(map_ind)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ {name: 'vasya', age: 31, status: false}, 
{name: 'petya', age: 30, status: true}, 
{name: 'kolya', age: 29, status: true}, 
{name: 'olya', age: 28, status: false}, 
{name: 'max', age: 30, status: true}, 
{name: 'anya', age: 31, status: false}, 
{name: 'oleg', age: 28, status: false}, 
{name: 'andrey', age: 29, status: true}, 
{name: 'masha', age: 30, status: true}, 
{name: 'olya', age: 31, status: false}, 
{name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
let filt_age = users.sort((a, b) =>{
    return a.age - b.age
    })
    console.log(filt_age)
    

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let h_name = users.sort((a, b) =>{
    return a.name.length - b.name.length
    })
    console.log(h_name)


    let l_name = users.sort((a, b) =>{
        return b.name.length - a.name.length
        })
        console.log(l_name)

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

let usersWithId = users.map((user, id) => {
 user.id = id+1
 return user
});

 console.log(usersWithId)

// - відсортувати його за індентифікатором

let sort_usersWithId = usersWithId.sort((a,b) =>
{return a.id - b.id}
)
console.log(sort_usersWithId)


// -- наисать функцию калькулятора с 2мя числами и колбеком

let num2 = [2,5]
let culk = num2.reduce((acc, currentValue) => {
    
      return acc + currentValue})
console.log(culk)

// -- наисать функцию калькулятора с 3мя числами и колбеком

let num3 = [2,5,3]
let culk1 = num3.reduce((acc, currentValue) => {
    
      return acc + currentValue})
console.log(culk1)

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
{producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
{producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
{producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
{producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
{producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
{producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
{producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
{producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
{producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
{producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
{producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
{producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

let vol = cars.filter((value) =>{
return value.volume <3;
})
console.log(vol)
// - двигун = 2л
let vol2 = cars.filter((value)=>{
return value.volume===2
}
)
console.log(vol2)
// - виробник мерс

let prod =cars.filter((value)=>{
return value.producer === 'mercedes'
}
)
console.log(prod)

// - двигун більше 3х літрів + виробник мерседес


let prod_vol1 = cars.filter((value) =>{
    return value.volume >=3 && value.producer ==='mercedes'
    })

    
 console.log(prod_vol1)

 
// - двигун більше 3х літрів + виробник субару

let prod_vol2 = cars.filter((value)=>{
return value.producer === "subaru" && value.volume>=3;
})
console.log(prod_vol2)

// - сили більше ніж 300
let power =cars.filter((value)=>{
    return value.power > 300;
    }
    )
    console.log(power )

// - сили більше ніж 300 + виробник субару

let power_prod =cars.filter((value)=>{
    return value.power > 300 && value.producer === "subaru" 
    }
    )
    console.log(power_prod )
// - мотор серіі ej


let eng =cars.filter((value)=>{
        return value.engine.indexOf('ej')>-1
        }
        )
        console.log(eng)
    


// - сили більше ніж 300 + виробник субару + мотор серіі ej

let power_prod_eng =cars.filter((value)=>{
    return value.power > 300 && value.producer === "subaru"  && value.engine.indexOf('ej')>-1
    }
    )
    console.log(power_prod_eng )

// - двигун меньше 3х літрів + виробник мерседес

let prod_vol_mers= cars.filter((value) =>{
    return value.volume <3 && value.producer ==='mercedes'
    })

 console.log(prod_vol_mers)


// - двигун більше 2л + сили більше 250

let pover_eng= cars.filter((value) =>{
    return value.volume >=2 && value.power > 250;
    })

 console.log(pover_eng)

// - сили більше 250  + виробник бмв


let pover_bmw= cars.filter((value) =>{
    return  value.power > 250 && value.producer ==='bmw'
    })

 console.log(pover_bmw)

// - взять слдующий массив
let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
{id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
{id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
{id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
{id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
{id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
{id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
{id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
{id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
{id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
{id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
// -- отсортировать его по id пользователей

// usersWithAddress.sort((a, b)=>{
// return a.id - b.id
// })
// console.log(usersWithAddress)
// -- отсортировать его по id пользователей в обратном опрядке

// usersWithAddress.sort((a, b)=>{
//     return b.id - a.id
//     })
//     console.log(usersWithAddress)

// -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((a, b) =>{
//  return a.age - b.age
// })
// console.log(usersWithAddress)

// -- отсортировать его по возрасту пользователей в обратном порядке

// usersWithAddress.sort((a, b) =>{
//  return b.age - a.age
// })
// console.log(usersWithAddress)

// -- отсортировать его по имени пользователей

// usersWithAddress.sort((a, b) =>{
//  return a.name > b.name
// })
// console.log(usersWithAddress)

// -- отсортировать его по имени пользователей в обратном порядке

// usersWithAddress.sort((a, b) =>{
//         return a.name < b.name
// })
// console.log(usersWithAddress)

// -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((a, b) =>{
//     return a.address.street > b.address.street
// })
// console.log(usersWithAddress)

// -- отсортировать его по номеру дома по возрастанию

// usersWithAddress.sort((a, b) =>{
//     return a.address.number - b.address.number})
// console.log(usersWithAddress)

// -- отфильтровать (оставить) тех кто младше 30
let low_age = usersWithAddress.filter((value) =>{
 return value.age <=30
})
console.log(low_age)
// -- отфильтровать (оставить) тех у кого отрицательный статус
let false_stat = usersWithAddress.filter((value) =>{
    return value.status === false
   })
   console.log(false_stat)

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

let low_age_false = usersWithAddress.filter((value) =>{
    return value.status === false && value.age <=30
})
console.log(low_age_false)
// -- отфильтровать (оставить) тех у кого номер дома четный

let home2 = usersWithAddress.filter((value)=>{
    return value.address.number % 2 === 0
})
console.log(home2)

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
let car_park = [
    {brand:'BMW',power:400, owner:{name:'Andrey',age:56, experience:15}, price:10000, year:2014},
    {brand:'BMW',power:200, owner:{name:'Igor',age:40, experience:4}, price:12500, year:2012},
    {brand:'BMW',power:150, owner:{name:'Alex',age:32, experience:12}, price:8750, year:2008},
    {brand:'Mersrdes',power:250, owner:{name:'Ivan',age:53, experience:25}, price:7500, year:2005},
    {brand:'Mersrdes',power:300, owner:{name:'Sergey',age:32, experience:3}, price:12550, year:2013},
    {brand:'Mersrdes',power:410, owner:{name:'Ivan',age:22, experience:2}, price:10900, year:2010},
    {brand:'Nisan',power:120, owner:{name:'Nikolay',age:29, experience:11}, price:17000, year:2016},
    {brand:'Nasan',power:350, owner:{name:'Evgen',age:24, experience:3}, price:9500, year:2009},
    {brand:'Audi',power:280, owner:{name:'Timur',age:40, experience:14}, price:12300, year:2015}
]


// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

car_park.map((value, index) => {
    if(index%2===0){
    value.power=  Math.round( value.power*1.1)
    }
    });
 console.log(car_park)

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
car_park.map((value, index) => {
    if(index ===0) {
    value.owner.name='Igor',
    value.owner.age=40, 
    value.owner.experience=10}

    });

car_park.map((value, index) => {
if(index ===2) {
 value.owner.name='Ivan',
value.owner.age=35, 
value.owner.experience=7}
    
        });
car_park.map((value, index) => {
      if(index ===4) {
     value.owner.name='Andrey',
    value.owner.age=50, 
    value.owner.experience=14}
        
            });
 car_park.map((value, index) => {
      if(index ===6) {
      value.owner.name='Kolya',
      value.owner.age=22, 
      value.owner.experience=3}
            
                });
 car_park.map((value, index) => {
  if(index ===8) {
     value.owner.name='Ilia',
     value.owner.age=35, 
    value.owner.experience=14}
                
                    });
 console.log(car_park)
// Для початку вкладіть всі наші створені автомобілі в масив cars.

let cars_m = car_park.map((value)=>{
    return value
})
console.log(cars_m)
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

cars_m.map((value, index) => {
    if(index%2===0){
    value.power=  Math.round( value.power*1.1)
    value.price= Math.round(value.price*1.05)
    }
    });
 console.log(cars_m)

// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

cars_m.map((value)=>
{
    if(value.owner.age >25 && value.owner.experience <5 )
    {value.owner.experience  = value.owner.experience +1 }
})
console.log(cars_m)
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let sum_cars = 0;

for (let i = 0; i < cars_m.length; i++) {
   
 sum_cars = sum_cars + cars_m[i].price
      }
console.log(sum_cars)

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]


console.log('Min Index:' + arr.findIndex( arr=> {return arr===4} ))

console.log('Max Index:' + arr.lastIndexOf(4))