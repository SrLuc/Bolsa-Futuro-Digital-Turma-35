// 11
class Vehicle {
  constructor(public brand: string, public speed: number) {}
  move(): void {
    console.log(`${this.brand} está se movendo a ${this.speed} km/h`);
  }
}
class CarV extends Vehicle {
  constructor(brand: string, speed: number, public wheels: number) {
    super(brand, speed);
  }
  move(): void {
    console.log(`${this.brand} com ${this.wheels} rodas está andando a ${this.speed} km/h`);
  }
}
const carV = new CarV("Fiat", 80, 4);
carV.move();

// 12
class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}
class Square extends Shape {
  constructor(public side: number) {
    super();
  }
  getArea(): number {
    return this.side ** 2;
  }
}
console.log(new Circle(3).getArea(), new Square(4).getArea());

// 13
class Employee {
  constructor(public name: string, public salary: number) {}
}
class Manager extends Employee {
  team: Employee[] = [];
  addEmployee(employee: Employee): void {
    this.team.push(employee);
  }
}
const manager = new Manager("Ana", 5000);
manager.addEmployee(new Employee("Bruno", 3000));
console.log(manager.team);

// 14
class Account {
  #balance: number;
  constructor(public owner: string, balance: number = 0) {
    this.#balance = balance;
  }
  deposit(amount: number) {
    this.#balance += amount;
  }
  getBalance(): number {
    return this.#balance;
  }
}
class SavingsAccount extends Account {
  constructor(owner: string, balance: number, public interestRate: number) {
    super(owner, balance);
  }
  applyInterest(): void {
    this.deposit(this.getBalance() * this.interestRate);
  }
}
const sa = new SavingsAccount("João", 1000, 0.05);
sa.applyInterest();
console.log(sa.getBalance());

// 15
class Character {
  constructor(public name: string) {}
  attack(): void {
    console.log(`${this.name} ataca!`);
  }
}
class Warrior extends Character {
  defend(): void {
    console.log(`${this.name} defende com escudo`);
  }
}
class Knight extends Warrior {
  leadArmy(): void {
    console.log(`${this.name} lidera o exército`);
  }
}
const knight = new Knight("Arthur");
knight.attack();
knight.defend();
knight.leadArmy();
