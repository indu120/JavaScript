// let a=true;
// console.log(a);

// let a1=Boolean(true);
// console.log(a1);

// let a2=Boolean(!true);
// console.log(a2);

// let a3=Boolean(100);
// console.log(a3);

// let a4=Boolean(1);
// console.log(a4);

// let a5=Boolean("");
// console.log(a5);

// let a6=Boolean(-100);
// console.log(a6);

// let a7=Boolean("Impu");
// console.log(a7);

// let a8=Boolean(null);
// console.log(null);

// let a9=Boolean(undefined);
// console.log(a9);

// let a10=Boolean(Number("100"));
// console.log(a10);

// let a11=Number(Boolean(Number("Sinch")));
// console.log(a11);

// let a12=String(Number(Boolean(Number("sinch"))));
// console.log(a12);

// let a13=String(Number(Boolean(Number("100"))));
// console.log(a13);

// let a14=Boolean(99);
// console.log(a14);

// let a15=Boolean("gB");
// console.log(a15);

// string methods
//length
let a="impanasinchana  sameeksha";
console.log(a.length);

let a1="impanasinchana  sameeksha";
console.log(a1.length/2);

//charAt
let a2="Sameeksha";
console.log(a2.charAt(0));

//cocat
let a3="Impana"
let x="GB"
let y="sinchana GB"
console.log(a3.concat(x).concat(" ").concat("Elder sister of").concat(" ").concat(y))

//endswith  op will true/false
let a4="Manjula";
console.log(a4.endsWith("a"))
console.log(a4.endsWith("M"))
console.log(a4.endsWith("ula"))

//includes (it maintain seq) op true/false
let a5="Buddadeva GJ"
console.log(a5.includes("B"))
console.log(a5.includes("uB"))
 
//index of (oup give pos of str)
let a6="Impana"
console.log(a6.indexOf("a"))
console.log(a6.lastIndexOf("a"))

//padend oup will end with what we given string
let a7="7760"
console.log(a7.padEnd(10,"X"))

let a8="Imp"
console.log(a8.padEnd(6,"X"))

//padstart
let a9="4919"
console.log(a9.padStart(10,"X"))

let a10="Sammu"
console.log(a10.padStart(10,"0"))

//repeat
let a11="GB"
console.log(a11.repeat("5"))

//split
let a12="Sinch"
console.log(a12.split("").reverse())
console.log(a12.split("").join(""))
console.log(a12.split("").reverse().join(""))
console.log(a12.split(""))