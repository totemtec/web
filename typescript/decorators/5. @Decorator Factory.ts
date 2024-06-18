function logTime(tag) { // 这是一个装饰器工厂函数，带参数的装饰器
    return function logTime(target: Function, context) {
        if (context.kind === "method") {
            return function (...args: any[]) {
                let start = +new Date()
                try {
                    return target.apply(this, args)
                } finally {
                    let end = +new Date()
                    console.log(`[${tag}] time: ${end - start}ms`)
                }
            }
        }
    }
}

class Dog {
    @logTime('Attack')
    attack() {
        console.log('Wang wang wang and cut')
    }

    @logTime('Run')
    run() {
        console.log('run and run fast');
    }
}

const dog = new Dog()

dog.run()

dog.attack()