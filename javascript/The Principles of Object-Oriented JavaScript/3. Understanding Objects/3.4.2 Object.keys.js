/**
 * 3.4 属性枚举
 * 
 * 用数组遍历可枚举属性，只包含自身属性
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

var properties = Object.keys(object);
var i, len;
for (i = 0, len = properties.length; i < len; i++) {
	console.log("Name : ", properties[i]);
	console.log("Value : ", object[properties[i]]);
}