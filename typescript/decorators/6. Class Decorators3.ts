// 类装饰器，增强类的方法

function logFuel(target: Function, context) {
    const original = target.prototype.addFuel;
    target.prototype.addFuel = function (message: string) {
        console.log(`Before adding fuel, total fuel: ${this.fuel}`);
        original.apply(this, arguments);
        console.log(`After adding fuel, total fuel: ${this.fuel}`);
    };
}

@logFuel
class Rocket {
    fuel: number = 11;
    addFuel(amount: number) {
        this.fuel += amount;
    }
}

const rocket = new Rocket();
rocket.addFuel(10);