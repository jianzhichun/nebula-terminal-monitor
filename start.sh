./node_modules/.bin/stmux -M -w always -e ERROR -m beep -- [ [ -s 1/4 -t '饼图1' "node src/chart/c" .. -t '折线图' "node chart/a" ] : [ -s 1/4 -t '饼图2' "node chart/d" .. -t '柱状图' "node chart/b" ] ]



./node_modules/.bin/stmux -M -w always -e ERROR -m beep -- [ [ -t 'query latency us avg 3600' "node src/chart/linechart    -h 199.192.24.152 -p 19669 -s query_latency_us.avg.3600" ] ]