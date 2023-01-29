var value1, value2, result;

function setValue1(e) {
  value1 = e.target.value;
}

function setValue2(e) {
  value2 = e.target.value;
}

function updateResult(result) {
  const resultElement = document.getElementById("result");
  let actualTextContent = resultElement.textContent;
  let finakTextContent = `${actualTextContent} ${result}`;
  resultElement.textContent = finakTextContent;
}
function performAction(action) {
  switch (action) {
    case "add":
      console.log(value1, typeof value2, parseInt(value2));
      result = parseInt(value1) + parseInt(value2);
      clearResult();
      updateResult(result);
      break;
    case "sub":
      result = parseInt(value1) - parseInt(value2);
      clearResult();
      updateResult(result);

      break;
    case "mul":
      result = parseInt(value1) * parseInt(value2);
      clearResult();
      updateResult(result);

      break;
    case "div":
      if (value2 == 0) {
        alert("Divisible by ZERO is not a valid operation.");
      } else {
        result = parseInt(value1) / parseInt(value2);
        clearResult();
        updateResult(result);
      }
      break;

    default:
      break;
  }
}

function clearAll() {
  const inputFields = document.getElementsByClassName("inputField"); //Plural
  for (let item of inputFields) {
    item.value = "";
  }
  clearResult();
}
function clearResult() {
  const resultElement = document.getElementById("result"); // Singular
  let finakTextContent = "The Result is:";
  resultElement.textContent = finakTextContent;
}

/*
Improvement - 
1.Clear button should also clear the previous input 
  By setting the value of "value" attribute of input field to '' (empty)
2.The new result should replace the first result and display the new result.

Bugs-
1. Divisible by zero should not be allowed.
*/
