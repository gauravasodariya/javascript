const name = "Hello"
const repoCount = 50
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const newName = new String('Mathemetics')

// console.log(newName[0]);
// console.log(newName.__proto__);

// console.log(newName.length);
// console.log(newName.toUpperCase());
console.log(newName.charAt(2));
console.log(newName.indexOf('m'));

const newstring = newName.substring(0, 4)
console.log(newstring);

const anotherstring = newName.slice(-4, -1) //we can negative value also with slice
console.log(anotherstring);

const newstringOne = "   abc def "
console.log(newstringOne);
console.log(newstringOne.trim());
const nameTwo="abcdef"
console.log(nameTwo.replace("abc","pqr"));
console.log(nameTwo.includes("abc"));
console.log(nameTwo);
const newNameOne="hello-how-you"
console.log(newNameOne.split('-'));



