const path = require("path");
const fs = require("fs/promises");

const express = require("express");

const PORT = 3000;

async function main() {
  const app = express();
  const index = await fs.readFile('./public/index.html', { encoding: 'utf-8' });
  
  app.use(express.static("public"));

  app.get("*", (_, res) => {
    res.send(index);
  });

  app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
}

main();