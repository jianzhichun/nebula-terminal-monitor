import axios from 'axios'
import args from "./argument.js"


export default function () {
    return axios({
        method: 'GET',
        url: `${args.https ? "https" : "http"}://${args.host}:${args.port}/stats?format=json`
    }).then(({ data }) => data.reduce(function (map, obj) {
        let key = Object.keys(obj)[0]
        map[key] = obj[key]
        return map;
    }, {}))
}