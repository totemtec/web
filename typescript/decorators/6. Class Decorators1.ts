// 类装饰器

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

}


const rocket = new Rocket()
console.log(rocket)
console.log((rocket as any).fuel)
console.log(`Is the rocket empty? ${(rocket as any).isEmpty()}`)