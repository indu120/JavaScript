let arr = ["adv","qwe","tyu","cvb"]
let arr1= [1,23,4,5,6,7,7,8]
let arr2= arr.concat(arr1);
console.log(arr2);

let arr3=[1,3,4,5,[45,54],7,[46],3.83]
console.log(arr3.flat());
let arr4=[1,[3,[4,[5,[45,[54],7],[46],3],83]]]
console.log(arr4.flat(Infinity));

console.log(arr.includes("tyu"));
console.log(arr.includes("vfd"));

console.log(arr.indexOf("qwe"));
console.log(arr.indexOf("vfd"));

let x="asdf cvbn ausk ad sod";
let y=(x.split(" "))
console.log(y);
let x1="asdf cvbn ausk ad sod";
let y1=(x1.split(""));
console.log(y1);
console.log(y1.join("-"));

console.log(arr.lastIndexOf("tyu"));

console.log(arr.length);
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr);

console.log(arr1.push("as1"));
console.log(arr1);

console.log(arr1.reverse());

console.log(arr1.shift());
console.log(arr1.shift());
console.log(arr1.shift());
console.log(arr1.shift());
console.log(arr1.shift());
console.log(arr1);

console.log(arr.unshift("hoo"));
console.log(arr.unshift("hoo1"));
console.log(arr.unshift("hoo2"));
console.log(arr);

// let arr1= [1,23,4,5,6,7,7,8]
console.log(arr1.slice(0,5).reverse());

let arr5= ["adf","ert","iofr","vgg","fkf","ffe"];
console.log(arr5.splice(1,3));
console.log(arr5);
