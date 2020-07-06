const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeapirest', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

mongoose.Promise = global.Promise;

module.exports = mongoose;