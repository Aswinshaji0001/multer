import userSchema from './models/user.model.js'



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
