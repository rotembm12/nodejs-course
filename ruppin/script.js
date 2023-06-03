const name = process.argv[2];

const obj = {
  name: name,
  age: 18,
  printAge: function () {
    console.log(this.age);
  },
  printName() {
    console.log(this.name);
  },
};

obj.printName();
