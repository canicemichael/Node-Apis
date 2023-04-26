const p1 = Promise.resolve(21);
const p2 = 110470116021;
const p3 = new Promise((resolve, reject) => { // eslint-disable-line no-unused-vars
   setTimeout(() => {
      resolve('AppDividend');
   }, 1000);
});

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values);
});