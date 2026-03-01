let a = "ravishastry";

let firstHalf = a.slice(0, Math.floor(a.length / 2));
let secondHalf = a.slice(Math.floor(a.length / 2));

console.log(firstHalf);
console.log(secondHalf);

let b ="Bagalore"
let rfb=firstHalf.concat(b);
console.log(rfb);

let rsb=rfb.concat(secondHalf);
console.log(rsb);

let c= "DheeCodingLab";
let d=rsb.slice(0,Math.floor(rsb.length/2));
let e=rsb.slice(Math.floor(rsb.length/2));

let f=d.concat(c);
let g=f.concat(e);
let h=(g.repeat(5));
(console.log(h));

let i= h.slice(0,Math.floor(h.length/2));
let j= h.slice(Math.floor(h.length/2));

let a1=a.toUpperCase();
let full = i.concat(a1);
let full2=full.concat(j);
console.log(full2);