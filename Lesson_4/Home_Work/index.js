// Работа с if-else

// Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// a === 0 ? console.log("Верно") : console.log("Неверно");

// Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// a > 0 ? console.log("Верно") : console.log("Неверно");

// Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// a < 0 ? console.log("Верно") : console.log("Неверно");

// Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// a >= 0 ? console.log("Верно") : console.log("Неверно");

// Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = -3;
// a <= 0 ? console.log("Верно") : console.log("Неверно");

// Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = 0;
// a !== 0 ? console.log("Верно") : console.log("Неверно");

// Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
// let a = 3;
// a === "test" ? console.log("Верно") : console.log("Неверно");

// Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
// let a = 3;
// a === "1" ? console.log("Верно") : console.log("Неверно");

// Работа с логическими переменными

//  Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
// let test = false;

// test === true ? console.log("Верно") : console.log("Неверно");

// if (test) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

//  Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

// let test = false;

// test !== true ? console.log("Верно") : console.log("Неверно");

// if (!test) {
//   console.log("Верно");
// } else {
//   console.log("Неверно");
// }

// Работа с && (и) и || (или)

//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = 2;
// a > 0 && a < 5 ? consosle.log("Верно") : console.log("Неверно");

//  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = -3;
// a === 0 || a === 2 ? console.log(a + 7) : console.log(a / 10);

//  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// let a = 3;
// let b = 5;
// a <= 1 && b >= 3 ? console.log(a + b) : console.log(a - b);

//  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// let a = 3;
// let b = 5;
// (a > 2 && a < 11) || (b >= 6 && b <= 14)
//   ? console.log("Верно")
//   : console.log("Неверно");

//   На switch-case

//  Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// let num = 3;
// let result;

// switch (num) {
//   case 1:
//     result = "зима";
//     console.log(result);
//     break;
//   case 2:
//     result = "весна";
//     console.log(result);
//     break;
//   case 3:
//     result = "лето";
//     console.log(result);
//     break;
//   case 4:
//     result = "осень";
//     console.log(result);
//     break;
//   default:
//     console.log("введите переменную num от 1 до 4");
// }

// Общие задачи

//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// let day = -1;
// let result;

// if (day < 11 && day > 0) {
//   result = "первая декада";
//   console.log(result);
// } else if (day < 21 && day > 10) {
//   result = "вторая декада";
//   console.log(result);
// } else if (day < 31 && day > 20) {
//   result = "третья декада";
//   console.log(result);
// } else {
//   console.log("введите переменную day от 1 до 31");
// }

//  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let month = 4;
// let result;

// if ((month > 0 && month < 3) || month === 12) {
//   result = "зима";
//   console.log(result);
// } else if (month < 6 && month > 2) {
//   result = "весна";
//   console.log(result);
// } else if (month < 9 && month > 5) {
//   result = "лето";
//   console.log(result);
// } else if (month < 12 && month > 8) {
//   result = "осень";
//   console.log(result);
// } else {
//   console.log("введите переменную month от 1 до 12");
// }

//  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = "abcde";
// let result = str.match(/a/) || [];
// result[0] === "a" ? console.log("да") : console.log("нет");

//  Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = "12345";
// let result = str.match(/^\w/) || [];
// console.log(result);
// result[0] === "1" || result[0] === "2" || result[0] === "3"
//   ? console.log("да")
//   : console.log("нет");

//  Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// let str = "123";
// let result1 = str.split("");
// let result2 = +result1[0] + +result1[1] + +result1[2];
// console.log(result2);

//  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let str = "123123";
// let result1 = str.split("");
// let result2 = +result1[0] + +result1[1] + +result1[2];
// let result3 = +result1[3] + +result1[4] + +result1[5];
// result2 === result3 ? console.log("да") : console.log("нет");

// Циклы while и for

// Решите эти задачи сначала через цикл while, а затем через цикл for.

// Выведите столбец чисел от 1 до 100.
// let a = 1;
// while (a !== 101) {
//   console.log(a);
//   a++;
// }

// for (let a = 1; a <= 100; a += 1) {
//   console.log(a);
// }

// Выведите столбец чисел от 11 до 33.
// let a = 11;
// while (a !== 34) {
//   console.log(a);
//   a++;
// }

// for (let a = 11; a <= 33; a += 1) {
//   console.log(a);
// }

// Выведите столбец четных чисел в промежутке от 0 до 100.
// let a = 0;
// while (a <= 100) {
//   console.log(a);
//   a += 2;
// }

// for (let a = 0; a <= 100; a += 2) {
//   console.log(a);
// }

// С помощью цикла найдите сумму чисел от 1 до 100

// let b = 0;
// let a = 1;
// while (a <= 100) {
//   b += a;
//   a += 1;
// }
// console.log(b);

// let b = 0;
// for (let a = 1; a <= 100; a += 1) {
//   b += a;
// }
// console.log(b);

// Работа с for для массивов
//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length; i++) {
//   console.log(arr[i]);
// }

//  Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);

// Задачи общие.
//  Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 0, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 3) {
//     continue;
//   }
//   if (arr[i] > 10) {
//     continue;
//   }
//   console.log(arr[i]);
// }

//  Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

// let arr1 = [2, 5, -9, -15, 0, 4];
// let result = 0;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] < 0) {
//     continue;
//   }
//   result += arr1[i];
// }
// console.log(result);

//  Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr1 = [1, 2, 5, 9, 4, 13, 4, 10];
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
//   if (arr1[i] === 4) {
//     console.log("Есть");
//     break;
//   }
// }

//  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   if (/^1/.test(arr[i])) {
//     console.log(arr[i]);
//   }
//   if (/^2/.test(arr[i])) {
//     console.log(arr[i]);
//   }
//   if (/^5/.test(arr[i])) {
//     console.log(arr[i]);
//   }
// }

//  Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = "-";
// for (let i = 0; i < arr.length; i++) {
//   str += String(arr[i]) + "-";
// }
// console.log(str);
//  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
// let arr = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "Сб") {
//     arr[i] = "Сб".bold();
//   }
//   if (arr[i] === "Вс") {
//     arr[i] = "Вс".bold();
//   }
//   console.log(arr[i]);
// }

//  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.
// let arr = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
// let day = "Пн";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === day) {
//     arr[i] = day.italics();
//   }

//   console.log(arr[i]);
// }

//  Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n = 1000;
// let s = 0;

// while (n > 50) {
//   n = n / 2;
//   s += 1;
// }
// console.log(s);
