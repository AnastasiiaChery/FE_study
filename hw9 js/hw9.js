// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.


//// Промис


// function wakeUp (alarmIsWorking){
//     return new Promise((resolve, reject)=>
//     setTimeout(()=> {
//         if(alarmIsWorking){
//             resolve ('Good morning')
//         }
//         else {
//           reject('Alarm clock broken')}
//     }, 1000)
//     )
//     }
    

// function shower (waterWarm){
//     return new Promise((resolve,reject) => 
//     setTimeout(() =>{
//         if(waterWarm){
//             resolve ('You clean')
            
//         }
//         else{
//             reject('Need to pay for water')
//         }
//     }, 1500)
//     )
// }

// function drinkCoffee (haveCoffee){
//     return new Promise((resolve,reject) =>
//     setTimeout(() => {
//         if(haveCoffee){
//             resolve ('Good coffee')
//         }else{
//             reject ('You dont have coffee')
//         }
//     }, 800)
//     )
// }

// function goWork (workDone){
//     return new Promise((resolve,reject) =>
//     setTimeout(() => {
//         if(workDone){
//             console.log('Good job')
//             money = 500;
//             resolve(money)
//         }else{
//             reject ('You are fired ')
//         }
//     }, 200)
//     )
// }


// function buyFood(money){
//     return new Promise((resolve,reject) =>
//     setTimeout(() => {
//         if (money > 300) {
//             money = money - 300
//            console.log('You have food')
//            resolve(money)
//        } else {
//         reject('You poor')
//        }
//       }, 1200)
//     )
// }

// function marshrutka(money){
//     return new Promise((resolve,reject) =>
//     setTimeout(() => {
//         if (money > 7) {
//             money = money - 7
//            resolve('Home.Sweet home!!!!')
//        } else {
//         reject('You will die on the street')
//        }
//       }, 2000)
//     )
// }
// function relaxTime (freeTime){
//     return new Promise((resolve,reject) => 
//     setTimeout(() =>{
//         if(freeTime){
//             resolve ('Relax!!')
            
//         }
//         else{
//             reject('You need work')
//         }
//     }, 500)
//     )
// }

// function sleepTime (night){
//     return new Promise((resolve,reject) => 
//     setTimeout(() =>{
//         if(night){
//             resolve ('Good dream')
            
//         }
//         else{
//             reject('Not time to sleep')
//         }
//     }, 500)
//     )
// }



// wakeUp(true)
//   .then(reward => {
//     console.log('______________________');
//     console.log(reward);
//     console.log('______________________');

//     return shower(true);
//   })
//   .then(reward => {
//     console.log('______________________');
//     console.log(reward );
//     console.log('______________________');
//     return drinkCoffee(true);
//   })
//   .then(reward =>{
//     console.log('______________________');
//     console.log(reward);
//     console.log('______________________');
//     return goWork(true);
//   } )
//   .then(money =>{
//     console.log('______________________');
//     console.log(money);
//     console.log('______________________');
//     return buyFood(money);
//   })
//   .then(money => {
//     console.log('______________________');
//     console.log(money);
//     console.log('______________________');
//     return marshrutka(money);
//   })
//   .then(reward =>{
//     console.log('______________________');
//     console.log(reward);
//     console.log('______________________');
//     return relaxTime(true);
//   })
//   .then(reward =>{
//     console.log('______________________');
//     console.log(reward);
//     console.log('______________________');
//     return sleepTime(true);
//   } )
//   .then(reward =>{
//     console.log('______________________');
//     console.log(reward);
//     console.log('______________________');})

// //// Асинк
// async function myDay() {
//     try {
//       let reward1 = await wakeUp(true);
//       console.log('__________________________');
//       console.log(reward1);
//       console.log('__________________________');
  
//       let reward2= await shower(true);
  
//       console.log('__________________________');
//       console.log(reward2);
//       console.log('__________________________');

//       let reward3= await drinkCoffee(true);
  
//       console.log('__________________________');
//       console.log(reward3);
//       console.log('__________________________');

//       let reward4 = await goWork(true);
//       console.log('__________________________');
//       console.log(reward4);
//       console.log('__________________________');
  
//       let reward5= await buyFood(money);
  
//       console.log('__________________________');
//       console.log(reward5);
//       console.log('__________________________');

//       let reward6= await marshrutka(money);
  
//       console.log('__________________________');
//       console.log(reward6);
//       console.log('__________________________');
      
//       let reward7= await sleepTime(true);
  
//       console.log('__________________________');
//       console.log(reward7);
//       console.log('__________________________');

     
//     } catch (e) {
//       console.error(e);
//     }
//   }
//   myDay()



///// Колбек


// function wakeUp (alarmIsWorking, cb){
//         setTimeout(()=> {
//         if(alarmIsWorking ){
//             cb('Good morning', null);
//             console.log('Good morning')
//         }
//         else {
//             cb(null, 'Alarm clock broken');
//           }
//     }, 1000)    }
    
    

// function shower (waterWarm, cb){
//         setTimeout(() =>{
//         if(waterWarm ){
//             cb ('You clean', null) 
//             console.log('You clean')
//         }
//         else{
//             cb(null, 'Need to pay for water')
//         }
//     }, 1500)
//     }

// function drinkCoffee (haveCoffee, cb){
//         setTimeout(() => {
//         if(haveCoffee === true){
//             cb('Good coffee', null)
//             console.log('Good coffee')
//         }else{
//             cb (null, 'You dont have coffee')
//         }
//     }, 800)
//    }

// function goWork (workDone, cb){
//         setTimeout(() => {
//         if(workDone=== true){
//             console.log('Good job')
//             money = 500;
//             cb(null, money)
//         }else{
//             cb ('You are fired ', null)
//         }
//     }, 200)
// }


// function buyFood(money, cb){
//         setTimeout(() => {
//         if (money > 300) {
//             money = money - 300
//            console.log('You have food')
//            cb(null, money)
//        } else {
//         cb('You poor', null)
//        }
//       }, 1200)
// }

// function marshrutka(money, cb){
//         setTimeout(() => {
//         if (money > 7) {
//             money = money - 7
//            cb(null,'Home.Sweet home!!!!')
//            console.log('Home.Sweet home!!!!')
//        } else {
//         cb('You will die on the street', null)
//        }
//       }, 2000)
// }
// function relaxTime (freeTime, cb){
//         setTimeout(() =>{
//         if(freeTime == true){
//             cb (null, 'Relax!!')
//             console.log('Relax!!')
//      }else{
//            cb('You need work', null)
//         }
//     }, 500)
// }

// function sleepTime (night, cb){
//      setTimeout(() =>{
//         if(night == true){
//             cb (null, 'Good dream')  
//             console.log('Good dream') 
//         }
//         else{
//             cb('Not time to sleep', null)
//         }
//     }, 500)
// }



// wakeUp(true, (err) => {
//       if (err=== true) {
//           console.log('EROR')
//       } else {
//         document.write('Good morning')
//         shower(true, (e) => {
//           if (e=== true) {
//             console.log('EROR')
//           } else {
//             document.write('You clean')
//             drinkCoffee(true, (e) => {
//                 if (e=== true) {
//                   console.log('EROR')
//                 } else {
//                   document.write('Good coffe')
//                   goWork(true, (e, money) => {
//                     if (e=== true) {
//                       console.log('EROR')
//                     } else {
//                       document.write('Good job')
//                       buyFood(money, (e, money) => {
//                         if (e=== true) {
//                           console.log('EROR')
//                         } else {
//                           document.write('Delicios')
//                           marshrutka(money, (e) => {
//                             if (e=== true) {
//                               console.log('EROR')
//                             } else {
//                               document.write('Sweet home')
//                               relaxTime(true, (e) => {
//                                 if (e=== true) {
//                                   console.log('EROR')
//                                 } else {
//                                   document.write('Good time')
//                                   sleepTime (money, (e) => {
//                                     if (e=== true) {
//                                       console.log('EROR')
//                                     } else {
//                                       document.write('Good night')
//                                     }
//                                   })
//                                 }
//                               })
//                             }
//                           })
//                         }
//                       })
//                     }
//                   })
//                 }
//               })
//           }
//         })
//       }
//     });




//     Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, 
// шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !


let save = document.querySelector('#save')
let text = document.querySelector('#text')
let text_value = document.querySelector('#text_result')

function timeout(text) {
    return new Promise(resolve => {
        setTimeout(() => {
            text_value.innerHTML+= text
            resolve()
        }, Math.random() * 500 )
    })
}

save.onclick =  async () => {
    text.innerHTML = ''
    for(let i=0; i<text.value.length; i++){
        await timeout(text.value[i])
    }
}
