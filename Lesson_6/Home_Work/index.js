// 1. Преобразовать строку в массив слов
// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
// const str1 = "Каждый охотник желает знать";
// const stringToarray = (str) => {
//   return str.split(" ");
// };
// console.log(stringToarray(str1));

// 2. Удаление указанного количества символов из строки
// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
// let str1 = "Каждый охотник желает знать";
// const delete_characters = (str, length) => {
//   return str.slice(0, length);
// };
// console.log(delete_characters(str1, 5));

// 3. Вставить тире между словами строки
// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.
// let str1 = "HTML JavaScript PHP";
// const insert_dash = (str) => {
//   while (str.includes(" ")) {
//     let pos = str.indexOf(" ");
//     str = str.slice(0, pos) + "-" + str.slice(pos + 1);
//   }
//   return str;
// };
// console.log(insert_dash(str1));

// 4. Сделать первую букву строки прописной
// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
// let str1 = "string not starting with capital";
// const cursive_letter = (str) => {
//   let str2 = str.slice(0, 1);
//   str2 = str2.toUpperCase();
//   str = str2 + str.slice(1);
//   return str;
// };
// console.log(cursive_letter(str1));

// 5. Первая буква каждого слова заглавная
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
// let str1 = "каждый охотник желает знать";
// const capitalize = (str) => {
//   return str.replace(/^[а-я]|(?<=\s)[а-я]/g, (item) => item.toUpperCase());
// };
// console.log(capitalize(str1));

// 6. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку  и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
// let str1 = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
// const change_register = (str) => {
//   return str.replace(/[а-яА-Я]/g, (item) => {
//     if (item === item.toUpperCase()) {
//       return item.toLowerCase();
//     } else if (item === item.toLowerCase()) {
//       return item.toUpperCase();
//     }
//   });
// };
// console.log(change_register(str1));

// 7. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
// let str1 = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
// const remove_char = (str) => {
//   return str.match(/\w+/g);
// };
// console.log(remove_char(str1));

// 8. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.
// const zeros = (num, len, sign) => {
//   let num1 = 0;
//   if (sign === "+") {
//     num1 = "+ " + num * 10 ** len;
//   } else if (sign === "-") {
//     num1 = "- " + num / 10 ** len;
//   }
//   return num1;
// };
// console.log(zeros(5, 5, "+"));

// 9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
// const comparison = (str1, str2) => {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
//   if (str1 > str2) {
//     return `строка ${str1} больше чем строка ${str2} `;
//   } else if (str1 === str2) {
//     return `строка ${str1} равна строке ${str2} `;
//   } else {
//     return `строка ${str1} меньше чем строка ${str2} `;
//   }
// };
// console.log(comparison("AAAA", "aaaa"));

// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.
// let str1 = "www QQQ Rrr";
// const insensitive_search = (str, subStr) => str.match(subStr);
// console.log(insensitive_search(str1, /qqq/gi));

// 11. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.
// let str1 = "hEllo woRld";
// const initCap = (str) => {
//   str = str.toLowerCase();
//   str = str.replace(/^[a-z]|(?<=\s)[a-z]/g, (item) =>
//     item.toUpperCase().split("")
//   );
//   return (str = str.replace(/\s/g, ""));
// };
// console.log(initCap(str1));

// 12. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
// let str1 = "HelloWorld";
// const initSnake = (str) => {
//   str = str.split(/([A-Z][a-z]*)/g);
//   str = str.filter((item) => item != "");
//   str = str.join("_").toLowerCase();
//   return str;
// };
// console.log(initSnake(str1));

// 13. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз.
// let str1 = "qwe";
// const repeatStr = (str, n) => {
//   let str2 = "";
//   while (n > 0) {
//     str2 += str + " ";
//     n--;
//   }
//   return str2;
// };
// console.log(repeatStr(str1, 3));

// 14. Получить имя файла
// Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.
// let pathname = "/home/user/dir/file.txt";
// const path = (str) => {
//   return str.match(/(?<=\/)\w+\.\w+/g);
// };
// console.log(path(pathname));

// 15. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
// let str = "Каждый охотник желает знать";
// String.prototype.endsWith = function (str, sbStr) {
//   let str2 = String(str.match(/(\S+)$/g));
//   if (str2 === sbStr) {
//     return "подстроки равны";
//   } else {
//     return "подтроки не равны";
//   }
// };
// console.log(String.prototype.endsWith(str, "знать"));

// 16. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.
// let str1 = "Астрономия — Наука о небесных телах";
// const getSubstr = (str, char, pos) => {
//   let str2 = "";
//   if (pos === "до") {
//     for (let i = 0; i < str.indexOf(char); i++) {
//       str2 += str[i];
//     }
//     return str2;
//   } else if (pos === "после") {
//     for (let i = str.indexOf(char) + 1; i < str.length; i++) {
//       str2 += str[i];
//     }
//     return str2;
//   }
// };
// console.log(getSubstr(str1, "—", "до"));

// 17. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
// let str1 = "qwertyu";
// const insert = (str, substr, pos) => {
//   let str2 = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i === pos) {
//       str2 += substr;
//       str2 += str[i];
//     }
//     str2 += str[i];
//   }
//   return str2;
// };
// console.log(insert(str1, "!!!", 1));

// 18. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.
// let str1 = "Астрономия это наука о небесных объектах";
// const limitStr = (str, n, symb = "...") => {
//   let str2 = "";
//   let str3 = "";
//   for (let i = 0; i < n; i++) {
//     str2 += str[i];
//   }
//   str3 = str2 + symb;

//   return str3;
// };
// console.log(limitStr(str1, 20));

// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
// let str1 = "Астрономия это наука о небесных объектах";
// const count = (str, stringsearch) => {
//   return str.match(stringsearch).length;
// };
// console.log(count(str1, /к/gi));

// 20. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
// var str1 = "    Max is a good      boy     ";
// function strip(str) {
//   return str.match(/\w+/g).join(" ");
// }
// console.log(strip(str1));

// 21. Удалить лишние слова из строки
// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
// let str1 = "Сила тяжести приложена к центру масс тела";
// const cutString = (str, n) => {
//   arr1 = str.split(" ");
//   arr2 = [];
//   for (let i = 0; i < n; i++) {
//     arr2.push(arr1[i]);
//   }
//   return arr2;
// };
// console.log(cutString(str1, 3));

// 22. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
// let str1 = "abc def ghi jkl mno pqr stu";
// const findWord = (word, str) => {
//   if (str.includes(word)) {
//     return "слово существует";
//   } else {
//     return "слова не существует";
//   }
// };
// console.log(findWord("def", str1));
