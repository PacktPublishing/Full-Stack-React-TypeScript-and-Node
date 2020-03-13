const widgets = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'yellow' },
    { id: 3, color: 'orange' },
    { id: 4, color: 'blue' },
]

console.log('some are blue', widgets.some(item => {
    return item.color === 'blue';
}));

console.log('every one is blue', widgets.every(item => {
    return item.color === 'blue';
}));