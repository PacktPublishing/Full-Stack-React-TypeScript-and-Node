const userIds = [
    1,2,1,3
]

const uniqueIds = new Set(userIds);
console.log(uniqueIds);

uniqueIds.add(10);
console.log('add 10', uniqueIds);

console.log('has', uniqueIds.has(3));

console.log('size', uniqueIds.size);

for (let item of uniqueIds) {
    console.log('iterate', item);
}