var object = {
	name: 'ma',
	sayHello: function () {
		console.log('hello ', this.name)
	}
};

var property;

for (property in object) {
	console.log("Name : ", property);
	console.log("Value : ", object[property]);
}

var properties = Object.keys(object);
var i, len;
for (i = 0, len = properties.length; i < len; i++) {
	console.log("Name : ", properties[i]);
	console.log("Value : ", object[properties[i]]);
}
