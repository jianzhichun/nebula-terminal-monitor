// 折线图
import asciichart from "asciichart";

const screenWidth = process.stdout.columns;
const screenHeight = process.stdout.rows;
const maxLen = screenWidth - 15;
const s0 = new Array(maxLen).fill(0);
setInterval(() => {
  console.clear();
  if (s0.length > maxLen) s0.shift();
  s0.push(Math.random());
  console.log(asciichart.plot(s0, { height: screenHeight - 4 }));
}, 500);
