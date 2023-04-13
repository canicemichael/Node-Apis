// The os API has similarities to process , 
// but it can also return information about 
// the Operating System Node.js is running in. 
// This provides information such as what OS version, 
// CPUs and up time.

import os from "node:os";

console.log(os.homedir());
console.log(os.availableParallelism());
console.log(os.arch());
console.log(os.constants);
console.log(os.cpus());
console.log(os.platform());