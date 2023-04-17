// WHATWG and Legacy Api are the two most common used url
// apis with different patterns
import url from "node:url";

const myURL = new URL("https://user:pass@sub.example.com:8080/p/a/t/h?query=string&abc=xyz#hash");
console.log(myURL.searchParams)

console.log(myURL.searchParams.get("abc"));

myURL.searchParams.append('kyc', "bykugan");
console.log(myURL.href);
console.log(myURL.searchParams.get("kyc"));