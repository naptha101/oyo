import Hotel2 from "@/models/Hotel";



export default async function handler(req,res){
    if(req.method=="GET"){
        const facilities=await Hotel2.find().distinct('facilities.name');
        res.status(200).json({message:"Facilites are",facilities});
    }
}