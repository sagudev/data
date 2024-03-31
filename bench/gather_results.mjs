import fs from "node:fs";
const engines = new Map();
engines.set("v8-jitless", {});

const resultsRegex = new RegExp('"?RESULT"?\\s"?(\\w+)"?\\s"?(\\d+)"?');
const scoreRegex = new RegExp('"?SCORE"?\\s"?(\\d+)"?');

engines.forEach((val, engine) => {
  const results = fs.readFileSync(`./bench/${engine}_results.txt`).toString();
  const lines = results.split("\n");
  lines.forEach((line) => {
    const search = resultsRegex.exec(line);
    if (search === null) return;
    val[search[1]] = parseInt(search[2]);
  });
  val["score"] = parseInt(scoreRegex.exec(results)[1]);
});

console.log(engines.get("v8-jitless"));
