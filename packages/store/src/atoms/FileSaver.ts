import { atom } from "recoil";



export let fileSaver = atom({
    key:'fileSaver',
    default:{
        isLoading:true,
        fileSaver:null
    }
})