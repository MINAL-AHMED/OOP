// Constructor and public  method for object
//============================================\\
// class Person {
//   constructor(name, email, age, address) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//   }
//   sendMsg() {
//     console.log(`${this.name} sent message`);
//     console.log(`${this.email} sent Email`);
//   }
// }

// let p1 = new Person("Mubin", "mubin@test.com", 16, "Lalpur");

// console.log(p1);
// p1.sendMsg();

// using privet attributes in object
//======================================\\

// const _name = Symbol("name");
// const _email = Symbol("email");
// const _age = Symbol("age");
// const _address = Symbol("address");
// class Person {
//   constructor(name, email, age, address) {
//     this[_name] = name;
//     this[_email] = email;
//     this[_age] = age;
//     this[_address] = address;
//   }
//   sendMsg() {
//     console.log(`${this[_name]} sent message`);
//     console.log(`${this[_email]} sent Email`);
//   }
// }

// let p1 = new Person("Mubin", "mubin@test.com", 16, "Lalpur");

// console.log(p1);
// p1.sendMsg();

// getter and setter
//===================\\

// const _name = Symbol("name");
// const _email = Symbol("email");
// const _age = Symbol("age");
// const _address = Symbol("address");
// class Person {
//   constructor(name, email, age, address) {
//     this[_name] = name;
//     this[_email] = email;
//     this[_age] = age;
//     this[_address] = address;
//   }
//   get name() {
//     return this[_name];
//   }
//   set name(value) {
//     this[_name] = value;
//   }
//   get email() {
//     return this[_email];
//   }
//   set email(value) {
//     this[_email] = value;
//   }
//   get age() {
//     return this[_age];
//   }
//   set age(value) {
//     this[_age] = value;
//   }
//   get address() {
//     return this[_address];
//   }
//   set address(value) {
//     this[_address] = value;
//   }
//   //   sendMsg() {
//   //     console.log(`${this[_name]} sent message`);
//   //     console.log(`${this[_email]} sent Email`);
//   //   }

//   toString() {
//     return `${this[_name]} send a message`;
//   }
// }

// let p1 = new Person("Mubin", "mubin@test.com", 16, "Lalpur");
// let p2 = new Person("Shiab", "shiab@test.com", 13, "Balitita");

// // console.log(p1);
// console.log(p2.toString());

// Inheritance in object
//=======================\\

const _name = Symbol("name");
const _email = Symbol("email");
class Person {
  constructor(name, email) {
    this[_name] = name;
    this[_email] = email;
  }
  sendMsg() {
    console.log(`${this[_name]} sent message`);
    console.log(`${this[_email]} sent Email`);
  }
}

const _age = Symbol("age");
const _address = Symbol("address");
class P1 extends Person {
  constructor({ name, email, age, address }) {
    super(name, email);
    this[_age] = age;
    this[_address] = address;
  }
  sendMsg() {
    super.sendMsg(); // Call the sendMsg method of the superclass (Person)
    console.log(`Additional message from P1`);
  }
}

let person = new P1({
  name: "John",
  email: "john@example.com",
  age: 18,
  address: "Jordan",
});

person.sendMsg();
console.log(person);
