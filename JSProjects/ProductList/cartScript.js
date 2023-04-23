import { setAttrubutes } from "./utils.js";

const cartArray = [];

export const addToCart = (product) => {
  const isAdded = isProductAlreadyAdded(product);
  if (isAdded) {
    alert(`${product.title} is already added.`);
  } else {
    cartArray.push(product);
    changeButtonToRemove(product);
    updateCartCount();
  }
};

const remvoeFromCart = (product) => {
  const index = cartArray.indexOf(product);
  /**
   *
   * 1. Get the index of the product then use slice or splice to remvoe that from aray
   * 2. Run a forloop,
   *
   */
  cartArray.splice(index, 1);
  updateCartCount();
  changeButtonToAddToCart(product);
};

const isProductAlreadyAdded = (product) => {
  // filter function-> it takes an array and produces an new array having the item which passes the condition

  const filteredArray = cartArray.filter((item) => {
    return item.id === product.id;
  });

  return filteredArray.length > 0;

  // loop throgh the cartArray and if any item matches with the product then return true else false
  for (let item of cartArray) {
    if (item.id === product.id) {
      return true;
    }
  }

  return false;
};

const updateCartCount = () => {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cartArray.length;
};

const createRemoveButton = (product) => {
  let rMVButton = document.createElement("button");
  rMVButton = setAttrubutes(rMVButton, {
    id: `atc-btn-${product.id}`,
    class: `removeBtn`,
  });
  rMVButton.setAttribute("id", `atc-btn-${product.id}`);
  rMVButton.setAttribute("class", `removeBtn`);
  const rMVText = document.createTextNode("Remove");

  rMVButton.addEventListener("click", () => {
    remvoeFromCart(product);
  });

  rMVButton.appendChild(rMVText);

  return rMVButton;
};

export const createAddToCartButton = (product) => {
  let aTCButton = document.createElement("button");
  aTCButton = setAttrubutes(aTCButton, {
    id: `atc-btn-${product.id}`,
    class: `aTCBtn`,
  });
  const aTCText = document.createTextNode("Add to Cart");
  aTCButton.addEventListener("click", () => {
    addToCart(product);
  });
  aTCButton.appendChild(aTCText);
  return aTCButton;
};

const changeButtonToRemove = (product) => {
  const atcDiv = document.getElementById(`atc-div-${product.id}`);
  const aTCButton = document.getElementById(`atc-btn-${product.id}`);
  const rMVButton = createRemoveButton(product);
  atcDiv.replaceChild(rMVButton, aTCButton);
};

const changeButtonToAddToCart = (product) => {
  const atcDiv = document.getElementById(`atc-div-${product.id}`);
  const rMVButton = document.getElementById(`atc-btn-${product.id}`);
  const aTCButton = createAddToCartButton(product);
  atcDiv.replaceChild(aTCButton, rMVButton);
};
