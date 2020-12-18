
const http = require("http");

const todos = [
  { id: 1, name: "Arshaq" },
  { id: 2, name: "Zubair" },
  { id: 3, name: "Hunain" },
];
const server = http.createServer((req, res) => {
  const { method, url } = req;
  // console.log(headers, url, method, "Request");
  // res.setHeader("Content-Type", "application/json");
  // res.write("<h1>Hello World</h1>");
  // res.write();
  console.log(req.headers.authorization, "token here");
  let body = [];
  req
    .on("data", (chunk) => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();
      // console.log(body);
      let status = 400;
      const response = {
        success: false,
        data: null,
        message: ` ${status} Bad Request`,
      };

      if (method === "GET" && url === "/todos") {
        status = 200;
        response.success = true;
        response.data = todos;
        response.message = "Get Todos Success";
      } else if (method === "POST" && url === "/todos") {
        const { id, name } = JSON.parse(body);
        todos.push({ id, name });
        status = 201;
        response.success = true;
        response.data = todos;
        response.message = `Todos Ceated Successfully`;
      }
      res.writeHead(status, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(response));
    });
  //   req.emit("")
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
