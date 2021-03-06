#!/usr/bin/env node

const args = require('./argument.js');
const { execSync } = require('child_process');
const path = require('path')

const list2pairs = (arr) => arr.reduce(function (result, value, index, array) {
  if (index % 2 === 0)
    result.push(array.slice(index, index + 2));
  return result;
}, [])
const subArgs = `${args.node ? "-n " : " "}${args.graph ? "-g " : " "}${args.https ? "-https " : " "}${args.host ? "-h " + args.host + " " : " "}${args.port ? "-p " + args.port + " " : " "}`
let command = list2pairs(args.stats).map(pair => " [ " + pair.map(stat => ` -t '${stat.replace(/[_\.]/g, " ")}' "node src/chart/linechart ${subArgs}-s ${stat}"`).join(" .. ") + " ] ").join(" : ")
execSync(
  `${path.join(__dirname, "../node_modules/.bin/stmux")} -M -w always -e ERROR -m beep -- [ ${command} ]`,
  { stdio: "inherit" }
)
