require('dotenv').config();
const coolImages = require("cool-images");
const moment = require('moment');
const fs = require('fs');

const images = coolImages.many(600, 800, 10);

images.forEach((image, index) => {
    let data = '';
    if(index === 0) {
        data = moment().format('YYYY/MM/DD hh:mm:ss')+'\n';
    }
    data += image+'\n';

    fs.appendFile(`${process.env.LOG_DIR}/log.txt`, data, (err) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log('Log creado satisfactoriamente');
    })
})

