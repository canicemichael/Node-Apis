// The util module provides an assortment of useful 
// JavaScript methods. One of the most useful is 
// util.promisify(function), which takes an error-first 
// callback style function and returns a promise-based 
// function. The Util module can also help with common 
// patterns like decoding text, type checking, and 
// inspecting objects.

import util from "node:util";

async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});

setTimeout(function(){
    return console.log(fn());
}, 10000)