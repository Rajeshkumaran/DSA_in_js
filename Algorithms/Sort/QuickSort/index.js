const inquirer = require("inquirer");
let arr = [];
const getInputs = async () => {
  var inputs = [
    {
      type: "input",
      name: "array",
      message: "Enter array inputs (give space between numbers) : ",
    },
  ];
  await inquirer.prompt(inputs).then((answers) => {
    arr = answers["array"].split(" ");
    arr = arr.map((a) => parseInt(a, 10));
  });
};
const sort = (arr, low, high) => {
  if (low < high) {
    const p = partition(arr, low, high);
    sort(arr, low, p - 1);
    sort(arr, p + 1, high);
  }
};
const partition = (arr, low, high) => {
  let i = low - 1;
  let pivot = arr[high];
  for (let j = low; j < high; j += 1) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
};
const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return;
};
export const quickSort = async () => {
  await getInputs();
  sort(arr, 0, arr.length - 1);
  console.log("output :", arr);
  return;
};
