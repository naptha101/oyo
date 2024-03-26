import Hotel2 from "@/models/Hotel";


export default async function handler(req,res){

if(req.method==="GET"){
    if(req.query.id){
const hotel=await Hotel2.findById({_id:req.query.id});
    res.status(200).json({status:true,message:"Your Hotel",hotel});
    }
}
}
