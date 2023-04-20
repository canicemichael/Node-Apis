import https from "https";

const options = {
  host: "jsonplaceholder.typicode.com",
  path: "/users",
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=UTF-8",
  },
};

let request = https.request(options, (res) => {
  if (res.statusCode !== 201) {
    console.error(
      `Did not get an Created from the server. Code: ${res.statusCode}`
    );
    res.resume();
    return;
  }

  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("close", () => {
    console.log("Added new user");
    console.log(JSON.parse(data));
  });
});

const requestData = {
  name: "New User",
  username: "latestuser",
  email: "user@latestuser.com",
  address: {
    street: "North Pole",
    city: "Murmansk",
    zipcode: "12345-6789",
  },
  phone: "555-1212",
  website: "latestuser.com",
  company: {
    name: "Latestuser",
    catchPhrase: "Welcome to the developer cloud",
    bs: "cloud scale security",
  },
};

request.write(JSON.stringify(requestData));

request.end();

request.on("error", (err) => {
  console.error(
    `Encountered an error trying to make a request: ${err.message}`
  );
});
