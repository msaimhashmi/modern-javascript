// EP 1

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

// // ASYNCHRONOUS
// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired!');
// }, 3000)

// console.log(3);
// console.log(4);

















// EP 2
// HTTP REQUESTS

// We make http request to get/post/put (interact) data from another server/database etc.
// We make these request to get data from another server to API endpoints

const request = new XMLHttpRequest();

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.addEventListener('readystatechange', ()=> {
    // console.log(request, request.readyState);
    if(request.readyState === 4){
        console.log(request.responseText);
    }
});

// https://jsonplaceholder.typicode.com/
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();