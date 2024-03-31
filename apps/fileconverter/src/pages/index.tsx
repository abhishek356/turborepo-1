import React, { ChangeEvent } from 'react';
import {FileUploader} from '@repo/ui/Upload'
import { useState } from 'react';
import {useRecoilValue,useSetRecoilState} from 'recoil'
import { fileSaver } from 'store/fileSaver';
import axios from 'axios'



const UploadFile = () =>{

//let file = useRecoilValue(fileSaver)

  return (

    <FileUploader onClick={async (event:ChangeEvent)=>{
      if(event.target.files[0] !== null && event.target.files[0]!== undefined)
      {

        console.log(`the value of event received is ${event.target.files[0]}`);
        try{

          await axios.post(`http://localhost:3000/api/hello`,{
            file:event.target.files[0]
        })

        }
        catch(error)
        {
          console.log(`error occured while getting response from the backend. ${error}`)
        }
      

      }
      
  }}/>
    
    )
}

export default UploadFile
