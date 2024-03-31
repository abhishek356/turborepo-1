import mongoose from 'mongoose'

let alreadyConnected = false;

export let makeDbConnections = async ()=>{

    console.log(`inside the makeDbConnections async method`)

    if(alreadyConnected)
    {
        return;
    }
    
  let dbConnectResponse =   mongoose.connect('mongodb+srv://abhishek867492:UWRkany9ofQ0JcTw@cluster0.y5npipz.mongodb.net/ongodb.net/Course', { dbName: "courses" });


return dbConnectResponse
}//useNewUrlParser: true, useUnifiedTopology: true,