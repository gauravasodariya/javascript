// function sayName()
// {
//     console.log("H");
//     console.log("E");
//     console.log("L");
//     console.log("L");
//     console.log("O");
// }
// sayName()

// function sum(num1,num2) //parameter
// {
//     console.log(num1+num2) //arguments
// }
// sum(5,3)  

// function loginUser(username)
// {
//     if(username == undefined) //if(!username)
//     {
//         console.log("please enter a username");
//         return
        
//     }
//     return `${username} hust logged in`
// }
// console.log(loginUser("Raj"))

// function calculateCartPrice(...num1)
// {
//     return num1
// }
// console.log(calculateCartPrice(200,300,400))

function calculateCartPrice(val1,val2,...num1)
{
    return num1
}
console.log(calculateCartPrice(200,300,400,500))

//pass object in the function
const user={
    username : "Raj",
    price : 199
}
function handleObject(anyobject)
{
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username : "Raj",
    price : 199
})

//pass array to function
const myNewArray=[1,2,3,4,5]
function secondValue(getArray)
{
    return getArray[1]
}
console.log(secondValue(myNewArray))