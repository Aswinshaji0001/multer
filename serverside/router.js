import { Router } from "express";
import { addUser } from "./requestHandler.js";
import multer from "multer";
const storage=multer.diskStorage({
    destination:"./uploads",
    filename:function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname + '-' + uniqueSuffix)
      }
})
const upload =multer({storage});
const router=Router();

router.route("/adduser").post(upload.single('file'),addUser)

export default router;


