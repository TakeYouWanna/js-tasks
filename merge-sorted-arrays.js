function mergeSortedArrays(arr1, arr2) {}
console.log(mergeSortedArrays([2, 4, 6, 8, 9, 10], [1, 3, 5, 7, 9])); // [1,2,3,4,5,6,7,8,9,10]

// function mergeSortedArrays(arr1, arr2) {
//   let j = 0;
//   let i = 0;
//   let result = [];
//   const length = arr1.length + arr2.length;
//   for (let k = 0; k < length; k++) {
//     if (arr1[i] <= arr2[j] || !arr2[j]) {
//       result[k] = arr1[i];
//       i++;
//     } else {
//       result[k] = arr2[j];
//       j++;
//     }
//   }
//   return result;
// }
