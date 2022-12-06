const myXpress = require("express");
const xp = myXpress();
xp.get("/currentTime", function (req, res) {
  res.send("<h1>Hello Bosss</h1>");
});

xp.get("/", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

xp.listen(5000);
