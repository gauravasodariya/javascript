//for of loop

//["","",""] string inside array
//[{},{},{}] object inside array

const arr=[1,2,3,4,5]
for (const num of arr) 
{
   // console.log(num);
}

const greetings="Hello World"
for (const greet of greetings) 
{
    if(greet==" ")
    {
        continue
    }
 //   console.log(greet);  
}

//Map : can contain deuplicate values but does not contain duplicate keys 
// const map=new Map()
// map.set("IN" , "India")
// map.set("USA" , "United state of america")
// map.set("USA" , "United state of america")
// for (const [key,value] of map) {
//   //  console.log(key +'-->'+ value);
// }

//in object we use forin loop,because forof loop does not work
const myObject={
    "game1" : "NFS",
    "game2" : "Spiderman",
    "game3" : "Superman"
}
for (const key in myObject) 
{
     //  console.log(key +' --> '+myObject[key]);    
}

const programming=['js','rb','py','java']
for (const key in programming)  //bydefault in array key is number, which is start from zero
{
   // console.log(programming[key]);
}

const map=new Map()
map.set("IN" , "India")
map.set("USA" , "United state of america")
map.set("USA" , "United state of america")
for (const key in map) {
 //  console.log(key); dont print anything
}

//foreach loop
const coding=['js','ruby','java','cpp']

coding.forEach(function (item)
{ //this function is callback so dont proide function name
   // console.log(item);  
})

//arrow function
coding.forEach(  (item) => 
{
   // console.log(item);
    
})

function printMe(item)
{
    console.log(item);
}
//coding.forEach(printMe)

//each element have access of whole array
coding.forEach( (item,index,arr) => {
  //  console.log(item,index,arr);
})

//array of object
const myCoding=[
    {
        languageName : "Javascript",
        FileName : "JS"
    },
    {
        languageName : "java",
        FileName : "java"
    },
    {
        languageName : "python",
        FileName : "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})



