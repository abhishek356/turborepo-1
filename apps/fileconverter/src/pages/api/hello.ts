// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
 // name: string;
 fileInput:File,
 message:string
};

let InputFile:Data;


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  console.log(`req received at the back end.`, req);

  if(req!==null && req !==undefined)
  {
    res.status(200).json({ fileInput:InputFile.fileInput,message:"hello"});

  }
//   InputFile.fileInput=req.body.file;
//   console.log(`backend triggered,${InputFile.fileInput}`)
}
