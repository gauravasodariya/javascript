//var can be redeclared and reassigned, let cannot be redeclared but can be reassigned and const cannot be redeclared and cannot be reassigned

// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);

//{} : scope

// if(true)
// {
//     let a=10
//     const b=20
//     var c=30
// }
// //Error
// console.log(a);
// console.log(b);
// console.log(c); //No Error, due to var keyword and it has global scope and const and let has local or block scope


//nested scope
// function one()
// {
//     const username="Raj"
//     function two()
//     {
//         const website="youtube"
//         console.log(username);
//     }
//    // console.log(website);
//     two()
// }
// one()

// if(true)
// {
//     const username="Raj"
//     if(username=="Raj")
//     {
//         const website=" youtube"
//         console.log(username+website);
//     }
//    // console.log(website); Error
// }
//console.log(username); Error


//addOne(5) before function initialization ,No Error
function addOne(num)
{
    return num+1
}
addOne(5)

//addTwo(5)  Give Error,due to before function initialization, we store returned value in addTwo variable
const addTwo=function(num)
{
    return num+2
}
//addTwo(5)
