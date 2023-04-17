// The util module provides an assortment of useful
// JavaScript methods. One of the most useful is
// util.promisify(function), which takes an error-first
// callback style function and returns a promise-based
// function. The Util module can also help with common
// patterns like decoding text, type checking, and
// inspecting objects.

// The node.js "util" module provides some functions to
//  print formatted strings as well as some 'utility'
// functions that are helpful for debugging purposes.

// utility is also used for checking the truthy of
// an entity

import util from "node:util";

// 1.
// async function fn() {
//   return 'hello world';
// }
// const callbackFunction = util.callbackify(fn);

// callbackFunction((err, ret) => {
//   if (err) throw err;
//   console.log(ret);
// });

// setTimeout(function(){
//     return console.log(fn());
// }, 10000)

// 2.
// util.log('Timestamped message');

// 3.
// console.log(util.inspect(console));

// 4.
// let myName = "Sunita",
//   myClass = 5,
//   myRollNo = 11,
//   myFavSub = { subj1: "English", subj2: "Math." };

// let format1 = util.format("My name is %s ", myName);
// let format2 = util.format("I read in class %d,", myClass);
// let format3 = util.format("My roll no. is %d,", myRollNo);
// let format4 = util.format("My favorite subject are %j", myFavSub);

// console.log(format1);
// console.log(format2);
// console.log(format3);
// console.log(format4);

// 5.
// let testString = "Test Test";
// console.log(util.debug(testString));

// let test = {x: "is-x"};
// console.log(util.debug(test));
// util.debug(JSON.stringify(test));


// 6.
console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp(new RegExp('New regexp')));
console.log(util.isRegExp({}))