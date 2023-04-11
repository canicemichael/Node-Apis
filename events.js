import { EventEmitter } from "node:events";

export class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

let m = 0;

myEmitter.once("event", () => {
  console.log(++m);
});

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
