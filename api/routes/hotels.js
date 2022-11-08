import express from "express";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/",verifyAdmin,  createHotel)
router.put("/:id",verifyAdmin,  updateHotel)
router.delete("/:id",verifyAdmin,  deleteHotel)
router.get("/:id",getHotel)

router.get("/",getHotels);
    // const failed = true;

// if(failed) return next(createError(401,"You are not Authenticated"))
export default router