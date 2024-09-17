"use strict"
const first_symbol= Symbol("key1")
const first_object={
    name: "usman",
    "last_name" : "irshad",
    age : 18 ,
    email :"usmanirshad81@",
    [first_symbol] :"ali",


}
// first_object.email = "thisismyemail@"
// console.log(first_object[]);

// console.log(typeof first_object[first_symbol]);
// console.log(first_object);
// Object.freeze(first_object);
// first_object.email="udkljfjb@"
// console.log(first_object)
first_object.greeting = function(){
console.log("hello this is usman");

}
console.log(first_object.greeting());
first_object.greetingtwo= function(){
    console.log(`hello this is ${this.name} father_name is ${this.last_name}`);
    
}
console.log(first_object.greetingtwo());



