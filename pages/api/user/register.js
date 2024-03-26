import ConnectDb from "@/db";
import userModel from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
// import { cookies } from "next/headers";
export default async function handler(req,res){
if(req.method=='POST'){
    try{
        ConnectDb();
        const {name,email,password}=await req.body;
        if(!name||!email||!password){
           return res.status(200).json({message:"Any of the field is empty"});
        }
        console.log(name+" "+email+" "+password);
        const emailPresent=await userModel.findOne({email:email});
        if(emailPresent){
            return res.status(200).json({message:"User already present",emailPresent});
        }
        
        const hash=await bcrypt.hash(password,10);
        const user= new userModel({email:email,password:hash,name:name});
        const result=await user.save();
        const token=await jwt.sign({user:result._id},"Secret",{expiresIn:"2d"});

        if(result){
            return res.status(200).json({message:"user registerd",token:token,user})

        }else{
            return res.status(200).json({message:"error "})
        }
    }
    catch(err){
       console.log(err.message)
    }}
} 