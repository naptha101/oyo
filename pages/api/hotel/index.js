import ConnectDb from "@/db";
import Hotel2 from "@/models/Hotel";

export default async function handler(req, res) {
    if (req.method == "GET") {
      ConnectDb();
      console.log(req.query.city);
     const hotels=await Hotel2.find({location:req.query.city});
     if(hotels.length>0){
       return  res.status(200).json({message:"Here are hotels",hotels});
     }
     else{
        const hotels1=await Hotel2.find({});
      return   res.status(200).json({message:"Here are hotels",hotels1});
     }
    }
  }