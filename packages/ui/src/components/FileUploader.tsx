import React, { ChangeEvent } from 'react'
import {Card, CssBaseline,Box,CardContent,CardHeader, Typography,Button} from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import  {useState} from 'react'


export const FileUploader = (props:{
    onClick:(event:ChangeEvent)=>void
}) =>{

const [fileInput,setFileInput] = useState<File>()   

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  let handleFileUpload=(event:ChangeEvent)=>{

    if(event != null && event != undefined)
    {
    console.log(`Inside the handleFileUpload function`,event.target.files[0]);
    //setFileInput();
   return props.onClick(event)
    }
  }
  


    return (<>
    
        <div >
            <Card variant = {'outlined'} sx = {{
                width:'25%',
                height:'65%',
                position:'absolute',
                top:'50%',
                left:'50%',
                transform:'translate(-50%,-50%)'
            }} >

            <CardContent>
                <CardHeader>
                    <Typography variant = 'h4'>Upload your file</Typography>
                </CardHeader>
                <img src = 'upload.jpg' style = {{

                    top:'40%',
                    left:'50%',
                    transform:'translate(-50%,-50%)',
                    width:'200px',
                    height:'200px',
                    position:'absolute'
                }}/>
                <Box sx = {{
                    
                    position:'relative'
                }}>
                <Button
                    component = 'label'
                    role = 'undefined'
                    variant = 'contained'
                    tabIndex = {-1}
                    startIcon = {<CloudUploadIcon/>}
                    onClick = {(event)=>{
                        console.log(`the event triggered upon hitting the upload button is ${event}`)
                    }}
                    sx ={{
                        marginTop:'330px',
                        position:"absolute",    
                        top:'100%',
                        left:'50%',
                        transform:'translate(-50%,-50%)'
                    }}
                    >
                            Upload file
                            <VisuallyHiddenInput type = 'file' onChange={(event)=>handleFileUpload(event)}/>
                    </Button>
                </Box>
                   
            </CardContent>
            </Card>
        </div>
        </>)

}

export default FileUploader