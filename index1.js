const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  if(req.url==="/")
  {
    res.write(`<h1>hello world</h1>`);
  }
  else if(req.url==="/home")
  {
    res.write(`<h1>Home page</h1>`);
  }
  else{
    res.statusCode=404;
    res.write(`<h1>404 page not found</h1>`);
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
