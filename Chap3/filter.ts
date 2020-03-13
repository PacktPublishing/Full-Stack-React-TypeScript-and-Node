const filterItems = [
    { name: "jon", age: 20 },
    { name: "linda", age: 22 },
    { name: "jon", age: 40}
]

const results = filterItems.filter((item, index) => {
    console.log(index);
    return item.name === "jon"
});
console.log(results);