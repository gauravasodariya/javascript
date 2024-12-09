// const myArr=[1,2,3,4,5]
// //javascript array are resizeable and can contain a mix of different datatypes
// //javascript array are not associative arrays and array element cannot be accessed using rbitary string as index
// //console.log(myArr[0]);
// //another method to declare array
// const myHeros=['a','b','c','d','e']
// const myArr2=new Array(1,2,3,4)
// myArr2.push(5) //insert value in the last position
//console.log(myArr2);
// myArr2.pop()
// console.log(myArr2);
// myArr2.unshift(10) //insert value in the first position
// console.log(myArr2);
// myArr2.shift() //remove element from first position
// console.log(myArr2);

// console.log(myArr2.includes(5)); //return true or false
// console.log(myArr2.indexOf(30)); //if value does not exist then return -1

// const newArr=myArr2.join()
// console.log(myArr2);
// console.log(typeof newArr);

//  console.log("A",myArr);
//  const myn1=myArr.slice(1,3)
//  console.log(myn1);
// // console.log("B",myArr);

// const myn2=myArr.splice(1,3)
// console.log(myArr);
// console.log(myn2);
/*slice(): The slice() method is used to extract a portion of an array and returns a new array containing the extracted elements. splice(): The splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place*/

//----------------------Array part:-2----------------------- 
const marvel_heros=['thor','ironman','spiderman']
const dc_heros=['superman','flash','batman']

//marvel_heros.push(dc_heros)
//console.log(marvel_heros[3][0]);

//const allheros=marvel_heros.concat(dc_heros) 
//console.log(allheros);

//console.log(marvel_heros);
//push() induces changes in the original array, whereas concat() makes no change in existing array values

// const all_new_heros=[...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("hello"))
// console.log(Array.from("hello"))
// console.log(Array.from({name:"Raj"})) 
// console.log(Array.from({length : 5}));

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));


