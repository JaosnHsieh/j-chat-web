const express = require("express");
const path = require("path");
const port = process.env.PORT || 3030;
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`server started on port ` + port);
});
