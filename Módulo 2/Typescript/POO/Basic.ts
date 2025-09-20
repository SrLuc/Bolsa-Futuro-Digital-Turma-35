// 1
class Car {
  constructor(public brand: string, public year: number) {}
}
const car1 = new Car("Toyota", 2010);
const car2 = new Car("Tesla", 2022);
console.log(car1, car2);

// 2
class Person {
  constructor(public name: string, public age: number) {}
  introduce(): string {
    return `Olá, meu nome é ${this.name} e tenho ${this.age} anos.`;
  }
}
const p1 = new Person("Ana", 25);
console.log(p1.introduce());

// 3
class Rectangle {
  constructor(public width: number, public height: number) {}
  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }
}
const rect = new Rectangle(5, 10);
console.log(rect.getArea(), rect.getPerimeter());

// 4
class Book {
  constructor(public title: string, public author: string) {}
  describe(): string {
    return `${this.title}, escrito por ${this.author}`;
  }
}
const book = new Book("Dom Casmurro", "Machado de Assis");
console.log(book.describe());

// 5
class BankAccount {
  #balance: number;
  constructor(public owner: string, balance: number = 0) {
    this.#balance = balance;
  }
  deposit(amount: number) {
    this.#balance += amount;
  }
  withdraw(amount: number) {
    if (amount <= this.#balance) this.#balance -= amount;
    else console.log("Saldo insuficiente");
  }
  getBalance(): number {
    return this.#balance;
  }
}
const acc = new BankAccount("João", 100);
acc.deposit(50);
acc.withdraw(30);
console.log(acc.getBalance());
