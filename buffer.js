import { Buffer } from 'node:buffer';

const buf1 = Buffer.alloc(10);
console.log(buf1);
console.log(buf1.toString('hex'));

const buf2 = Buffer.alloc(10, 1);
console.log(buf2);

// this method is faster than "Buffer.alloc"
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);

const buf5 = Buffer.from([257, 257.5, -255, '1']);
console.log(buf5);
console.log(buf5.toString('hex'));

const buf6 = Buffer.from('fhqwhgads', 'utf8');
console.log(buf6.toString('hex'));
