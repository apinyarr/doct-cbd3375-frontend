const statsd = require('node-statsd');
const statsd_host = process.env.STATSD_HOST || "99.79.69.20"
const client = new statsd({host: statsd_host});
module.exports = client;