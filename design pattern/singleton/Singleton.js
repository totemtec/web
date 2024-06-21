class Singleton {
    static instance = null;
    
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

    doSomething() {
        console.log('do someting');
    }

    resources = 'some resources';
}

const instance1 = new Singleton();

const instance2 = new Singleton();

console.log(instance1 === instance2);

