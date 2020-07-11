// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

let text1 =document.getElementById('main_header');
text1.style.color = `blue`;

// -- робить шириниу елементу ul 400 пікселів

let text2 = document.getElementsByTagName('ul');
console.log(text2);
text2[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%

let text3 = document.getElementsByClassName('linkList');
for(let i=0; i<text3.length; i++){
    text3[i].style.width= '50%';
}
console.log(text3);

// -- отримує текст який зберігається в елементі з класом listElement2
let text4 = document.getElementsByClassName('listElement2');
let t4 = (text4[0].textContent);
console.log(t4);


// -- отримує всі елементи li та змінює ім колір фону на сірий

let text5 = document.getElementsByTagName('li');
console.log(text5);
for(let i=0; i<text5.length; i++){
    text5[i].style.backgroundColor = ('gray');
}

// -- отримує всі елементи 'a' та додає їм клас anchor

let text6 = document.getElementsByTagName('a');
for(let i=0; i<text6.length; i++){
    text6[i].classList.add('anchor');
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for(let i=0; i<text6.length; i++){
    if((text6[i].textContent) === 'link3'){
        text6[i].style.fontSize = '40px'
    }
}

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a 


for(let i=0; i<text6.length; i++){
    text6[i].classList.add('element_'+text6[i].textContent);
        }

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

const fon = prompt('Imput color')
let text7 = document.getElementsByClassName('sub-header');
for(let i=0; i<text7.length; i++){
    text7[i].style.backgroundColor = fon;
}

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

const col = prompt('Imput color for text' )
for(let i=0; i<text7.length; i++){
    if((text7[i].textContent)==='content 2 segment'){
        text7[i].style.color = col }
}

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

const tex = prompt('Imput content' )
let text8 = document.getElementsByClassName('content_1');
for(let i=0; i<text8.length; i++){
    text8[i].textContent = tex;
        }

// -- отримати елементи p та змінити їм paddin на довільне значення

let text9 = document.getElementsByTagName('p');
for(let i=0; i<text9.length; i++){
    text9[i].style.padding = '50px'
        }
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення



let text10 = document.getElementsByClassName('text2 ');
for(let i=0; i<text10.length; i++){
    text10[i].textContent = 'tjvlwknvlkwbvojbw';
        }