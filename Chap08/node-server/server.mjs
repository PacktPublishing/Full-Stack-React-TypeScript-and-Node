import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello world");
  } else if (req.url === "/a") {
    res.end("welcome to route a");
  } else if (req.url === "/b") {
    res.end("welcome to route b");
  } else if (req.url === "/c" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const params = Buffer.concat(body);
      console.log("body", params.toString());
      res.end(`You submitted these parameters: ${params.toString()}`);
    });
  } else {
    res.end("good bye");
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`The server started on port ${port}`);
});
