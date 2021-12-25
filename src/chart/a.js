// 折线图
import asciichart from "asciichart";
import stats from '../stats';
import args from "../argument.js"
import {zip} from "../utils.js";
import globalData from "../stroe.js";

const screenWidth = process.stdout.columns;
const screenHeight = process.stdout.rows;
const maxLen = screenWidth - 15;

setInterval(() => {
    console.log(require('../stroe.js'));
    // console.clear();

    // if (s0.length > maxLen) s0.shift();

    // console.log(asciichart.plot(s0, { height: screenHeight - 4 }));
}, 1000);
