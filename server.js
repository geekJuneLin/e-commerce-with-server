const express = require("express");
const path = require("path");
const cors = require("cors");

const router = require("./routes/payment");
const error = require("./routes/errors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: "https://e-commerce-with-server.herokuapp.com",
  })
);

// setting up the middleware
app.use(express.json());
app.use(express.static("./app/build"));

// setting the routes
app.use("/checkout", router);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
