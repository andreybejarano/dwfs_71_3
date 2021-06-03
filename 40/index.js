require('dotenv').config();
const moment = require('moment');

const now = moment(new Date());

console.log(process.env.NODE_ENV);


console.log(now);
console.log(now.format('DD MM YYYY'));