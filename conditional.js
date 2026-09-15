//if statements

// age=20;
// if(age>18){
//   console.log("you can get license");
// }

// age=17;
// if(age<18){
//   console.log("you can't get license");
// } 


// let mode="dark";
// let color;

// if(mode==="dark"){
//   color="white"
// }
// if(mode==="black"){
//   color="blue";
// }
// console.log(color);

// let num=15;

// if(num%2===0){
//   console.log('even',num);
// }else{
// console.log('odd',num);
// }
 //else-if

//  let mode="gold";
//  let color;

//  if(mode==="dark"){
//   color="white";
//  }else if(mode==="gold"){
//      color="yellow";
//  }else if(mode==="pink"){
//     color="red";
//  }else{
//   color="none";
//  }
// console.log(color);


// if(mode==="gold");{

// console.log(mode);
// }

//ternary 

// let age=17;

// let final=age>=18?"adult":"not adult";

// console.log(final);

// let num=prompt("enter a number");

// if(num%8==0){
//   console.log(num,"multiple of 8");
// }else{
//     console.log(num,"not multiple of 8");
// }

var grade=prompt("enter a mark");

if(grade>=80 && grade<=100){
  grade="A";
}else if(grade>=70 && grade<=89){
  grade="B";
}else if(grade>=60 && grade<=69){
    grade="C";
}else if(grade>=60 && grade<=69){
  grade="D";
    
}else if(grade>=0 && grade<=49){
  grade="F"
}else{
  grade="no grade";
}
console.log(grade)
