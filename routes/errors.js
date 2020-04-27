const express = require("express");
const router = express.Router();

const handleGetReq = (req, res) => {
  res.status(400).json({
    error: "Bad request please send request to /checkout",
  });
};

router.route("/").get(handleGetReq);

module.exports = router;
