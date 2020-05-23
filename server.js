const express = require("express");
const routes = require("./backend/routes");
const app = express();
const port = process.env.PORT || "8080";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/build"));

app.use("/api", routes);
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(port);
