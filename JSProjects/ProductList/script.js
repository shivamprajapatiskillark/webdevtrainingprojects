//  Arrow functions ES6
// fetch('url', {
//   Method: 'POST',
//   Headers: {
//     Accept: 'application.json',
//     'Content-Type': 'application/json'
//   },
//   Body: body,
//   Cache: 'default'
// })

// JSON =  Javascript Object Notation
// OFFSET ->  where to start from
// LIMIT -> how many to pick

/*
Error handling

try catch finally 

*/

const productUrl = "https://dummyjson.com/products";

// function fetchProducts() {
//   fetch(productUrl, {
//     Method: "GET",
//     Headers: {
//       Accept: "application.json",
//       "Content-Type": "application/json",
//     },
//     Cache: "default",
//   })
//     .then(function (response) {
//       response = response.json();
//       return response;
//     })
//     .then(function (parsedResponse) {
//       console.log(parsedResponse);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("FINALLY");
//     });
// }

// const fetchProducts = () => {
//   fetch(productUrl, {
//     Method: "GET",
//     Headers: {
//       Accept: "application.json",
//       "Content-Type": "application/json",
//     },
//     Cache: "default",
//   })
//     .then((response) => {
//       response = response.json();
//       return response;
//     })
//     .then((parsedResponse) => {
//       console.log(parsedResponse);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
//     .finally(function () {
//       console.log("FINALLY");
//     });
// };
// const fetchProducts = ()=>{
//   // function body
//  return
// }

// async await - Promise

async function fetchProducts() {
  const response = await fetch(productUrl, {
    Method: "GET",
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    Cache: "default",
  }).then((response) => response.json());

  console.log("Response", response);

  console.log("Next line");
}

fetchProducts();
/*

ASYNC AWAIT

In general, this concept helps in asynchronous development. 
We have two keywords, i.e. async and await.

async -> this keyword define that the function can now perform asynchronous operations.

await -> this keyword holds the execution till the operation like api call or file read is completed.

*/
