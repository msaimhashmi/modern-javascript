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

















// // EP 3
// // STATUS CODE

// // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// // 100 - range of 100 status related to information responses
// // 200 - range of 200 status related to success responses
// // 300 - range of 100 status related to redirection responses
// // 400 - range of 100 status related to client side error responses
// // 500 - range of 100 status related to server side error responses

// const request = new XMLHttpRequest();

// // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
// request.addEventListener('readystatechange', ()=> {
//     // console.log(request, request.readyState);
//     if(request.readyState === 4 && request.status === 200){
//         console.log(request.responseText);
//     } else if(request.readyState === 4){
//         console.log('could not fetch the data because something went wrong!')
//     }
// });

// // https://jsonplaceholder.typicode.com/
// request.open('GET', 'https://jsonplaceholder.typicode.com/todoss');
// request.send();
















// EP 4
// CALLBACK FUNTION DESCRIBE

// Callback function is a function that pass through another function as an argument with or without a parameter. Examples given below

// // Example without a parameter
// function show(){
//     console.log('This is show function');
// }

// function saim(callback){
//     callback();
// }

// saim(show);



// // Example with parameter

// function show(param){
//     console.log(`This is a show function which is created by ${param} `)
// }

// function saim(callback){
//     let creatorName = 'saim';
//     callback(creatorName);
// }

// saim(show);



// // We will see mostly this function like this:

// function saim(callback){
//     let creatorName = 'Saim Hashmi';
//     callback(creatorName);
// }

// saim(param => console.log(`This is a modern show function which is created by ${param}`));


// SYNCHRONOUS CALLBACK FUNCTION
// Synchronous: It waits for each operation to complete, after that it executes the next operation.

// function show(){
//     console.log('Im sync show function, I have a big task to complete');
// }

// function saim(callback){
//     callback();
// }
// saim(show);

// console.log('Im a task who wait for my play! When previous task complete then i can play.');



// // ASYNCHRONOUS CALLBACK FUNCTION
// // Asynchronous: It never waits for each operation to complete, rather it executes all operations in the first GO only.

// setTimeout(function show(){
//     console.log('Im async show function, I have a big task to complete');
// }, 3000);

// console.log('I can play in a row when my turn, I dont want to wait if my previous task take a long time to complete their play, Im Happy :)');



// // CALLBACK FUNCTION

// function getTodos(callback){
//     const request = new XMLHttpRequest();
    
//     request.addEventListener('readystatechange', ()=> {
//         // console.log(request);
//         if(request.readyState === 4 && request.status === 200){
//             // console.log(request.responseText);
//             callback(request.responseText);
//         }else if(request.readyState === 4){
//             // console.log('something went wrong!');
//             callback('something went wrong!');
//         }
//     });
    
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
//     request.send();
// }


// console.log(1);
// console.log(2);
// console.log(3);
// getTodos((err, data)=>{
//     console.log('callback fired!');
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
// console.log(4);
// console.log(5);


// // DIFFERENCE BETWEEN SYNCHRONOUS/ASYNCHRONOUS CALLBACK FUNCTIONS
// // synchronous functions execute one line of code at a time and blocking further execution until the current line is completed and it does not take a callback function as a parameter. 
// // while asynchronous functions execute non-blocking operations and typically take a callback function as a parameter.

















// // EP 5
// // JSON DATA

// // JSON data looks like a javascrip objects but its not. JSON data is simply a string. The string is formated that looks like a javascript objects.
// // JSON format is string because when the browser exchange the data from the server then it has to be text format because that is the format to data transfer.
// // JSON is a way of transfering data between server and client.

// function getTodos(callback){
//     const request = new XMLHttpRequest();
    
//     request.addEventListener('readystatechange', ()=> {
//         // console.log(request);
//         if(request.readyState === 4 && request.status === 200){

//             // convert text format data which looks like json into original json format 
//             const data = JSON.parse(request.responseText);
//             callback(data);
//         }else if(request.readyState === 4){
//             // console.log('something went wrong!');
//             callback('something went wrong!');
//         }
//     });
    
//     // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    
//     // create and call our own json
//     request.open('GET', 'todos.json');
//     request.send();
// }


// getTodos((err, data)=>{
//     console.log('callback fired!');
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
















// // EP 6
// // CALLBACK HELL
// // Nested callback is callback hell

// function getTodos(resource, callback){
//     const request = new XMLHttpRequest();
    
//     request.addEventListener('readystatechange', ()=> {
//         // console.log(request);
//         if(request.readyState === 4 && request.status === 200){

//             // convert text format data which looks like json into original json format 
//             const data = JSON.parse(request.responseText);
//             callback(data);
//         }else if(request.readyState === 4){
//             // console.log('something went wrong!');
//             callback('something went wrong!');
//         }
//     });
    
//     // request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    
//     // create and call our own json
//     // this is how to request data from different sources one after another sequentially
//     request.open('GET', resource);
//     request.send();
// }

// // this is callback hell because this has multiple todos to get and complete first one and then go next down to the other in order.
// getTodos('todos/saim.json', (err, data)=>{
//     console.log('callback fired!');
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }

//     getTodos('todos/mohtashim.json', (err, data)=>{
//         console.log('callback fired!');
//         if(err){
//             console.log(err);
//         }else{
//             console.log(data);
//         }

//         getTodos('todos/hamza.json', (err, data)=>{
//             console.log('callback fired!');
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(data);
//             }
//         });
//     });
// });














// // EP 7
// // PROMISES


// // A promise is an object representing the eventual completion or failure of an asynchronous operation. OR A Promise is a JavaScript object that links producing code and consuming code
// // A javascript promise object contains both the producing code and calls to the consuming code. It can be used to deal with async operation in javascript.
// // "Producing code" is code that can take some time
// // "Consuming code" is code that must wait for the result
// // Promise States: Pending, Fullfilled/Resolved, Rejected.



// // pronise example

// // when we use promise the first thing to do return a new promise.
// // now a promise is something which going to takes some time to do.
// // promise is ultimately going to lead to one of two outcomes
// // 1 is resolve which mean we get the data we want its called resolved the promise .
// // 2 is reject which mean we get the error some points its called reject the promise.

// const getSomething = () => {

//     // this promise takes a parameter as a function
//     // inside this function this is where we typically do the network request. It maybe fetch some data and something more.
//     // inside this promise we do one thing either resolved or reject.  
    
//     // in promise we automatically get access to two parameters resolve/reject. It is builtin in promise api in javascript.
//     return new Promise((resolve, reject)=>{
//         // fetch something
//         // resolve('some data');        
//         reject('some error');        
//     });

// };


// // getSomething this return a new promise with return of resolve/reject.
// // when we get a promise back from a function then we can tack on a .then method. 
// // promise is saying that if you pass a function in (.then as first function) then i will fire that function when we resolve(which is first parameter) the promise.  
// // promise is saying that if you pass a function in (.then as second fucntion) then i will fire that function when we reject(which is second parameter) the promise.  

// // getSomething().then((data)=>{
// //     console.log(data);
// // }, (err)=>{
// //     console.log(err);
// // });

// // we use officially catch instead of give a second parameter because catch looks neater than give a second parameter.
// // getSomething().then(data=>{
// //     console.log(data);
// // }).catch(err=>{
// //     console.log(err);
// // });

// // In summary: This is promise we either resolve something or reject something and then fire one of two functions depending on that.


// // Do that in official way.
// function getTodos(resource){
//     const request = new XMLHttpRequest();
    
//     return new Promise((resolve, reject)=>{
//         request.addEventListener('readystatechange', ()=> {

//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }else if(request.readyState === 4){
//                 reject('something went wrong!');
//             }
//         });
//         request.open('GET', resource);
//         request.send();
//     });
// }

// getTodos('todos/saim.json').then(data=>{
//     console.log('Promise resolve:',data);
// }).catch(err=>{
//     console.log('Promise reject',err);
// });


// // So this is another way other than using callbacks to work with asynchronous code.
// // this is handy when try to sequentially get data one after another because we going to able to chain promises together. 




















// // EP 8
// // CHAINING PROMISES

// // We can chain promises together
// // We can perform multiple asynchronous task in order.

// function getTodos(resource){
//     const request = new XMLHttpRequest();
//     return new Promise((resolve, reject)=>{
//         request.addEventListener('readystatechange', ()=> {
//             if(request.readyState === 4 && request.status === 200){
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }else if(request.readyState === 4){
//                 reject('Something went wrong!');
//             }
//         });
//         request.open('GET', resource);
//         request.send();
//     });
// }

// getTodos('todos/saim.json').then(data=>{
//     console.log('Promise resolve data 1:', data);

//     // we can do like this but it looks messy.
//     // getTodos('todos/mohtashim.json').then(data=>{
//     //     console.log('Messy result:',data);
//     // });

//     // this is authentic way to do chaining promises
//     // this return getTodos complete function which return a promise which is above.
//     return getTodos('todos/mohtashim.json');
// }).then(data=>{
//     console.log('Promise resolve data 2:', data);
//     return getTodos('todos/hamza.json');
// }).then(data=>{
//     console.log('Promise resolve data 3:', data);
// }).catch(err=>{
//     console.log('Promise reject', err);
// });

















// // EP 9
// // THE FETCH API

// // We fetch the data. Fetch return a promise 
// // we take the response via .then(response)
// // we return response.json() that returns a promise so we can tack on .then to get and show the data via chaining method
// // we can also catch the error at the end


// // Fetch return a promise thats why we need to add then and catch
// fetch('todos/saimd.json').then((response)=>{
//     console.log('Resolved:', response);
    
//     // this json return a promise so we need to make a chain 
//     // this json response take all data inside fetch response and return that to the resolve/reject 
//     return response.json();
// }).then((data)=>{
//     // inside that we take and show all the data which get from the json method.
//     console.log('Resolve Json Data:', data);
// }).catch((err)=>{
//     console.log('Rejected:',err);
// });





















// EP 10
// ASYNC & AWAIT

// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise



// async function always return a promise
const getTodos = async () => {

    // way to fetch data from anywhere without async & await
    // fetch('todos/saim.json').then(()=>
    // });


    // we use this way to fetch any data when we use async & await

    // The await keyword makes the function pause the execution and wait for a resolved promise before it continues:


    // this fetch returns a promise
    // this await keyword stores javascript
    // await stops it from assigning a value to this variable until the promise has resolved
    // once the promise has resolved we can take the value from that resolve function the response and assign it to this "response" variable
    // this is non-blocking code because we add all of this code inside async function and async itself is non-blocking function 

    // the power of this await keyword is we can chain together many of different things if we want to. 
    // The things return promise and then we'd doing them sequentially, we'd waiting for one promise to resolve before assigning to other. 
    // Which means this area is blocking inside of async function because we need to resolve first and then go the other when resolve first.
    const response = await fetch('todos/saim.json');

    // we use json function to get the data back which is also asynchronous itself and it return a promise in itself
    // we use await function here also to chain on this promise 
    const data = await response.json();
    return data;

};


// we need to use .then only here because async return promise.
getTodos()
.then(data => console.log(data));