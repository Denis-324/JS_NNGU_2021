// window
// global
// globalThis

// let myDivs = document.querySelectorAll(".my_div");
// console.log(myDivs);

// let myId = document.getElementById("my_id");

// console.log(myId);

// myId.style.background = "red";

// let myDiv2 = document.querySelector(".my_div2");

// myDiv2.innerHTML += " $$$";

// let newDiv = document.createElement("div");
// newDiv.className = "my_div";

// newDiv.innerHTML = "это мой див";

let header = document.createElement("header");
let headerTitle = document.createElement("h1");
headerTitle.classList.add("header_title");

document.body.prepend(header);
header.append(headerTitle);
headerTitle.textContent = "Заголовок";

header.style.height = "100px";
header.style.background = "green";

let container = document.createElement("div");
let item = document.createElement("ul");
// let itemList = document.createElement("li");
// itemList.classList.add("item_list");
// let span = document.createElement("span");

document.body.append(container);
container.append(item);

// item.append(itemList);

// itemList.append(span);

// span.textContent = "текст";

let input = document.createElement("input");
container.append(input);

let button = document.createElement("button");
button.textContent = "кнопка";
container.append(button);

for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.className = "list";
  li.innerHTML = `text ${i}`;
  item.append(li);
}

button.onclick = function () {
  let inputValue = input.value;

  let li2 = document.createElement("li");

  item.append(li2);

  li2.append(inputValue);

  input.value = "";
};
