/**
 * 3.5 属性类型 Types of Properties
 * 
 * 属性有数据属性(data properties)、访问器属性 Accessor properties
 */
var person1 = {
	_name: "Nicholas",

	get name() {
		console.log("Reading name");
		return this._name;
	},

	set name(value) {
		console.log("Setting name to %s", value);
		this._name = value;
	}
}

console.log(person1.name);

person1.name = "Greg";
console.log(person1.name);