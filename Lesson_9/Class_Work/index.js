// function sayfullName(firstName, LastName) {
//   return `${this.phrase} ${firstName} ${LastName}`;
// }

// // console.log(sayfullName.call({ phrase: "Hello" }, "Alex", "Shirokov"));

// let bundFullName = sayfullName.bind({ phrase: "bay" }, "Alex", "Shirokov");
// // console.log(bundFullName());

// const town = {
//   townName: "London",
//   population: "13 ml",
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// const town2 = {
//   townName: "Moscow",
//   population: "15 ml",
// };

// console.log(town.getTownName.call(town2));

// let town3 = town.setSomeValue.bind(town2, "age", 23);
// town3();
// console.log(town2);

// function getFullName() {
//   const firstName = "Alex";

//   return function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   };

//   return getSecondName;
// }

// console.log(getFullName()("Shirokov"));

// const getArea = (a) => {
//   return (b) => a * b;
// };

// const areaWithTen = getArea(10);
// console.log(areaWithTen(2));

// const areaWithFour = getArea(4);
// console.log(areaWithFour(3));

// Используя замыкание написать функцию которая будет вычислять объём параллелепипеда с высотой 10.
// const getVolume = () => {
//   const heightTen = 10;
//   return (width) => {
//     return (length) => heightTen * width * length;
//   };
// };

// const getVolumeTen = getVolume(10);

// console.log(getVolumeTen(2)(3));
// Используя каррирование написать функцию которая будет вычислять объём параллелепипеда.

// const people = {
//   getName: function () {
//     return this.name;
//   },
// };
// const user = {
//   name: "Alex",
//   __proto__: people,
// };
// const Admon = {
//   name: "Ivan",
//   __proto__: people,
// };
// // console.log(people.getName());
// console.log(user.getName());

// function CreateUser(name, age) {
//   this.userName = name;
//   this.userAge = age;

//   //   this.sayHi = function () {
//   //     return `Hellow ${this.userName}`;
//   //   };
// }

// CreateUser.prototype.sayHi = function () {
//   return `Hellow ${this.userName}`;
// };

// const user1 = new CreateUser("Alex", 27);
// const user2 = new CreateUser("Alex2", 26);
// console.log(user1, user2);

// console.log(user1.sayHi());

// function CreateLetter(from, to) {
//   this.from = from;
//   this.to = to;
//   //   this.show = function () {
//   //     return `Привет Ivan в ${from} из ${to}`;
//   //   };
// }
// let letterOne = new CreateLetter("moscow", "london");

// CreateLetter.prototype.show = function () {
//   return `Привет Ivan в ${this.from} из ${this.to}`;
// };

// CreateLetter.prototype.newFrom = function (newFrom) {
//   return (this.from = newFrom);
// };
// letterOne.newFrom("itali");
// console.log(letterOne);

class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Worker extends People {
  constructor(name, surname, rate, day) {
    super(name, surname);
    this.rate = rate;
    this.day = day;
  }
  getSalary() {
    return `${this.rate * this.day}`;
  }
}

const FirstWorker = new Worker("ivan", "petrov", 28, 3);

console.log(FirstWorker.getSalary());
console.log(FirstWorker.getFullName());
