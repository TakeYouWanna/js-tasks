const delay = (ms) => {};

Promise.resolve("SAT")
  .then(delay(500))
  .then((result) => console.log(result));
