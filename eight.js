let num =[1,2,3,4,5,"ravi","hello","hi",6,7,"shastry",8,9,10]
console.log(num.reverse());

num[3]=num[3].split("").reverse().join("").toUpperCase();
num[8]=num[8].split("").reverse().join("").toUpperCase();
console.log(num);

let a= "hello";
console.log( a.split("").reverse().join(" "));

let b="banana";
console.log( b.search(a));