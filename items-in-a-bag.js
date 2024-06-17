const items = [
  {
    name: "guitar",
    price: 150,
    weight: 3,
  },
  {
    name: "phone",
    price: 200,
    weight: 1,
  },
  {
    name: "laptop",
    price: 300,
    weight: 4,
  },
  {
    name: "diamond",
    price: 500,
    weight: 1,
  },
];

console.log(calMaxPriceOfItems(items, 5));

function calMaxPriceOfItems(items, bagSize) {
  const row = new Array(bagSize).fill(0);
  const matrix = new Array(items.length).fill(0).map(() => [...row]);

  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < bagSize; j++) {
      const prevPrice = matrix[i - 1]?.[j] ?? 0;
      if (items[i].weight > j + 1) {
        matrix[i][j] = prevPrice;
        continue;
      }
      const restPrice = matrix[i - 1]?.[j - items[i].weight] ?? 0;
      const maxPrice = Math.max(items[i].price + restPrice, prevPrice);

      matrix[i][j] = maxPrice;
    }
  }
  return matrix.at(-1).at(-1);
}
