// - створити функцію яка виводить масив
let masiv = [ 'Katya', 'Olya', 34, true, 195]
function write(){
    console.log(masiv)
}
write();

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

let random_masiv = []
function random(){
    for(let i=0; i<20; i++){
        random_masiv[i] = Math.floor(Math.random(i)*100)
    }
    console.log(random_masiv)
}
random()

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function min (a, b, c = 0) {
   
      if(b<a){ a=b}
      if(c<a){ a=c}
      console.log(a)
      return a
      

}  
min(5,8,15)


// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function max (a, b, c = 0) {
   
    if(b>a){ a=b}
    if(c>a){ a=c}
    console.log(a)
    return a
}  
max(5,8,15)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function mas_min_max () {
    let max = null;
    if(arguments.length>0){max = arguments[0]}
    for( let i =0; i<arguments.length; i++){
      if(arguments[i]>max){ max = arguments[i]}
    }

    let min = null;
    if(arguments.length>0){min = arguments[0]}
    for( let i =0; i<arguments.length; i++){
      if(arguments[i]<min){ min = arguments[i]}
    }
    console.log(min);
    return max;
    
    }  
    
    mas_min_max(-5, 5, 7, -9, 12, -90)

// - створити функцію яка повертає найбільше число з масиву
function max_mas () {
    let max = null;
    if(arguments.length>0){max = arguments[0]}
    for( let i =0; i<arguments.length; i++){
      if(arguments[i]>max){ max = arguments[i]}
    }
    return max;
       
    }  
    max_mas(-5, 5, 7, -9, 12, -90)

// - створити функцію яка повертає найменьше число з масиву

function min_mas () {
    let min = null;
    if(arguments.length>0){min = arguments[0]}
    for( let i =0; i<arguments.length; i++){
      if(arguments[i]<min){ min = arguments[i]}
    }
    return min;
       
    }  
   min_mas(-5, 5, 7, -9, 12, -90)

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function sum(){
    let s = 0;
    for(let i = 0; i<arguments.length; i++){
       s = s+ arguments[i]

    }
    
    return s
}
sum(3, 1, 7, -1)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function sr(){
    let sred = 0;
    for(let i = 0; i<arguments.length; i++){
       sred = sred+ arguments[i]
        }
        let final = sred/arguments.length;
    return final;
}
sr(3, 5, 7, -7)

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
 let obj_mas = [{name:'Kolya', obj:'home'}, {name:'vasya',obj:'car'}, {name:'katya',obj:'food'}, {name:'liza',obj:'bag'}]
function obj(array){
  let sum = 0;
  for (let i = 0; i<array.length; i++){
 if(typeof array[i] === 'object')
{
    sum = sum + 1
}}    
    return sum
}


console.log(obj(obj_mas));
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function field(){
 let counter = 0;
    for(let el_1 of arguments)
    {
        for (let key in el_1) counter++;
    }
    console.log(counter); 
    return counter;
}
field({name:'Kolya', obj:'home'}, {name:'vasya',obj:'car'}, {name:'katya',obj:'food'}, {name:'liza',obj:'bag'} )

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

let mas1 =  [1,2,3,4]
let mas2 =  [2,3,4,5]
 function mas_ind (array1, array2){
     let result = [];
     for(let i = 0; i<array1.length; i++){
         result.push(array1[i]+array2[i])
     }
    return result;
 }
 console.log(mas_ind(mas1, mas2))
  


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// [1,2,3,4,5,6] => func(arr, 4) => [1,2,3,4,6,5] ??????

let control_masiv = [1,2,3,4,5,6];
function control (array, numb){
    for(let i = 0; i<array.length; i++){
        if([i] === numb){
            let n = (array[i]);
            array[i] = array[i +1];
            array[i +1] = n;
            
        }
        return array;
        
 }
 
}
console.log(control(control_masiv, '3'))


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let numb_masiv = [2, 25, 0, 7,0, 9]
function sort (array){
    let counter = 0;
    let result = [];
for(let i = 0; i<array.length; i++){
    if( array[i] === 0){
        counter++;        
    } else 
    {
        result.push(array[i]);
    }
    
    }
    for (let i = 0; i<counter; i++ )
    {
        result.push(0);
    }
return result
}

console.log("test",sort(numb_masiv))


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
function text_ho (){
    const div = document.createElement('div')
    div.innerHTML =  "Hello owu"
    document.body.appendChild(div)
    }
text_ho ()
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function text_and_el (text, type_tag){
    const tag = document.createElement(type_tag)
    tag.innerHTML =  text
    document.body.appendChild(tag)
    }
    text_and_el ('Hello world', 'h1')

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

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

function list (array1, id){
    const first = document.getElementById(id);
    const ul = document.createElement('ul');
    for(let i = 0; i< array1.length; i++){
        const car = array1[i];
        const li = document.createElement('li')
        li.innerHTML = `${i+1}-${car.model}`
        ul.appendChild(li)
    }
    first.appendChild(ul)
}

list(cars, 'list' )

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
 function carInBlock(array, id){
    const for_div = document.getElementById(id);
    const new_div = document.createElement('div');
    for(let i = 0; i< array.length; i++){
        const car = array[i];
        const div = document.createElement('div')
         div.innerHTML = `${i +1}-${car.model} (color: ${car.color}) <br> Year: ${car.year} <br> Engine power: ${car.power}`;
        
        new_div.appendChild(div)
    }
    for_div.appendChild(new_div)
 }

 carInBlock(cars, 'div' )

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function AllInBlock(array, id){
    const for_div = document.getElementById(id);
    const new_div = document.createElement('div');
    for(let i = 0; i< array.length; i++){
        const car = array[i];
        const div = document.createElement('div')
        const div1 = document.createElement('div')
        const div2 = document.createElement('div')
        const div3 = document.createElement('div')
         div.innerHTML = `${i + 1}-${car.model}`
         div1.innerHTML =`color: ${car.color}` 
         div2.innerHTML = `Year: ${car.year}`
         div3.innerHTML = `Engine power: ${car.power}`
        
        new_div.appendChild(div)
        new_div.appendChild(div1)
        new_div.appendChild(div2)
        new_div.appendChild(div3)
    }
    for_div.appendChild(new_div)
 }

 AllInBlock(cars, 'A_div' )





// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
  let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
  let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

  
  function concat (array1, array2){
for (let i = 0; i<array1.length; i++){
    let mas = [];
    for(let el of array2)
    {
        if(array1[i].id === el.user_id){
            array1[i].adress = el;
    
           mas.push(array1)
       return mas
    }
}
}
  }
   console.log(concat(usersWithId, citiesWithId))

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html   check file!!!!!!!!!

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];

    


        function FRules(array, id){
            const r_id = document.getElementById(id);
            const new_div = document.createElement('div');
            for(let i = 0; i< array.length ; i++){
                const arg = array[i];
                const div = document.createElement('div')
                const div1 = document.createElement('div')
                
                 div.innerHTML = `${i +1}-${arg.title}`
                 div1.innerHTML =`${arg.body}` 
                
                new_div.appendChild(div)
                new_div.appendChild(div1)
               
            }
            r_id .appendChild(new_div)
         }
        
         FRules(rules, 'rul' )

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========