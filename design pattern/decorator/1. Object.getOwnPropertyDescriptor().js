// Object.getOwnPropertyDescriptor()

var a = {
    b: 'this is b'
};

var descriptor = Object.getOwnPropertyDescriptor(a, 'b');

console.log(descriptor);

