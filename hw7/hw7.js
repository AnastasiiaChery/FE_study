
// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const btn = document.querySelector("#btn");
// const content = document.querySelector("#text");


// btn.onclick = ev =>{

//  content.hidden = true
// }

// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const btn1 = document.querySelector("#btn1");

// btn1.onclick = ev =>{
   
//     btn1.hidden = true
//    }


// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача


 
// let ok = document.querySelector('#button')

// ok.onclick = ev =>{
//     let age = document.querySelector('#inp');
//     const data = age.value;
//     if(data>18){
//         alert('You adult')
//     }
//     else{alert('You small')}

//    }

// // - Создайте меню, которое раскрывается/сворачивается при клике


// let menuElement = document.querySelector('.menu');
// let titleElement = document.querySelector('.title');
// let flag = false;
// menuElement.onclick = event =>{
//     if(flag){
//         titleElement.style.display = 'block';
//         flag = false;}
//         else{
//             titleElement.style.display = 'none';
//         flag = true;
//     }
// }


// // // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// let coment = [
//     {title:'nwfallvie', body:'fweg  fwe wlf j  hfewh fl'},
//     {title:'avbak', body:'/owarlkngwl'},
//     {title:'akgn', body:'fweg  fwe wlf j  hfewh fl'},
//     {title:'lkhnv;', body:'fweg  fwe wlf j  hfewh fl'}
// ]


// // Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.

// const list = document.querySelector('#list_1')
// coment.forEach(item =>{

//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     const button = document.createElement('button');

//     button.innerText = 'Hide',
//     h2.innerText = item.title;
//     p.innerText = item.body;

//     button.onclick =() =>{
//         p.hidden
//          ? p.hidden = false
//          : p.hidden = true
         
//     }
//     div.appendChild(h2);
//     div.appendChild(p);
//     div.appendChild(button);
//     list.appendChild(div)
// }
//     )

// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const btnBtn = document.querySelector('#btn_btn')
// const input1 = document.querySelector('#input1')
// const input2 = document.querySelector('#input2')
// const input21 = document.querySelector('#input21')
// const input22 = document.querySelector('#input22')
// btnBtn.onclick = ev =>{
//     console.log(input1.value)
//     console.log(input2.value)
//     console.log(input21.value)
//     console.log(input22.value)
//     input1.value = ''
//     input2.value = ''
//     input21.value = ''
//     input22.value = ''
// }



// // - Створити функцію, яка генерує таблицю.
// // Перший аргумент визначає кількість строк.
// // Другий параметр визначає кліькіть ячеєк в кожній строці.
// // Третій параметр визначає елемент в який потрібно таблицю додати.


// // const content12 = document.querySelector('#table')

// // function crTable(a, b, tag){

// //     const table = document.createElement("table");

// //     for(let i=0; i<a; i++){
// //                 const tr = document.createElement("tr");

// //         for(let j=0; j<b; j++){
// //             const td = document.createElement("td");

// //             td.innerHTML= i.toString() + j.toString();
            
// //             tr.appendChild(td);
// //         }

// //         table.appendChild(tr);
// //     }
// //     tag.appendChild(table);
// // }
// // crTable(2, 4, content12)

// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// // При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// const cr = document.querySelector('#create');
// const rows = document.querySelector('#rows').value;
// const column = document.querySelector('#column').value;
// const tag = document.querySelector('#tag').value;
// const content12 = document.querySelector('#sheet')


// function crTable(a, b, tag){
//     const table = document.createElement("table");
    
//     for(let i=0; i<a; i++){
//                 const tr = document.createElement("tr");

//         for(let j=0; j<b; j++){
//             const td = document.createElement("td");

//             td.innerHTML=tag;
            
//             tr.appendChild(td);
//         }

//         table.appendChild(tr);
//     }
//     content12.appendChild(table);
  
// }

// cr.onclick = event => {
//     crTable(rows, column, tag)
//    }

// // - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let imgArray  = [
//     {
//      id:1,
//     img_url:'2397_0.jpg'},
//         {
//      id:2,
//     img_url:'2408.jpg'},
//      {
//      id:3,
//      img_url:'pasted image 0.png'}
// ];
// const content11 = document.getElementById('image')
// const img = document.createElement('img');
// const btn31 = document.createElement('button');
// const btn32 = document.createElement('button');

// btn31.innerText = 'Left';
// btn32.innerText = 'Right';
// let index = 0;
// img.width = 300;

// img.src = imgArray[index].img_url;
// content11.appendChild(img);
// content11.appendChild(btn31);
// content11.appendChild(btn32);

// btn31.onclick =()=>{
//     index-1<0
//     ? index= imgArray.length -1
//     : index = index -1
//  img.src =imgArray[index].img_url
// }

// btn32.onclick =()=>{
//     index+1 > imgArray.length -1
//     ? index= 0
//     : index = index +1
//  img.src =imgArray[index].img_url
// }


// // - Сворити масив не цензцрних слів.
// // Сворити інпут текстового типу.
// // Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// // Перевірку робити при натисканні на кнопку

// let butWorld = document.querySelector('#buttonWorld')
// let filthy =['foul1', 'foul2', 'foul3', 'foul4', 'foul5']
// butWorld.onclick = ev =>{
//     let world = document.querySelector('#inputWorld');
//     const date = world.value;
//     for(let i=0; i<filthy.length; i++){
//         if(filthy[i]===date){
//             alert('you bad guy')
//         }
//     }
//     world.value = ''
//    }


// // - Сворити масив не цензцрних слів. 
// // Сворити інпут текстового типу.
// // Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// // Кинути алерт з попередженням у випадку якщо містить.
// // Перевірку робити при натисканні на кнопку

// let butWorld1 = document.querySelector('#buttonWorld1')
// let mas=[]

// butWorld1.onclick = ev =>{
    
//     let world = document.querySelector('#inputWorld1');
//     const date = world.value;
//     delimeter = " ";
//     mas =date.split(delimeter)


//     for(let i=0; i<filthy.length; i++){
//         for(let i=0; i<mas.length; i++){
//         if(filthy[i]===mas[i]){
//             alert('you bad guy')
//         }
//     }}
//     world.value = ''
// }


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте


const menuList = document.getElementsByTagName('h2');
const contentFilt = document.getElementById('content')
const wrap = document.getElementById('wrap');
const ulFilt =  document.createElement('ul');
for(let i=0; i<menuList.length; i++){
   
    const liFilt =  document.createElement('li');
    const a =  document.createElement('a');
    let yakor = 'yakor'+i;
    a.href = '#'+yakor
    menuList[i].setAttribute('id', yakor);
    a.innerHTML = menuList[i].innerText;
    liFilt.appendChild(a);
    ulFilt.appendChild(liFilt)
}
contentFilt.appendChild(ulFilt)


// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

const fil = document.querySelector('#filter')
const masiv_us = document.createElement('div')
const check = document.querySelector('#check1')
const check1 = document.querySelector('#check2')
const check2 = document.querySelector('#check3')
const button_check = document.querySelector('#submit')


button_check.onclick =event =>{
    if(check.checked === true){
        
        usersWithAddress= usersWithAddress.filter((value) =>{
       return value.status ===false})
       fil.innerText = JSON.stringify(usersWithAddress);
    }
    if(check1.checked === true){
        
        usersWithAddress= usersWithAddress.filter((value) =>{
       return value.age >=29})
       fil.innerText = JSON.stringify(usersWithAddress);
    }
    if(check2.checked === true){
        
        usersWithAddress= usersWithAddress.filter((value) =>{
       return value.address.city === 'Kyiv'})
       fil.innerText = JSON.stringify(usersWithAddress);
    }
    else{fil.innerText = JSON.stringify(usersWithAddress)}
check.checked= false;
check1.checked=false;
check2.checked=false;
    
}

fil.appendChild(masiv_us)


    