class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log("Hi, I'm " + this.name + " and I'm " + this.color)
  }
}

let lion = new Animal("Mufasa", "golden brown");

console.log(lion);

lion.speak();
