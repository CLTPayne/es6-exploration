class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log(`Hi I'm ${this.name} and I'm ${this.color}`);
  }
}

class Lion extends Animal {
  constructor(name, color, role, home) {
    super(name, color);

    this.role = role;
    this.home = home;
  }

  roar() {
    console.log(`I'm ${this.role} of ${this.home}!!!`)
  }
}

let lion = new Lion("Mufasa", "golden brown", "King", "Pride Rock");
let lion_2 = new Lion("Scar", "dirty brown", "an outcast", "the Shadow lands")

console.log(lion);

lion.speak();
lion.roar();

lion_2.speak();
lion_2.roar();
