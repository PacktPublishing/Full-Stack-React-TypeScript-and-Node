class A {
    name: string = "A";
    go() {
        console.log(this.name);
    }
}

class B {
    name: string = "B";
    go() {
        console.log(this.name);
    }
}

const a = new A();
a.go();
const b = new B();
b.go = b.go.bind(a);
b.go();
