// const myFunc = (message: string): void => {
//     console.log(message);
// }
// myFunc("hello");
var func = function () { return console.log('func'); };
var func1 = function () { return ({ name: 'jon' }); };
var func2 = function () {
    var val = 20;
    return val;
};
console.log(func());
console.log(func1());
console.log(func2());
