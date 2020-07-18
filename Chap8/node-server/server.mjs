import http from "http";

const server = http.createServer((req, res) => {
  console.log(req);
  res.end("hello world");
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
