const coding=['js','ruby','java','cpp','python']

// const val = coding.forEach( (item) =>  //foreach loop does not return any value :undefined
// {
//     console.log(item);   
// })
// console.log(val);


//  const myNum=[1,2,3,4,5,6,7,8,9,10]
// // // let newNum = myNum.filter( (num) => num > 4)
// // console.log(newNum);

// let newNum = myNum.filter( (num) => {
//     return num > 4
// })
// //console.log(newNum);

// const newNum=[] 
// myNum.forEach( (num) => {
//     if(num>4)
//     {
//         newNum.push(num)
//     }
// })
// console.log(newNum); 


// const books=[
//     {
//         title : "one",genre : "fiction",publish : 1981
//     },
//     {
//         title : "two",genre : "history",publish : 1992
//     },
//     {
//         title : "three",genre : "fiction",publish : 1975
//     },
// ];
// // const userBooks=books.filter( (bk) => bk.genre=="history")

// //if we use {}(scope) then we should use retun keyword
// const userBooks=books.filter( (bk) => { return bk.publish>1975})
// //console.log(userBooks);


const  myNumbers=[1,2,3,4,5,6,7,8,9,10]
//const newNum=myNumbers.map( (num) => num+=10)
//console.log(newNum);

// //chaining : means multiple we use map method or map with filter method
// const newNum=myNumbers
//              .map( (num) => num*10)
//              .map( (num) => num+1)
//              .filter( (num) => num>40 )
// console.log(newNum)


//reduce method
/*
The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.
*/

const myNum=[1,2,3]

// const myTotal=myNum.reduce(function (acc,currVal) 
// {
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
    
//     return acc+currVal
// },3) //3 is accumlator value 
// console.log(myTotal);

//using arrow function
const myTotal=myNum.reduce( (acc,currVal) =>
{
    return acc+currVal
},1)
//console.log(myTotal);

const shopping=[
    {
        itemName : "JScourse",
        price : 2999
    },
    {
        itemName : "Pythoncourse",
        price : 3999
    },
    {
        itemName : "DSAcourse",
        price : 4999
    },
]
const cart=shopping.reduce( (acc,item,) => acc+item.price,0)
console.log(cart);
