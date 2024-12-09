let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreateDate = new Date(2024,0,9) //month start with 0, year-month-date
//console.log(myCreateDate.toDateString());
// let myCreateDate = new Date(2024,0,9,1,3)
// console.log(myCreateDate.toLocaleString());
// let myCreateDate = new Date("2024-03-30")
// console.log(myCreateDate.toLocaleString());
// let myCreateDate = new Date("03-04-2024")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000)); //to convert milisecond to second

let newDate=new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth()+1);
newDate.toLocaleString('default',{
    weekday : "long"
})








