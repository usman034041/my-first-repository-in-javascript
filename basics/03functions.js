// "user strict"
// const first_object={
//     username : "usman",
//     price : 300
// }
// const firstarray=[200,300,400,500,600]
// function getvalues(got){
// return `name is ${got[1]} and price is ${got[4]}`
// }
// console.log(getvalues(firstarray));
// function one(...a){
//     if(a[1]<a[0]){
// return `${a[1]} ${a[2]} ${a[3]}`;

//     }
//     else {
//   return `${a[1]}is `

//     }
    
// }
// console.log(one(2000,300,400,500));

/* arrow function use no key word function and no return word if we use curley braces in function body then 
we use return key word and in this example i used curley braces because i used a object and in arrow function
 its body always come in in paranthesis
*/
// const firstarrowfunction=()=>({usrname:"usman"})
// console.log(firstarrowfunction());
// immedietly invoked function expression (IIEF)
/*this is function we use to remove the global varible pollution and operte the function immedietly its whole 
body is covered into paranthesis and at the time of function exection we use just paranthesis 
*/ 
(
  function iief(us){
    console.log(`this is the database ${us}`);
    
  }
)('usman');
((us)=>{
  console.log(`this is the database ${us}`);
})

('usman');