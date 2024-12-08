//primitive
// 7 types :Number,Boolean,null,undefined,Symbol,BigInt

//Reference (Non primitive)
//String,Array,Object,Function

const score=20.5
console.log(typeof score)
let userEmail
console.log(userEmail)
const id=Symbol("123") //Symbols are immutable, and unique.that return different datatype
const anotherId=Symbol("123")
console.log(id == anotherId);

// const BigNumber = 9999999999999999n
// console.log(typeof BigNumber);

//Array , Object , Function
const arr=['a','b','c','d']

let myObj={
    name:"ravi",
    age:20,
    city:"surat"
}

const myFunction=function()
{
    console.log("Hello World");
}
// console.log(typeof myFunction);
// console.log(typeof id);
// console.log(typeof null);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// ------------------------------Memory--------------------------
//stack(Primitive), Heap(Non-Primitive) that means primitive datatype use stack memory and non-primitive datatype use heap memory
let myYoutube="hello" 
let anotherName=myYoutube
anotherName="chaiaurcode"
console.log(anotherName);

let user={
    email:"user@gmail.com",
    UPI:"user@oksbi"
}
let usertwo=user
usertwo.email="usertwo@gmail.com"
console.log(usertwo.email);
console.log(user.email);




