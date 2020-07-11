

// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

let text1 =document.getElementById('content');
let t1= (text1.textContent);
console.log(t1);

// - отримує текст з блоку з id "rules"

let text2  =document.getElementById('rules');
let t2=(text2.textContent);
console.log(t2);


// - замініть текст параграфа з id 'content' на будь-який інший
text1.innerHTML = '<b> Change </b>';

// - замініть текст параграфа з id 'rules' на будь-який інший
text2.innerHTML = '<b> Change2 </b>';

// - змініть кожному елементу колір фону на червоний
let text3 = document.getElementsByTagName('ul');
console.log(text3);

text2.style.backgroundColor = `red`;
text1.style.backgroundColor = `red`;
text3['0'].style.backgroundColor = 'red';

// - змініть кожному елементу колір тексту на синій

text2.style.color = `blue`;
text1.style.color = `blue`;
text3['0'].style.color = `blue`;

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
var elem = document.querySelector("#rules")
console.log(elem.classList)
// - отримати всі елементи з класом fc_rules

let text5 = document.getElementsByClassName('fc_rules');
console.log(text5);

// - поміняти колір тексту у всіх елементів fc_rules на червоний

text5['0'].style.color = `red`;
