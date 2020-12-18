const http = require("http");

const arr = [
  { id: 1, name: "Arshaq" },
  { id: 2, name: "Zubair" },
  { id: 3, name: "Hunain" },
];
const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  // console.log(headers, url, method, "Request");
  res.setHeader("Content-Type", "application/json");
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
      console.log(body);
    });
  res.end(
    JSON.stringify({
      success: true,
      data: arr,
    })
  );
  //   req.emit("")
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
