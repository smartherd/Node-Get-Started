class Animal {
  constructor(colorValue) {
    this.color = colorValue;  // Creates the color property for this 
  }
  greet() {
    console.log(`Hello, my color is ${this.color}!`);
  }
}

class Dog extends Animal {
  constructor(colorValue, breedName) {
    super(colorValue);
    this.breed = breedName;
  }
  greet() {
    console.log(`Hello, my breed is ${this.breed} and color ${this.color}`);
  }
}

const obj1 = new Animal('White');
const obj2 = new Dog('Brown', 'Pug');
const obj3 = new Dog('Black', 'Labrador');

obj3.walk = () => {
  console.log('I am walking');
}

obj3.greet = () => {
  console.log('I am a special greet function');
}

obj1.greet();
obj2.greet();
obj3.greet();

// obj2.walk();  // Error
obj3.walk();








