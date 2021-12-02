import { CoffeeMachine } from "./coffeemachine";

test.each([[0,'C::'], [1,'C:1:0'], [2, 'C:2:0']])("drink maker makes coffee with %s sugar", (sugar, order) => {
    const makeDrink = jest.fn();
    const coffeeMachine = new CoffeeMachine(makeDrink);
    coffeeMachine.orderCoffee(sugar);

    expect(makeDrink).toHaveBeenCalledWith(order)
});

test("drink maker makes tea", () => {
    const makeDrink = jest.fn();
    const coffeeMachine = new CoffeeMachine(makeDrink);
    coffeeMachine.orderTea(2);

    expect(makeDrink).toHaveBeenCalledWith("T:2:0")
});

test("drink maker makes tea", () => {
    const makeDrink = jest.fn();
    const coffeeMachine = new CoffeeMachine(makeDrink);
    coffeeMachine.orderTea();

    expect(makeDrink).toHaveBeenCalledWith("T::");
});

test.each([[0,'H::'], [1,'H:1:0'], [2, 'H:2:0']])("drink maker makes chocolate with %s sugar", (sugar, order) => {
    const makeDrink = jest.fn();
    const coffeeMachine = new CoffeeMachine(makeDrink);
    coffeeMachine.orderChocolate(sugar);

    expect(makeDrink).toHaveBeenCalledWith(order);
});