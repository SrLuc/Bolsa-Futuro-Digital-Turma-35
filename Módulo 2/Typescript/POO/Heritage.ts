// 6
class Animal {
  makeSound(): void {
    console.log("Some sound...");
  }
}
class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}
const dog = new Dog();
dog.makeSound();

// 7
class Cat extends Animal {
  meow(): void {
    console.log("Meow!");
  }
}
const cat = new Cat();
cat.makeSound();
cat.meow();

// 8
class Bird extends Animal {
  fly(): void {
    console.log("O pássaro está voando");
  }
}
const bird = new Bird();
bird.fly();

// 9
class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }
  study(): void {
    console.log(`${this.name} está estudando para nota ${this.grade}`);
  }
}
const student = new Student("Carlos", 20, "A");
student.study();

// 10
class Teacher extends Person {
  constructor(name: string, age: number, public subject: string) {
    super(name, age);
  }
  teach(): void {
    console.log(`${this.name} está ensinando ${this.subject}`);
  }
}
const teacher = new Teacher("Paula", 40, "Matemática");
teacher.teach();
