const express = require("express");
const router = express.Router();
const todos = require("../mock")

// Learn Creating Basic routes
router.get("/", (req, res) => {
  //res.json(todos);
  res
    .status(200)
    .json({ sucess: true, data: todos, message: "Show all bootcamps" });
});

router.get("/:id", (req, res) => {
  //res.json(todos);
  res.status(200).json({
    sucess: true,
    data: todos.filter((item) => item.id === Number(req.params.id)),
    message: `Get single bootcamp record`,
  });
});

router.post("/", (req, res) => {
  //res.json(todos);
  res
    .status(200)
    .json({ sucess: true, data: todos, message: "Bootcamp created" });
});

router.put("/:id", (req, res) => {
  //res.json(todos);
  res.status(200).json({
    sucess: true,
    data: todos,
    message: `Bootcamp Updated of ${req.params.id}`,
  });
});

router.delete("/:id", (req, res) => {
  //res.json(todos);
  res
    .status(200)
    .json({ sucess: true, data: todos, message: "Bootcamp has been deleted" });
});

module.exports = router;
