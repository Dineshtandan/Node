const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write(`<h1>hello world</h1>`);
  res.end();
});
const port = 3000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
