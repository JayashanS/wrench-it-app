const Owner = require("../models/ownerModel");

//Creating Owner 
const createOwner = async(req,res) => {
    const{
        nic,
        email,
        ownerName,
        phoneNumber,
        licencePlateNumbers,
        address,
    } = req.body;

    try{
        const Owner = await Owner.create({
            nic,
            email,
            ownerName,
            phoneNumber,
            licencePlateNumbers,
            address,
            })
        res.status(201).json(owner);
    }catch(error){
        res.status(500).json({error : "Could not create Owner"});
    }

//Deleting Owner 
const deleteOwner = async(req,res) => {
    console.log("Request parameters",req.params.id);
    try{
        const ownerId = req.params.id;
        console.log("Request ownerId", ownerId);

        const deleteOwner = await Owner.findByIdAndDelete(ownerId); 
        
        if (!deleteOwner) {
            return res
            .status(404)
            .json ({message : "Owner not Found", deleteOwnerId: ownerId});
        }

        return res.status(200).json({message :"Owner successfully deleted"});    
        }catch(error){
            console.error("Error deleting Owner",Owner);
            return res.status(500).json({error : "Could not delete Owner"});
        }
    }
};

module.exports = {createOwner , deleteOwner};