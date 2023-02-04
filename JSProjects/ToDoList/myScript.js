var tasks = [];
/*
var => variable value, global scope - accesible throughtout the code
let => variable value, local scope - accesible within the block of code 
const => constat value, global and local both -
        local - if declared within the block of code then it will be accessible only in that block
        global -  if declared globally then it will be accessible throughout the code
        
 */

function handleUserInput(event) {
  if (event.key === "Enter") {
    tasks.push(event.target.value);

    const inputElements = document.getElementsByTagName("INPUT");
    const taskInputElement = inputElements[0];
    taskInputElement.value = "";
    printTasksOnScreen();
    printTaskNumbers();
  }
}

function printTasksOnScreen() {
  // DOM MANIPULATION
  /**
   *
   * DOM - Document Object Model - Tree like structure
   * why tree like structure?
   * because it maintains the hierarchy
   *
   * Utility?
   * It helps us to manipulate the DOM structure
   *
   */

  const taskContainerElement = document.getElementById("tasksContainer");
  let listHtml = "<ol>";
  // for -of loop  - Array
  for (let item of tasks) {
    listHtml =
      listHtml +
      "<li>" +
      item +
      `<button onClick="removeTask('${item}')">Done</button>` +
      "</li>";
  }
  listHtml = listHtml + "</ol>";
  taskContainerElement.innerHTML = listHtml;
}

function printTaskNumbers() {
  let taskNumberString = tasks.length + " tasks";
  const noOfTasksElement = document.getElementById("noOfTaksContainer");
  noOfTasksElement.textContent = taskNumberString;
}

function removeTask(task) {
  tasks = tasks.filter(function (item) {
    return item !== task;
  });
  printTasksOnScreen();
  printTaskNumbers();
}
