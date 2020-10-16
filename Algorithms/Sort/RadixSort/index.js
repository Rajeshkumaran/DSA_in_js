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
const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (max < arr[i]) max = arr[i];
  }
  return (max + "").length;
};
const sort = (arr, max) => {
  let pockets = Array.apply(null, Array(10)).map((x) => []);
  for (let k = 0; k < max; k += 1) {
    let m = Math.pow(10, k + 1);
    let n = Math.pow(10, k);

    for (let i = 0; i < arr.length; i += 1) {
      let index = ((arr[i] % m) / n).toFixed(0);
      pockets[index].push(arr[i]);
    }
    let z = 0;
    for (let i = 0; i < pockets.length; i += 1) {
      for (let j = 0; j < pockets[i].length; j += 1) {
        arr[z++] = pockets[i][j];
      }
    }
    pockets = Array.apply(null, Array(10)).map((x) => []);
  }
};
export const radixSort = async () => {
  await getInputs();
  const max = findMax(arr);
  sort(arr, max);
  console.log("output :", arr);
  return;
};
