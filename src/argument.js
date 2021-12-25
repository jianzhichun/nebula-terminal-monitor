import { Command } from "commander"
import _ from "lodash/fp.js"
import * as fs from "fs"

const { version } = JSON.parse(fs.readFileSync("./package.json", "utf8"))

const program = new Command()
program
  .version(version)
  .option("-n, --node", "show node monitor")
  .option("-g, --graph", "show graph monitor")
  .option("-https", "https", false)
  .option("-h --host <string>", "specify the host ip of node or graph", "199.192.24.152")
  .option("-p --port <n>", "specify the port of node or graph", parseInt, 19669)
  .option("-i --interval <n>", "specify the interval of node or graph", parseInt, 30)
  .option("-tu --timeunit <string>", "specify the timeunit of node or graph", "s")
  .option("--disable-legend", "disable legend text")
  .option("-s --stat <string>", "stat", "query_latency_us.avg.3600")
  .option("-ss --stats <string>", "stats", (s, p) => s.split(","), ["query_latency_us.avg.3600", "query_latency_us.avg.3600", "query_latency_us.avg.3600"])
  .parse(process.argv)

const param = program.opts()

export default {
  node: param.node,
  graph: param.graph,
  https: param.https,
  host: param.host,
  port: param.port,
  interval: param.interval,
  timeunit: param.timeunit,
  stat: param.stat,
  stats: param.stats,
  disableLegend: param.disableLegend
}