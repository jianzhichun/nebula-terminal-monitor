#!/usr/bin/env node

import args from "./src/argument.js";
import { execSync } from "child_process";

execSync(
  "./node_modules/.bin/stmux -M -w always -e ERROR -m beep -- [ [ -s 1/4 -t '饼图1' \"node src/chart/c\" .. -t '折线图' \"node src/chart/a\" ] : [ -s 1/4 -t '饼图2' \"node src/chart/d\" .. -t '柱状图' \"node src/chart/b\" ] ]",
  { stdio: "inherit" }
);
