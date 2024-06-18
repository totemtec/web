// 方法装饰器

function deprecatedMethod(target: Function, context) {
    if (context.kind === "method") {
        return function (...args: any[]) {
            console.log(`${context.name} is deprecated and will be removed in a future version.`)
            return target.apply(this, args)
        }
    }
}


class Rocket {
    fuel: number = 75
    @deprecatedMethod
    isReadyForLaunch(): Boolean {
        return this.fuel > 50;
    }
}

const rocket = new Rocket()
console.log(`Is the rocket ready for launch? ${rocket.isReadyForLaunch()}`)