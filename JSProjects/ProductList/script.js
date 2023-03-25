const productUrl = "https://dummyjson.com/products";
var currentOffset = 0,
  pageSize = 10; // Number of products we want to show per page.
var currentLimit = currentOffset + pageSize;
var defaultSkip = 0,
  defaultLimit = 100;

var allProducts = [];

// A function to make the UI from the filtered products
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

// API RELATED FUNCTIONS
async function fetchProducts(skip, limit) {
  return await fetch(`${productUrl}?limit=${limit}&skip=${skip}`, {
    Method: "GET",
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    Cache: "default",
  }).then((response) => response.json());
}

// Function  to filter the products
function filterProducts() {
  // slice(startIndex, endIndex+1)
  //   const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  // const citrus = fruits.slice(1, 5 (4+1));
  // ["Orange", "Lemon", "Apple", "Mango"]
  console.log(allProducts);
  let filteredProducts = allProducts.slice(currentOffset, currentLimit);
  makeUI(filteredProducts);
}

async function onFirstLoad() {
  const response = await fetchProducts(defaultSkip, defaultLimit);
  allProducts = response["products"];
  filterProducts();
}

// DOCUMET ON LOAD - Runs Only once
document.addEventListener("DOMContentLoaded", onFirstLoad);

// PAGINATION RELATED FUNCTIONS
// Arrow functions
const handlePrevClick = async () => {
  let newCurrentOffset = currentOffset - pageSize;
  if (newCurrentOffset < 0) {
    // disable Prev button
    alert("Your are on the first page.");
  } else {
    currentOffset = newCurrentOffset;
    currentLimit = currentOffset + pageSize;
    filterProducts();
  }
};

const handleNextClick = async () => {
  let newCurrentOffset = currentOffset + pageSize;

  if (newCurrentOffset + pageSize >= defaultLimit) {
    alert("Your are on the last page.");
  } else {
    currentOffset = newCurrentOffset;
    currentLimit = currentOffset + pageSize;
    filterProducts();
  }
};
