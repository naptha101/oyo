// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ConnectDb from "@/db";


export default function handler(req, res) {
  ConnectDb()
  res.status(200).json({ name: "John Doe" });
}
