const express = require("express");

const app = express();

app.use(express.json());

app.post("/mesage-send", async (req, res) => {
  const message = req.body.message;

  await fetch("http://localhost:3001/message-recieve", {
    body: JSON.stringify({ message }),
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Explicitly set Content-Type
    },
  });

  res.send(`Sent message: ${message}`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
