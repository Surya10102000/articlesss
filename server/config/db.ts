import mongoose from 'mongoose'

export const connectDB =  async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI as string)
        console.log(`connect to db : ${conn.connection.host}`)
    }catch(error){
        console.log(`Error: ${(error as Error).message}`)
    }
}