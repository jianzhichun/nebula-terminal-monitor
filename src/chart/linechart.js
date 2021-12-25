#!/usr/bin/env node

import args from "../argument.js"
import stats from "../stats.js"
import asciichart from "asciichart"

const screenHeight = process.stdout.rows || 100
const dataLength = 80

try {
  let data = new Array(dataLength).fill(0)
  setInterval(() => {
    stats(args.stat).then(map => {
      if (data.length >= dataLength) {
        data.shift()
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