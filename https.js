import https from "https";

// 1.
// let request = https.get(
//   "https://jsonplaceholder.typicode.com/users?_limit=2",
//   (res) => {
//     if (res.statusCode !== 200) {
//       console.error(
//         `Did not get an OK from the server. Code: ${res.statusCode}`
//       );
//       res.resume();
//       return;
//     }

//     let data = "";

//     res.on("data", (chunk) => {
//       data += chunk;
//       console.log(chunk.toString());
//     });

//     res.on("close", () => {
//       console.log("Retrieved all data");
//       console.log(JSON.parse(data));
//     });

//   }
// );

// request.on("error", (err) => {
//   console.error(
//     `Encountered an error trying to make a request: ${err.message}`
//   );
// });

// console.log(request);

// 2.
// const options = {
//   method: "GET",
// };

// let request = https.request(
//   "https://jsonplaceholder.typicode.com/users?_limit=2",
//   options,
//   (res) => {
//     if (res.statusCode !== 200) {
//       console.error(
//         `Did not get an OK from the server. Code: ${res.statusCode}`
//       );
//       res.resume();
//       return;
//     }

//     let data = "";

//     res.on("data", (chunk) => {
//       data += chunk;
//       console.log(chunk.toString());
//     });

//     res.on("close", () => {
//       console.log("Retrieved all data");
//       console.log(JSON.parse(data));
//     });
//   }
// );

// // You also call the end() method of the request variable.
// // This is an important method that must be called when using
// // the request() function. It completes the request, allowing
// // it to be sent. If you don’t call it, the program will never
// // complete, as Node.js will think you still have data to add
// // to the request.
// request.end();

// request.on("error", (err) => {
//   console.error(
//     `Encountered an error trying to make a request: ${err.message}`
//   );
// });

// 3.
const options = {
  host: 'jsonplaceholder.typicode.com',
  path: "/users?_limit=2",
  method: "GET",
  headers: {
    'Accept': 'application/json'
  }
};

let request = https.request(
  options,
  (res) => {
    if (res.statusCode !== 200) {
      console.error(
        `Did not get an OK from the server. Code: ${res.statusCode}`
      );
      res.resume();
      return;
    }

    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("close", () => {
      console.log("Retrieved all data");
      console.log(JSON.parse(data));
    });
  }
);

// You also call the end() method of the request variable.
// This is an important method that must be called when using
// the request() function. It completes the request, allowing
// it to be sent. If you don’t call it, the program will never
// complete, as Node.js will think you still have data to add
// to the request.
request.end();

request.on("error", (err) => {
  console.error(
    `Encountered an error trying to make a request: ${err.message}`
  );
});