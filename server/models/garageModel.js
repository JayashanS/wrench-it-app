const mongoose = require('mongoose')
const Schema = mongoose.Schema

const garageSchema = new Schema({
    garageId: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    repairCenterName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    openingHours: {
        type: String,
        required: true
    },
    closingHours: {
        type: String,
        required: true
    },
    serviceOffered: {
        type: [String], 
        required: true
    },
    gOwnerNIC: {
        type: String,
        required: true
    },
    location: {
        type: {
          longitude: Number,
          latitude: Number
        },
        required: true
    },
    numOfWorkers: {
        type: Number,
        required: true
    },
    station: {
        type: {
          category: String,
          numOfSpaces: {
            type: Map,
            of: Number 
          }
        },
        required: true
    }
})

module.exports = mongoose.model('Garage', garageSchema)