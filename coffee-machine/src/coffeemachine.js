export class CoffeeMachine {
    constructor(makeDrink) {
        this.makeDrink = makeDrink;
    }

    orderBeverage(sugar, drink){
            if(sugar === 0 ){
                this.makeDrink(`${drink}::`)
            } else {
                this.makeDrink(`${drink}:${sugar}:0`)   
            }

    };

    orderCoffee(sugar = 0) {
      this.orderBeverage(sugar, 'C')  
    }
    
    orderTea(sugar = 0) {
        this.orderBeverage(sugar, 'T')  
       
    }

    orderChocolate(sugar = 0) {
        this.orderBeverage(sugar, 'H') 
    }

}