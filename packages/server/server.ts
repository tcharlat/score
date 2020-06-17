import { createServer } from "http";

import { Bonhome } from "@scope/models";

createServer((req, res) => {
  const bonhome: Bonhome = {
    poids: 1,
  };
  console.log("UN PETIT BONHOMME", bonhome);
  res.end("coucou");
}).listen(1337);
