// 类装饰器，覆盖类的属性

function WithFuel(target: typeof Rocket, context): typeof Rocket {

    return class extends target {
        fuel: number = 50
        isEmpty(): boolean {
            return this.fuel == 0
        }
    }
}

@WithFuel
class Rocket {
    fuel: number = 75
}

const rocket = new Rocket()
console.log((rocket as any).fuel)
// prints 50