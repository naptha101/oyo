
import Hotel2 from "@/models/Hotel";



export default async function handler(req,res){
    if(req.method=="GET"){
        if(req.query.key){
            console.log(req.query.key);
        const facilities=await Hotel2.find({"facilities.name":{$in:req.query.key}})
        res.status(200).json({message:"Facilites are",facilities});}
    }
}