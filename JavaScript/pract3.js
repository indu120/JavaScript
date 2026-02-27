// count of oveles

let a = "javascript";
var count=0;
for (let index = 0; index < a.length; index++) {
    if (a[index]== "a"||a[index]=="e"||a[index]=="i"||a[index]=="o"||a[index]=="u") {
        count++
    }
    console.log(count);
}
// replace
let b="i like cats";
console.log(b.replace("cats","dogs"));

// convert a sen to array
let c = "lets learn js";
console.log(c.split(" ").join(","));


// check if sting start with specific word
let d= "hello word";
console.log(d.startsWith("hello"));

//palindrome
let e = "madam";
let f = e.split().reverse();
console.log(f);
console.log(e==f);

//capitalize
let g="hello word";
let h=g.replace("h","H");
let i = h.replace("w","W");
console.log(i);

// find the longest word in sentence
let sentence = "hello i'm a programmer";
let words = sentence.split(" ");
let longest = "";
for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}
console.log("Longest word:", longest);

let a1=[1,2,[32,42,[34,5,63,[56]]]];
console.log(a1.flat(3));

let l= Math.random()*100;
console.log(Math.floor(l));

let m="25";
let n =Number(m);
console.log(typeof(n));

let o="Ravi Shastry";
console.log(o.length); 
let count1=0;
for (i = 0;i < o.length;i++) {
    if (o[i]=="a") {
        count1++
    }
}
console.log(count1);

let p= "Ravi Shastry";
let q=p.split(" ");
let count2=0;
console.log(q);

for (let i = 0; i < q.length; i++) {
    count2++
}
console.log(count2);

// let r=p.split("").reverse().join(" ");
// console.log(r);

let r=["ravi","shastry"];
r[0]=(r[0].split("").reverse().join(""));
r[1]=(r[1].split("").reverse().join(""));
let s=toString(r);
console.log(r, typeof(s));