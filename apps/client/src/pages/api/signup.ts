// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {Admin} from 'db';
import {makeDbConnections} from '../../lib/dbConnect'
import jwt from 'jsonwebtoken';
type Data = {
 token?:string,
 message?:string
};

let SECRET  = 'SECRET'

console.log(`insie signup api in backend`)


export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  try{
  
    await makeDbConnections();
  
  }
  catch (error)
  {
    console.log(`error occured while making connection with the back end ${error}`)
  }
  const username = req.body.email
  const password = req.body.password

  let outcome = await Admin.findOne({username})

  if(outcome)
  {
    res.status(403).json({message:'Username already exists'})
  }
  else{
     let token= jwt.sign({username,role:'admin'},SECRET,{expiresIn:'1h'})
      const obj =  {username,password};
      const newAdmin = new Admin(obj);
      newAdmin.save();
      res.status(200).json({
        message:'new admin created successfully',
        token
      })
  }
}
