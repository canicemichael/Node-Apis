import { readFile } from 'node:fs';

readFile('/home/canice/projects/Node Apis/console.js', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});