// The fs API can create, read, update, and delete files,
// directories, and permissions. Recent releases of the
// Node.js runtime provide promise-based functions in
// fs/promises, which make it easier to manage asynchronous
// file operations.

// The following example module returns information about
// a file system object using the stat and access methods:

// fetch file information
import { constants as fsConstants } from "fs";
import { access, stat, readFile, writeFile } from "fs/promises";
import path from "node:path";

export async function getFileInfo(file) {
  const fileInfo = {};

  try {
    const info = await stat(file);
    // fileInfo.isFIle = info.isFIle();
    fileInfo.isDir = info.isDirectory();
  } catch (e) {
    return { new: true };
  }

  try {
    await access(file, fsConstants.R_OK);
    fileInfo.canRead = true;
  } catch (e) {}

  try {
    await access(file, fsConstants.W_OK);
    fileInfo.canWrite = true;
  } catch (e) {}

  return fileInfo;
}

let input = path.resolve(process.argv[2] || ""),
  output = path.resolve(process.argv[3] || ""),
  [inputInfo, outputInfo] = await Promise.all([
    getFileInfo(input),
    getFileInfo(output),
  ]),
  error = [];

console.log(inputInfo);
console.log(outputInfo);

// use input file name when output is a directory
if (outputInfo.isDir && outputInfo.canWrite && inputInfo.isFile) {
  output = path.resolve(output, path.basename(input));
}
console.log(input);

// check for errors
if (!inputInfo.isFile || !inputInfo.canRead)
  error.push(`cannot read input file ${input}`);
if (input === output) error.push("input and output files cannot be the same");

if (error.length) {
  console.log("Usage: ./filecompress.js [input file] [output file|dir]");
  console.error("\n  " + error.join("\n  "));
//   process.exit(1);
}

// read file
console.log(`processing ${input}`);
let content;

try {
  content = await readFile(input, { encoding: "utf8" }); // won't rread cos its a Dir
} catch (e) {
// will throw cos its a Dir not a file
  console.log(e);
//   process.exit(1);
}

// let lengthOrig = content.length;
// console.log("wakawaka");
// console.log(`file size  ${lengthOrig}`);
