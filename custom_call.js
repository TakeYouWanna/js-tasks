Function.prototype.customBind = function (scope) {
  scope.func = this;
  return function () {
    scope.func();
  };
};
function asd() {
  console.log(this);
}
asd.customBind({ a: 3 })();
