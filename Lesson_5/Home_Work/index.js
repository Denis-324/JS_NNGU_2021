// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// const getSquare = (num) => num ** 2;
// console.log(getSquare(5));

// Сделайте функцию, которая возвращает сумму двух чисел.
// const getSum = (num1, num2) => num1 + num2;
// console.log(getSum(5, 5));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// const createrNum = (num1, num2, num3) => (num1 - num2) / num3;
// console.log(createrNum(15, 5, 2));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// const getDay = (day) => {
//   const arrDay = [null, "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
//   return arrDay[day];
// };
// console.log(getDay(2));

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// const getNum = (num1, num2) => (num1 === num2 ? true : false);
// console.log(getNum(2, 2));

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
// больше 10 - пусть вернет true, а если нет то - false.
// const getSum = (num1, num2) => (num1 + num2 > 10 ? true : false);
// console.log(getSum(8, 4));

//  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
// const getNum = (num) => (num < 0 ? true : false);
// console.log(getNum(-5));

//  Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
// const isNumberInRange = (num) => (num > 0 && num < 10 ? true : false);
// console.log(isNumberInRange(-5));

//  Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
// const arr1 = [3, 15, 12, 0, 1, 2, 5, 50, 51, -4];
// const isNumberInRange = (num) => (num > 0 && num < 10 ? true : false);
// const newArr = (arr) => {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (isNumberInRange(arr[i])) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// };
// console.log(newArr(arr1));

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// const getDigitsSum = (digit) => {
//   let num = 0;
//   digit = String(digit);
//   for (let i = 0; i < digit.length; i += 1) {
//     num += +digit[i];
//   }
//   return num;
// };
// console.log(getDigitsSum(5554));

//  Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
// const getDigitsSum = (digit) => {
//   let num = 0;
//   digit = String(digit);
//   for (let i = 0; i < digit.length; i += 1) {
//     num += +digit[i];
//   }
//   return num;
// };

// const getSum13 = () => {
//   let nums = [];
//   for (let i = 0; i < 2020; i += 1) {
//     if (getDigitsSum(i) === 13) {
//       nums.push(i);
//     }

//   }
//   return nums;
// };
// console.log(getSum13());

//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
// const isEven = (num) => (num % 2 === 0 ? true : false);
// console.log(isEven(4));

//  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// const isEven = (num) => (num % 2 === 0 ? true : false);
// const arr1 = [50, 25, 3, 4, 15, 6, 7];
// let nums = [];
// const getEven = (arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (isEven(arr[i])) {
//       nums.push(arr[i]);
//     }
//   }
//   return nums;
// };
// console.log(getEven(arr1));

//  Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число без остатка).
// const getDivisors = (num) => {
//   let arr = [];
//   for (let i = 0; i <= num; i += 1) {
//     if (num % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };
// console.log(getDivisors(46468));

//   Дан массив с числами. Выведите последовательно его элементы.
// const arr1 = [10, 1, 8, 3, 12, 4, 6];
// const arrRecurs = (arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     console.log(arr[i]);
//   }
//   return "это весь массив";
// };
// console.log(arrRecurs(arr1));

//  Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// const getDigitsSum = (digit) => {
//   let num = 0;
//   digit = String(digit);
//   for (let i = 0; i < digit.length; i += 1) {
//     num += +digit[i];
//   }
//   return num;
// };

// const getLessNime = (num) => {
//   while (num > 9) {
//     num = getDigitsSum(num);
//   }
//   return num;
// };
// console.log(getLessNime(45678));
