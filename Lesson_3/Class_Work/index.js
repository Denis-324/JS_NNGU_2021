// Преобразование типов

// const firstValue = String(5);
// console.log(typeof firstValue);

// const obj = {
//   foo: "bar",
// };

// console.log(typeof String(obj)); // String
// console.log(String(obj)); // [object Object]

//===========================================

// const testValue1 = "123";
// console.log(typeof Number(testValue1));

// const testValue2 = "123qq";
// console.log(typeof Number(testValue2));
// console.log(Number(testValue2)); //NaN

// let testValue3;
// console.log(Number(testValue3)); //NaN

// let testValue4 = null;
// console.log(Number(testValue4)); //0

// const isUser = true;
// const isAdmin = false;
// console.log(Number(isUser), Number(isAdmin)); // 1 0

// const voidString = "";
// console.log(Number(voidString)); //0

//===========================================

// const value1 = "12";
// console.log(Boolean(value1)); // true

// const value2 = "";
// console.log(Boolean(value2)); // false

// const obj1 = {};
// console.log(Boolean(obj1)); // true

//===========================================

//Математические операторы

// console.log(16 % 2); //0
// console.log(16 % 5); //1

//Унанарный плюс

// console.log(typeof +5, +5); // тип number, значение 5
// console.log(typeof +"Hello World", +"Hello World"); // тип number, значение NaN
// console.log(typeof +false, +false); // тип number, значение 0

//Бинарный плюс
// console.log(typeof (2 + 5)); // тип number, значение 7
// console.log(typeof "Hello" + " " + "World"); // тип string, значение Hello World
// console.log(typeof (1 + "000")); // тип string, значение 1000
// console.log(typeof (5 + null), 5 + null); // тип Number, значение 5
// console.log(typeof (1 + true), 1 + true); // тип Number, значение 2
// console.log(typeof (1 + "qwe"), 1 + "qwe"); // тип string, значение 1qwe
// console.log(typeof ("qwe" + 1), "qwe" + 1); // тип string, значение qwe1

//===========================================

// const firstName = "Alex";
// const lastName = "Shirokov";
// console.log(firstName + " " + lastName);
// console.log(`${firstName} ${lastName}`);

//===========================================

//Операторы сравнения

// console.log(5 == 5);
// console.log(5 != 5);
// console.log(false == 0); //true

// const firstString = "яблоко";
// const secondString = "Яблоко";
// console.log(firstString == secondString); //false
// console.log(firstString > secondString); //true

// let a = 0;
// console.log(Boolean(a)); // false
// let b = "0";
// console.log(Boolean(b)); // true
// console.log(a == b); // true
