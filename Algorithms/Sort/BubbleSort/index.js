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
const sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return;
};
export const bubbleSort = async () => {
  await getInputs();
  sort(arr, 0, arr.length - 1);
  console.log("output :", arr);
  return;
};
