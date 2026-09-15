let obj={
  item:"pen",
  price:8,
}
  let output=`the item of ${obj.item} price is ${obj.price}`;
console.log(output);



let num=`total of ${1+2+5}`;
console.log(num);



let str="   javascript   ";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());

let sen="gud mrng"

console.log(sen.slice(2));

let s1="myself";
let s2="roshan";

let w3=s1.concat(s2); //or
let w4=s1+s2;
console.log(w4  ,w3);

let h1='hi'; //replace i-->ello

console.log(h1.replace("i","ello"));

console.log(h1.charAt(1));


let FullName=prompt("Enter your name");

let name="@"+FullName+FullName.length;
console.log(name);