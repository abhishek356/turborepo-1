"use client";

import React from 'react';
import SignUp  from '@repo/ui/SignUp'
import axios from 'axios'

  const  HandleSignUp=()=>{

    return(
        <SignUp onClick={ async(username,password)=>{
            console.log(username,password)
    let res =    await axios.post('/api/signup',{
                username,password
            })
                localStorage.setItem('token',res.data.token)
            console.log(res)
        }}/>
    )
}

export default HandleSignUp