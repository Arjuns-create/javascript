//primitive

//7 types: string, number,boolean,null,undefined,symbol,big int

const score=100
const scoreValue=100.3

const isloggedIn=false
const outsideTemp=null
let userEmail;

const id=symbol('123')
const anotherId=symbol('123')

console.log(id==anotherId);

const heros=["shaktiman","naagraj","doga"];

let myObj={
    name:"Arjun",
    age: 22,
}
const myFunction=function(){
    console.log("Hello world");
}


//reference(non primitive)

//Array,objects,functions

//stack (primitive),heap(non-primitive)

let myYoutubename="arjundotcom"// ye jaayega stack ke andr 
// stack me mujhe copy milega
let anotherName=myYoutubename
anotherName="chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"// ye jaayega heap ke andr because non primitive hai
}
let userTwo=userOne
// isme reference milega: means jo hum change krte hai actual data ke saath krte hai
userTwo.email="arjun@google.com"

console.log(userOne,email);
console.log(userTwo.email);