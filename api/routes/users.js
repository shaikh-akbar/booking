import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.put("/:id",verifyUser, updateUser)
router.delete("/:id",verifyUser, deleteUser)
router.get("/:id", verifyUser, getUser)

router.get("/", verifyAdmin, getUsers);

// router.get('/checkauthentication', verifyToken, (req,res,next)=>{
//     res.send("hello user,you are logged in")
// })
// router.get('/checkuser/:id',verifyUser,  (req,res,next)=>{
//     res.send("hello user,you are logged in or you can delete ")
// })
// router.get('/checkadmin/:id',verifyAdmin,  (req,res,next)=>{
//     res.send("hello Admin,you are king of yhis or you can do whatever you want to do in or you can delete ")
// })



export default router