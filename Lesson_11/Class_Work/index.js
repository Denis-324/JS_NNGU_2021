// try {
//   console.log(value);
// } catch (e) {
//   console.log("ошибка");
// }

// try {
//   setTimeout(() => {
//     try {
//       console.log(value);
//     } catch (e) {
//       console.log("ошибка2");
//     }
//   }, 3000);
// } catch (e) {
//   console.log("ошибка");
// }

// const a = 10;
// try {
//   try {
//     console.log(a);
//     //  if (a === 10) {
//     //    throw new SyntaxError("ошибка 1");
//     //  }
//   } catch (e) {
//     if (e.name === "Error") {
//       console.log(e.name, e.message);
//     } else {
//       throw new Error("ошибка 2");
//     }
//   }
// } catch (e) {
//   console.log(e.message);
// }
// const baseUrl = "https://reqres.in/api";
// const getResponseData = (data) => {
//   console.log(data, "Done");
//   const element = document.createElement("div");
//   element.innerHTML = `пользователь с id=${data.id}, создан в ${data.createdAt}`;
//   document.body.appendChild(element);
// };
// const getRequest = (page, cb) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", `${baseUrl}/users?page=${page}`);

//   xhr.send();

//   xhr.responseType = "json";

//   xhr.onload = function () {
//     cb(xhr.response.data);
//   };
// };
// getRequest(1, getResponseData);

// const postRequest = (body, cb) => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("POST", `${baseUrl}/users`);

//   xhr.send(JSON.stringify(body));

//   xhr.responseType = "json";

//   xhr.onload = function () {
//     cb(xhr.response);
//   };
// };
// postRequest({ name: "Neo", job: "Man" }, getResponseData);

// const getRequest = async (page) => {
//   try {
//     const res = await fetch(`${baseUrl}/users?page=${page}`);
//     const data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }
// };
// getRequest(1);

// const postRequest = async (body) => {
//   const res = await fetch(`${baseUrl}/users`, {
//     method: "POST",
//     body: JSON.stringify(body),
//   });
//   const data = await res.json();
//   getResponseData(data);
// };
// postRequest({ name: "Neo", job: "Man" });
