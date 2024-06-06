const findNumbers = (arr, num) => {
  const pairsMap = arr.reduce((map, curr) => {
    map[num - curr] = curr;
    return map;
  }, {});
  const firstPair = Object.values(pairsMap).find((val) => pairsMap[val]);
  return firstPair ? [firstPair, pairsMap[firstPair]] : null;
};

const arr = [1, 2, 3, 6, 5, 4];
const numToFind = 9;
const res = findNumbers(arr, numToFind);
