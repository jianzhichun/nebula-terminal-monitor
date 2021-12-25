const { Command } = require('commander')
const _ = require('lodash/fp.js')
const fs = require('fs')

const { version } = JSON.parse(fs.readFileSync("./package.json", "utf8"))

const program = new Command()
program
  .version(version)
  .option("-n, --node", "show node monitor")
  .option("-g, --graph", "show graph monitor")
  .option("-https", "https", false)
  .option("-h --host <string>", "specify the host ip of node or graph", "199.192.24.152")
  .option("-p --port <n>", "specify the port of node or graph", 9100)
  .option("-i --interval <n>", "specify the interval of node or graph", 60)
  .option("-tu --timeunit <string>", "specify the timeunit of node or graph", "s")
  .option("--disable-legend", "disable legend text")
  .option("-s --stat <string>", "stat", "query_latency_us.avg.3600")
  .option("-ss --stats <string>", "stats", (s, p) => s.split(","), ["node_vmstat_pgmajfault", "go_memstats_alloc_bytes"])
  .parse(process.argv)

const param = program.opts()

module.exports = {
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