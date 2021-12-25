// 折线图
import asciichart from "asciichart"

const screenWidth = process.stdout.columns;
const screenHeight = process.stdout.rows;
const s0 = new Array(screenWidth);
for (let i = 0; i < s0.length; i++)
  s0[i] = process.stdout.rows/5 * Math.sin(i * ((Math.PI * 4) / s0.length));
console.log(asciichart.plot(s0));

process.stdin.resume();