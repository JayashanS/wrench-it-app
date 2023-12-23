const Garage = require('../models/garageModel')

const createGarage = async (req, res) => {
    const {
        garageId,
        address,
        repairCenterName,
        ownerName,
        openingHours,
        closingHours,
        serviceOffered, 
        gOwnerNIC,
        location, 
        numOfWorkers,
        station 
    } = req.body;
    
    try {
        const garage = await Garage.create({
            garageId,
            address,
            repairCenterName,
            ownerName,
            openingHours,
            closingHours,
            serviceOffered, 
            gOwnerNIC,
            location, 
            numOfWorkers,
            station 
        })
        res.status(201).json(garage);
    } catch (error) {
        res.status(500).json({ error: 'Could not create garage' });
    }
}

module.exports = {createGarage}