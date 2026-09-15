//array is coolection of items


items=["item1","items2","item3","item4"]

for(ind=0;ind<=items.length;ind++){
 console.log(items[ind]);
}


for(let item of items){
  console.log(item);
}
 


cities=["bangalore","kochi","mangalore","mumbai","chennai"]
for(let city of cities){
  console.log(city);
}

let marks=[23,45,67,67,67]
let sum=0;
for(let val of marks){
  sum=sum+val;
}
let avg=sum/marks.length
console.log(avg);