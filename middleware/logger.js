//Create middleware function which will be available by call nex() ii last of the function and this fuction is accessable in routes as a middlaware
// When any route call this function will run automatically

const logger = (req, res, next) => {
  // req.hello = "Hello World";
  const { method, protocol, originalUrl } = req;
  console.log(`${method} ${protocol}://${req.get("host")}${originalUrl}`);
  next();
};

module.exports = logger;
