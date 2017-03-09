// disponible depuis ES2015

// iterate "array-like" keys & shallow copy

let arry = [1, 2, 3];

let arry2 = [...arry];

arry[0] = 2;

console.log(arry);

console.log(arry2);

// shortcut pour NodeList to Array

let nodeList = document.querySelectorAll("div");

console.log(nodeList.map); // undefined

let divs = [...nodeList];

console.log(divs.map) // function() {}; -- exists, it's now an array!