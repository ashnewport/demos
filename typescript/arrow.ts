class Greeter {
  firstName = 'Ash';

  sayHello() {
    setTimeout(() => {
      console.log(`Hello, ${this.firstName}`);
    }, 500);
  }
}

let greeter2 = new Greeter();
greeter2.sayHello();