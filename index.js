const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  if (req.url === "/login") {
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login Page</title>

  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: #eee;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .login-box {
      background: #fff;
      width: 320px;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 12px rgba(0,0,0,0.15);
    }

    .login-box h2 {
      text-align: center;
      margin-bottom: 25px;
    }

    .input-group {
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
    }

    .input-group label {
      font-size: 14px;
      margin-bottom: 5px;
    }

    .input-group input {
      padding: 10px;
      font-size: 15px;
      border: 1px solid #ccc;
      border-radius: 6px;
      outline: none;
    }

    .btn {
      width: 100%;
      padding: 10px;
      background: #1a73e8;
      border: none;
      color: white;
      font-size: 16px;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 10px;
    }

    .btn:hover {
      opacity: 0.9;
    }

    .forgot {
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
    }

    .forgot a {
      color: #1a73e8;
      text-decoration: none;
    }
  </style>
</head>
<body>
  
  <div class="login-box">
    <h2>Login</h2>

    <div class="input-group">
      <label>Email</label>
      <input type="email" placeholder="Enter your email" />
    </div>

    <div class="input-group">
      <label>Password</label>
      <input type="password" placeholder="Enter your password" />
    </div>

    <button class="btn">Login</button>

    <div class="forgot">
      <a href="#">Forgot Password?</a>
    </div>
  </div>

</body>
</html>
`);
  }
  else if(req.url==="/home"){
    res.write(`<h1>Home page</h1>`);
  }
  else{
    res.statusCode=404;
    res.write(``);
  }

  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log("okk working");
});
