// date methids
let date = new Date();
console.log(date);
console.log(date.getDate(),"today dqate is");
console.log(date.getDay(),"day start from1");
console.log(date.getMonth(),"month starts from 0");
console.log(date.getFullYear());
console.log(date.getHours(),"hrs");
console.log(date.getMinutes(),"minitues");
console.log(date.getSeconds(),"seconds");
console.log(date.getMilliseconds(),"miliseconds");
console.log(date.toDateString(),"exact date");


// operators

let a="100";
let b=200;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**2);

let c=true;
let d=true;
console.log(c+d);
console.log(c-d);
console.log(c*d);
console.log(c/d);
console.log(c%d);
console.log(c**2);

// increment
let z=100;
console.log(z++);
console.log(z);
console.log(++z);
console.log(z);

// Assignment 
let y=10;
let x=5;
console.log(x+=y);
console.log(x-=y);
console.log(x*=y);
console.log(x/=y);
console.log(x%=y);
console.log(x**y);

// comparision
let p=100;
let q=200;

console.log(p<q);
console.log(p>q);
console.log(p<=q);
console.log(p>=q);
console.log(p!=q);
console.log(p==q);


const m=[1,2,3,4]
m.map((value)=>{
    console.log(value);
})

