// Disponible depuis ES2015

var a, b;

[a, b] = [10, 20];

console.log(a); // 10
console.log(b); // 20

const [first, second, ...rest] = [10, 20, 30, 40, 50];

console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]

// can be used in object also
var { key1, key2 } = { key1: "first", key2: "second" };
console.log(key1); // first
console.log(key2); // second