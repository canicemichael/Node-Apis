// The nide:path module provides utilities for working with
// file and directory paths.

import path from "node:path";

let pathBase = path.win32.basename('C:\\temp\\myfile.html');
// Returns: 'C:\\temp\\myfile.html'

console.log(pathBase);
console.log(process.env.PATH.split(path.delimiter));

// All the methods to get out a pattern concerning path
// lives in the node api doc, study it, google more articles
// on it to get clear view, then implement. bingo!!

console.log(path.resolve(''));

let parsedPath = path.parse('C:/path/dir/file.txt');
path.parse('C:\\path\\dir\\file.txt');
// Returns:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

console.log(parsedPath);