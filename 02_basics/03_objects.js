//1. singleton : Objects.create
//2. object literals
const mySym=Symbol("key1")

const jsUser=
{
    name: "Raj",
    "full name" : "ravi patel",
    [mySym] : "mykey1",
    age : 18,
    location : "Amreli",
    email : "ravi@gmail.com",
    isloggedIn : false,
    lastLogin :['monday','saturday']
}
// console.log(jsUser.email)
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

//console.log(jsUser[mySym]);

// jsUser.email="ravi123@gmail.com"
// Object.freeze(jsUser) //It is used to don't change the value of objects
// jsUser.email="ravi456@gmail.com"
// console.log(jsUser);

// jsUser.greeting=function(){
//     console.log("Hello JS user");
// }

// jsUser.greetingTwo=function(){
//     console.log(`Hello JS user,${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//singleton object :
//const new_obj=new Object()
// //non singleton onject :
// const new_obj={}
// new_obj.id="123abc"
// new_obj.name="Raj"
// console.log(new_obj);

const regularUser={
    email : "some@gmail.com",
    fullname:{
        userfullName :{
            firstname : "Raj",
            lastname : "patel"
        }
    }
}
//console.log(regularUser.fullname.userfullName.lastname);

const obj1={
    1 : "a",
    2 : "b"
}
const obj2={
    3 : "c",
    4 : "d"
}
//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2) //combine value of both objects
// const obj3={...obj1,...obj2} //give same output as above,using spread operator
// console.log(obj3);

//array of objects
const users=[
    {
        id : 1,
        email : "hy@gmail.com"
    },
    {
        id : 1,
        email : "hyy@gmail.com"
    },
    {
        id : 1,
        email : "hyyy@gmail.com"
    }
]
//console.log(users[0].email)

// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));
console.log(Object.entries(jsUser)); //give array of key and corresponding values of each entry

console.log(jsUser.hasOwnProperty('name1'));


