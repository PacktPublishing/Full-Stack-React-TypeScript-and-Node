const allTrucks = [
    { id: 'x123', capacity: 2 },
    { id: 'y2343', capacity: 5 },
    { id: 'a9789', capacity: 6 },
    { id: 'd2342', capacity: 10 },
]

const allTonnage = allTrucks.reduce((totals, item) => {
    if(!totals || !totals.capacity) {
        totals = {
            id: '0',
            capacity: 0
        }
    }
    totals.capacity = Number(totals.capacity) + Number(item.capacity);
    
    return totals;
}, 0);
console.log(allTonnage.capacity);