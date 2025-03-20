//<<<<selector>>>>>[]
// console.log(window);
// let content=document.getElementById("heading");
// console.log(content);
// console.dir(content);
// let content2=document.getElementsByClassName("content");
// console.log(content2);
// console.log(content2);
// let paras=document.getElementsByTagName("p");
// console.log(paras);

// <<<<<<<query Selector>>>>>>>>
// let elements=document.querySelector("p");//returns only the first element
// console.log(elements);
//<<<<<properties>>>>>
// let firstEl=document.getElementsByTagName("p");
// console.dir(firstEl);

// let div=document.querySelector("div");
// console.dir(div);
// console.log(div.innerText);
// console.log(div.innerHTML);

// question 1
let h2=document.querySelector("h2");
h2.innerText=h2.innerText+" from surabhi M R";
console.log(h2.innerText);

// question 2
let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);

console.log(divs[0].innerText="new value for div 1");
console.log(divs[1].innerText="new value for div 2");
console.log(divs[2].innerText="new value for div 3");


