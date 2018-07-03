const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/company', err => {
    !err ? console.log('Mongo conected') : console.log(err);
});

module.exports = mongoose;