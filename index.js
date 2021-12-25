#!/usr/bin/env node

import args from "./src/argument.js"
import stats from "./src/stats.js"
import asciichart from "asciichart";
const screenHeight = process.stdout.rows;

try {
  let data = new Array(120).fill(0)
  setInterval(() => {
    stats().then(map => {
      if (data.length > 120) {
        data.pop()
      }
      data.push(map[args.stat])
    })
  }, 1000)
  setInterval(() => {
    console.clear()
    console.log(asciichart.plot(data, { height: screenHeight - 4 }))
  }, 100)
} catch (e) {
  console.log("Couldn't plot chart. Please try different settings.")
  process.exit(1)
}