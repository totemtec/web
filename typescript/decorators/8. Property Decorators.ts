function deprecatedProperty(_: any, context) {
    if (context.kind === "field") {
        return function (initialValue: any) {
            console.log(`${context.name} is deprecated and will be removed in a future version.`)
            return initialValue
        }
    }
}

class Rocket {
    fuel: number = 75

    @deprecatedProperty
    isReadyForLaunch
}

const rocket = new Rocket()
console.log(`Is the rocket ready for launch? ${rocket.isReadyForLaunch}`)