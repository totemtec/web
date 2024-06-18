// Object.defineProperty()

"use strict";

const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 'This is not writable',
    writable: false
});

console.log(object1.property1);

// error in strict mode
object1.property1 = 'new value';

