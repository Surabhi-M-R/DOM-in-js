//<<<<selector>>>>>[]
console.log(window);
let content=document.getElementById("heading");
console.log(content);
console.dir(content);
let content2=document.getElementsByClassName("content");
console.log(content2);
console.log(content2);
let paras=document.getElementsByTagName("p");
console.log(paras);

// <<<<<<<query Selector>>>>>>>>
let elements=document.querySelector("p");//returns only the first element
console.log(elements);
//<<<<<properties>>>>>
let firstEl=document.getElementsByTagName("p");
console.dir(firstEl);

let div=document.querySelector("div");
console.dir(div);
console.log(div.innerText);
console.log(div.innerHTML);

