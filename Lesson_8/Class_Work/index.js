// const user = {
//   name: "Alex",
//   age: "25",
//   getUserName: getName,
//   setUserName: setName,
// };
// const user1 = {
//   name: "Ivan",
//   age: "18",
//   getUserName: getName,
//   setUserName: setName,
// };
// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
//   setAdminName: setName,
// };

// user.getUserName();
// user1.getUserName();
// admin.getAdminName();

// console.log(user);
// user.setUserName("Ira");
// user.getUserName();
// console.log(user);

// function example() {
//   console.log(this);
// }
// const testObject = {
//   testMethod: example,
// };
// testObject.testMethod();

// function startFight() {
//   return this.strange * this.agility;
// }

// const startFight = () => {
//   return this.strange * this.agility;
// };

// const hero = {
//   name: "Jon",
//   strange: 20,
//   agility: 10,
//   health: 100,
//   fight: startFight,
//   sayName: function () {
//     return this.name;
//   },
// };

// const dracula = {
//   name: "Vlad",
//   strange: 50,
//   agility: 7,
//   health: 1000,
//   fight: startFight,
// };

// console.log(hero.fight(), dracula.fight());

// if (hero.fight() > dracula.fight()) {
//   console.log("Герой победил!! УРА");
// } else {
//   console.log("Провал, вы погибли");
// }

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
// console.log(town);
// town.setSomeValue("townName", "Paris");
// town.setSomeValue("population", "9 ml");
// console.log(town);

// const arr = [6, 8, 1, 4, 9, 9, 5, 3, 0, 2, 7];
// function sumSeven(numbers) {
//   return numbers
//     .map((el) => `(${el} : ${7 - el})`)
//     .filter((_, i, arr) => i < arr.length / 2);
// }

// console.log(sumSeven(arr));