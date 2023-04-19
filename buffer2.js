import { Buffer } from 'node:buffer';

const arr = new Uint16Array(2);

arr[0] = 5000;

arr[1] = 4000;

console.log(arr.buffer);

const buf = Buffer.from(arr.buffer);

console.log(buf);

arr[1] = 6000;

console.log(buf);