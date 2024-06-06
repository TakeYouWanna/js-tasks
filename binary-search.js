// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr = [6, 7, 8, 1, 2, 3, 4, 5];

// function binarySearchRec(data, x) {
//   console.log(data);
//   const middle = Math.floor(data.length / 2);

//   if (data[middle] === x) {
//     return middle;
//   }
//   if (x < data[middle]) {
//     return binarySearchRec(data.slice(0, middle), x);
//   } else {
//     const res = binarySearchRec(data.slice(middle), x);
//     return res < 0 ? -1 : middle + res;
//   }
// }

// function binarySearchRecWhenShift(data, x) {
//   console.log(data);
//   const middle = Math.floor(data.length / 2);

//   if (data[0] === x) {
//     return 0;
//   }
//   if (data[middle] === x) {
//     return middle;
//   }
//   if (
//     data[0] <= data[middle]
//       ? x < data[middle] && x > data[0]
//       : x > data[0] || x < data[middle]
//   ) {
//     return binarySearchRecWhenShift(data.slice(0, middle), x);
//   } else {
//     const res = binarySearchRecWhenShift(data.slice(middle), x);
//     return res < 0 ? -1 : middle + res;
//   }
// }

// function binarySearchWhile(data, x) {
//   let left = 0;
//   let right = data.length - 1;
//   let foundInd = -1;
//   let operations = 0;

//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2);
//     if (data[middle] === x) {
//       return { foundInd: middle, operations };
//     }
//     if (data[left] === x) {
//       return { foundInd: left, operations };
//     }
//     if (
//       data[left] < data[middle]
//         ? x < data[middle] && x > data[left]
//         : x > data[left] || x < data[middle]
//     ) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//     operations++;
//   }

//   return { foundInd, operations };
// }
