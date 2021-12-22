import { Command } from "commander"
import _ from "lodash/fp.js"
import * as fs from "fs"

const { version } = JSON.parse(fs.readFileSync("./package.json", "utf8"))

const program = new Command()
program
  .version(version)
  .option("-n, --node", "show node monitor")
  .option("-g, --graph", "show graph monitor")
  .option("-h --host <string>", "specify the host ip of node or graph", "127.0.0.1")
  .option("-p --port <n>", "specify the port of node or graph", parseInt, 51516)
  .option("-i --interval <n>", "specify the interval of node or graph", parseInt, 30)
  .option("-tu --timeunit <string>", "specify the timeunit of node or graph", "s")
  .option("--disable-legend", "disable legend text")
  .parse(process.argv)

const param = program.opts()

export default {
  node: param.node,
  graph: param.graph,
  host: param.host,
  port: param.port,
  interval: param.interval,
  timeunit: param.timeunit,
  disableLegend: param.disableLegend
}