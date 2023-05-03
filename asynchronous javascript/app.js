// // SYNCHRONOUS
// const syncWait = ms => {
//     const end = Date.now() + ms
//     while (Date.now() < end) continue
// }
// console.log(1);
// console.log(2);
// syncWait(5000);
// console.log(4);
// console.log(5);

// ASYNCHRONOUS
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired!');
}, 3000)

console.log(3);
console.log(4);