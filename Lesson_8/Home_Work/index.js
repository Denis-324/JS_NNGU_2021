// 1. Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.
// При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.

// const conter = (start) => {
//   let newStart = start + 1;
//   return (end) => {
//     newStart = newStart - 1;
//     if (newStart === end) {
//       return `таймер заверен ${newStart}`;
//     } else {
//       return newStart;
//     }
//   };
// };
// const count = conter(3);
// console.log(count(0), count(0), count(0), count(0));

// 2. Что выведет функция?
// function f() {
//   alert(this);
// }

// let user = {
//   g: f.bind(null),
// };

// user.g()
// глобальный объект window

// 3. Можем ли мы изменить this дополнительным связыванием?
// function f() {
//   alert(this.name);
// }

// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

// f();
// Нет

// 4. В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
// function sayHi() {
//   alert(this.name);
// }

// let bound = sayHi.bind({
//   name: "Вася",
// });
// sayHi.test = 5;

// alert(sayHi.test); // что выведет? почему?
// Выведет undefined, потому что в перменной bound хранится контектс вызова обекта где нету test

// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "Вася",

//   loginOk() {
//     `${this.name} logged in`;
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// askPassword(user.loginOk, user.loginFail);
//Будет ошибка потому что аргументы функции askPassword вызваны без контекста

// 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   //   let password = prompt("Password?", '');
//   let password = "dsfs";
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     console.log(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

// 8.Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem.
// var elem = { value: "Привет" };

// function func(surname, name) {
//   console.log(this.value + ", " + surname + " " + name);
// }
// func = func.bind(elem);
// func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'
// func("Петров", "Петр"); //тут должно вывести 'привет, Петров Петр'

// 9. Есть функция которая складывает три числа.
// const sum = (a, b, c) => a + b + c
// Выполните каррирование.
// const sum = (a) => (b) => (c) => a + b + c;
// console.log(sum(2)(2)(2));
