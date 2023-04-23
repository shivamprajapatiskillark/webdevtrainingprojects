import { addToCart, createAddToCartButton } from "./cartScript.js";

import { setAttrubutes, createAButton } from "./utils.js";

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
  productsElement.innerHTML = "";
  //  FOR OF Loop
  for (let product of products) {
    // DOM Manipulation using DOM methods
    // PARENT DIV
    const productContainer = document.createElement("div");
    productContainer.setAttribute("class", "productContainer");

    // IMAGE CONTAINER
    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "imageContainer");
    // IMAGE
    let productImage = document.createElement("IMG");
    productImage = setAttrubutes(productImage, {
      class: "productImage",
      src: product.images[0],
      alt: product.title,
    });

    imageContainer.appendChild(productImage);
    // IMAGE CONTAINER ADDED AS A CHILD TO PARENT DIV
    productContainer.appendChild(imageContainer);

    const title = document.createElement("h3");
    title.setAttribute("class", "title");
    // title.innerHTML = product.title;
    // title.textContent = product.title;
    const titleText = document.createTextNode(product.title);
    title.appendChild(titleText);
    // TITLE IS ADDED AS CHILD TO PAENT DIV
    productContainer.appendChild(title);

    const description = document.createElement("P");
    description.setAttribute("class", "description");
    const descriptionText = document.createTextNode(product.description);
    description.appendChild(descriptionText);
    // DESCRIPTION IS ADDED AS A CHILD TO PARENT DIV
    productContainer.appendChild(description);

    // FOOTER STARTS
    const footer = document.createElement("div");
    footer.setAttribute("id", "footer");

    const ratingDiv = document.createElement("div");
    const rating = document.createElement("h6");
    rating.setAttribute("class", "rating");
    const ratingText = document.createTextNode(product.rating);
    rating.appendChild(ratingText);
    ratingDiv.appendChild(rating);
    footer.appendChild(ratingDiv);

    const aTCDiv = document.createElement("div");
    aTCDiv.setAttribute("id", `atc-div-${product.id}`);
    const aTCButton = createAddToCartButton(product);
    aTCDiv.appendChild(aTCButton);
    footer.appendChild(aTCDiv);
    // FOOTER COMPLETES

    productContainer.appendChild(footer);

    productsElement.appendChild(productContainer);

    // DOM Manipulation using InnerHTML
    // productUIHTML =
    //   productUIHTML +
    //   `<div class="productContainer">
    //     <div class="imageContainer">
    //       <img class="productImage" src="${product.images[0]}" alt="${product.title}" />
    //     </div>

    //     <h3 class="title">${product.title}</h3>
    //     <p class="description">${product.description}</p>
    //     <div id="footer">
    //       <div>
    //         <h6 class="rating">${product.rating}</h6>
    //       </div>
    //       <div>
    //         <button onClick="addToCart(${product})">Add to Cart</button>
    //       </div>
    //     </div>
    // </div>
    // `;
  }
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
  createPaginationButtons();
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

const createPaginationButtons = () => {
  const paginationContainer = document.getElementById("paginationContainer");
  const prevButton = createAButton("prevButton", handlePrevClick, "Prev");
  const nextButton = createAButton("nextButton", handleNextClick, "Next");
  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(nextButton);
};
