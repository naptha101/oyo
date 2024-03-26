import mongoose from 'mongoose'

const UserSchema=new mongoose.Schema({
name:{
    type:String,
    trim:true,
    required:true
},
email:{
    unique:true,
    type:String,
    trim:true,
    required:true
},
password:{
    type:String,
    trim:true,
    required:true
}
},{timestamps:true});


export default mongoose.models?.User||mongoose.model("User",UserSchema);