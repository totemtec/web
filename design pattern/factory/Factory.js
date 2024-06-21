
class DrinkFactory {
    createDrink(type) {
        switch(type) {
            case 'coffee':
                return new Coffee();
            case 'juice':
                return new Juice();
            default:
                throw new Error('not support');
        }
    }
}

class Coffee {}
class Juice {}

const factory = new DrinkFactory();
const coffee = factory.createDrink('coffee');
const juice = factory.createDrink('juice');

