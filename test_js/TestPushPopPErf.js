let array = [];

console.time("Push/Pop");
for(let i=0;i<10000000;i++){
    array.push(1);
    array.pop();
}
console.timeEnd("Push/Pop");

console.time("Shift/Unshift");
for(let i=0;i<10000000;i++){
    array.shift();
    array.unshift(1);
}
console.timeEnd("Shift/Unshift");