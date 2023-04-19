import { Buffer } from 'node:buffer';

const buf1 = Buffer.alloc(10);
console.log(buf1);
console.log(buf1.toString('hex'));

const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// this method is faster than "Buffer.alloc"
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

// To create a buffer from pre-existing data, we use the from() method. 
// We can use that function to create buffers from:

// An array of integers: The integer values can be between 0 and 255.
// An ArrayBuffer: This is a JavaScript object that stores a fixed length of bytes.
// A string.
// Another buffer.
// Other JavaScript objects that have a Symbol.toPrimitive property. 
// That property tells JavaScript how to convert the object to a primitive 
// data type: boolean, null, undefined, number, string, or symbol. 
// You can read more about Symbols at Mozilla’s JavaScript documentation.

const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

const buf5 = Buffer.from([257, 257.5, -255, '1']);
console.log(buf5);
console.log(buf5.toString('hex'));

const buf6 = Buffer.from('fhqwhgads', 'utf8');
console.log(buf6.toJSON());
console.log("\n");
console.log("\n");
console.log("\n");

const hiBuf = Buffer.from('Hi!');
console.log(hiBuf[0].toString());
console.log(hiBuf[1].toString());
console.log(hiBuf[2].toString());
console.log(hiBuf.toString());

// Creates a new Buffer containing the UTF-8 bytes of the string 'buffer'.
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf);


// The copy function 
// The copy() function has a few more parameters that allow us to customize 
// what data is copied to the other buffer. Here’s a list of all the 
// parameters of this function:

// target - This is the only required parameter of copy(). As we’ve seen from our previous usage, it is the buffer we want to copy to.
// targetStart - This is the index of the bytes in the target buffer where we should begin copying to. By default it’s 0, meaning it copies data starting at the beginning of the buffer.
// sourceStart - This is the index of the bytes in the source buffer where we should copy from.
// sourceEnd - This is the index of the bytes in the source buffer where we should stop copying. By default, it’s the length of the buffer.
// So, to copy Nananana from wordsBuf into catchphraseBuf, our target should 
// be catchphraseBuf like before. The targetStart would be 0 as we want 
// Nananana to appear at the beginning of catchphraseBuf. The sourceStart 
// should be 7 as that’s the index where Nananana begins in wordsBuf. 
// The sourceEnd would continue to be the length of the buffers.

const wordsBuf = Buffer.from('Banana Nananana');
const catchphraseBuf = Buffer.from('Not sure Turtle!');

// our goal is to modify catchphraseBuf to store Nananana Turtle!

// wordsBuf.copy(catchphraseBuf);
wordsBuf.copy(catchphraseBuf, 0, 7, wordsBuf.length);
console.log(catchphraseBuf.toString());