const makeLooper =
  (val, ind = 0) =>
  () =>
    val[ind++ % val.length];

const abc = makeLooper("abc");
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
console.log(abc());
