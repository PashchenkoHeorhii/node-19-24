const express = require("express");

const app = express();
// app.use();
app.use(express.json());

app.post("/message-recieve", async (req, res) => {
  console.log(`Recieved message: ${req.body.message}`);
  res.send(req.body.message);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
