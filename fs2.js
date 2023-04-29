import * as fsPromises from 'fs/promises';
import { rename, stat } from 'node:fs/promises';

// async function usePromise(path) {
//     const promise = fsPromises.readFile(path);
//     console.log('do something');
//     return await promise;
// }

// let result = usePromise('/home/canice/projects/Node Apis/console.js');
// console.log(result);

// const oldPath = '/home/canice/projects/Node Apis/console.js';
// const newPath = '/home/canice/projects/Node Apis/console2.js';

// try {
//     await rename(oldPath, newPath);
//     const stats = await stat(newPath);
//     console.log(`stats: ${JSON.stringify(stats)}`);
// } catch (error) {
//     console.error('there was an error: ', error.message);
// }

async function openFile(path) {
    let fileHandle;
    try {
        fileHandle = await fsPromises.open(path, 'r');
        console.log(fileHandle);
        console.log(`opened ${path}, file descriptor is ${fileHandle.fd}`);
        const data = fileHandle.read()
    } catch (err) {
        console.error(err.message);
    } finally {
        fileHandle?.close();
    }
}

openFile('/home/canice/projects/Node Apis/console2.js');