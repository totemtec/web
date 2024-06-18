/**
 * The new decorator proposal also introduced a new element called the “auto-accessor field”:
 * The transpiler will turn the x field above into a pair of getter and setter methods, with a private property behind the scenes. 
 * This is useful to represent a simple accessor pair and helps avoid some edgy issues that might arise while using decorators on class fields.
 */

class Test {
    accessor x: number
}

const t = new Test()

t.x = 10

console.log(t.x)