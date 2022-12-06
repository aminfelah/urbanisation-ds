// Import express
import express from "express";
// Import user Controller
import { 
    getDay,
    getMonth
 } from "../controllers/User.js";
 
 // Init express router
const router = express.Router();
 
// Route get all users
router.get('/dayOfWeek/:dayOfWeek', getDay);
router.get('/monthOfYear/:monthOfYear', getMonth);
 
// export router
export default router;