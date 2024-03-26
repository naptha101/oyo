import mongoose from "mongoose";
const hotel=new mongoose.Schema({
name:{
    type:String,
    trim:true,
    unique:true,
required:true
},
description:{
    type:String,
    trim:true,
},
banner:{
    type:String,
    required:true
},
gallery:[
    {
        type:"String",

    }
],
price:{
    type:Number,
    required:true
},
facilities:[
    {
        img:{type:String},
        name:{type:String}
    }
]
,
location:{
    type:String
}

},{timestamps:true})

const Hotel2=mongoose.models.hotel2||mongoose.model("hotel2",hotel);
export default Hotel2