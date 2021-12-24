import * as axios from 'axios'
import args from "./argument.js"


export default function () {
    return axios.get({
        method: 'GET',
        path: `${args.https ? "https" : "http"}://${args.host}:${args.port}/stats?format=json`
    })
}