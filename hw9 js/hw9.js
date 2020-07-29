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


function wakeUp (alarmIsWorking){
    return new Promise((resolve, reject)=>
    setTimeout(()=> {
        if(alarmIsWorking){
            resolve ('Good morning')
        }
        else {
          reject('Alarm clock broken')}
    }, 1000)
    )
    }
    

function shower (waterWarm){
    return new Promise((resolve,reject) => 
    setTimeout(() =>{
        if(waterWarm){
            resolve ('You clean')
            
        }
        else{
            reject('Need to pay for water')
        }
    }, 1500)
    )
}

function drinkCoffee (haveCoffee){
    return new Promise((resolve,reject) =>
    setTimeout(() => {
        if(haveCoffee){
            resolve ('Good coffee')
        }else{
            reject ('You dont have coffee')
        }
    }, 800)
    )
}

function goWork (workDone){
    return new Promise((resolve,reject) =>
    setTimeout(() => {
        if(workDone){
            console.log('Good job')
            money = 500;
            resolve(money)
        }else{
            reject ('You are fired ')
        }
    }, 200)
    )
}


function buyFood(money){
    return new Promise((resolve,reject) =>
    setTimeout(() => {
        if (money > 300) {
            money = money - 300
           console.log('You have food')
           resolve(money)
       } else {
        reject('You poor')
       }
      }, 1200)
    )
}

function marshrutka(money){
    return new Promise((resolve,reject) =>
    setTimeout(() => {
        if (money > 7) {
            money = money - 7
           resolve('Home.Sweet home!!!!')
       } else {
        reject('You will die on the street')
       }
      }, 2000)
    )
}
function relaxTime (freeTime){
    return new Promise((resolve,reject) => 
    setTimeout(() =>{
        if(freeTime){
            resolve ('Relax!!')
            
        }
        else{
            reject('You need work')
        }
    }, 500)
    )
}

function sleepTime (night){
    return new Promise((resolve,reject) => 
    setTimeout(() =>{
        if(night){
            resolve ('Good dream')
            
        }
        else{
            reject('Not time to sleep')
        }
    }, 500)
    )
}



wakeUp(true)
  .then(reward => {
    console.log('______________________');
    console.log(reward);
    console.log('______________________');

    return shower(true);
  })
  .then(reward => {
    console.log('______________________');
    console.log(reward );
    console.log('______________________');
    return drinkCoffee(true);
  })
  .then(reward =>{
    console.log('______________________');
    console.log(reward);
    console.log('______________________');
    return goWork(true);
  } )
  .then(money =>{
    console.log('______________________');
    console.log(money);
    console.log('______________________');
    return buyFood(money);
  })
  .then(money => {
    console.log('______________________');
    console.log(money);
    console.log('______________________');
    return marshrutka(money);
  })
  .then(reward =>{
    console.log('______________________');
    console.log(reward);
    console.log('______________________');
    return relaxTime(true);
  })
  .then(reward =>{
    console.log('______________________');
    console.log(reward);
    console.log('______________________');
    return sleepTime(true);
  } )
  .then(reward =>{
    console.log('______________________');
    console.log(reward);
    console.log('______________________');})

//// Асинк
async function myDay() {
    try {
      let reward1 = await wakeUp(true);
      console.log('__________________________');
      console.log(reward1);
      console.log('__________________________');
  
      let reward2= await shower(true);
  
      console.log('__________________________');
      console.log(reward2);
      console.log('__________________________');

      let reward3= await drinkCoffee(true);
  
      console.log('__________________________');
      console.log(reward3);
      console.log('__________________________');

      let reward4 = await goWork(true);
      console.log('__________________________');
      console.log(reward4);
      console.log('__________________________');
  
      let reward5= await buyFood(money);
  
      console.log('__________________________');
      console.log(reward5);
      console.log('__________________________');

      let reward6= await marshrutka(money);
  
      console.log('__________________________');
      console.log(reward6);
      console.log('__________________________');
      
      let reward7= await sleepTime(true);
  
      console.log('__________________________');
      console.log(reward7);
      console.log('__________________________');

     
    } catch (e) {
      console.error(e);
    }
  }
  myDay()