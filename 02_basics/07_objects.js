/* Object in Js = part 1 */

//singleton => an object that can have only one instance
//boject.create

//symbol
const mysym = Symbol("Key1");

//object literal syntax
const JsUser = {
    name:"Priyanka",
    "full name " :"Priyanka Suyal", //cannot access with .operator because of space
    age:18,
    // mysym :"myvalue", // this is treated as string key "mysym" so we need []
    [mysym] :"myvalue", // Symbol(Key1): 'myvalue'
    location :"uttrakhand",
    email:"priyanka@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}
//we can define our keys and values too in objects

//accesssing the values
console.log(JsUser.email);
console.log(JsUser["email"]); //if email is a variable

console.log(JsUser["full name "]); //accessing key with space
 //only way to access key with space
console.log(JsUser[mysym]); //accessing symbol key as the only option otherwise it is not accessible
console.log(JsUser.mysym); //undefined because it is treated as string key


//updating the values
JsUser.email = "PRIYANKA@chatgpt.COM";
//Object.freeze(JsUser) //freezes the object so that no changes can be made to it
//JsUser.email = "Suyal" // will not change because object is frozen
JsUser.email = "PRIYANKA@gemini.COM"; // will not change because object is frozen
console.log(JsUser);

//functions in js can be treated as variables there will be no change
JsUser.greeting = function(){
    console.log("hello Js user");

}
// console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting()); //error because object is frozen so we will not be able to add new property so lets remove it
//hello js user


JsUser.greetingTwo = function(){
    console.log(`hello Js user:${this.name}`);

}

console.log(JsUser.greetingTwo());
//hello Js user:Priyanka