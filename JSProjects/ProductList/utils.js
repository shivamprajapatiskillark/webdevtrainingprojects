export const setAttrubutes = (element, attributesObject) => {
  //  Loops in JS, for, for of , for in , while, map, forEach
  // METHOD _1
  // const keys = Object.keys(attributesObject);
  // const values = Object.values(attributesObject);
  // for (let i = 0; i < keys.length; i++) {
  //   element.setAttribute(keys[i], values[i]);
  // }

  //  METHOD-2
  for (let key in attributesObject) {
    element.setAttribute(key, attributesObject[key]);
  }
  return element;
};

export const createAButton = (id, onClick, text) => {
  const button = document.createElement("button");
  button.setAttribute("id", id);
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
};
