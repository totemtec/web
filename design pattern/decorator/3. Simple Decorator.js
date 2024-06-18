// 装饰器函数

function decoratorLogTime(target, key) {
    const targetPrototype = target.prototype;

    // Step1 备份原有类构造器上的属性描述符 Descriptor
    const oldDescriptor = Object.getOwnPropertyDescriptor(targetPrototype, key);

    // Step2 编写装饰器函数业务逻辑
    const logTime = function(...args) {
        //Before 钩子
        let start = +new Date()

        try {
            //执行原来的函数
            return oldDescriptor.value.apply(this, args)  // 调用之前的函数
        } finally {
            // After 钩子
            let end = new Date()
            console.log(`use time: ${end - start}ms`)
        }
    }

    // Step3 将装饰器覆盖原有的属性描述符的 value
    Object.defineProperty(targetPrototype, key, {
        ...oldDescriptor,
        value: logTime
    })
}

class Dog {
    attack() {
        console.log('Wang wang wang and cut')
    }

    run() {
        console.log('run and run fast');
    }
}

// Step4 手动执行装饰器函数，装饰 Dog 的 attack 函数
decoratorLogTime(Dog, 'attack')

decoratorLogTime(Dog, 'run')

const dog = new Dog()

dog.run()

dog.attack()
