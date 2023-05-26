const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/players", (req, res) => {
  fs.readFile("playerData.json", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const playerData = JSON.parse(data);
    res.json(playerData);
  });
});

app.get("/api/players/:name/:tag/:platform", (req, res) => {
  const { name, tag } = req.params;
  const playerIdentifier = `${name}#${tag}`;

  fs.readFile("playerData.json", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    const playerData = JSON.parse(data);
    console.log(playerIdentifier)
    const player = playerData.find(
      (player) =>
        player.data.username.toLowerCase() === playerIdentifier.toLowerCase()
        &&
        player.data.platform === req.params.platform
    );

    if (player) {
      res.json(player);
    } else {
      res.status(404).json({ error: "Player not found" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
