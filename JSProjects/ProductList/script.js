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
// Asynchronous function- Promise based behavior\
// // GET - Read only
// POST - Write- Allows you to update the DB- Add new values in the DB
// PUT - It simply repalces the existing values
// PATCH - It partially updates the database- it faster, it helps in retaining  existing values.
// DELETE - Delete the database

// SQL Queries =>

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

// try
// catch
// finally

// async await - Promise

function makeUI(products) {


  const productsElement = document.getElementById("products");
  var productUIHTML = "";
  //  FOR OF Loop
  for (let product of products) {
    // DOM Manipulation

    productUIHTML =
      productUIHTML +
      `<div class="productContainer">
    <div class="imageContainer">
      <img class="productImage" src="${product.images[0]}" alt="${product.title}" />
  
    </div>
  
    <h3 class="title">${product.title}</h3>
    <p class="description">${product.description}</p>
    <h6 class="rating">${product.rating}</h6>
  </div>`;
  }
  productsElement.innerHTML = productUIHTML;
}

async function fetchProducts() {
  const response = await fetch(productUrl, {
    Method: "GET",
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    Cache: "default",
  }).then((response) => response.json());

  makeUI(response["products"]);
}

//
/*
While we make any API call, the ultimate operation is to migrate the data/content from frontend to backend or vice versa.

JSON- Javascript object notation

Asynchronous operation- > We make it wait for some operation to complete then start next operation
Access the file to open it-> 
then we'll modify the file 
then save the file
Promise based behavior
Synchronous operation-> Con-current operation-> ALL IN GO


*/
fetchProducts();
/*

ASYNC AWAIT

In general, this concept helps in asynchronous development. 
We have two keywords, i.e. async and await.

async -> this keyword define that the function can now perform asynchronous operations.

await -> this keyword holds the execution till the operation like api call or file read is completed.

*/
