const mongoose = require('mongoose')
const Schema = mongoose.Schema

const requestSchema = new Schema({

    requestId: {

        type: String,
        require: true,
        unique: true,

    },
    requestType:{

        type: String,
        require: true,
    },
    requestStatus: {

        type: String,
        require: true,
    },
    requestDate: {
        type: Date,
        require: true,
    }

})

module.exports = mongoose.model('Request', requestSchema)
