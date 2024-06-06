function Man(name) {
  this.name = name;
}
Man.prototype = {
  getA: function () {
    console.log("A");
  },
};

function Programmer(exp, name) {
  Man.call(this, name);
  this.exp = 5;
}
Programmer.prototype = Object.create(Man.prototype);
Programmer.prototype.constructor = Programmer;

const asd = new Programmer(1, "Anton");
asd.getA();
console.log(asd);
