// import { addToCart } from "./cartScript";

const productUrl = "https://dummyjson.com/products";
var currentOffset = 0,
  pageSize = 10; // Number of products we want to show per page.
var currentLimit = currentOffset + pageSize;
var defaultSkip = 0,
  defaultLimit = 100;

var allProducts = [];

var cartProdcuts = [];

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
        <div id="footer">
          <div>
            <h6 class="rating">${product.rating}</h6>
          </div>
          <div>
            <button onClick="addToCart(${product})">Add to Cart</button>
          </div>
        </div>
    </div>
    `;
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
async function getProductAndDisplayByRange() {
  // let filteredProducts = allProducts.slice(currentOffset, currentLimit);
  // we need to make an API call and use the fetched data to the make the UI
  const response = await fetchProducts(currentOffset, pageSize);
  const toBeShownProducts = response["products"];
  makeUI(toBeShownProducts);
}

async function onFirstLoad() {
  getProductAndDisplayByRange();
  updatePaginationEnableDisable();
}

// DOCUMET ON LOAD - Runs Only once
document.addEventListener("DOMContentLoaded", onFirstLoad);

// Disable the button
function disableButton(buttonId) {
  const buttonElement = document.getElementById(buttonId);
  buttonElement.setAttribute("disabled", true);
}

function enableButton(buttonId) {
  const buttonElement = document.getElementById(buttonId);
  buttonElement.removeAttribute("disabled");
}

// PAGINATION RELATED FUNCTIONS
// Arrow functions
const handlePrevClick = async () => {
  let newCurrentOffset = currentOffset - pageSize;
  if (newCurrentOffset >= 0) {
    currentOffset = newCurrentOffset;
    currentLimit = currentOffset + pageSize;
    getProductAndDisplayByRange();
  }
  updatePaginationEnableDisable();
};

const handleNextClick = async () => {
  let newCurrentOffset = currentOffset + pageSize;
  if (newCurrentOffset + pageSize <= defaultLimit) {
    currentOffset = newCurrentOffset;
    currentLimit = currentOffset + pageSize;
    getProductAndDisplayByRange();
  }
  updatePaginationEnableDisable();
};

function updatePaginationEnableDisable() {
  // Prev Button Logic
  if (currentOffset === 0) {
    disableButton("prevButton");
  } else {
    enableButton("prevButton");
  }

  //  Next Button
  if (currentOffset + pageSize >= defaultLimit) {
    disableButton("nextButton");
  } else {
    enableButton("nextButton");
  }
}

// CART RELATED FUNCTIONS
function addToCart(product) {
  console.log(product);
}
