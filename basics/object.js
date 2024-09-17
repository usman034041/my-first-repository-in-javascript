"use strict"
const first_symbol=Symbol("key1")
const first_object={
    name: "usman",
    "last_name" : "irshad",
    age : 18 ,
    email :"usmanirshad81@",
    [first_symbol] :"ali",


}
console.log(first_object[first_object]);

