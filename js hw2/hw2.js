//1
  
// let numbers = [52, 5, 7, 12,83]
// console.log(numbers);

//2

// let names = ['Katya', 'Olya', 'Igor', 'Maria', 'Oleg']
// console.log(names);

//3
// let all = ['olya', 6, true, true, 9]
// console.log(all);

//4
// let empty = [];
// empty[0]= 'Olya';
// empty[1] = 7;
// empty[2] = true;
// empty[3]= 12;
// empty[4]= 'Katya';
// console.log(empty)


//5
// for (let i = 0; i < 10; i++) {
// document.write('<div> text</div>');
// }

//6

// for (let i = 0; i < 10; i++) {
// document.write('<div> text'+i+'</div>');
// }

// 7

// let i = 1;
// while (i< 21) {
// document.write('<h1> text</h1>');
// i+=1;
// }

//8

// let i = 1;
// while (i< 21) {
// document.write('<h1> text'+i+'</h1>');
// i+=1;
// }



//9

// let numbers = [ 2, 12, 6, 93, 73, 1, 93, 3, 90, 4 ];
// for ( let i =0; i< numbers.length; i++){
// console.log(numbers [i])
// }


// //10

// let names = ['Anya', 'Katya', 'Oleg', 'Igor', 'Sveta', 'Inna', 'Dima', 'Sasha', 'Alina', 'Vasya'];
// for (let i = 0; i < names.length; i++) {
// console.log(names[i]);
// }


// 11

// let all = [12, 'Katya', true, 93, 'Sveta', false, 'Dima', 94, 'Alina', 'Vasya'];
// for (let i = 0; i < all.length; i++) {
// console.log(all[i]);
// }

//12

// let all = [12, 'Katya', true, 93, 'Sveta', false, 'Dima', 94, 'Alina', 'Vasya'];

// for(let i=0;i<all.length;i++)
// {
//     if(typeof all[i] === 'number'){
//         console.log(all[i])
//     }
// }


//13

// let all = [12, 'Katya', true, 93, 'Sveta', false, 'Dima', 94, 'Alina', 'Vasya'];
// for(let i = 0; i<all.length; i++){
// if(typeof all[i] === "string")
// { console.log(all[i])
// }
// }

//14
// let all = [12, 'Katya', true, 93, 'Sveta', false, 'Dima', 94, 'Alina', 'Vasya'];
// for(let i = 0; i<all.length; i++){
// if(typeof all[i] === "boolean")
// { console.log(all[i])
// }
// }

//15
// let empty = [];

// empty[0]= true;
// empty[1]= 'Anya';
// empty[2]= true;
// empty[3]= 'Ira';
// empty[4]= true;
// empty[5]= 17.5;
// empty[6]= 'Oleg';
// empty[7]= 22;
// empty[9]= false;
// empty[8]= 73;
// for(let i = 0; i<empty.length; i++){
//     console.log(empty[i])
// }

// 17
// for(let i=0; i<10; i++){
//     console.log(i)
//     document.write(i)
// }

//18

// for(let i =0; i<100; i++){
//     console.log(i);
//     document.write(i);
// }


//19

// for(let i =0; i<100; i+=2){
//     console.log(i);
//     document.write(i);
// }

//20
// for(let i =0; i<100; i++){
//     if(i%2===0){
//         console.log(i);
//         document.write(i);}
//     }


//21
// for(let i =0; i<100; i++){
//      if(i%2!==0){
//             console.log(i);
//             document.write(i);}
//         }


//22


// let min = 0;
// let sec = 0;

// for( let min=0; min<60; min++){
//     if(min===2 && sec===0){console.log(min, ':', sec);break}
//     for( let sec=0; sec<60; sec++){
//         console.log(min, ':', sec);
//      }
// };

//23

// let hour =2;
// let min = 20;
// let sec = 0;

// for( h = 0; h<4; h++){
//       for( m = 0; m<30; m++){
//               for (s = 0; s<10; s++){
//                       console.log(h, ':', m, ':', s)
//           if(hour===h && min===m && sec === s){break}
//       }
//       if(hour===h && min===m && sec === s){break}
//   }
//   if(hour===h && min===m && sec === s){break}
//    }

//24
// let mas= ['a', 'b', 'c']
// let abc= ''
// for(i=0; i<mas.length; i++){
//  abc+=mas[i];
//     }
//     console.log(abc);


//25
// let mas= ['a', 'b', 'c']
// let abc= ''
// let i =0
// while (i < mas.length) {
//     abc+=mas[i]
//         i+=1;
//   }
//   console.log(abc)

//26
// let mas= ['a', 'b', 'c']
// let abc= ''
// for( let key of mas ){
//     abc+=key
// }
// console.log(abc)



// PART 2

//
// Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу. ???

// let m = ['a', 'b', 'c'];
// for(let i=1; i<4; i++){
//     m.push(i);
//         }
//  console.log(m)


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].


// let m = ['1', '2', '3'];
// let r=[];
// for(let i=m.length-1;i>=0; i--){
// r.push(m[i])
//     }
// console.log(r)


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6. 

// let m = [1, 2, 3];
// for(let i=4; i<7; i++){
//     m.push(i);
//         }
//  console.log(m)


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let m = [1, 2, 3];
// for(let i=6; i>3; i--){
//     m.unshift(i);
//         }
//  console.log(m)


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let m =['js', 'css', 'jq'];
// let del =m.shift();
// console.log(del);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let m =['js', 'css', 'jq'];
// let del =m.pop();
// console.log(del);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let m =[1, 2, 3, 4, 5];
// console.log(m.slice(3, 5));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let  m =[1, 2, 3, 4, 5];
// console.log(m.slice(0, 2));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let m =[1, 2, 3, 4, 5];
//  m.splice(1,2)
// console.log(m)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let m =[1, 2, 3, 4, 5];
// m.splice(3, 0,'a', 'b', 'c' );
// console.log(m);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let m =[1, 2, 3, 4, 5];
// m.splice(1, 0,'a', 'b');
// m.splice(6, 0,'c');
// m.splice(8, 0,'e');

// console.log(m);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let m= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i =0; i<m.length; i++){
//         if(m[i]%2===0){
//             console.log(m[i]);  
//         } 
//      }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let m= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let r=[]
// for(i=0; i<10; i++){
//     r.push(m[i])
// }
// console.log(r)

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let m= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let r=[]

// for(i=0; i<m.length; i++){
//      r = m.slice(0,10)
//     }
// console.log(r);



//PART


// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

// let m= [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while

// let i = 0;
// while(i<m.length){
//     console.log(m[i])
//     i++
// }

// 2. перебрати його циклом for

// for(i=0; i<m.length; i++){
//     console.log(m[i])
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом 

// let i=0;
// while(i<m.length){
//     if(i%2!==0){
//         console.log(m[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом 

// for(i=0; i<m.length; i++){
//     if(i%2!==0){
//       console.log(m[i])
//   }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let i=0;
// while(i<m.length){
//     if(m[i]%2===0){
//         console.log(m[i])
//     }
//     i++
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// for(i=0; i<m.length; i++){
//     if(m[i]%2===0){
//       console.log(m[i])
//   }
// }


// 7. замінити кожне число кратне 3 на слово "okten"

// for(i=0; i<m.length; i++){
//     if(m[i]%3===0){
//           m[i]="okten";
//      }
//     }
//     console.log(m)


// 8. вивести масив в зворотньому порядку.

// let r=[];
// for(let i=m.length-1;i>=0; i--){
// r.push(m[i])
//     }
// console.log(r)



// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//1
// let i = m.length -1;
// while(i>=0){
//     console.log(m[i])
//     i--
// }

// 2
// for(i=m.length -1; i>=0; i--){
//         console.log(m[i])
//     }

// 3
// let i=m.length -1;
// while(i>0){
//     if(i%2!==0){
//         console.log(m[i])
//     }
//     i--
// }

// 4
// for(i=m.length-1; i>=0; i--){
//     if(i%2!==0){
//       console.log(m[i])
//   }
// }

//  5
// let i=m.length -1;
// while(i>=0){
//     if(m[i]%2===0){
//         console.log(m[i])
//     }
//     i--
// }

//6
// for(i=m.length-1; i>=0; i--){
//     if(m[i]%2===0){
//       console.log(m[i])
//   }
// }

//7
// for(i=m.length-1; i>=0; i--){
//     if(m[i]%3===0){
//           m[i]="okten";
//      }
//     }
//     console.log(m)



// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let m1 = [];
// let m2 = [];
// for(i=0; i<50; i++){
//  m1[i]= i*2;
// }
// console.log(m1)


// for(i=0; i<50; i++){
//  m2[i]= i*2-1;
// }
// console.log(m2)


//PART 4


// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.

// let m=[]
// for( let i=0; i<100; i++){
//     m[i]=Math.floor(Math.random(i)*100)
// }
// console.log(m)



//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let m=[]
// for( let i=0; i<100; i++){
//     m[i]=Math.floor(Math.random(i)*(732-8)+8)
// }


//  2. вывести на консоль  каждый третий елемент

// for( let i=0; i<100; i+=3){
//     console.log(m[i])
// }

//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
// for( let i=0; i<100; i+=3){
//     if(m[i]%2===0){ 
//         console.log(m[i])
//     }  
//     }

//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.

// let r =[];
// for( let i=0; i<100; i+=3){
//     if(m[i]%2===0){ 
//          r=m[i];
//             }  
//             console.log(r)
//     }

//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// for( let i=0; i<100; i++){
//     if(m[i+1]%2===0){ 
//          console.log(m[i])
//     }
// }


//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let m = [100,250,50,168,120,345,188];
// let s =(0);

// for(let i=0; i<m.length; i++){
//   s=s+m[i]
// }
// let rez = (s/m.length);
// console.log(rez)



// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let m=[];
// let r=[];
// for( let i=0; i<100; i++){
//     m[i]=Math.floor(Math.random(i)*100)
//     }
// for( let i=0; i<100; i++){
//     r[i]=m[i]*5;
// }
// console.log(r);

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

// let m=[ 2, 'rgj', 4, true, 'wwbr', 3, 93, false];
// let num = [];
// for( let i=0; i<m.length; i++){
//        if(typeof m[i] === 'number') {num.push(m[i]);}
      
//     }
//     console.log(num);