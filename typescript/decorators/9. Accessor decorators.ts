function deprecated(target, context) {
    const kind = context.kind
    const msg = `${context.name} is deprecated and will be removed in a future version.`
    if (kind === "method" || kind === "getter" || kind === "setter") {
        return function (...args: any[]) {
            console.log(msg)
            return target.apply(this, args)
        }
    } else if (kind === "field") {
        return function (initialValue: any) {
            console.log(msg)
            return initialValue
        }
    }
}

class Rocket {
    @deprecated
    fuel: number = 75
}

const rocket = new Rocket()

rocket.fuel = 100

console.log(rocket.fuel)