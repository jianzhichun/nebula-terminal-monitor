const axios = require('axios')
const args = require('./argument.js')


module.exports = function (stats = "num_queries.rate.5") {
    return axios({
        method: 'GET',
        url: `${args.https ? "https" : "http"}://${args.host}:${args.port}/stats?format=json${stats ? "&stats=" + stats : ""}`
    }).then(({ data }) => data.reduce(function (map, obj) {
        let key = Object.keys(obj)[0]
        map[key] = obj[key]
        return map;
    }, {}))
}