
import Hotel2 from "@/models/Hotel";



export default async function handler(req,res){
    if(req.method=="GET"){
        if(req.query.range){
            console.log(req.query.range);
        const hots=await Hotel2.find({"price":{$lte:req.query.range}})
        res.status(200).json({message:"Hotels are",hots});}
    }
}