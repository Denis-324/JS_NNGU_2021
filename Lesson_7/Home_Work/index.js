//1 Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
// const vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// const getArrLenght = (arr) => arr.map((item) => item.length);
// console.log(getArrLenght(vegetables)); // 7,4,7,8

//2 Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
// const numbers = [2, 3, 5, 7, 11, 13, 17];
// const currentSums = (arr) => {
//   let arr1 = [];
//   let sum = 0;
//   arr.reduce((_, item) => {
//     sum += item;
//     arr1.push(sum);
//   }, 0);
//   return arr1;
// };
// console.log(currentSums(numbers));

// 3 Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.
// const arr1 = [0, 1, 2, 3, 4, 5, 6, 7];
// const sumSeven = (arr) => {
//   let i = 0;
//   let j = arr.length / 2;
//   let arr2 = [];
//   let arr3 = [];
//   while (i < arr.length / 2) {
//     arr2.push(arr[i]);
//     i++;
//   }
//   arr2.push(0, 0);
//   while (j < arr.length) {
//     arr3.push(arr[j]);
//     j++;
//   }
//   console.log(arr2);
//   console.log(arr3);
//   return [...arr2, ...arr3]
//     .map((item, i, ar) => `(${ar.pop()}:${ar.shift()})`)
//     .filter((item) => item);
// };
// console.log(sumSeven(arr1));

// 4 Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из первых букв слов строки str.
// let str1 = "Каждый охотник желает знать, где сидит фазан.";
// const foo = (str) => {
//   return str1.match(/^[А-Яа-я]|(?<=\s)[А-Яа-я]/gi);
// };

// console.log(foo(str1)); // [К,о,ж,з,г,с,ф]

//5 Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.
// let str = "JavaScript";

// const foo = (str) => {
//   const result = [];
//   for (let i = 0; i < str.length; i++) {
//     result.push(str.substring(i - 1, i + 2));
//   }
//   return result;
// };

// console.log(foo(str)); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

//6 Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.
// let numerics = [5, 7, 2, 9, 3, 1, 8];
// const foo = (arr) => {
//   return arr.sort((a, b) => b - a);
// };

// console.log(foo(numerics)); // [9,8,7,5,3,2,1]

//7 Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let c = [7, 8, 9];
// function getArr(a, b, c) {
//   return [...a, ...b, ...c]
//     .sort((a, b) => b - a)
//     .join(" ")
//     .split();
// }

// console.log(getArr(a, b, c)); // [9 8 7 6 5 4 3 2 1]

//8 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.
// let arr1 = [[1, 2, 3], [4, 5], [6]];
// const getArr = (arr) =>
//   arr
//     .join()
//     .split(",")
//     .reduce((acum, item) => +acum + +item);
// console.log(getArr(arr1));

//9 Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
// let arr1 = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// const getArr = (arr) =>
//   arr
//     .join()
//     .split(",")
//     .reduce((acum, item) => +acum + +item);
// console.log(getArr(arr1));

//10 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// let arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const getArr = (arr) => {
//   return arr.sort((a, b) => a - b);
// };
// console.log(getArr(arr1));

//11 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// let arr1 = [3, 4, 2, 5, 6, 7, 9];
// const currentSums = (arr) => {
//   let arr1 = [];
//   let sum = 0;
//   arr.reduce((_, item) => {
//     sum += item;
//     arr1.push(sum);
//   }, 0);
//   return arr1;
// };

// const getSumEl = (arr) => {
//   let arr2 = currentSums(arr);
//   let i = 0;
//   while (arr2[i] <= 10) {
//     i++;
//   }
//   return i + 1;
// };
// console.log(getSumEl(arr1));

//12 Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
// const arrayFill = (item, count) => {
//   let i = 0;
//   let arr = [];
//   while (i < count) {
//     arr.push(item);
//     i++;
//   }
//   return arr;
// };

// console.log(arrayFill("x", 5));
