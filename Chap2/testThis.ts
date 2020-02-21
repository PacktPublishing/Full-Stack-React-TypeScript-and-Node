function MyFunction () {
    console.log(this);
}

MyFunction();
let test = new MyFunction();