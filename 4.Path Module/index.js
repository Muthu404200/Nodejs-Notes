import path from "path"

// console.log(path.basename("c:\\nodejs\\app.html"));

// console.log(path.basename("c:\\nodejs\\app.js",".js"));

// console.log(path.dirname("c:\\nodejs\\courses\\app.js"));

// console.log(path.extname("c:\\nodejs\\courses\\app.js"));

// console.log(path.join("c","nodejs","courses"));

//GO UP A LEVEL
console.log(path.join("c:", "huxn-webdev", "courses", "redux-toolkit", ".."))
console.log(
path.join("c:", "huxn-webdev", "courses", "redux-toolkit", "..","..")
);

console.log(path.normalize("c:\\courses\\redux\\store\\features"));
console.log(path.parse("c:\\nodejs\\courses\\app.js"));
console. log(path.parse("c:\\nodejs\\courses\\app.js").base) ;
console. log(path.parse( "c :\\nodejs\\courses\\app.js").name) ;
console. log(path.parse( "c :\\nodejs\\courses\\app.js").ext)