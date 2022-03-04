const mongoose = require('../connection');


const schema = mongoose.Schema( {
    name: String,
    username: String,
    email: String,
    created: {type: Date, default: new Date()}
} )

const model = mongoose.model('Users', schema);

module.exports = model;