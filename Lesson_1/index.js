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

let a = 1;
let b = 2;
let c = 3;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else if (c > a && c > b) {
  console.log(c);
} else {
  console.log("введите значение");
}
//=======================================

let t = 36;

if (t < -30) {
  console.log("оставайтесль дома");
} else if (t <= -30 || t <= -9) {
  console.log("Сегодня холодно");
} else if (t <= -10 || t <= 4) {
  console.log("Не холдно");
} else if (t <= 5 || t <= 14) {
  console.log("тепло");
} else if (t >= 15 || t >= 24) {
  console.log("Очень жарко");
} else if (t >= 25 || t <= 35) {
  console.log("Жарко");
} else {
  console.log("Пекло");
}
