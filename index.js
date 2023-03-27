const http = require("http");
const fs = require("fs");

fs.writeFile("index.html", `<h1> Hello World </h1> \n<p> This is Rakesh json... </p>`,
    (err) => {
        if (err) {
            console.log("Error: " + err);
            return;
        } else {
            console.log("index.html file created sucessfully");
        }
    }
);

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./index.html").pipe(res);
});
server.listen(process.env.PORT || 8080);
console.log("Listening on port 8080...");
