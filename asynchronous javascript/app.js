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

















// // EP 2
// // HTTP REQUESTS

// // We make http request to get/post/put (interact) data from another server/database etc.
// // We make these request to get data from another server to API endpoints

// const request = new XMLHttpRequest();

// // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
// request.addEventListener('readystatechange', ()=> {
//     // console.log(request, request.readyState);
//     if(request.readyState === 4){
//         console.log(request.responseText);
//     }
// });

// // https://jsonplaceholder.typicode.com/
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
// request.send();

















// EP 3
// STATUS CODE

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// 100 - range of 100 status related to information responses
// 200 - range of 200 status related to success responses
// 300 - range of 100 status related to redirection responses
// 400 - range of 100 status related to client side error responses
// 500 - range of 100 status related to server side error responses

const request = new XMLHttpRequest();

// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
request.addEventListener('readystatechange', ()=> {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
    } else if(request.readyState === 4){
        console.log('could not fetch the data because something went wrong!')
    }
});

// https://jsonplaceholder.typicode.com/
request.open('GET', 'https://jsonplaceholder.typicode.com/todoss');
request.send();