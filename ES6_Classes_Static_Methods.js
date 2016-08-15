class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
    }
    bark() {
      console.log(`Bark Bark! My name is ${this.name}`)
    }
    cuddle() {
      console.log(`I love you owner!`);
    }
    static info() {
      console.log('A dog is better than a cat by 10 times');
    }
  }

  const crystal = new Dog("Crystal", "Labrador");
