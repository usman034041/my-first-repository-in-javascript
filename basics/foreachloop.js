"use strict"
// const arr=[1,2,3,4,5,6,7,8,9]
// arr.forEach(function (items){
// console.log(items);

// })
// const arr=[1,2,3,4,5,6,7,8,9]
// arr.forEach((items)=>{
    
// console.log(items);

// })
// const arr=[1,2,3,4,5,6,7,8,9]
// function myfun(abc){
//     console.log(abc);
// }



// arr.forEach(myfun)
// const arr=[1,2,3,4,5,6,7,8,9]
// arr.forEach((items , index , arra) => {
//     console.log(items , index , arra);
    
// });
const arr=[
    {
        name : 'usman' ,
        lastname : 'irshad' ,
    }
    ,
    {
        name : 'umar' ,
        lastname : 'khalil' ,
    }
    ,
    {
        name : 'ali' ,
        lastname : 'arshaad' ,
    }
]
// const anew=[{}]
// arr.forEach( (items) => {
//     // console.log(items);
//     console.log(items.name , items.lastname);
    
    
// });
const afterreturn = arr.filter( (items) => items.name == "usman");
    // console.log(items);
    
       
    
    // return console.log(items.name , items.lastname);
    

// console.log(afterreturn);
// +++++++++++++++++++++++++++++++++++++++++++++++ HOW TO USE REDUCE Function  ++++++++++++++++++++++++++++++++++++++++++++
const usereducefunction=[{
itemname : "social science" ,
    price : 200
},
{
itemname : "social criminology" ,
    price : 2000
},
{
itemname : "enviromental science " ,
    price : 300000
},

]
const total=usereducefunction.reduce((acc , items)=> acc + items.price , 0)
console.log(total);
