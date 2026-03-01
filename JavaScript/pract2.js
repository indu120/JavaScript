let n1 = "Indu";
console.log(n1.length);

console.log(n1.charAt(3));
console.log(n1.toUpperCase());
console.log(n1.toLowerCase());

let n2= "          aaaaaaaaaaaa        "
console.log(n2.trim());
console.log(n2.trimEnd());
console.log(n2.trimStart());

let n3 = "hello my name is indulekha i'm from davangere";
console.log(n3.includes("my"));
console.log(n3.indexOf("m"));

console.log("hello i'm good ".replace("hello","hi"));


// boolean

// let age = 22;
// if (age > 18) {
// }
let A="hello";
let sp = A.split("").reverse();
console.log(sp);
console.log(A.split("").join());
console.log(A.split("").reverse().join(""))

10==5


// array

let arr = [1,22,13,4,5];
console.log(arr.length);
let b=arr.toString();
console.log(typeof(b));

let c=arr.join("-");
console.log(c,typeof(c));

arr.pop();
console.log(arr);

arr.push(6);
console.log(arr);

let r = arr.shift();
console.log(r,arr);

let s = arr.unshift(55);
console.log(s,arr);

let z=arr.reduce((a,b)=>{
    return a+b;
})
console.log(z);

let q=arr.slice(0,2);
console.log(q);