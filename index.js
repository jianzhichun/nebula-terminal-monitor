#!/usr/bin/env node

import args from "./src/argument.js"
import ervy from "ervy"
import stats from "./src/stats.js"
import moment from "moment"
import { normalize, time, interpolate, zip } from "./src/utils.js"
const { bar, pie, bullet, donut, gauge, scatter, fg, bg } = ervy

try {
  let data = []
  setInterval(() => {
    stats().then(map => {
      if (data.length > 120) {
        data.pop()
      }
      data.push(map)
    })
  }, 100)
  setInterval(() => {
    stats().then(map => {
      console.clear()
      const pieData1 = [
        { key: 'A', value: 5, style: '* ' },
        { key: 'B', value: 10, style: '+ ' },
        { key: 'C', value: 10, style: '# ' },
        { key: 'D', value: 10, style: 'O ' }
      ]

      const pieData2 = [
        { key: 'A', value: 5, style: bg('cyan', 2) },
        { key: 'B', value: 5, style: bg('yellow', 2) },
        { key: 'C', value: 5, style: bg('magenta', 2) },
        { key: 'D', value: 5, style: bg('white', 2) }
      ]
      zip(
        pie(pieData1, { left: 1 }).split(/\r?\n/),
        pie(pieData2, { left: 100 }).split(/\r?\n/),
        (a1, a2) => console.log(a1 + a2)
      )
    })
  }, 100);
} catch (e) {
  console.log("Couldn't plot chart. Please try different settings.")
  process.exit(1)
}