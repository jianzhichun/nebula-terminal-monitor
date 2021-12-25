// 柱状图
import chart from "ascii-chart"

const screenWidth = process.stdout.columns;
const screenHeight = process.stdout.rows;

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(chart(data, {
  width: screenWidth,
  height: screenHeight,
  pointChar: '█',
  negativePointChar: '░'
}));


process.stdin.resume();