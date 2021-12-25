const axios = require('axios')
const args = require("./argument.js")

module.exports = function () {
    return axios({
        method: 'GET',
        url: `${args.https ? "https" : "http"}://${args.host}:${args.port}/metrics`
    }).then(({ data }) => data.split(/\n\r?/g).reduce((map, line) => {
        if (line.trim().indexOf('#') !== 0) {
            let kv = line.split(/\s+/g)
            map[kv[0]] = kv[1]
        }
        return map
    }, {}))
}

