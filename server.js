// const http = require("http");

const todos = [
  { id: 1, name: "Arshaq" },
  { id: 2, name: "Zubair" },
  { id: 3, name: "Hunain" },
];
// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   // console.log(headers, url, method, "Request");
//   // res.setHeader("Content-Type", "application/json");
//   // res.write("<h1>Hello World</h1>");
//   // res.write();
//   console.log(req.headers.authorization, "token here");
//   let body = [];
//   req
//     .on("data", (chunk) => {
//       body.push(chunk);
//     })
//     .on("end", () => {
//       body = Buffer.concat(body).toString();
//       // console.log(body);
//       let status = 400;
//       const response = {
//         success: false,
//         data: null,
//         message: ` ${status} Bad Request`,
//       };

//       if (method === "GET" && url === "/todos") {
//         status = 200;
//         response.success = true;
//         response.data = todos;
//         response.message = "Get Todos Success";
//       } else if (method === "POST" && url === "/todos") {
//         const { id, name } = JSON.parse(body);
//         todos.push({ id, name });
//         status = 201;
//         response.success = true;
//         response.data = todos;
//         response.message = `Todos Ceated Successfully`;
//       }
//       res.writeHead(status, {
//         "Content-Type": "application/json",
//       });
//       res.end(JSON.stringify(response));
//     });
//   //   req.emit("")
// });

// const PORT = 5000;
// server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

const express = require("express");
const dotenv = require("dotenv");

// In order to load config variables we have to load that env file here /Load env vars

dotenv.config({ path: "./config/config.env" });
const app = express();

// Learn Creating Basic routes
app.get("/api/v1/bootcamps", (req, res) => {
  //res.json(todos);
  res
    .status(200)
    .json({ sucess: true, data: todos, message: "Show all bootcamps" });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  //res.json(todos);
  res.status(200).json({
    sucess: true,
    data: todos.filter((item) => item.id === Number(req.params.id)),
    message: `Get single bootcamp record`,
  });
});

app.post("/api/v1/bootcamps", (req, res) => {
  //res.json(todos);
  res
    .status(200)
    .json({ sucess: true, data: todos, message: "Bootcamp created" });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  //res.json(todos);
  res.status(200).json({
    sucess: true,
    data: todos,
    message: `Bootcamp Updated of ${req.params.id}`,
  });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  //res.json(todos);
  res
    .status(200)
    .json({ sucess: true, data: todos, message: "Bootcamp has been deleted" });
});

const PORT = process.env.PORT || 4000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
