import mongoose from "mongoose";


 
 const dbConnection = ()=>{
        mongoose.connect(`${process.env.MONGO_URI}/HiteshBackend`).then(()=>{
              console.log ("db Connected ");
        }).catch(()=>{
              console.log ("db connection feild ")
        })
 }

   export default dbConnection ; 