const obj = {
  a: 2,
  obj: {
    a: 3,
    func: () => {
      console.log(this.a);
    },
  },
};
obj.obj.func();

//advanced

const userService = {
  filter: "active",
  users: [
    { name: "Alex", status: "active" },
    { name: "Bob", status: "inactive" },
  ],
  fn: function (user) {
    return user.status === this.filter;
  },
  getUsersByFilter: function () {
    return this.users.filter(userService.fn);
  },
};

console.log(userService.getUsersByFilter());
