const callerObj = {
    name: "jon"
}

function checkMyThis(age) {    
    console.log(`What is this ${this}`)
    console.log(`Do I have a name? ${this.name}`)
    this.age = age;
    console.log(`What is my age ${this.age}`);
}

checkMyThis();
checkMyThis.call(callerObj, 25);