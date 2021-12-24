import axios from 'axios'
import args from "./argument.js"


export default function () {
    return axios({
        method: 'GET',
        url: `${args.https ? "https" : "http"}://${args.host}:${args.port}/stats?format=json`
    })
}