setTimeout(() => {
  console.log(1);
}, 0);
console.log(2);
Promise.resolve().then(() => {
  console.log(3);
});
console.log(4);
setTimeout(() => {
  console.log(5);
}, 0);
console.log(6);
//2
const promise = new Promise((res, rej) => {
  console.log(1);
  setTimeout(() => {
    Promise.resolve().then(() => {
      console.log(2);
    });
    res(3);
  }, 100);
});
setTimeout(() => {
  console.log(4);
}, 0);
console.log(5);
promise.then((val) => {
  console.log(val);
});
console.log(6);
///3
logger();

const p = new Promise((res, rej) => setTimeout(res(1)));

setTimeout(console.log(4));
console.log(3);

async function logger() {
  return await console.log(5);
}

p.then((res) => console.log(res));

console.log(2);
