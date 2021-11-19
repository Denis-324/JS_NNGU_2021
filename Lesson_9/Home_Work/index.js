//1 Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

// Пример:
// const worker = new Worker('Иван', 'Иванов', 10, 31);

// class People {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   getFullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }

// class Worker extends People {
//   constructor(name, surname, rate, day) {
//     super(name, surname);
//     this.rate = rate;
//     this.day = day;
//   }
//   getSalary() {
//     return `${this.rate * this.day}`;
//   }
// }

// const FirstWorker = new Worker("Иван", "Иванов", 10, 31);

// console.log(FirstWorker.name);
// console.log(FirstWorker.surname);
// console.log(FirstWorker.getFullName());
// console.log(FirstWorker.rate);
// console.log(FirstWorker.day);
// console.log(FirstWorker.getSalary());

//2 Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// class Boss extends Worker {
//   constructor(name, surname, rate, day, workers) {
//     super(name, surname, rate, day);
//     this.workers = workers;
//   }
//   getSalaryTwo() {
//     return super.getSalary() * this.workers;
//   }
// }

// const boss = new Boss("Иван", "Иванов", 10, 31, 10);
// console.log(boss.name); //выведет 'Иван'
// console.log(boss.surname); //выведет 'Иванов'
// console.log(boss.getFullName()); //выведет 'Иванов Иван'
// console.log(boss.rate); //выведет 10
// console.log(boss.day); //выведет 31
// console.log(boss.workers); //выведет 10
// console.log(boss.getSalaryTwo()); //выведет 3100 - то есть 10*31*10

//3 Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
// class Worker extends People {
//   constructor(name, surname, rate, day) {
//     super(name, surname);
//     this._rate = rate;
//     this._day = day;
//   }
//   get salary() {
//     return `${this._rate * this._day}`;
//   }
//   get rate() {
//     return `${this._rate}`;
//   }
//   get days() {
//     return `${this._day}`;
//   }
//   get nickName() {
//     return `${this.name}`;
//   }
//   get secondName() {
//     return `${this.surname}`;
//   }
// }

// let worker = new Worker("Иван", "Иванов", 10, 31);

// console.log(worker.nickName); //выведет 'Иван'
// console.log(worker.secondName); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.salary); //выведет 310 - то есть 10*31

//4 Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.

// Пример:

// class Worker extends People {
//   newRate = 0;
//   newDays = 0;
//   constructor(name, surname, rate, day) {
//     super(name, surname);
//     this._rate = rate;
//     this._day = day;
//   }
//   get salary() {
//     return `${this._rate * this._day}`;
//   }
//   get rate() {
//     return this._rate;
//   }
//   setRate(newRate) {
//     this._rate = newRate;
//   }

//   get days() {
//     return this._day;
//   }
//   setDays(newDays) {
//     this._day = newDays;
//   }

//   get nickName() {
//     return `${this.name}`;
//   }
//   get secondName() {
//     return `${this.surname}`;
//   }
// }
// let worker = new Worker("Иван", "Иванов", 10, 31);

// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.salary); //выведет 310 - то есть 10*31
// //Теперь используем сеттер:
// worker.setRate(20); //увеличим ставку
// worker.setDays(10); //уменьшим дни
// console.log(worker.salary); //выведет 200 - то есть 20*10

// 5 Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

// Пример:
// class MyString {
//   constructor(myStrRev, myStrUpper, newMyStrUpper) {
//     this.myStrRev = myStrRev;
//     this.myStrUpper = myStrUpper;
//     this.newMyStrUpper = newMyStrUpper;
//   }
//   reverse() {
//     return this.myStrRev.split("").reverse().join("");
//   }
//   ucFirst() {
//     return this.myStrUpper.replace(/^\w/, (item) => {
//       return item.toUpperCase();
//     });
//   }
//   ucWords() {
//     return this.newMyStrUpper.replace(/^[a-z]|(?<=\s)[a-z]/g, (item) =>
//       item.toUpperCase()
//     );
//   }
// }
// const str = new MyString("123", "qwer", "asd asd asd");
// console.log(str.reverse());
// console.log(str.ucFirst());
// console.log(str.ucWords());

//6 Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

// Пример:
// class Validator {
//   constructor(email, domain, data, phone) {
//     this.email = email;
//     this.domain = domain;
//     this.data = data;
//     this.phone = phone;
//   }
//   isEmail() {
//     return /\w+\@\w+\.\w+$/.test(this.email);
//   }
//   isDomain() {
//     return /\w+\.\w+$/.test(this.domain);
//   }
//   isDate() {
//     return /\d\d\.\d\d\.\d\d\d\d$/.test(this.data);
//   }

//   isPhone() {
//     return /\+\d\(\d\d\d\)\d\d\d-\d\d-\d\d$/.test(this.phone);
//   }
// }
// let validator = new Validator(
//   "phphtml@mail.ru",
//   "phphtml.net",
//   "12.05.2020",
//   "+7(831)817-68-92"
// );

// console.log(validator.isEmail());
// console.log(validator.isDomain());
// console.log(validator.isDate());
// console.log(validator.isPhone());

//7 Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:
// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   getFullName() {
//     return this.name + " " + this.surname;
//   }
// }

// class Student extends User {
//   constructor(name, surname, yearEntered) {
//     super(name, surname);
//     this.yearEntered = yearEntered;
//   }
//   getCourse() {
//     return Number(new Date().getFullYear()) - this.yearEntered + " " + "курс";
//   }
// }

// const student = new Student("Ivan", "Ivanov", 2018);
// console.log(student.getCourse());
// console.log(student.getFullName());
