function logTime(tag) { // 这是一个装饰器工厂函数，带参数的装饰器

    return function(target, key, descriptor) {  // 这是装饰器
      const oldMethed = descriptor.value
      const logTime = function (...arg) {
        let start = +new Date()
        try {
          return oldMethed.apply(this, arg)
        } finally {
          let end = +new Date()
          console.log(`[${tag}] time: ${end - start}ms`)
        }
      }
      descriptor.value = logTime
      return descriptor
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