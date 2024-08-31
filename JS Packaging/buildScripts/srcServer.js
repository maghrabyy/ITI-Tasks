import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from 'url';

import open from "open";

/* eslint-disable no-console */

const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname( __filename );


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
