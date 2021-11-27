import sys
import time
from collections import defaultdict
import schedule
import requests
import plotext as plt

data = defaultdict(list)
argv_len = len(sys.argv)
url = sys.argv[1] if argv_len > 1 and sys.argv[1] else 'http://localhost:51516'
interval_ = max(int(sys.argv[2]), 5) if argv_len > 2 and sys.argv[2] else 5
range_ = max(int(sys.argv[3]), 12) if argv_len > 3 and sys.argv[3] else 12
stats_ = sys.argv[4] if argv_len > 4 and sys.argv[4] else 'slow_query_latency_us.avg.5,slow_query_latency_us.p99.5'

def fetch():
    r = requests.get(f'{url}/stats?stats={stats_}&format=json')
    for d in r.json():
        for k, v in d.items():
            data[k].append(v)
            data[k] = data[k][-1:-11:-1]

def monitor():
    plt.title("Nebula Monitor")
    len_ = len(data.keys())
    if len_:
        plt.subplots(max(1, int(len_/2)), 2)
        for i, (k, v) in enumerate(data.items()):
            plt.subplot(int(i/2)+1, i%2+1)
            plt.title(k)
            plt.cld()
            plt.clt()
            plt.clc()
            plt.datetime.set_datetime_form(date_form = "%Y-%m-%d %H:%M:%S")
            curr = time.time()
            x = [time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(curr - interval_*i)) for i in range(0, range_)][::-1]
            plt.plot_date(x, v, marker = "dot")    
        plt.show()

if __name__ == '__main__':
    schedule.every(interval_).seconds.do(fetch)
    schedule.every(1).seconds.do(monitor)
    while True:
        schedule.run_pending()
        time.sleep(1)