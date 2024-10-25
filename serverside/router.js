import { Router } from "express";
import { addUser, getUser,deleteUser, getUserD } from "./requestHandler.js";
import multer from "multer";
import path from 'path'
const storage=multer.diskStorage({
    destination:"./uploads",
    filename:function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname )
      }
})
const upload =multer({storage});
const router=Router();

router.route("/adduser").post(upload.single('file'),addUser)
router.route("/getuser").get(getUser)
router.route('/image/:filename').get((req,res)=>{
  let {filename} = req.params;
  console.log(filename);
  return res.sendFile(path.resolve(`./uploads/${filename}`))
  
})
router.route("/delete/:_id").delete(deleteUser)
router.route("/getuserd/:id").get(getUserD)

export default router;


