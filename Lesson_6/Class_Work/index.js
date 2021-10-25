//Объекты
// const obj = {};
// obj.true = 1;
// console.log(obj);

// const myFavoriteFilm = {
//   title: "Пампам",
//   date: "20.10.2020",
//   director: "Дубровский",
//   country: "Россия",
// };

// myFavoriteFilm["cash"] = 200000;

// const getTitle = function () {
//   console.log(myFavoriteFilm.title);
// };

// myFavoriteFilm["getTitle"] = getTitle;

// delete myFavoriteFilm.date;

// console.log(myFavoriteFilm);

//==============================

// console.log(parseInt("200px"));
// console.log(parseFloat("0.2px"));
// console.log(isNaN(NaN));
// console.log(isNaN("sads"));
// console.log(isFinite("15"));
// let num = 255;
// console.log(num.toString()); // "255"
// console.log(num.toString(16)); // ff
// console.log(num.toString(2)); // 11111111
// let num2 = 12.2;
// console.log(Math.round(12.2));
// console.log(Math.floor(12.2));
// console.log(Math.ceil(12.2));
// console.log(num2.toFixed(3));
// console.log(Math.random());
// console.log(Math.max(1, 2, 3));
// console.log(Math.min(1, 2, 3));
// let num3 = 0.1 + 0.2;
// console.log(num3);
// console.log(+num3.toFixed(2));

//строки
// let str = "    asdasd      ";
// console.log(str.trim());

// let str2 = "Widget with id";
// console.log(str2.indexOf("id", 2)); // 12

// console("Widget with id".includes("Widget")); // true
// console("Widget with id".includes("ololo")); // false

// let str3 = "stringify";

// console.log(str3.slice(0, 5)); //strin
// console.log(str3.substr(0, 5)); //strin
// console.log(str3.substring(0, 5)); //strin

// Реализовать функцию которая будет определять, в каком регистре записан n элемент переданной строки, если в верхнем то вернуть true, в противном случае вернуть false.

// let str1 = "SdfrRvJ";
// const isUpper = (str, i) => {

//   if (str[i] === str[i].toUpperCase()) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isUpper(str1, 1));

// Реализовать функцию которая заменяет в строке str, все вхождения подстроки find, на подстроку replace.
// let str1 = "qwert find 123find";
// const getStrRepplace = (str, find, replace) => {
//   let str2 = str.replace(find, replace);
//   return str2;
// };
// console.log(getStrRepplace(str1, /find/g, "replace"));

// const getRandomNam = (min, max) => {
//   let num = Math.floor(Math.random() * (max - min)) + min;
//   return num;
// };
// console.log(getRandomNam(1, 9));
