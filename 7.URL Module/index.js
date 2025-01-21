import {URL} from"url";

const myurl = new URL("https://www.example.com:8080/path?query=string#hash");

// console.log(myurl.hash);

console.log(myurl.host);

console.log(myurl.hostname);

console.log(myurl.port);

console.log(myurl.href);

console.log(myurl.protocol);

console.log(myurl.search);

console.log(myurl.searchParams);

//Both works the same

console.log(myurl.toString());
console.log(myurl.toJSON());