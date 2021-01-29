class Person {
    constructor(private readonly msg: string) {
        
    }
    
    speak () {
        this.msg = "speak " + this.msg;
        console.log(this.msg);
    }
}

const tom = new Person("hello");
// tom.msg = "hello";
tom.speak();