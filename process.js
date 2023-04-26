import dotenv from "dotenv";
import { userInfo } from "node:os";
import process from 'node:process';

dotenv.config();

console.log("on top of before");

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

// process.on('exit', (code) => {
//   setTimeout(() => {
//     console.log('This will not run');
//   }, 0);
// });

// console.log(process.uptime().toString() ) ;
// console.log(process.cpuUsage());
console.log("process.argv " + process.argv[2]);
// console.log("process.env " + process.env);
// console.log("process.cwd " + process.cwd());

import { cpuUsage } from 'node:process';

const startUsage = cpuUsage();
// { user: 38579, system: 6986 }

// spin the CPU for 500 milliseconds
const now = Date.now();
while (Date.now() - now < 500);

// console.log( cpuUsage(startUsage));
// { user: 514883, system: 11226 }

// console.log("memoryUsage: " );
// console.log( process.memoryUsage());