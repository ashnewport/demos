abstract class Animal {
  private name: string;

  constructor(theName: string){
    this.name = theName;
  }

  walk(distance: number){
    console.log(`Hi, my name is ${this.name} and I'm walking ${distance} meters.`);
  }
}

// Doesn't work with `abstract` above
// let myAnimal = new Animal('Ash');
// myAnimal.walk(10);


class Snake extends Animal {
  constructor(theName: string) {
    super(theName);
  }

  walk(distance: number) {
    console.log(`Snakes don't really walk`);
  }
}

let mySnake = new Snake('Ash');
mySnake.walk(10);