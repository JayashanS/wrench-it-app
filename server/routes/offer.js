const express = require("express");
const {
    createOffer,
    deleteOfferById,
    getAllOffers,
    getOffersByGarageId ,
} = require("../controllers/offerController");
const router = express.Router();

router.post("/",createOffer);
router.delete("/:id",deleteOfferById);
router.get("/all",getAllOffers);
router.get("/:garageId",getOffersByGarageId );
module.exports = router;
