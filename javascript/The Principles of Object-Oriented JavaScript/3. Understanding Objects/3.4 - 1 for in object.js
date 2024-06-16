/**
 * 3.4 属性枚举
 * 
 * for in 遍历可枚举属性，包含原型属性
 */

class Animal {
    name
    constructor(name) {
        this.name = name
    }
}

class Dog extends Animal {
    sound = function() {
        return 'wang wang'
    }
}

var object = new Dog("xiao hei")

var property;

for (property in object) {
	console.log("Name : ", property);
	console.log("Value : ", object[property]);
}