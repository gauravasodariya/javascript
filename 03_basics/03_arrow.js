const user={
    username : "Raj",
    price : 2999,
    //This keyword refers to an object that is executing the current piece of code
    welcomeMessage : function()
    {
        console.log(`${this.username}, welocme to website`);
        console.log(this.username);
        
    }
}
//user.welcomeMessage()
// user.username="sam" //change the value of username
// user.welcomeMessage()
//console.log(this);


// const chai=function()
// {
//     let username="Raj"
//     console.log(this.username);
// }
// chai()

//arrow function
// const chai = () =>
// {
//     let username="Raj"
//     console.log(this.username);
// }
// chai()

// const addTwo=(num1,num2)=>
// {
//      return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2

//if we use parenthesis no use of return keyword and if we use curlybracket then use return keyword
// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(4,6))


const addTwo = (num1,num2) => ({username : "Raj"})
console.log(addTwo());

