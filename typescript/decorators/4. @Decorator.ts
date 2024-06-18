// Step2 编写装饰器函数业务逻辑
function logTime(target: Function, context) {
    if (context.kind === "method") {
        return function (...args: any[]) {
            let start = +new Date()
            try {
                return target.apply(this, args)
            } finally {
                let end = +new Date()
                console.log(`time: ${end - start}ms`)
            }
        }
    }
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
