import userSchema from './models/user.model.js'
import {promises as fs} from 'fs'
import {fileURLToPath} from "url"
import {dirname,join} from "path"


export async function addUser(req,res){
    try{  
        const image = req.file;
        const{username,email,phone}=req.body;
            userSchema.create({username,email,phone,image})
            .then(()=>{
                console.log("success");
                return res.status(201).send({msg:"success"})
            })
            .catch((error)=>{
                console.log("failed");
                return res.status(404).send({msg:"fail"})

            })
    }catch(error){
        res.status(404).send(error);
    }
}

export async function getUser(req,res) {
    try {
        const user = await userSchema.find();
        console.log(user);
        return res.status(200).send(user)
    } catch (error) {
        return res.status(404).send(error)
    }
}
export async function getUserD(req,res) {
    try {
        console.log(req.params);
        const {id}=req.params
        const data=await userSchema.findOne({_id:id});
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
}

export async function deleteUser(req,res) {
    const {_id} = req.params;
    console.log("---------------------------");
    const user = await userSchema.findOne({_id})
    if(!user)
        return res.status(500).send({msg:"user unavailable"})
    const __filename = fileURLToPath(import.meta.url)
    console.log(__filename);
    const __dirname = dirname(__filename)
    console.log(__dirname);
    const fullpath = join(__dirname,"/uploads/",user.image.filename);
    console.log(fullpath);
    await fs.unlink(fullpath)
    await userSchema.deleteOne({_id}).then(()=>{
        res.status(200).send({msg:"deleted"})
    }).catch((error)=>{
        res.status(500).send({error:error})
    })       
}