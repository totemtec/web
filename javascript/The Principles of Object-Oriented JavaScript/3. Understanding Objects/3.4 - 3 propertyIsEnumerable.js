/**
 * 3.4 属性枚举
 * 
 * 检查属性是否可枚举
 */

var person1 = {
    name: "Nicholas"
};

console.log("name" in person1);  // true
console.log(person1.propertyIsEnumerable("name"));   // true

var properties = Object.keys(person1);

console.log("length" in properties)  // true
console.log(properties.propertyIsEnumerable("length"));  // false