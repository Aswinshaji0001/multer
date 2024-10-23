import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{type:String},
    username:{type:String},
    image:{type:Object},
    phone:{type:Number}
})
export default mongoose.model.Users||mongoose.model("User",userSchema)