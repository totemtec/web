// need tsconfig.json
/**
{
    "compilerOptions": {
        "noImplicitAny": false,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "target": "ES5"
    }
}
*/


// Step2 编写装饰器函数业务逻辑
function logTime(target, key, descriptor) {
    const oldMehtod = descriptor.value
    const lotTime = function(...args) {
        let start = +new Date()
        try {
            return oldMehtod.apply(this, args) //调用之前的函数
        } finally {
            let end = +new Date()
            console.log(`time: ${end - start}ms`)
        }
    }
    descriptor.value = oldMehtod
    return descriptor
}

class Dog {
    // Step4 利用 @Decorator 语法糖装饰指定的属性
    @logTime
    attack() {
        console.log('Wang wang wang and cut')
    }

    @logTime
    run() {
        console.log('run and run fast');
    }
}

const dog = new Dog()

dog.run()

dog.attack()
