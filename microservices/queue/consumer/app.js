const express = require("express");
const { recieveFromQueue } = require("./consume");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  await recieveFromQueue();
  res.send("Established queue");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
