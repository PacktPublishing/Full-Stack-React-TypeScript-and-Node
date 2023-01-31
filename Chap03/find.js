const items = [
    { name: "jon", age: 20 },
    { name: "linda", age: 22 },
    { name: "jon", age: 40 }
];
const jon = items.find((item) => {
    return item.name === "jon";
});
console.log(jon);
