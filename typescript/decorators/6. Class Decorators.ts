// 类装饰器

function addToJSONString(target: typeof C, context) {
    return class extends target {
        toJSONString() {
            return JSON.stringify(this);
        }
    };
}

@addToJSONString
class C {
    public foo = "foo";
    public num = 24;
}

console.log((new C() as any).toJSONString())
// [LOG]: "{"foo":"foo","num":24}"