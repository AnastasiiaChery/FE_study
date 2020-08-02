function userCard(num){
    let balance = 100;
    let transactionLimit = 100;
    const historyLogs = [];
    let key = num<=3
    ? num
    : ' Key not valid'
    
    function getCardOptions(){
        return{key, balance, historyLogs, transactionLimit}

    }

function addHistory(operationType,credits, operationTime ){
    historyLogs.push({operationType,credits, operationTime })
}

    function putCredits(money){
      let now = new Date()
      let date = now.toLocaleDateString()
      let time = now.toLocaleTimeString()
       if(money>0){
        balance+=money;
        addHistory('putCredits', money, date+' '+time)
       }}

    function takeCredits(sell){
        let now = new Date()
      let date = now.toLocaleDateString()
      let time = now.toLocaleTimeString()
         if(sell<=transactionLimit){balance= balance-sell
            addHistory('takeCredits', sell, date+' '+time)}
         else{console.error}
    }

    function setTransactionLimit(lim){
        let now = new Date()
      let date = now.toLocaleDateString()
      let time = now.toLocaleTimeString()
      transactionLimit = lim
      addHistory('setTransactionLimit', lim, date+' '+time)
    }

    function transferCredits(sum, card){
        let credit = sum *0.995;
        balance = balance-sum;
        card.putCredits(credit)
        }

    return{getCardOptions, putCredits, takeCredits ,setTransactionLimit,transferCredits
    }
    
    }
   
const userCard1 =new userCard(2)
const userCard2 =new userCard(3)
userCard1.putCredits(100)
userCard1.takeCredits(150)
userCard1.setTransactionLimit(500)
userCard1.transferCredits(100,userCard2)
console.log(userCard1.getCardOptions())
console.log(userCard2.getCardOptions())


class UserAccoun{
    constructor(name){
        this.name = name;
        this.cards =[]
    }
}

UserAccoun.prototype.addCard = function(){
    if(this.cards.length<3){
        this.cards.push(new userCard(this.cards.length+1))}else{
            console.log('cards limit over');
        }
        
    }

UserAccoun.prototype.getCardByKey = function(num){
 
   
    return this.cards[num-1]
}

let user1 = new UserAccoun('Anya');
user1.addCard()
user1.addCard()
user1.addCard()
user1.getCardByKey(2);
console.log(user1);
