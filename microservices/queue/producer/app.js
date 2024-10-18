const express = require("express");
const { sendToQueue } = require("./producer");

const app = express();

app.use(express.json());

app.post("/mesage", async (req, res) => {
  const message = req.body.message;
  await sendToQueue(message);
  res.send(`Sent message: ${message}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
