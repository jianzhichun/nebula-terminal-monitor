#!/usr/bin/env node

import args from "./src/argument.js"
import asciichart from "asciichart"
import moment from "moment"
import { print, normalize, time, interpolate } from "./src/utils.js"

try {
  print(args)
  var s2 = new Array(120)
  s2[0] = Math.round(Math.random() * 15)
  for (let i = 1; i < s2.length; i++)
    s2[i] = s2[i - 1] + Math.round(Math.random() * (Math.random() > 0.5 ? 2 : -2))
  print(asciichart.plot (s2))
} catch (e) {
  console.log("Couldn't plot chart. Please try different settings.")
  process.exit(1)
}