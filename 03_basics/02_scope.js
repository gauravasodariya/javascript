//var can be redeclared and reassigned, let cannot be redeclared but can be reassigned and const cannot be redeclared and cannot be reassigned

// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);

//{} : scope

if(true)
{
    let a=10
    const b=20
    var c=30
}
//Error
console.log(a);
console.log(b);
console.log(c); //No Error, due to var keyword and it has global scope and const and let has local or block scope


