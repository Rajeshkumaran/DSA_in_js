const inquirer = require("inquirer");
let arr = [];
let element;
const getInputs = async () => {
  var inputs = [
    {
      type: "input",
      name: "array",
      message: "Enter array inputs (give space between numbers) : ",
    },
    {
      type: "input",
      name: "element",
      message: "Enter element to find",
    },
  ];
  await inquirer.prompt(inputs).then((answers) => {
    arr = answers["array"].split(" ");
    arr = arr.map((a) => parseInt(a, 10));
    element = parseInt(answers["element"], 10);
  });
};

const search = (arr, element, low, high) => {
  if (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === element) {
      return true;
    } else if (arr[mid] > element) {
      return search(arr, element, low, mid - 1);
    } else if (arr[mid] < element) {
      return search(arr, element, mid + 1, high);
    }
  }
  return false;
};
export const binarySearch = async () => {
  await getInputs();
  const status = search(arr, element, 0, arr.length - 1);
  console.log("output :", status ? "found" : "not found");
  return;
};
