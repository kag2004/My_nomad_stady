const title = document.querySelector("#title");
title.innerHTML = "test 00 11";

title.style.color = "blue";
console.log("color");

document.title = "int string";
console.log(title);
console.log(document.title);
// document.title = "My Room OK ??";