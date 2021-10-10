// конструкция if, else

// console.log("start");

// const value = 5;
// if (value > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log("finish");

//================================

// конструкция else if

// console.log("start");

// const value = 0;
// if (value === 0) {
//   console.log(value, "= 0");
// } else if (value > 1) {
//   console.log(value, "> 1");
// } else if (value < 1) {
//   console.log(value, "< 1");
// } else {
//   console.log(value);
// }

// console.log("finish");

// let age = 20;
// let result = age >= 18 ? "Доступ разешон" : "Доступ запрещен";
// console.log(result);

//================================

// конструкция switch case

// switch ("Denis") {
//   case "ivan":
//     console.log("ivan");
//     break;
//   case "Alex":
//     console.log("Alex");
//     break;
//   case "Denis":
//     console.log("Denis");
//     break;
//   default:
//     console.log("нет имён");
// }

// let a = 1;
// let b = 2;
// let c = 3;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else if (c > a && c > b) {
//   console.log(c);
// } else {
//   console.log("введите значение");
// }
//=======================================

// let t = 36;

// if (t < -30) {
//   console.log("оставайтесль дома");
// } else if (t <= -10) {
//   console.log("Сегодня холодно");
// } else if (t <= 5) {
//   console.log("Не холдно");
// } else if (t <= 15) {
//   console.log("Тепло");
// } else if (t <= 25) {
//   console.log("Очень тепло");
// } else if (t <= 35) {
//   console.log("Жарко");
// } else {
//   console.log("Пекло");
// }
//===================================
// switch ("Admin") {
//   case "Admin":
//     console.log("это админ");
//     break;
//   case "manager":
//     console.log("это менеджер");
//     break;
//   case "user":
//     console.log("это пользователь");
//     break;
//   default:
//     console.log("введите статус");
// }

//=====================================

// const a = 0;
// const b = 1;
// const result = a || b;
// console.log(result);

// const result2 = a && b;
// console.log(result2);

// let i = 1;
// while (i <= 5) {
//   console.log("строка1");
//   i += 1;
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("строка2");
// }

//=====================================

// let m = 4;
// let countCar = 5;
// let day = 0;

// while (countCar >= m) {
//   countCar /= 2;
//   day++;
// }
// console.log(day);
//======================================
// Проанализировав временной промежуток начиная  с 1800 и до 2020 года найти и вывести в консоль:
// Год первого полета человека в космос и количество итераций которое потребовалось для поиска.
// Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска.

// let i = 1799;

// let j = 0;

// while (i < 2021) {
//   i += 4;
//   j++;
//   if (i === 1800 && i === 1900) {
//     continue;
//   }
// }
// console.log(`${j} - количество високосных годов с 1800 - 2020 `);
// //=======================================

// let y = 1799;
// let m = 0;

// while (y < 2021) {
//   y += 1;
//   if (y === 1961) {
//     m = y;
//     continue;
//   }
// }
// console.log(`${m} - год первого полята человека в космос`);
