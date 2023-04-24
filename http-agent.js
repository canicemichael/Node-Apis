// The default http.globalAgent that is used by http.request()
// has all the options values set to their respective defaults.

// To configure any of them, a custom http.Agent instance must be created.

import http from "node:http";

// example1
// const keepAliveAgent = new http.Agent({ keepAlive: true });
// options.agent = keepAliveAgent;
// http.request(options, onResponseCallback);

// example2
const agentOptions = {
    keepAlive: true,
    maxSockets: 10
};

const agent = new http.Agent(agentOptions);

// example3
// You can pass the agent instance as an option when making
// a new HTTP request with http.request()
const options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'GET',
    agent: agent
};

const req = http.request(options, (res) => {
    // Handle response...
});

req.end();