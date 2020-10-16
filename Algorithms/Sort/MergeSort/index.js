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
    const m = Math.floor((low + high) / 2);
    sort(arr, low, m);
    sort(arr, m + 1, high);
    merge(arr, low, m, high);
  }
};
const merge = (arr, l, m, r) => {
  let i, j, k;
  let n1 = m - l + 1;
  let n2 = r - m;
  let a1 = [];
  let a2 = [];

  for (i = 0; i < n1; i++) a1[i] = arr[l + i];
  for (j = 0; j < n2; j++) a2[j] = arr[m + 1 + j];

  i = 0;
  j = 0;
  k = l;
  while (i < n1 && j < n2) {
    if (a1[i] <= a2[j]) {
      arr[k] = a1[i];
      i++;
    } else {
      arr[k] = a2[j];
      j++;
    }
    k++;
  }

  /* Copy the remaining elements  if there are any */
  while (i < n1) {
    arr[k] = a1[i];
    i++;
    k++;
  }

  /* Copy the remaining elements  if there are any */
  while (j < n2) {
    arr[k] = a2[j];
    j++;
    k++;
  }
};

export const mergeSort = async () => {
  await getInputs();
  sort(arr, 0, arr.length - 1);
  console.log("output :", arr);
  return;
};
