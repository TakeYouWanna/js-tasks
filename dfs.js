const graf = {
  a: ["b", "c"],
  b: ["d"],
  c: ["d", "e", "f"],
  d: [],
  e: [],
  f: ["g", "e"],
  g: [],
};

// const dfs = (obj, pos, target) => {
//   if (pos === target) {
//     return pos;
//   }
//   if (obj[pos].visited) {
//     return "";
//   }
//   obj[pos].visited = true;
//   return obj[pos].reduce((path, nb) => {
//     if (!obj[nb].visited) {
//       const subpath = dfs(obj, nb, target);
//       if (subpath && (!path || (subpath && path))) {
//         return pos + subpath;
//       }
//     }
//     return path;
//   }, "");
// };
