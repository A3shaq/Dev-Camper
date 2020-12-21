const todos = require("../mock");

// @desc Get All bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
 // console.log(req.hello,"req.hello,")
  res
    .status(200)
    .json({
      sucess: true,
      data: todos,
      message: "Show all bootcamps",
     // hello: req.hello,
    });
};

// @desc Get Single bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    sucess: true,
    data: todos.filter((item) => item.id === Number(req.params.id)),
    message: `Get single bootcamp record`,
  });
};

// @desc Post  bootcamps
// @route POST /api/v1/bootcamps/:id
// @access Public
exports.createBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, data: todos, message: "Bootcamp created" });
};

// @desc update  bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamp = (req, res, next) => {
  //   todos.push({ name: req.params.name });

  //   let updatedTodo = todos.map((item) => {
  //     item.id == req.params.id;
  //     // console.log()
  //     item.name = req.params.name;

  //   });
  res.status(200).json({
    sucess: true,
    data: todos,
    message: `Bootcamp Updated of ${req.params.id}`,
  });
};

// @desc update  bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, data: todos, message: "Bootcamp has been deleted" });
};
